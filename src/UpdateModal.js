import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function UpdateModalUI({ show, handleClose, deleteEvent, updateEvent, eventData }) {
    const [title , setTitle] = useState(null);
    useEffect(()=> {
        setTitle(eventData && eventData.title ? eventData.title : null);
    }, [eventData]);
    function onChange(event) {
        setTitle(event.target.value);
    }
    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <span>Event Name </span><input type="text" id="title" value={title} onChange={onChange}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={deleteEvent}>
            Delete Event
          </Button>
          <Button variant="primary" onClick={updateEvent}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
}