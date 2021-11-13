import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import { useProfile } from '../Context/profile.context';

const PublicRoute = ({ children, ...routeProps }) => {

    const { profile, isLoading } = useProfile();
    if (isLoading && !profile) {
        return <Container>
            <Loader center vertical size="md" content="Loading" speed="slow" />
        </Container>
    }


    if (profile && !isLoading) {
        return <Redirect to="/" />
    }


    if (profile) {
        return <Redirect to="/" />
    }

    return (
        <Route {...routeProps} >
            {children}
        </Route>
    )
}

export default PublicRoute
