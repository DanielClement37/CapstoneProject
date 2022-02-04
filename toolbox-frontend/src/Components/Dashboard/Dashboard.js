import './Dashboard.css'
import Modal from '../Modal/AddClassModal'
import { Button } from 'semantic-ui-react'
import { useAuth0 } from "@auth0/auth0-react";

 export default function Dashboard() {


  const { logout, isAuthenticated} = useAuth0();


  return (
    <div className="App">
      <div className="Dashboard-container">
        <div className="Account-container"></div>
        <div className="Dashboard-header">
          <h1><span>Welcome back, Professor Ludi!
            <button className="Media-button" onClick={() => logout({ redirect: '/'})}>Logout</button>
          </span></h1>
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
          <Modal>
              name="ModalExampleModal";
          </Modal>
        </div>
      </div>
    </div>
  );
 }