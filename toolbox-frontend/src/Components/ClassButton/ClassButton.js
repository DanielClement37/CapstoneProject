import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown } from 'semantic-ui-react'
import { useStore } from "../../Stores/Contexts/Store";
import { actionTypes } from "../../Stores/actionTypes";
import Tutorial from '../../Images/tutorial.png'
import '../Dashboard/Dashboard.css';
import Modal from '../Modal/AddClassModal'



const ClassButton = (props) => {

  const [state, dispatch] = useStore();

  const navigate = useNavigate();
  return (
      <div className="Class-box" onClick={() => 
      {
        dispatch({ type: actionTypes.UPDATE_CURRENT, payload: props.classId });
        <div>
            <Modal name="EditModal"/>
        </div>
        <div className="Class-title">
          {props.className}
        </div>
      </div>
  );
};

export default ClassButton;
