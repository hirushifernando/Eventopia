import React, { useState } from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'react-bootstrap';
import NavComp from '../components/NavComp';
import ShortFooter from '../components/ShortFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faArrowAltCircleRight, faTimesCircle, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import './customize.css'

const topic = [
  {
    name: 'Menu',
    description: "Our platform empowers event organizers to create custom menus that are easily tailored to their budgets and attendees' preferences.  Through it, users can seamlessly manage budgets, efficiently allocating resources to create memorable culinary experiences without overspending.  Moreover, our system streamlines the process of collecting food preferences from participants.  Whether it's a corporate meeting, wedding or social event, our platform provides the tools to curate exceptional dining experiences that leave guests with a lasting impression while staying within budget constraints.",
    image: '/f3.jpg',
    link:'/event' // Define link to event details page
  },
  {
    name: 'Theme',
    description:"Our platform offers a range of customizable themes for events, enabling users to create immersive and memorable experiences that resonate with attendees.  With a choice of themes from elegant galas to casual outdoor gatherings, organizers can easily tailor every aspect of their event to suit their vision and audience.  Integrated budget management tools empower users to efficiently allocate resources, ensuring the event is financially sustainable while delivering the desired atmosphere and experience.  Additionally, our system simplifies the process of gathering preferences from attendees, allowing organizers to fine-tune every detail, from decor to menu choices, to perfectly match their guests' preferences and expectations.  Whether it's a corporate event, wedding or community event, our platform provides the flexibility and functionality needed to bring any theme to life, prioritizing both budget considerations and attendee satisfaction.",
    image: '/f1.jpg',
    link:'/event' // Define link to event details page
  },
];

function Template() {
    const [selectedTopic, setSelectedTopic] = useState(null);
    const selectTopic = (topic) => {
        setSelectedTopic(topic);
      };
    
  return (
    <div style={{ backgroundColor: '#c6c6f5' }}>
      <NavComp />
      <Container fluid className="template_section">
        {topic.map((topic, index) => (
          <Container key={index} style={{ marginTop: '30px' }}>
            <h4 style={{ marginBottom: '30px', color: '#9500AB' }}><b>{topic.name}</b></h4>
            <Card style={{ width: '100%', backgroundColor: 'white', padding: '10px' }}>
              <Row>
                <Col xs={12} md={4}>
                  {/* Image */}
                  <img src={topic.image} alt={topic.name} style={{ width: '100%', height:'250px' }} />
                </Col>
                <Col xs={12} md={8}>
                  {/* Paragraph */}
                  <p style={{textAlign:"justify"}}>{topic.description}</p>
                </Col>
                <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <a href="/event" target="_blank" style={{ textDecoration: 'none' }}>
                  <button style={{ backgroundColor: '#2e2e6b',  color: 'white', border: 'none', padding: '5px 10px', borderRadius: '10px' }}>
                    Customize Form
                  </button>
                </a>
                </div>
              </Row>
            </Card>
          </Container>
        ))}
        <Container className="d-flex flex-column align-items-center justify-content-center text-center">
            <div className="text-row" style={{ marginTop: '60px', color: '#9500AB' }}>
              <h3>CUSTOMIZE</h3>
            </div>
            <div className="text-row" style={{ color: '#9500AB' }}>
              <h6>Customize to your liking</h6>
            </div>

            <div className="flower-vines" style={{ paddingBottom: '5px' }}>
              <Spinner animation="grow" variant="secondary" />
              <Spinner animation="grow" variant="secondary" />
              <Spinner animation="grow" variant="secondary" />
              <Spinner animation="grow" variant="secondary" />
            </div>
          </Container>
      </Container>
      <ShortFooter />
    </div>
  );
}

export default Template;
