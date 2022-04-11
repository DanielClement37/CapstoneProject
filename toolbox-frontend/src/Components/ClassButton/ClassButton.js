import React from "react";
import { useNavigate } from "react-router-dom";


const ClassButton = (props) => {


  const navigate = useNavigate();
  return (
      <div className="Class-box" onClick={() => navigate("/classdashboard")}>
        <div className="Class-title">
          {props.className}
        </div>
      </div>
  );
};

export default ClassButton;
