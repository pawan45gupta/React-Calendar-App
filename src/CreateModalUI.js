import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function CreateModalUI({show, handleClose, createEvent}) {
    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <span>Event Name </span><input type="text" id="eventName" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={createEvent}>
            Create Event
          </Button>
        </Modal.Footer>
      </Modal>
    );
}