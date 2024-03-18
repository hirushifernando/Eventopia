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
import * as math from 'mathjs';



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
const [result, setResult] = useState('');
  const [selectedOperator, setSelectedOperator] = useState('');

  const handleClick = (e) => {
    const buttonName = e.target.name;
  
    if (isNaN(buttonName)) {
      // If an operator button is clicked
      if (selectedOperator && selectedOperator !== buttonName) {
        // If a different operator is already selected, update the selected operator
        setSelectedOperator(buttonName);
        setResult(result.slice(0, -1).concat(buttonName));
      } else if (!selectedOperator) {
        // Otherwise, select the operator and append it to the result
        setSelectedOperator(buttonName);
        setResult(result.concat(buttonName));
      }
    } else {
      // If a number button is clicked
      if (selectedOperator) {
        // If an operator is already selected, append the number to the result after the operator
        if (result.slice(-1) === selectedOperator) {
          setResult(result.concat(buttonName));
        } else {
          setResult(result + selectedOperator + buttonName);
        }
        setSelectedOperator('');
      } else {
        // Otherwise, simply append the number to the result
        setResult(result.concat(buttonName));
      }
    }
  };

  const clear = () => {
    setResult('');
    setSelectedOperator('');
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
    setSelectedOperator('');
  };

  const calculate = () => {
    try {
      setResult(math.evaluate(result).toString());
      setSelectedOperator('');
    } catch (err) {
      setResult('Error');
    }
  };

  return (
    <div>
        <NavComp/>
        <Container style={{ marginTop: '30px' }}>
        <h4 style={{ marginTop: '30px', marginBottom: '30px', color: '#9500AB' }}><b>Calendar & Time</b></h4>
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
            <Card style={{ width: '260px', backgroundColor:'white', height:'80px', padding:'10px' }}>
              {/* Clock component placed inside the Card */}
              <Clock />
              {/* Additional content for the Card can be added here */}
            </Card>
            <Card style={{ width: '260px', backgroundColor:'white', height:'225px', padding:'10px' , marginTop:'10px'}}>
            <div className="container" style={{ top: '4%', left: '4%',position:'absolute', width:'240px',margin: '0 auto', alignItems: 'center', textAlign: 'center', border: '4px solid grey', backgroundColor: 'rgb(0, 0, 0)', borderRadius: '8px', height:'205px' }}>
              <form >
                <input type="text" value={result} style={{ height: '40px', width: '210px', backgroundColor: '#e7e7eee6', color: 'black', textAlign: 'right', fontSize: '25px', fontWeight: '500', letterSpacing: '1px', border: '1px solid grey', margin:'2px 0px' }}  />
              </form>
              <div className="keypad" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridAutoRows: 'minmax(20px, auto)' }}>
                <button className="highlight" onClick={clear} id="clear" style={{ gridColumn: '1/3', gridRow: '1', color: 'rgb(0, 0, 0)', margin: '2px', border: 'none', borderRadius: '5px', cursor: 'pointer', backgroundColor: '#8181e1', fontWeight: '500' }} >Clear</button>
                <button className="highlight" onClick={backspace} id="backspace" style={{ color: 'black', margin: '2px', border: 'none', borderRadius: '5px', cursor: 'pointer', backgroundColor: '#8181e1', fontWeight: '500' }} >C</button>
                <button className="highlight" name="/" onClick={handleClick} style={{color: 'black', margin: '2px', border: 'none', borderRadius: '5px', cursor: 'pointer', backgroundColor: '#8181e1', fontWeight: '500'}} >&divide;</button>
                <button name="7" onClick={handleClick} style={{ margin: '2px', border: 'none', borderRadius: '5px', cursor: 'pointer', backgroundColor: 'white', fontWeight: '500' }} >7</button>
                <button name="8" onClick={handleClick} style={{ margin: '2px', border: 'none', borderRadius: '5px', cursor: 'pointer', backgroundColor: 'white', fontWeight: '500' }} >8</button>
                <button name="9" onClick={handleClick} style={{ margin: '2px', border: 'none', borderRadius: '5px', cursor: 'pointer', backgroundColor: 'white', fontWeight: '500' }}>9</button>
                <button className="highlight" name="*" onClick={handleClick} style={{ margin: '2px', border: 'none', borderRadius: '5px', cursor: 'pointer', backgroundColor: '#8181e1', fontWeight: '500' }} >&times;</button>
                <button name="4" onClick={handleClick} style={{ margin: '2px', border: 'none', borderRadius: '5px', cursor: 'pointer', backgroundColor: 'white', fontWeight: '500' }} >4</button>
                <button name="5" onClick={handleClick} style={{ margin: '2px', border: 'none', borderRadius: '5px', cursor: 'pointer', backgroundColor: 'white', fontWeight: '500' }}>5</button>
                <button name="6" onClick={handleClick} style={{ margin: '2px', border: 'none', borderRadius: '5px', cursor: 'pointer', backgroundColor: 'white', fontWeight: '500' }} >6</button>
                <button className="highlight" name="-" onClick={handleClick} style={{ margin: '2px', border: 'none', borderRadius: '5px', cursor: 'pointer', backgroundColor: '#8181e1', fontWeight: '500' }} >&ndash;</button>
                <button name="1" onClick={handleClick} style={{ margin: '2px', border: 'none', borderRadius: '5px', cursor: 'pointer', backgroundColor: 'white', fontWeight: '500' }} >1</button>
                <button name="2" onClick={handleClick} style={{ margin: '2px', border: 'none', borderRadius: '5px', cursor: 'pointer', backgroundColor: 'white', fontWeight: '500' }} >2</button>
                <button name="3" onClick={handleClick} style={{ margin: '2px', border: 'none', borderRadius: '5px', cursor: 'pointer', backgroundColor: 'white', fontWeight: '500' }} >3</button>
                <button className="highlight" name="+" onClick={handleClick} style={{ margin: '2px', border: 'none', borderRadius: '5px', cursor: 'pointer', backgroundColor: '#8181e1', fontWeight: '500' }} >+</button>
                <button name="0" onClick={handleClick} style={{ margin: '2px', border: 'none', borderRadius: '5px', cursor: 'pointer', backgroundColor: 'white', fontWeight: '500' }} >0</button>
                <button className="highlight" name="." onClick={handleClick} style={{ margin: '2px', border: 'none', borderRadius: '5px', cursor: 'pointer', backgroundColor: 'white', fontWeight: '500' }} >.</button>
                <button className="highlight" name="=" onClick={calculate} id="result" style={{ gridColumn: '1/3', gridRow: '5', margin: '2px', border: 'none', borderRadius: '5px', cursor: 'pointer', backgroundColor: '#8181e1', fontWeight: '500' }} >=</button>
              </div>
            </div>
            </Card>
          </div>
          <Card style={{ width: '900px', backgroundColor:'white', height:'320px' }}>
            <Card.Body>
              <Card.Title style={{color: '#9500AB'}}><b>Upcoming Features</b></Card.Title>
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
                <h4 style={{marginBottom: '30px', color: '#9500AB'}}><b>Urgent Tasks</b></h4>
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
        <Container style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between' }}>
        <div>
        <h4 style={{marginBottom: '30px', color: '#9500AB'}}><b>Features</b></h4>
        <Card style={{ width: '140%', backgroundColor:'white', height:'325px',  padding:'10px' }}>
              <ListGroup style={{ width: '100%', backgroundColor:'white', borderRadius:'20px' }}>
              <ListGroup.Item as={Button} href="/content" style={{paddingBottom: '10px'}}>🏨 Venue Options</ListGroup.Item>
              <ListGroup.Item as={Button} href="/create-event" style={{paddingBottom: '10px'}}>🗓️ Create Event</ListGroup.Item>
              <ListGroup.Item as={Button} href="/eventform" style={{paddingBottom: '10px'}}>📋 Event Checklist</ListGroup.Item>
              <ListGroup.Item as={Button} href="/dashboard" style={{paddingBottom: '10px'}}>➕ Add Tasks</ListGroup.Item>
              <ListGroup.Item as={Button} href="/venue-suggestions" style={{paddingBottom: '10px'}}>🗺️ Venue Suggestions</ListGroup.Item>
              <ListGroup.Item as={Button} href="/customize" style={{paddingBottom: '10px'}}>🍽️ Menu Personalization</ListGroup.Item>
              <ListGroup.Item as={Button} href="/customize" style={{paddingBottom: '10px'}}>🎨 Theme Personalization</ListGroup.Item>
              </ListGroup>
        </Card>
        </div>
        <div>
        <h4 style={{marginBottom: '30px', marginLeft:'140px', color: '#9500AB'}}><b>Team</b></h4>
        <Card className='team' style={{ width: '88%', backgroundColor: 'white',marginLeft:'130px', padding: '5px 10px', height:'325px' }}>
        <div className="row">
          <div className="column" style={{ float: 'left', width: '25%', padding: '5px 15px' }}>
            <div className="team-card" style={{ boxShadow:' rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset', height:'300px', borderRadius:'15px' }}>
              <div className="container" style={{ padding: '0 16px' }}>
                <h2 style={{ color: 'black' }}>Deshan.P</h2>
                <p className="title">Technical manager</p>
                <p style={{textAlign: 'justify', fontSize: '14px'}}>Responsible for delivering user support, maintaining platform functionality, and resolving technical issues as a technical manager.</p>
                <p>deshan0514@gmail.com</p>
                <p>075 8823756</p>
              </div>
            </div>
          </div>

          <div className="column" style={{ float: 'left', width: '25%', padding: '5px 15px' }}>
            <div className="team-card" style={{ boxShadow:' rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset', height:'300px', borderRadius:'15px' }}>
              
              <div className="container" style={{ padding: '0 16px' }}>
                <h2 style={{ color: 'black' }}>Damiru.S</h2>
                <p className="title">System administrator </p>
                <p style={{textAlign: 'justify', fontSize: '14px'}}>Overseeing the daily operations of an event planning website to ensure optimal functionality and user experience.</p>
                <p>damiru0116@gmail.com</p>
                <p>074 8785726</p>
              </div>
            </div>
          </div>
          <div className="column" style={{ float: 'left',  width: '25%', padding: '5px 15px' }}>
            <div className="team-card" style={{ boxShadow:' rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset', height:'300px', borderRadius:'15px' }}>
              
              <div className="container" style={{ padding: '0 16px' }}>
                <h2 style={{ color: 'black' }}>Hirushi.F</h2>
                <p className="title">System administrator </p>
                <p style={{textAlign: 'justify', fontSize: '14px'}}>Overseeing the daily operations of an event planning website to ensure optimal functionality and user experience.</p>
                <p>hirushi1107@gmail.com</p>
                <p>077 7707891</p>
              </div>
            </div>
          </div>
          <div className="column" style={{ float: 'left', width: '25%', padding: '5px 15px'}}>
            <div className="team-card" style={{boxShadow:' rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset', height:'300px', borderRadius:'15px' }}>
              
              <div className="container" style={{ padding: '0 16px' }}>
                <h2 style={{ color: 'black' }}>Nenithi.S</h2>
                <p className="title">Technical manager</p>
                <p style={{textAlign: 'justify', fontSize: '14px'}}>Responsible for delivering user support, maintaining platform functionality, and resolving technical issues as a technical manager.</p>
                <p>nenithi0317@gmail.com</p>
                <p>072 5689741</p>
              </div>
            </div>
          </div>
        </div>
        </Card>
        </div>
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
