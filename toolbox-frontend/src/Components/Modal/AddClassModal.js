import React, { useState } from "react";
import "./Modal.css";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import './AddClassModal.css';



function AddClassModal(props){

//    let isOpen = props.isOpen;
//    const [isOpen, setIsOpen] = useState(false);
    const [className, setClassName] = useState("");

  const { user, getAccessTokenSilently } = useAuth0();

  const AddClass = async () => {
    const token = await getAccessTokenSilently();

    // http post that sends sql query to remote database
    axios
      .post(
        // remote url: "http://52.202.123.156:5000/api/classroom"
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
//
//    isOpen=true;
//const type = props.name;
    if(!props.open) return null;
    setClassName("");
  };
<<<<<<< HEAD

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


=======
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
>>>>>>> 61479bea78c95ef1a4e361abcc0973bae99cee67
}

export default AddClassModal;

