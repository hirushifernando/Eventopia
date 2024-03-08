import React, { useState } from 'react';
import { Spinner, Container, Form, Col, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShortFooter from '../components/ShortFooter';
import NavComp from '../components/NavComp';

export const EventForm = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: 'Task 1', howToDidIt: 'How to did it 1', description: 'Description 1' },
    { id: 2, task: 'Task 2', howToDidIt: 'How to did it 2', description: 'Description 2' },
    { id: 3, task: 'Task 3', howToDidIt: 'How to did it 3', description: 'Description 3' },
    { id: 4, task: 'Task 4', howToDidIt: 'How to did it 4', description: 'Description 4' },
    { id: 5, task: 'Task 5', howToDidIt: 'How to did it 5', description: 'Description 5' }
    // Add more tasks as needed
  ]);

  const handleTaskChange = (id, field, value) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, [field]: value };
      }
      return task;
    });
    setTasks(updatedTasks);
  };


  return (
    <div>
        <NavComp />
        <Container className="d-flex flex-column align-items-center justify-content-center text-center">
            <div className="text-row" style={{ marginTop: '60px', color: '#9500AB' }}>
              <h3>PREMADE FORM</h3>
            </div>
            <div className="text-row" style={{ color: '#9500AB' }}>
              <h6>Previous Event Details</h6>
            </div>

            <div className="flower-vines" style={{ paddingBottom: '30px' }}>
              <Spinner animation="grow" variant="secondary" />
              <Spinner animation="grow" variant="secondary" />
              <Spinner animation="grow" variant="secondary" />
              <Spinner animation="grow" variant="secondary" />
            </div>
          </Container>
          <Container style={{ border: '2px solid #9500AB', borderRadius: '20px' }}>
          <Form.Group as={Col} controlId="formGridState" style={{ marginTop: '30px', paddingLeft: '10px', paddingRight: '10px' }}>
          <Form.Label>Event Type:</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>Weddings</option>
            <option>Party</option>
            <option>Workshop</option>
            <option>Charity events</option>
            <option>Other</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridCalendar" style={{ marginTop: '30px', paddingLeft: '10px', paddingRight: '10px' }}>
          <Form.Label>Event Date:</Form.Label>
          <Form.Control type="date" placeholder="Select date" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridLocation" style={{ marginTop: '30px', paddingLeft: '10px', paddingRight: '10px' }}>
          <Form.Label>Event Location:</Form.Label>
          <Form.Control type="text" placeholder="Enter location" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState" style={{ marginTop: '30px', paddingLeft: '10px', paddingRight: '10px' }}>
          <Form.Label>Event Theme:</Form.Label>
          <Form.Control type="text" placeholder="Enter event theme" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState" style={{ marginTop: '30px', paddingLeft: '10px', paddingRight: '10px' }}>
          <Form.Label>Event Budget:</Form.Label>
          <Form.Control type="text" placeholder="Enter event budget" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState" style={{ marginTop: '30px', paddingLeft: '10px', paddingRight: '10px' }}>
          <Form.Label>Event Vendors:</Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{ marginTop: '30px', paddingLeft: '10px', paddingRight: '10px' }}>
                <Form.Label>About Event:</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState" style={{ marginTop: '30px', paddingLeft: '10px', paddingRight: '10px' }}>
            <Form.Label>Event Tasks:</Form.Label>
            <Table bordered>
            <thead>
              <tr>
                <th>No</th>
                <th>Task</th>
                <th>How to did it</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map(task => (
                <tr key={task.id}>
                  <td>{task.id}</td>
                  <td>
                    <Form.Control
                      type="text"
                      value={task.task}
                      onChange={e => handleTaskChange(task.id, 'task', e.target.value)}
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="text"
                      value={task.howToDidIt}
                      onChange={e => handleTaskChange(task.id, 'howToDidIt', e.target.value)}
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="text"
                      value={task.description}
                      onChange={e => handleTaskChange(task.id, 'description', e.target.value)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridFeedbackRating" style={{ marginTop: '30px', paddingLeft: '10px', paddingRight: '10px' }}>
          <Form.Label>Event guest Ratings:</Form.Label>
          <Form.Range min={0} max={100} />
        </Form.Group>
        <div className="save-changes-button-container" style={{ marginTop: '40px', textAlign: 'center', marginBottom: '40px' }}>
                <button type="submit" className="save-button" style={{ backgroundColor: '#c6c6f5', border: '2px solid #a600a6', borderRadius: '10px', padding: '10px 100px' }}>
                  SUBMIT NOW
                </button>
              </div>
          </Container>
          <ShortFooter />
    </div>
    
  )
}
