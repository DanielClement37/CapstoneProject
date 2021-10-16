import React from 'react';
import './SignInPage.css';

function SignInPage() {
    return (
        <div className="SignInPage">
                <div className="App-container">
                    <div className="SignIn-container">
                        <div className="SignIn-header">
                            Create an Account
                        </div>
                         <input className="SignIn-input" placeholder="Email" type="text"></input>
                         <input className="SignIn-input" placeholder="Password" type="password"></input>
                         <input className="SignIn-input" placeholder="Confirm Password" type="password"></input>
                         <button className="SignIn-button" type="button">Sign Up</button>
                         <h2><span>or sign up with</span></h2>
                         <div className="Media-buttons">
                            <button className="Media-button">Google</button>
                            <button className="Media-button">Apple</button>
                            <button className="Media-button">Facebook</button>
                         </div>
                    </div>
                    <div className="Moving-container">
                        <div className="Moving-header">Already have an account?</div>
                            <button className="Moving-button">Login</button>
                        </div>
                    </div>
                </div>
    );
}

export default SignInPage;
