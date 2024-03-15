import React, { useState } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComp from '../components/NavComp';
import ShortFooter from '../components/ShortFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faArrowAltCircleRight, faTimesCircle, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import './customize.css'

const topic = [
  {
    name: 'Menu',
    description: 'Serenity Springs Lodge is an ethereal haven that seamlessly blends celestial charm with lunar luxury. A truly out-of-this-world experience!',
    image: '/directory1.jpg',
    link:''
  },
  {
    name: 'Theme',
    description: 'Enchanted Echo Hotel is a symphony of comfort and magic. Each stay feels like a journey through the stars in Celestia City!',
    image: '/directory2.jpg',
    link:''
  },
];

function Template() {
    const [selectedTopic, setSelectedTopic] = useState(null);
    const selectTopic = (topic) => {
        setSelectedTopic(topic);
      };
      const clearSelectedTopic = () => {
        setSelectedTopic(null);
      };
  return (
    <div style={{ backgroundColor: '#c6c6f5' }}>
      <NavComp />
      <Container fluid className="template_section">
        {topic.map((topic, index) => (
          <Container key={index} style={{ marginTop: '30px' }}>
            <h4 style={{ marginBottom: '30px' }}><b>{topic.name}</b></h4>
            <Card style={{ width: '100%', backgroundColor: 'white', padding: '10px' }}>
              <Row>
                <Col xs={12} md={4}>
                  {/* Image */}
                  <img src={topic.image} alt={topic.name} style={{ width: '100%' }} />
                </Col>
                <Col xs={12} md={8}>
                  {/* Paragraph */}
                  <p>{topic.description}</p>
                </Col>
              </Row>
              <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <FontAwesomeIcon
                    icon={faArrowAltCircleRight}
                    style={{ cursor: 'pointer' }}
                    onClick={() => selectTopic(topic)}
                    />
             </div>
            </Card>
          </Container>
        ))}
        {selectedTopic && (
                  <Card style={{ marginTop: '20px', border: '2px solid #a600a6', width: '100%', backgroundColor: '#ffeeaa' }}>
                    <Card.Body>
                      <p></p>
                      <div style={{ textAlign: 'center', marginTop: '10px' }}>
                        <FontAwesomeIcon
                          icon={faTimesCircle}
                          style={{ cursor: 'pointer', color: 'red', fontSize: '24px' }}
                          onClick={clearSelectedTopic}
                        />
                      </div>
                    </Card.Body>
                  </Card>
                )}
      </Container>
      <ShortFooter />
    </div>
  );
}

export default Template;
