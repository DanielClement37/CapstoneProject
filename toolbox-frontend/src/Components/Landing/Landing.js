import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Landing() {

    const {
        loginWithRedirect,
      } = useAuth0();

  return (
    <div>
      <div className="App-container">
        <div className="Login-container">
          <div className="Login-header">Welcome Back to Teacher's Toolbox</div>
          <button
            className="Login-button"
            onClick={() => loginWithRedirect({})}
          >
            Login
          </button>
          <h2>
            <span>created by</span>
          </h2>
          <div className="Media-buttons">
            <span className="Login-subtext">Daniel Clement</span>
            <span className="Login-subtext">Isabel Wells</span>
            <span className="Login-subtext">Sarah Wainwright</span>
          </div>
        </div>
      </div>
    </div>
  );
}
