import './Dashboard.css'
import React from "react";
import Modal from '../Modal/AddClassModal'
import { useNavigate } from "react-router-dom";
import ClassButton from '../ClassButton/ClassButton';

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
           <ClassButton className="CSCE 4902" />
           
           
           <Modal>
                name="AddClassModal";
           </Modal>
         </div>
       </div>
     </div>
   );
 }