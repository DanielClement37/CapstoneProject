import React, { useState } from "react";
import "../Dashboard/Dashboard.css";
import { Button, Header, Modal, Form } from "semantic-ui-react";
import axios from "axios";
//import "semantic-ui-css/semantic.min.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useStore } from "../../Stores/Contexts/Store";
import { actionTypes } from "../../Stores/actionTypes";
import './AddClassModal.css';

function AddClassModal() {
  const [open, setIsOpen] = useState(false);
  const [className, setClassName] = useState("");
  const [state, dispatch] = useStore();
  const { classList } = state;

  const { user, getAccessTokenSilently } = useAuth0();

  const inlineStyle = {
    modal: {
      marginTop: "0px !important",
      marginLeft: "auto",
      marginRight: "auto",
    },
  };

  const AddClass = async () => {
    const token = await getAccessTokenSilently();

    // http post that sends sql query to remote database
    axios
      .post(
        // remote url: "http://52.202.123.156:5000/api/classroom"
        // local testing: "http://localhost:5000/api/classroom"
        "http://localhost:5000/api/classroom", //TODO: make this an environment variable
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
        //const newClassList = classList.push(response.data);

        //dispatch({type: actionTypes.ADD_CLASS, payload:newClassList});
      })
      .catch((error) => {
        console.error("Something went wrong!", error);
      });

    setIsOpen(false);
    setClassName("");
  };
  return (
    <Modal
      className='Add-modal'
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
      open={open}
      trigger={<Button className="Add-class-box">+</Button>}
      style={inlineStyle.modal}
    >
      <Modal.Header className = 'Add-header'>Add Class</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header className = 'Add-text'>Enter Class Name</Header>
          <Form>
            <Form.Field>
              <input
                placeholder="Class Name"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
              />
            </Form.Field>
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button className = 'Add-button' onClick={() => AddClass()}>
          Submit
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default AddClassModal;
