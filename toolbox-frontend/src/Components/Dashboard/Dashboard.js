import './Dashboard.css'
import React from "react";
import Modal from '../Modal/AddClassModal'
import { useNavigate } from "react-router-dom";

 export default function Dashboard() {
  const navigate = useNavigate();

   return (
     <div className="App">
       <div className="Dashboard-container">
         <div className="Account-container"></div>
         <div className="Dashboard-header">
           <h1><span>Welcome back, Professor Ludi!</span></h1>
         </div>
         <div className="Class-container">
           <div className="Class-box" onClick={() => navigate("/classdashboard")}>
             <div className="Class-title">
               Capstone 2021
               <span><br />CSCE4901.001</span>
             </div>
           </div>
           <div className="Class-box" onClick={() => navigate("/classdashboard")}>
             <div className="Class-title">
               Algorithms Fall
               <span><br />CSCE4110.003</span>
             </div>
           </div>
           <div className="Class-box" onClick={() => navigate("/classdashboard")}>
             <div className="Class-title">
               Networking
               <span><br />CSCE3530.002</span>
             </div>
           </div>
           <Modal>
                name="AddClassModal";
           </Modal>
         </div>
       </div>
     </div>
   );
 }