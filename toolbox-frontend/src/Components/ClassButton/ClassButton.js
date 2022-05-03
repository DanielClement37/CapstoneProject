import React from "react";
import { useNavigate } from "react-router-dom";
import Tutorial from '../../Images/tutorial.png'
import '../Dashboard/Dashboard.css';



const ClassButton = (props) => {


  const navigate = useNavigate();
  return (
      <div className="Class-box" onClick={() => navigate("/classdashboard")}>
        <button className="Class-option">...</button>
        <div className="Class-title">
          {props.className}
        </div>
      </div>
  );
};

export default ClassButton;
