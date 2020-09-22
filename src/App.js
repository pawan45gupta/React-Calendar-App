import React, { useState, useEffect } from 'react';
import './App.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import UpdateModalUI from './UpdateModal';
import CreateModalUI from './CreateModalUI';

function App() {
  const [eventsList, setEventsList] = useState([]);
  const localizer = momentLocalizer(moment);
  const [isLoginSuccess, setLoginSucess] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [eventData, setEventData] = useState(null);
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const handleClose = () => setShowEditModal(false);
  const handleCreateModalClose = () => setShowCreateModal(false);

  useEffect(()=> {
    setEventsList([{
      start: new Date('2020-09-22'),
      end: new Date('2020-09-22'),
      title: 'Hello',
    },
    {
      start: new Date('2020-09-23'),
      end: new Date('2020-09-23'),
      title: 'Hello1',
    }]);
  }, [setEventsList]);

  function handleSignIn(event) {
    let email =  document.getElementById('inputEmail').value;
    let password = document.getElementById('inputPassword').value;
    console.log(email, password);
    if(email === 'admin@gmail.com' && password === 'admin') {
      setLoginSucess(true);
    }
  }

  function handleSelect({ start, end }) {
    setShowCreateModal(true);
    setStart(start);
    setEnd(end);
  }

  function createEvent() {
    const title = document.getElementById("eventName").value;
    if (title) {
      var newEvent = {
        start: start,
        end: end,
        title: title
      };
      setEventsList([...eventsList, newEvent]);
    }
    setShowCreateModal(false);
  }

  function selectEvent(event) {
    setShowEditModal(true);
    setEventData(event);
  } 

  function updateEvent(event) {
    const events = [...eventsList];
    const id = events.indexOf(event)
    events.splice(id, 1);
    var newEvent = {
      start: eventData.start,
      end: eventData.end,
      title: document.getElementById('title').value
    };
    setEventsList([...events, newEvent]);
    setShowEditModal(false);
  }

  function deleteEvent() {
    const events = [...eventsList];
    const id = events.indexOf(eventData)
    events.splice(id, 1);
    setEventsList(events);
    setShowEditModal(false);
  }

  return (
    <div className="App">
      { !isLoginSuccess?<Login handleSignIn={handleSignIn}/> : null }
      { isLoginSuccess?<h1>Maz Digital Calendar</h1>: null }
      { isLoginSuccess? 
          <Calendar
            selectable
            localizer={localizer}
            events={eventsList}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 300 }} 
            onSelectSlot={handleSelect} 
            onSelectEvent={selectEvent} /> 
          : null
        }
        <UpdateModalUI show={showEditModal} eventData={eventData} handleClose={handleClose} deleteEvent={deleteEvent} updateEvent={updateEvent}/>
        <CreateModalUI show={showCreateModal} handleClose={handleCreateModalClose} createEvent={createEvent}/>
    </div>
  );
}

export default App;
