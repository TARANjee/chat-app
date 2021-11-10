import React from 'react'
import 'rsuite/dist/rsuite.min.css'
import './styles/main.scss'

import SignIn from './Pages/SignIn'
import { Switch } from 'react-router-dom'
import PrivateRoute from './Components/PrivateRoute'
import Home from './Pages/Home'
import PublicRoute from './Components/PublicRoute'

function App() {
  return (
    <Switch>
      <PublicRoute path="/signin">
        <SignIn />
      </PublicRoute>
      <PrivateRoute path="/">
        <Home />
      </PrivateRoute>
    </Switch>
  );
}

export default App;
