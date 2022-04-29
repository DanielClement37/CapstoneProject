/* eslint-disable jsx-a11y/alt-text */
import { TextArea } from 'semantic-ui-react';
import './ClassDashboard.css'
//import Modal from '../Modal/AddClassModal'
import Timer from '../../Images/timer.png'
import Students from '../../Images/students.png'
import Tutorial from '../../Images/tutorial.png'
import Modal from '../Modal/AddClassModal'

/*<div className="Option-box">
<img src={Timer} className="Image-box"/>
<div className="Option-title">Timer</div>
</div>*/

 export default function ClassDashboard() {
   return (
     <div className="App">
       <div className="Dashboard-container">
         <div className="Whiteboard-container">
            <TextArea class="Whiteboard"/>
         </div>
         <div className="Class-dashboard-header">
           <h2><span>Compilation Techniques CSCE4650</span></h2>
         </div>
         <div className="Button-container">
            <Modal name="TimeModal"/>
            <Modal name="TimerModal"/>
            <Modal name="StudentModal"/>
            <Modal name="TutorialModal"/>
         </div>
       </div>
     </div>
   );
 }