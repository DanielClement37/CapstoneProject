import "./Dashboard.css";
import React, { useState, useEffect} from "react";
import { Button } from "semantic-ui-react"
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import Modal from "../Modal/AddClassModal";
import ClassButton from "../ClassButton/ClassButton";

export default function Dashboard() {

  const [classes, setClasses] = useState({
    classList: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const { user, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const getClasses = async () => {
      const token = await getAccessTokenSilently();
      axios
        .get(`http:localhost:5000/api/teacher/${user.sub}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            let data = response?.data;
            setClasses((prev) => ({
              ...prev,
              classList: data
            }));
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getClasses();
  }, 
  [
    classes.classList,
    getAccessTokenSilently,
    user.sub
  ]);

  return (
    <div className="App">
      <div className="Dashboard-container">
        <div className="Account-container">
          <div className="Account-bar">
            <Button className = 'logout-button' >
                LogOut
            </Button>
          </div>
        </div>
        <div className="Dashboard-header">
          <h1>
            <span>Welcome back, Professor Ludi!</span>
          </h1>
        </div>
        <div className="Class-container">
          {
            classes.classList.map((c) => <ClassButton key={c.classId} className={c.className} />)
          }
          <Modal >name="AddClassModal";</Modal>
        </div>
      </div>
    </div>
  );
}

