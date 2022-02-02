import React from 'react'
import '../Dashboard/Dashboard.css'
import { Button, Header, Image, Modal, Form } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

function ModalExampleModal() {
  const [open, setOpen] = React.useState(false)

  const inlineStyle = {
    modal : {
      marginTop: '0px !important',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button className="Add-class-box">+</Button>}
      style={inlineStyle.modal}
    >
      <Modal.Header>Add A Class</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header>Enter Class Name</Header>
          <Form>
            <Form.Field>
               <label>Class Name</label>
               <input placeholder='Class Name' />
            </Form.Field>
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='green' onClick={() => setOpen(false)}>
          Submit
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalExampleModal