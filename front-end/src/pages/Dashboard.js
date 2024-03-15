import React, { useState } from 'react';

import NavComp from '../components/NavComp';
import { Container, Button, Card  } from 'react-bootstrap'; // Imported Button from react-bootstrap
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ShortFooter from '../components/ShortFooter';
import { Spinner } from 'react-bootstrap';
import Calendar from 'react-calendar'; // Import the Calendar component
import 'react-calendar/dist/Calendar.css'; // Import Calendar styles
import axios from 'axios';
import moment from 'moment';


class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: moment().format('LTS'),
      one: true,
      two: false,
      three: false,
      four: false,
      class: ''
    };
    
  }
  componentDidMount() {
    setInterval(() => {
      if (this.state.one == true) {
        this.setState({
          time: moment().format('LTS')
        });
      }
      else if (this.state.four == true) {
        this.setState({
          time: moment().format('LT')
        });
      }
    }, 1000);
  }
  
  render() {
    return (
      <div id="clock">
        <h1 className={this.state.class}>{this.state.time}</h1>
      </div>
    );
  }
}


const accordionItems = [
  {
    name: '🔘 Finish event planning',
    body: ['Task 1 goes here.'],
  },
  {
    name: '🔘 Confirm event details',
    body: ['Task 2 goes here.'],
  },
  {
    name: '🔘 Event overview presentation',
    body: ['Task 3 goes here.'],
  },
];
const accordionUpdateItems = [
  {
    topic: '📊 Progress Tracker',
    des: 'The "Progress Tracker" facilitates efficient project management by allowing users to monitor task progress, categorize tasks, and visualize project health in real-time, promoting collaboration and informed decision-making.',
  },
  {
    topic: '🚨 Booking Flexibility and Location Reservation Alerts',
    des: 'The Booking Flexibility and Location Reservation Alerts system optimizes event management by allowing users to adjust bookings easily, receive real-time location reservation alerts, and streamline communication, enhancing efficiency and adaptability.',
  },
  {
    topic: '💵 Cost Comparison Tool',
    des: 'Streamlines vendor selection by enabling users to compare costs from multiple vendors, facilitating informed decisions, and optimizing budget allocation, ultimately saving time and resources in procurement practices.',
  },
];

export const Dashboard = () => {
  
  const [items, setItems] = useState(accordionItems);
  const [selectedDate, setSelectedDate] = useState(new Date()); // State to manage selected date

  const handleBodyChange = (idx, bodyIdx, value) => {
    const updatedItems = items.map((item, index) => {
      if (idx === index) {
        const newBody = [...item.body];
        newBody[bodyIdx] = value;
        return { ...item, body: newBody };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const handleAddBody = async (idx, newBodyContent) => {
    try {
        const response = await axios.post('http://localhost:8002/dashboard/addbody', { idx, newBodyContent });
        console.log('Body added to task:', response.data);
        setItems(prevItems => {
          return prevItems.map((item, index) => {
            if (index === idx) {
              return { ...item, body: [...item.body, newBodyContent] };
            }
            return item;
          });
        });
      } catch (error) {
        console.error('Error adding body to task:', error);
        // Handle error (e.g., show an error message to the user)
      }
    };


const handleAddTask = async () => {
  const taskName = prompt('Enter the name of the new task:');
  if (taskName !== null) {
      const taskBody = prompt('Enter the body content of the new task:'); // Define and initialize taskBody
      const newItem = {
          name: `🔘 ${taskName}`,
          body: [taskBody], // Assign the body content to the body array
      };
      try {
          const response = await axios.post('http://localhost:8002/dashboard', newItem);
          console.log('Task saved:', response.data);
          setItems([...items, newItem]);
      } catch (error) {
          console.error('Error saving task:', error);
          // Handle error (e.g., show an error message to the user)
      }
  }
};

  return (
    <div>
        <NavComp/>
        <Container style={{ marginTop: '30px' }}>
        <h4 style={{ marginTop: '30px', marginBottom: '30px' }}><b>Calendar & Time</b></h4>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Calendar component */}
          <div style={{ marginRight: '20px'}}>
          <Card style={{ width: '350px', backgroundColor:'white', height:'305px', padding:'10px' }}>
            <Calendar
              onChange={setSelectedDate} // Set the selected date when user clicks on a date
              value={selectedDate} // Pass the selected date
            />
          </Card>
          </div>
          <div style={{ marginRight: '20px'}}>
            <Card style={{ width: '250px', backgroundColor:'white', height:'80px', padding:'10px' }}>
              {/* Clock component placed inside the Card */}
              <Clock />
              {/* Additional content for the Card can be added here */}
            </Card>
          </div>
          <Card style={{ width: '900px', backgroundColor:'white', height:'320px' }}>
            <Card.Body>
              <Card.Title><b>Upcoming Features</b></Card.Title>
              <div className="accordion" id="accordionExample">
                {accordionUpdateItems.map((item, idx) => (
                <div key={idx} className="accordion-item">
                <h2 className="accordion-header">
                 <button
                 className="accordion-button"
                 type="button"
                 data-bs-toggle="collapse"
                 data-bs-target={`#collapse${idx + 1}`}
                 aria-expanded={idx === 0}
                 aria-controls={`collapse${idx + 1}`}
                 >
                    {item.topic}
                 </button>
                 </h2>
                 <div
                 id={`collapse${idx + 1}`}
                 className={`accordion-collapse collapse${idx === 0 ? ' show' : ''}`}
                 data-bs-parent="#accordionExample"
                 >
                 <div className="accordion-body">
                 <p>{item.des}</p>
                 </div>
                 </div>
                 </div>
                 ))}
                 </div>
            </Card.Body>
          </Card>
        </div>
        </Container>
        <Container style={{marginTop: '30px'}}>
                <h4 style={{marginBottom: '30px'}}><b>Urgent Tasks</b></h4>
                <div className="accordion" id="accordionExample">
                {items.map((item, idx) => (
                <div key={idx} className="accordion-item">
                <h2 className="accordion-header">
                 <button
                 className="accordion-button"
                 type="button"
                 data-bs-toggle="collapse"
                 data-bs-target={`#collapse${idx + 1}`}
                 aria-expanded={idx === 0}
                 aria-controls={`collapse${idx + 1}`}
                 >
                    {item.name}
                 </button>
                 </h2>
                 <div
                 id={`collapse${idx + 1}`}
                 className={`accordion-collapse collapse${idx === 0 ? ' show' : ''}`}
                 data-bs-parent="#accordionExample"
                 >
                 <div className="accordion-body">
                    {item.body.map((bodyContent, bodyIdx) => (
                      <div key={bodyIdx}>
                        <input
                          type="text"
                          value={bodyContent}
                          onChange={(e) => handleBodyChange(idx, bodyIdx, e.target.value)}
                        />
                        {bodyIdx === item.body.length - 1 && ( // Show the "+" button only for the last input field
                          <Button variant="outline-primary" onClick={() => handleAddBody(idx)} style={{ marginLeft: '10px', backgroundColor: '#8181e1', color: 'white', border:'none' }}>Add</Button>
                        )}
                      </div>
                    ))}
                 </div>
                 </div>
                 </div>
                 ))}
                 </div><br></br>
                 <Button variant="outline-primary" onClick={handleAddTask} style={{ marginLeft: '10px', backgroundColor: '#8181e1', color: 'white', border:'none' }}>Add Task</Button> 
        </Container>
        <Container style={{marginTop: '30px'}}>
        <h4 style={{marginBottom: '30px'}}><b>Event Directory</b></h4>
        <Card style={{ width: '100%', backgroundColor:'white', height:'263px',  padding:'10px' }}>
              <ListGroup style={{ width: '100%', backgroundColor:'white', height:'200px', borderRadius:'20px' }}>
              <ListGroup.Item as={Button} href="/content" style={{paddingBottom: '15px'}}>🏨 Venue Options</ListGroup.Item>
              <ListGroup.Item as={Button} href="/create-event" style={{paddingBottom: '15px'}}>🗓️ Create Event</ListGroup.Item>
              <ListGroup.Item as={Button} href="/eventform" style={{paddingBottom: '15px'}}>📋 Event Checklist</ListGroup.Item>
              <ListGroup.Item as={Button} href="/venue-suggestions" style={{paddingBottom: '15px'}}>🗺️ Venue Suggestions</ListGroup.Item>
              <ListGroup.Item as={Button} href="/customize" style={{paddingBottom: '15px'}}>🛠️ Menu & Theme Personalization</ListGroup.Item>
              </ListGroup>
        </Card>
        </Container>
          <Container className="d-flex flex-column align-items-center justify-content-center text-center">
            <div className="text-row" style={{ marginTop: '60px', color: '#9500AB' }}>
              <h3>DASHBOARD</h3>
            </div>
            <div className="text-row" style={{ color: '#9500AB' }}>
              <h6>Your Event Details</h6>
            </div>

            <div className="flower-vines" style={{ paddingBottom: '5px' }}>
              <Spinner animation="grow" variant="secondary" />
              <Spinner animation="grow" variant="secondary" />
              <Spinner animation="grow" variant="secondary" />
              <Spinner animation="grow" variant="secondary" />
            </div>
          </Container>
        <ShortFooter />
    </div>
  )
}
