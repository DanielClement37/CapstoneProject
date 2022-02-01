//import './App.css';
import React from 'react';
import LoginPage from '../../Pages/LoginPage';
import SignInPage from '../../Pages/SignInPage';
import Modal from '../Modal/Modal';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import './Dashboard.css'

//function App() {
//  return (
//    <div className="App">
//      <div className="App-container">
//        <div className="Login-container">
//          <div className="Login-header">
//            Welcome Back to Teacher's Toolbox
//          </div>
//          <button className="Login-button" type="button">Login</button>
//          <h2><span>created by</span></h2>
//          <div className="Media-buttons">
//            <span className="Login-subtext">Daniel Clement</span>
//            <span className="Login-subtext">Isabel Wells</span>
//            <span className="Login-subtext">Sarah Wainwright</span>
//          </div>
//        </div>
//      </div>
//    </div>
//  );
//}

function App() {
  return (
    <div className="App">
      <div className="Dashboard-container">
        <div className="Account-container"></div>
        <div className="Dashboard-header">
          <h1><span>Welcome back, Professor Ludi!</span></h1>
        </div>
        <div className="Class-container">
          <div className="Class-box">
            <div className="Class-title">
              Capstone 2021
              <span><br />CSCE4901.001</span>
            </div>
          </div>
          <div className="Class-box">
            <div className="Class-title">
              Algorithms Fall
              <span><br />CSCE4110.003</span>
            </div>
          </div>
          <div className="Class-box">
            <div className="Class-title">
              Networking
              <span><br />CSCE3530.002</span>
            </div>
          </div>
          <Modal name="ModalExampleModal"/>
        </div>
      </div>
    </div>
  );
}

export default App;
