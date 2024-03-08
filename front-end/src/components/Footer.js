import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4" style={{ marginTop: '30px' }}>
      <Container>
        <Row>
          <Col md={3} className="text-center d-flex flex-column align-items-center">
            <Image src="./logo3.png" alt="Logo" fluid style={{ width: '200px', height: '150px' }} />
          </Col>
          <Col md={3} className="text-center d-flex flex-column align-items-center">
            <p>3/1/1/1, 1st Lane, None Road, None. 10100. Sri Lanka</p>
            <p>+94 123 456 789</p>
            <p>info@theeventopia.lk</p>
          </Col>
          <Col md={3} className="text-center d-flex flex-column align-items-center p-3">
          <a href="https://www.facebook.com/profile.php?id=61556548766435&mibextid=2JQ9oc" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="1x" className="mb-2" />
            </a>
            <FontAwesomeIcon icon={faInstagram} size="1x" className="mb-2" />
            <FontAwesomeIcon icon={faTwitter} size="1x" className="mb-2" />
          </Col>
        </Row>
        <hr className="my-3" style={{ borderColor: 'white' }} />
        <p className='text-center'>© 2024 The Eventopia LK. All Rights Reserved. Developed and Powered by Eventopia Team IIT</p>
      </Container>
    </footer>
  );
};

export default Footer;





