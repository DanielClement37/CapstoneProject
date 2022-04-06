import React, { useState } from "react";
import "./Modal.css";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";



function AddClassModal(props){

    let isOpen = props.isOpen;
//  const [open, setIsOpen] = useState(true);
  const [className, setClassName] = useState("");

  const { user, getAccessTokenSilently } = useAuth0();

  const AddClass = async () => {
    const token = await getAccessTokenSilently();

    axios
      .post(
        "http://localhost:5000/api/classroom",      //TODO: make this an environment variable
        {
          TeacherId: user.sub,
          ClassName: className,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log("Status: ", response.status);
        console.log("Data: ", response.data);
      })
      .catch((error) => {
        console.error("Something went wrong!", error);
      });

    isOpen=true;
    setClassName("");
  };
    return (
     <>
            <button className="Add-class-box"onClick={isOpen=true}>+</button>
            {isOpen ?
                <>
                <div className="modal">
                    <div>Add a Class</div>
                </div>
           </>
           : <div /> }
        </>

    );

}

export default AddClassModal;

