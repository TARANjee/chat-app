
import React, { createContext, useState, useContext, useEffect } from "react";
import { auth, database } from "../misc/firebase";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
    const [profile, setProfile] = useState(null);
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {

        const authUnsub = auth.onAuthStateChanged(authobj => {
            let userRef;
            if (authobj) {

                userRef = database.ref(`/profiles/${authobj.uid}`)
                userRef.on('value', (snap) => {
                    const { name, createdAt,avatar } = snap.val();


                    const data = {
                        name,
                        createdAt,
                        avatar,
                        uid: authobj.uid,
                        userName: authobj.displayName
                    }
                    setProfile(data)
                    setisLoading(false)
                })

            }
            else {

                if (userRef) {
                    userRef.off();
                }
                setProfile(null)
                setisLoading(false)
            }
        })

        return () => {
            authUnsub();
            if (userRef) {
                userRef.off()
            }
        }

    }, [])

    return <ProfileContext.Provider value={{ isLoading, profile }}>
        {children}
    </ProfileContext.Provider>
}

export const useProfile = () => useContext(ProfileContext)