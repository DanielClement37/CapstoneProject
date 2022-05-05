import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown } from 'semantic-ui-react'
import { useStore } from "../../Stores/Contexts/Store";
import { actionTypes } from "../../Stores/actionTypes";

const ClassButton = (props) => {

  const [state, dispatch] = useStore();

  const navigate = useNavigate();
  return (
      <div className="Class-box" onClick={() => 
      {
        dispatch({ type: actionTypes.UPDATE_CURRENT, payload: props.classId });
        console.log(props.classId);
        navigate("/classdashboard");
      }}>
        <Dropdown text = 'Edit'>
            <Dropdown.Menu>
                <Dropdown.Item text='Rename'/>
                <Dropdown.Item text='Delete'/>
            </Dropdown.Menu>
        </Dropdown>
        <div className="Class-title">
          {props.className}
        </div>
      </div>
  );
};

export default ClassButton;
