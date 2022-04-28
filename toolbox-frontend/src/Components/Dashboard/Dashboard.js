import "./Dashboard.css";
import React, { useState, useEffect} from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import Modal from "../Modal/AddClassModal";
import ClassButton from "../ClassButton/ClassButton";
import { useStore } from "../../Stores/Contexts/Store";
import { actionTypes } from "../../Stores/actionTypes";

export default function Dashboard() {
  
  const { user, getAccessTokenSilently } = useAuth0();
  const [state, dispatch] = useStore();
  const { classList } = state;

  useEffect(()=>{
    const getClasses = async () => {
      const token = await getAccessTokenSilently();
      axios
        .get(`http://localhost:5000/api/teacher/${user.sub}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            dispatch({type: actionTypes.GET_CLASSES, payload:response.data});
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getClasses();
  }, []);

  return (
    <>
      <div className="Dashboard-container">
        <div className="Account-container">
          <div className="Account-bar"></div>
        </div>
        <div className="Dashboard-header">
          <h1>
            <span>Welcome back, Professor Ludi!</span>
          </h1>
        </div>
        <div className="Class-container">
          {
            classList.map((c) => <ClassButton key={c.classId} className={c.className} />)
          }
          <Modal >name="AddClassModal";</Modal>
        </div>
      </div>
    </>
  );
}
