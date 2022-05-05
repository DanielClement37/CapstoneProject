import React, { useState, useEffect } from "react";
import "../Dashboard/Dashboard.css";
import { Button, Buttons, Header, Modal, Form } from "semantic-ui-react";
import axios from "axios";
//import "semantic-ui-css/semantic.min.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useStore } from "../../Stores/Contexts/Store";
import { actionTypes } from "../../Stores/actionTypes";
import "./AddStudentModal.css";
import Students from "../../Images/students.png";
import history from "../../Utils/history"


export default function AddStudentModal(props) {
  const [open, setIsOpen] = useState(false);

  const [studentName, setStudentName] = useState({first: "", last: "", gender: 3});
  const [state, dispatch] = useStore();
  const { classList, studentList, currentClass } = state;

  const { user, getAccessTokenSilently } = useAuth0();

  const inlineStyle = {
    modal: {
      marginTop: "0px !important",
      marginLeft: "auto",
      marginRight: "auto",
    },
  };

  const AddStudent = async () => {
    const token = await getAccessTokenSilently();
    console.log(currentClass);

    // http post that sends sql query to remote database
    axios
      .post(
        // remote url: "http://52.202.123.156:5000/api/classroom"
        // local testing: "http://localhost:5000/api/classroom"
        "http://52.202.123.156:5000/api/student", //TODO: make this an environment variable
        {
          ClassroomId: currentClass,
          FirstName: studentName.first,
          LastName: studentName.last,
          Gender: studentName.gender,
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
    setStudentName("");
    dispatch({ type: actionTypes.ADD_STUDENT, payload: studentName });
  };

return (
  <Modal
    className="Add-modal" // first name variable
    onClose={() => setIsOpen(false)}
    onOpen={() => setIsOpen(true)}
    open={open}
    // the className for the style in this case is from AddClassModal.css
    trigger={<Button className="Add-button-secondary">Add Student</Button>}
    style={inlineStyle.modal}
  >
    <Modal.Header className="Tut-header">Students</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Header className="Add-text">Enter Student Information</Header>
        <Form>
          <Form.Field>
            <input
              placeholder="First Name"
              value={studentName.firstName}
              onChange={(e) =>
                setStudentName({ ...studentName, first: e.target.value })
              }
            />
          </Form.Field>
          <Form.Field>
            <input
              placeholder="Last Name"
              value={studentName.lastName}
              onChange={(e) =>
                setStudentName({ ...studentName, last: e.target.value })
              }
            />
          </Form.Field>
          <Form.Field className="checkbox-container">
            <Form.Field className="checkbox-item">
              <input
                type="checkbox"
                value={studentName.gender}
                onChange={() => setStudentName({ ...studentName, gender: 0 })}
              />
              <label>Male</label>
            </Form.Field>
            <Form.Field className="checkbox-item">
              <input
                type="checkbox"
                value={studentName.gender}
                onChange={() => setStudentName({ ...studentName, gender: 1 })}
              />
              <label>Female</label>
            </Form.Field>
            <Form.Field className="checkbox-item">
              <input
                type="checkbox"
                value={studentName.gender}
                onChange={() => setStudentName({ ...studentName, gender: 2 })}
              />
              <label>Non-Binary</label>
            </Form.Field>
            <Form.Field className="checkbox-item">
              <input
                type="checkbox"
                value={studentName.gender}
                onChange={() => setStudentName({ ...studentName, gender: 3 })}
              />
              <label>Other</label>
            </Form.Field>
          </Form.Field>
        </Form>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button className="Close-button" onClick={() => setIsOpen(false)}>
        Close
      </Button>
      <Button
        className="Add-button"
        onClick={() => {
          AddStudent();
          console.log(studentName);
        }}
      >
        Submit
      </Button>
    </Modal.Actions>
  </Modal>
);
}