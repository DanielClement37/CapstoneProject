//import './App.css';
import React from 'react';
import LoginButton from './Components/LoginButton/LoginButton';
import LogoutButton from './Components/LogoutButton/LogoutButton';
import Profile from './Components/Profile/Profile';
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
    const {isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if(isAuthenticated){
      return (
          <div>
            <LogoutButton />
            <Profile/>
          </div>
      )
  } else {
      return <LoginButton />
  }

}

export default App;
