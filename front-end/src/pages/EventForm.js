import React, { useState } from 'react';
import { Spinner, Container, Form, Col, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShortFooter from '../components/ShortFooter';
import NavComp from '../components/NavComp';
import './EventForm.css';

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
    <div className="event-form-container">
      <NavComp />
      <Container className="d-flex flex-column align-items-center justify-content-center text-center">
        <div className="event-form-header">
          <h1 className="event-form-title">PREMADE FORM</h1>
          <p className="event-form-subtitle">Previous Event Details</p>
          <div className="spinner-decoration">
            <Spinner animation="grow" />
            <Spinner animation="grow" />
            <Spinner animation="grow" />
            <Spinner animation="grow" />
          </div>
        </div>
      </Container>

      <Container className="event-form-card">
        <Form.Group as={Col} controlId="formGridState" className="form-group-modern">
          <Form.Label className="form-label-modern">Event Type:</Form.Label>
          <Form.Select className="form-select-modern" defaultValue="Choose...">
            <option>Choose...</option>
            <option>Weddings</option>
            <option>Party</option>
            <option>Workshop</option>
            <option>Charity events</option>
            <option>Other</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCalendar" className="form-group-modern">
          <Form.Label className="form-label-modern">Event Date:</Form.Label>
          <Form.Control className="form-control-modern" type="date" placeholder="Select date" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLocation" className="form-group-modern">
          <Form.Label className="form-label-modern">Event Location:</Form.Label>
          <Form.Control className="form-control-modern" type="text" placeholder="Enter location" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState" className="form-group-modern">
          <Form.Label className="form-label-modern">Event Theme:</Form.Label>
          <Form.Control className="form-control-modern" type="text" placeholder="Enter event theme" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState" className="form-group-modern">
          <Form.Label className="form-label-modern">Event Budget:</Form.Label>
          <Form.Control className="form-control-modern" type="text" placeholder="Enter event budget" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState" className="form-group-modern">
          <Form.Label className="form-label-modern">Event Vendors:</Form.Label>
          <Form.Control className="form-control-textarea" as="textarea" rows={5} placeholder="Enter vendor details..." />
        </Form.Group>

        <Form.Group className="form-group-modern" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="form-label-modern">About Event:</Form.Label>
          <Form.Control className="form-control-textarea" as="textarea" rows={3} placeholder="Describe your event..." />
        </Form.Group>

        <div className="tasks-section">
          <Form.Label className="form-label-modern">Event Tasks:</Form.Label>
          <div className="tasks-table-container">
            <Table className="tasks-table">
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
                    <td className="task-number-cell">{task.id}</td>
                    <td className="task-input-cell">
                      <Form.Control
                        className="form-control-modern"
                        type="text"
                        value={task.task}
                        onChange={e => handleTaskChange(task.id, 'task', e.target.value)}
                      />
                    </td>
                    <td className="task-input-cell">
                      <Form.Control
                        className="form-control-modern"
                        type="text"
                        value={task.howToDidIt}
                        onChange={e => handleTaskChange(task.id, 'howToDidIt', e.target.value)}
                      />
                    </td>
                    <td className="task-input-cell">
                      <Form.Control
                        className="form-control-modern"
                        type="text"
                        value={task.description}
                        onChange={e => handleTaskChange(task.id, 'description', e.target.value)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>

        <Form.Group as={Col} controlId="formGridFeedbackRating" className="form-group-modern">
          <Form.Label className="form-label-modern">Event Guest Ratings:</Form.Label>
          <Form.Range className="form-range-modern" min={0} max={100} />
        </Form.Group>

        <div className="submit-section">
          <button type="submit" className="submit-button">
            SUBMIT NOW
          </button>
        </div>
      </Container>
      <ShortFooter />
    </div>
  );
};
