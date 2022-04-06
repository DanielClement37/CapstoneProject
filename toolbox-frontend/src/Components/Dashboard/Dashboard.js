import './Dashboard.css'
import AddClassModal from '../Modal/AddClassModal'
import React, { useState } from "react";
//import Modal from '../Modal/AddClassModal'
import { useNavigate } from "react-router-dom";


 export default function Dashboard() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

   return (
     <div className="App">
       <div className="Dashboard-container">
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
           <button className="Add-class-box" onClick={() => setIsOpen(true)}>
            +
           </button>
           <AddClassModal
                open={isOpen}
                onOpen={() => setIsOpen(true)}
                onClose={() => setIsOpen(false)}
           ></AddClassModal>
         </div>
       </div>
     </div>
   );
 }