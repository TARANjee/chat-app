import React, { useState } from 'react'
import { Alert, Button, Icon, Tag } from 'rsuite';
import { auth } from '../../misc/firebase';
import firebase from 'firebase/app'

const ProviderBlock = () => {
    const [isConnected, setIsConnected] = useState({
        'google.com': auth.currentUser.providerData.some((data) => data.providerId === "google.com"),
        'facebook.com': auth.currentUser.providerData.some((data) => data.providerId === "facebook.com")
    })
    const updatedIsConnected = (providerId, value) => {
        setIsConnected(p => {
            return {
                ...p,
                [providerId]: value,
            }
        })
    }
    const unLink = async (providerId) => {

        try {
            if (auth.currentUser.providerData.length === 1) {
                throw new Error(`You can not disconnect from ${providerId}`)
            }

            await auth.currentUser.unlink(providerId);

            updatedIsConnected(providerId, false);
            Alert.info(`Disconnected from ${providerId}`, 4000)
        } catch (error) {
            Alert.error(error.message, 4000);
        }
    }

    const unLinkGoogle = () => {
        unLink("google.com")
    }
    const unLinkFacebook = () => {
        unLink("facebook.com")
    }

    const link = async (provider) => {
        try {
            await auth.currentUser.linkWithPopup(provider);
            Alert.info(`linked with ${provider.providerId}`, 4000);

            updatedIsConnected(provider.providerId,true)
        } catch (error) {
            Alert.error(error.message, 4000);
        }
    }
    const LinkGoogle = () => {
        link(new firebase.auth.GoogleAuthProvider())
    }
    const LinkFacebook = () => {
        link(new firebase.auth.FacebookAuthProvider())
    }
    return (
        <div>
            {isConnected['google.com'] &&
                <Tag color="green" closable onClose={unLinkGoogle} >
                    <Icon icon="google" />Connected
                </Tag>
            }
            {isConnected['facebook.com'] &&
                <Tag color="blue" closable onClose={unLinkFacebook} >
                    <Icon icon="facebook" />Connected
                </Tag>
            }
            <div className="mt-2">
                {!isConnected['google.com'] &&
                    <Button color="green" block onClick={LinkGoogle} >
                        <Icon icon="google" />Link to Google
                    </Button>
                }
                {!isConnected['facebook.com'] &&
                    <Button color="blue" block onClick={LinkFacebook} >
                        <Icon icon="facebook" />Link to Facebook
                    </Button>
                }
            </div>
        </div>
    )
}

export default ProviderBlock
