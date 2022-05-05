import React, { useState } from "react";
import "../Dashboard/Dashboard.css";
import { Button, Header, Modal, Form } from "semantic-ui-react";
import axios from "axios";
//import "semantic-ui-css/semantic.min.css";
import { useAuth0 } from "@auth0/auth0-react";
import './AddClassModal.css';
import Timer from '../../Images/timer.png'
import Students from '../../Images/students.png'
import Tutorial from '../../Images/tutorial.png'

function AddClassModal(props) {
  const [open, setIsOpen] = useState(false);
  const [open2, setIsOpen2] = useState(false);
  const [open3, setIsOpen3] = useState(false);
  const [open4, setIsOpen4] = useState(false);
  const [open5, setIsOpen5] = useState(false);
  const [time, setTime] = useState(300);

  let interval = null;

  const [className, setClassName] = useState("");

  const type = props.name;

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
        console.log("Status: ", response.status);
        console.log("Data: ", response.data);
      })
      .catch((error) => {
        console.error("Something went wrong!", error);
      });

    setIsOpen(false);
    setClassName("");
  };

  if (type === "AddClassModal") {
    return (
      <Modal
        className='Add-modal'
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
        open={open}
        trigger={<Button className="Add-class-box">+</Button>}
        style={inlineStyle.modal}
      >
        <Modal.Header className='Add-header'>Add Class</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header className='Add-text'>Enter Class Name</Header>
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
          <Button className='Add-button' onClick={() => AddClass()}>
            Submit
          </Button>
        </Modal.Actions>
      </Modal>
    );
  } else if (type === "TimerModal") {
    return (
      <Modal
        className='Add-modal'
        onClose={() => setIsOpen2(false)}
        onOpen={() => setIsOpen2(true)}
        open={open2}
        trigger={
        <div className="Option-box">
          <img src={Timer} className="Image-box" />
          <div className="Option-title">Timer</div>
        </div>}
        style={inlineStyle.modal}
      >
        <Modal.Header className='Add-header'>Timer</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <input type="number" className='Add-timertxt' placeholder = "00" value={("0" + Math.floor((time / 60) % 60)).slice(-2)}></input>
            <div className='Add-timertxt'>:</div>
            <input type="number" className='Add-timertxt' placeholder = "00" value={("0" + Math.floor((time ) % 60)).slice(-2)}></input>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
        <Button className="Add-button" onClick={() => interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000)}>Start</Button>
          <Button className='Add-button Close-button' onClick={() => setIsOpen2(false)}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    );
  } else if (type === "TimeModal") {
    return (
      <Modal
        className='Add-modal'
        onClose={() => setIsOpen3(false)}
        onOpen={() => setIsOpen3(true)}
        open={open3}
        style={inlineStyle.modal}
      >
        <Modal.Header className='Add-header'>Timer 2</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <input type="number" className='Add-timertxt' placeholder='00'></input>
            <div className='Add-timertxt'>:</div>
            <input type="number" className='Add-timertxt' placeholder='00'></input>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button className='Add-button' onClick={() => setIsOpen3(false)}>
            Start
          </Button>
          <Button className='Add-button Close-button' onClick={() => setIsOpen3(false)}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    );
   } else if (type === "TutorialModal") {
    return (
      <Modal
        className='Add-modal'
        onClose={() => setIsOpen4(false)}
        onOpen={() => setIsOpen4(true)}
        open={open4}
        trigger ={
          <div className="Option-box">
            <img src={Tutorial} className="Image-box"/>
            <div className="Option-title">Tutorial</div>
           </div>}
        style={inlineStyle.modal}
      >
        <Modal.Header className='Tut-header'>Tutorial</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <div className="Tut-text">The large box on the left is the <b>Whiteboard</b>. Here, you can type instructions for the class to read from the board.</div>
            <div className="Tut-text">The <b>Timer</b> button allows you to set and display a timer for things such as quizzes and tests.</div>
            <div className="Tut-text">The <b>Students</b> button allows you to see the students in the class and sort them in groups.</div>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button className='Add-button Close-button' onClick={() => setIsOpen4(false)}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    );
   } else if (type === "StudentModal") {
    return (
      <Modal
        className='Add-modal'
        onClose={() => setIsOpen5(false)}
        onOpen={() => setIsOpen5(true)}
        open={open5}
        trigger ={
          <div className="Option-box">
            <img src={Students} className="Image-box"/>
            <div className="Option-title">Students</div>
          </div>}
        style={inlineStyle.modal}
      >
        <Modal.Header className='Tut-header'>Students</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <div className="Body-container">
              <div className="Tut-text">student :)</div>
              <div className="Tut-text">student :)</div>
              <div className="Tut-text">student :)</div>
              <div className="Tut-text">student :)</div>
              <div className="Tut-text">student :)</div>
              <div className="Tut-text">student :)</div>
              <div className="Tut-text">student :)</div>
              <div className="Tut-text">student :)</div>
              <div className="Tut-text">student :)</div>
              <div className="Tut-text">student :)</div>
            </div>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button className='Add-button Close-button' onClick={() => setIsOpen5(false)}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    );
   }
};

export default AddClassModal;
