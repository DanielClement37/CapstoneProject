import "./Dashboard.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import Modal from "../Modal/AddClassModal";
import ClassButton from "../ClassButton/ClassButton";

export default function Dashboard() {
  const [classes, setClasses] = useState([]);

  const { user, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const getClasses = async () => {
      const token = await getAccessTokenSilently();
      axios
        .get(`http://52.202.123.156:5000/api/teacher/${user.sub}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            setClasses(response?.data);
            console.log(response?.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getClasses();
  }, 
  [
    getAccessTokenSilently, 
    user.sub,
  ]);

  return (
    <div className="App">
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
            classes &&
            classes.map((c) => <ClassButton key={c.classId} className={c.className} />)
          }
          <Modal>name="AddClassModal";</Modal>
        </div>
      </div>
    </div>
  );
}
