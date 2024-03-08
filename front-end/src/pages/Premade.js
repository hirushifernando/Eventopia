import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import NavComp from '../components/NavComp';
import { Spinner } from 'react-bootstrap';
import { FaHeart, FaRegHeart, FaClipboard } from 'react-icons/fa';
import clipboardCopy from 'clipboard-copy';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

const eventsData = [
  {
    type: 'wedding',
    details: 'Radiant Love Fiesta',
    image: './slider3.jpg',
    code: uuidv4(),
  },
  {
    type: 'wedding',
    details: 'Enchanting Bliss Celebration',
    image: './slider1.jpg',
    code: uuidv4(),
  },
  {
    type: 'party',
    details: 'Disco Delight Soiree',
    image: './party1.jpg',
    code: uuidv4(),
  },
  {
    type: 'party',
    details: 'Electric Euphoria Fiesta',
    image: './party3.png',
    code: uuidv4(),
  },
  {
    type: 'charity',
    details: 'Hearts of Hope Gala',
    image: './charity1.jpg',
    code: uuidv4(),
  },
  {
    type: 'charity',
    details: 'Unity Upliftment Ball',
    image: './charity2.jpg',
    code: uuidv4(),
  },
  {
    type: 'workshop',
    details: 'Innovate ICT Intensive',
    image: './workshop1.jpeg',
    code: uuidv4(),
  },
];

const Premade = () => {
  const [filteredEvents, setFilteredEvents] = useState(eventsData);
  const [hideEventCode, setHideEventCode] = useState(true);

  useEffect(() => {
    const likedEvents = JSON.parse(localStorage.getItem('likedEvents')) || [];
    const updatedEvents = eventsData.map((event) => ({
      ...event,
      liked: likedEvents.includes(event.details),
    }));
    setFilteredEvents(updatedEvents);
  }, []);

  const saveLikedEvents = (likedEvents) => {
    localStorage.setItem('likedEvents', JSON.stringify(likedEvents));
  };

  const filterEvents = (eventType) => {
    const filtered =
      eventType === 'all' ? eventsData : eventsData.filter((event) => event.type === eventType);
    setFilteredEvents(filtered);
  };

  const renderEventCode = (code) => {
    const handleClick = () => {
      setHideEventCode(!hideEventCode);
    };

    return (
      <span
        style={{
          fontSize: hideEventCode ? '1.0rem' : '0.8rem',
          border: '1px solid #000000',
          padding: '0.2rem',
          cursor: 'pointer',
        }}
        onClick={handleClick}
      >
        {hideEventCode ? '*************' : code}
      </span>
    );
  };

  const handleLike = (index) => {
    const updatedEvents = [...filteredEvents];
    const likedEvent = updatedEvents[index];
    likedEvent.liked = !likedEvent.liked;

    if (likedEvent.liked) {
      updatedEvents.splice(index, 1);
      updatedEvents.unshift(likedEvent);
    }

    setFilteredEvents(updatedEvents);
    saveLikedEvents(updatedEvents.filter((event) => event.liked).map((event) => event.details));
  };

  return (
    <div>
      <NavComp />
      <Container className="mt-4" style={{ textAlign: 'center' }}>
        <Container className="d-flex flex-column align-items-center justify-content-center text-center">
          <div className="text-row" style={{ marginTop: '40px', color: '#9500AB' }}>
            <h6>Pre-made events</h6>
          </div>
          <div className="text-row" style={{ color: '#9500AB' }}>
            <h3>The Eventopia</h3>
          </div>

          <div className="flower-vines" style={{ paddingBottom: '30px' }}>
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="secondary" />
          </div>
        </Container>

        <Container className="mt-4">
          <Row className="justify-content-center">
            <Col xs="auto" className="mb-2">
              <Button variant="custom" style={{ backgroundColor: '#814b87' }} onClick={() => filterEvents('all')}>
                All Events
              </Button>
            </Col>
            <Col xs="auto" className="mb-2">
              <Button variant="custom" style={{ backgroundColor: '#814b87' }} onClick={() => filterEvents('wedding')}>
                Wedding Events
              </Button>
            </Col>
            <Col xs="auto" className="mb-2">
              <Button variant="custom" style={{ backgroundColor: '#814b87' }} onClick={() => filterEvents('party')}>
                Party Events
              </Button>
            </Col>
            <Col xs="auto" className="mb-2">
              <Button variant="custom" style={{ backgroundColor: '#814b87' }} onClick={() => filterEvents('charity')}>
                Charity Events
              </Button>
            </Col>
            <Col xs="auto" className="mb-2">
              <Button variant="custom" style={{ backgroundColor: '#814b87' }} onClick={() => filterEvents('workshop')}>
                Workshops
              </Button>
            </Col>
          </Row>
        </Container>

        <Container className="mt-4">
          <Row xs={1} sm={2} md={3} lg={4} xl={4} className="g-4">
            {filteredEvents.map((event, index) => (
              <Col key={index} className="mb-4">
                <Card
                  style={{
                    backgroundColor: '#814b87',
                    position: 'relative',
                    width: '100%',
                    height: '400px', 
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={event.image}
                    alt={`Event ${index + 1}`}
                    className="img-fluid"
                    style={{ objectFit: 'cover', height: '50%' }}
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Text>{event.details}</Card.Text>
                    <Link to="/event" style={{ color: '#00457A', textDecoration: 'none' }}>View Details</Link>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <span style={{ fontSize: '1.2rem' }}>Code: {renderEventCode(event.code)}</span>
                      <Button
                        variant="link"
                        onClick={() => {
                          clipboardCopy(event.code);
                          alert('Code copied to clipboard!');
                        }}
                        style={{ padding: '0', fontSize: '1.5rem', cursor: 'pointer' }}
                      >
                        <FaClipboard />
                      </Button>
                    </div>
                    <Button
                      variant="link"
                      onClick={() => handleLike(index)}
                      style={{ alignSelf: 'flex-end' }}
                    >
                      {event.liked ? <FaHeart color="red" /> : <FaRegHeart color="white" />}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Premade;

