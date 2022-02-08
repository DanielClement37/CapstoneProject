import React, { useState } from "react";
import "../Dashboard/Dashboard.css";
import { Button, Header, Modal, Form } from "semantic-ui-react";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
import { useAuth0 } from "@auth0/auth0-react";

function AddClassModal() {
  const [open, setIsOpen] = useState(false);
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

    setIsOpen(false);
    setClassName("");
  };
  return (
    <Modal
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
      open={open}
      trigger={<button className="Add-class-box">+</button>}
    >
      <Modal.Header>Add A Class</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header>Enter Class Name</Header>
          <Form>
            <Form.Field>
              <label>Class Name</label>
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
        <Button color="green" onClick={() => AddClass()}>
          Submit
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default AddClassModal;
