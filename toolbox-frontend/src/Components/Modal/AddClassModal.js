import React, { useState } from "react";
import "./Modal.css";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";



function AddClassModal(props){

//    let isOpen = props.isOpen;
//    const [isOpen, setIsOpen] = useState(false);
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
//
//    isOpen=true;
//const type = props.name;
    if(!props.open) return null;
    setClassName("");
  };

    return (
     <>
        <div>
            <button className="close" onClick={props.onClose}>
                x
            </button>
            <div className="modal">
                <div className="modal-header">Add Class</div>
                <form>
                    <input
                        placeholder="Enter class name"
                        value={className}
                        onChange={(e) => setClassName(e.target.value)}
                    />
                </form>
            </div>
        </div>
     </>

    );


}

export default AddClassModal;

