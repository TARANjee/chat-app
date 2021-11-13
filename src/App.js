import React from 'react'
import 'rsuite/dist/styles/rsuite-default.css'
import './styles/main.scss'

import SignIn from './Pages/SignIn'
import { Switch } from 'react-router-dom'
import PrivateRoute from './Components/PrivateRoute'
import Home from './Pages/Home'
import PublicRoute from './Components/PublicRoute'
import { ProfileProvider } from './Context/profile.context'

function App() {
  return (
    <ProfileProvider>
      <Switch>
        <PublicRoute path="/signin">
          <SignIn />
        </PublicRoute>
        <PrivateRoute path="/">
          <Home />
        </PrivateRoute>
      </Switch>
    </ProfileProvider>
  );
}

export default App;
