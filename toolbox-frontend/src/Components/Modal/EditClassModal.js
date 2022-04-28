import React, { useState } from 'react'
import { Button, Modal, Header, Form } from 'semantic-ui-react'
import '../Dashboard/Dashboard.css'
import './AddClassModal.css';

function EditClassModal() {
    const [open, setOpen] = useState(true);

    let handleBtn = (e) => {
        e.stopPropagation();
    }

    setOpen(false);

    return (
        <Modal
            className='Add-modal'
            trigger={<Button onClick={handleBtn} className="Class-option">...</Button>}
            onOpen={() => setOpen(true)}

        >
        <Modal.Header className = 'Add-header'>Edit Class</Modal.Header>
        <Modal.Content>
                <Modal.Description>
                  <Header className = 'Add-text'>Enter Class Name</Header>
                  <Form>
                    <Form.Field>
                      <input
                        placeholder="Enter New Class Name"
                      />
                    </Form.Field>
                  </Form>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button className = 'Add-button'>
                  Submit
                </Button>
              </Modal.Actions>
        </Modal>

    )
}

export default EditClassModal

