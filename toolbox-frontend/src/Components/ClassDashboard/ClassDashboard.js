/* eslint-disable jsx-a11y/alt-text */
import { TextArea } from 'semantic-ui-react';
import './ClassDashboard.css'
//import Modal from '../Modal/AddClassModal'
import Modal from '../Modal/AddClassModal'
import StudentModal from '../Modal/AddStudentModal'
import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useStore } from "../../Stores/Contexts/Store";
import { actionTypes } from "../../Stores/actionTypes";
import axios from "axios";


/*<div className="Option-box">
<img src={Timer} className="Image-box"/>
<div className="Option-title">Timer</div>
</div>*/

// TODO: Need to add functionality to receive Classroom Name and ID from Dashboard

 export default function ClassDashboard() {
   const [state, dispatch] = useStore();
   const { studentList, currentClass, updated } = state;

   const { user, getAccessTokenSilently } = useAuth0();

   // set initial state and get initial classes from DB

   useEffect(() => {
     console.log(currentClass);
     const getStudents = async () => {
       const token = await getAccessTokenSilently();
       axios
         .get(`http://52.202.123.156:5000/api/students/${currentClass}`, {
           headers: {
             Authorization: `Bearer ${token}`,
           },
         })
         .then((response) => {
           if (response.status === 200) {
             dispatch({
               type: actionTypes.GET_STUDENTS,
               payload: response.data,
             });
           }
         })
         .catch((error) => {
           console.log(error);
         });
     };

     if (!updated) {
       getStudents();
     }
   }, [updated]);

   return (
     <div className="App">
       <div className="Dashboard-container">
         <div className="Whiteboard-container">
           <TextArea class="Whiteboard" />
         </div>
         <div className="Class-dashboard-header">
           <h2>
             <span>Compilation Techniques CSCE4650</span>
           </h2>
         </div>
         <div className="Button-container">
           <Modal name="TimeModal" />
           <Modal name="TimerModal" />
           <Modal name="StudentModal" />
           <Modal name="TutorialModal" />
         </div>
       </div>
     </div>
   );
 }