import React from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown } from 'semantic-ui-react'



const ClassButton = (props) => {


  const navigate = useNavigate();
  return (
      <div className="Class-box" onClick={() => navigate("/classdashboard")}>
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
