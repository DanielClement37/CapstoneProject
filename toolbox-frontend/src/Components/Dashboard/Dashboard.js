import './Dashboard.css'
import Modal from '../Modal/AddClassModal'
import { useAuth0 } from "@auth0/auth0-react";

 export default function Dashboard() {


  const { logout } = useAuth0();


  return (
    <div className="App">
      <div className="Dashboard-container">
        <div className="Dashboard-header">
          <h1>
            <column>
              <span>
                Welcome back, Professor Ludi!
              </span>
            </column>
            <column>
              <button className="Media-button" onClick={() => logout({ redirect: '/'})}>Logout</button>
            </column>
          </h1>
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
        <div className="Account-container">
          <div className="Media-buttons">
            <row>
              <button className="Moving-button">Account</button>
            </row>
            <row>
              <button className="Moving-button">Timer</button>
            </row>
            <row>
              <button className="Moving-button">Rosters</button>
            </row>
            <row>
              <button className="Moving-button">Agenda</button>
            </row>
          </div>
        </div>
      </div>
    </div>
  );
 }