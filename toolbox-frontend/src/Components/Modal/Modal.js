import React from 'react'
import '../App/Dashboard.css'
import { Button, Header, Image, Modal, Form } from 'semantic-ui-react'

function ModalExampleModal() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<button className="Add-class-box">+</button>}
    >
      <Modal.Header>Add Class</Modal.Header>
      <Form>
          <Form.Field>
            <label>Class Name</label>
            <input placeholder='Class Name' />
          </Form.Field>
      </Form>
      <Modal.Actions>
        <Button
          content="Add Class"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default ModalExampleModal
