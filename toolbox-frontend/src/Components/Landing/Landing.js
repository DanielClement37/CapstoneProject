import React, {useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import '../App/App.css'

export default function Landing() {
  // set up authentication for user and redirect for dashboard
  const { loginWithRedirect, isAuthenticated} = useAuth0();
  const navigate = useNavigate();

  // React effect that checks user authentication (if they are logged in) then redirects if true
  useEffect(() => {
    async function checkUser() {
      if (isAuthenticated) {
        navigate("/dashboard");
      }
    }

    checkUser(); // check user authentication upon landing on the page
  }, [navigate, isAuthenticated]);

  // if user is not authenticated
  return ( // Landing page for app with login button
    <div className="App">
      <div className="App-container">
          <div className="Login-container">
            <div className="Login-header">Welcome Back to Teacher's Toolbox!</div>
            <button className="Login-button" onClick={() => loginWithRedirect({appState: { targetUrl: "/dashboard" }})}>
              Login
            </button>
            <h3>
              <span>created by</span>
            </h3>
            <div className="Media-buttons">
              <span className="Login-subtext">Daniel Clement</span>
              <span className="Login-subtext">Isabel Wells</span>
              <span className="Login-subtext">Sarah Wainwright</span>
              <span className="Login-subtext">Jay Hagar</span>
            </div>
          </div>
      </div>
    </div>
  );
}