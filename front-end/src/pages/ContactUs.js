import React, { useState, useEffect } from 'react';
import { Spinner, Container, Col, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faLocation, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavComp from '../components/NavComp';
import ShortFooter from '../components/ShortFooter';
import backgroundImage from './logo3.png';

const IconTextBox = ({ icon, title, text }) => (
  <div className="text-center icon-text-box" style={{ paddingTop: '25px', marginTop: '10px', width: '250px', height: '100px', marginLeft: '10px' }}>
    <FontAwesomeIcon icon={icon} />
    <h4>{title}</h4>
    <p>{text}</p>
  </div>
);

const ContactUs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div
          className="d-flex align-items-center justify-content-center vh-100"
          style={{
            backgroundImage: `url(${backgroundImage}), linear-gradient(316deg, #310e68 0%, #5f0f40 74%)`,
            backgroundSize: 'fix',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#460046',
          }}
        >
        </div>
      ) : (
        <div>
          <NavComp />
          <Container className="d-flex flex-column align-items-center justify-content-center text-center">
            <div className="text-row" style={{ marginTop: '40px', color: '#9500AB' }}>
              <h3>CONTACT US</h3>
            </div>
            <div className="text-row" style={{ color: '#9500AB' }}>
              <h6>The Eventopia</h6>
            </div>
          </Container>
          <Container className="d-flex flex-column align-items-center justify-content-center text-center">
            <div className="text-row" style={{ marginTop: '30px', color: '#000000 ' }}>
              <p>Ready to turn your event dreams into reality? Reach out to us today and let's start planning an unforgettable experience together. Fill out the contact form below with your details and event specifics, and we'll get back to you promptly. Alternatively, you can drop us an email or give us a call. We're excited to hear about your vision and discuss how we can make it a reality. Thank you for considering us to be a part of your special occasion.</p>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
              <div className="mb-3">
                <IconTextBox icon={faPhone} title="Phone" text="+94 123 456 789" />
              </div>
              <div className="mb-3">
                <IconTextBox icon={faMailBulk} title="Email" text="info@theeventopia.lk" />
              </div>
              <div className="mb-3">
                <IconTextBox icon={faLocation} title="Address" text="3/1/1/1, 1st Lane, None Road, None. 10100. Sri Lanka" />
              </div>
              <div className="mb-3">
                <IconTextBox icon={faGlobe} title="Website" text="theeventopia.lk" />
              </div>
            </div>
          </Container>
          <Container className="d-flex flex-column align-items-center justify-content-center text-center">
            <div className="text-row" style={{ marginTop: '60px', color: '#9500AB' }}>
              <h6>CONTACT FORM</h6>
            </div>
            <div className="text-row" style={{ color: '#9500AB' }}>
              <h3>Give Your Feedback</h3>
            </div>
          </Container>
          <div
         style={{
         width: '50px',
         height: '50px', 
         position: 'fixed',
         bottom: '20px',
         right: '-300px',
         transition: 'right 0.3s ease-in-out',
         zIndex: '999',
        }}
         id="VG_OVERLAY_CONTAINER"
        >
        </div>
          <Container>
            <Form style={{ border: '2px solid #9500AB', borderRadius: '20px' }}>
              <Row style={{ marginTop: '30px', paddingLeft: '10px', paddingRight: '10px' }}>
                <Col>
                  <Form.Control placeholder="Your Name" />
                </Col>
                <Col>
                  <Form.Control placeholder="Email Address" />
                </Col>
              </Row>
              <Row style={{ marginTop: '30px', paddingLeft: '10px', paddingRight: '10px' }}>
                <Col>
                  <Form.Control placeholder="Subject" />
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{ marginTop: '30px', paddingLeft: '10px', paddingRight: '10px' }}>
                <Form.Label>Message goes here ...</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <div className="save-changes-button-container" style={{ marginTop: '40px', textAlign: 'center', marginBottom: '40px' }}>
                <button type="submit" className="save-button" style={{ backgroundColor: '#a600a6', border: '2px solid #a600a6', borderRadius: '10px', padding: '10px 100px' }}>
                  SUBMIT NOW
                </button>
              </div>
            </Form>
          </Container>
          <script defer>
            {(function () {
              window.VG_CONFIG = {
                ID: "8xktz9k1v",
                region: 'na',
                render: 'popup',
                stylesheets: [
                  "https://storage.googleapis.com/voiceglow-cdn/vg_live_build/styles.css",
                ],
              }
              var VG_SCRIPT = document.createElement("script");
              VG_SCRIPT.src = "https://storage.googleapis.com/voiceglow-cdn/vg_live_build/vg_bundle.js";
              document.body.appendChild(VG_SCRIPT);
            })()}
          </script>
          <Container className="d-flex flex-column align-items-center justify-content-center text-center">
            <div className="text-row" style={{ marginTop: '40px', color: '#9500AB' }}>
              <h6>FOLLOW US</h6>
            </div>
            <div className="text-row" style={{ color: '#9500AB' }}>
              <h3>Social Media</h3>
            </div>
          </Container>
          <Container className="d-flex flex-column align-items-center justify-content-center text-center">
            <div className="d-flex flex-wrap justify-content-center">
              <div className="mb-3">
                <a href="https://www.facebook.com/profile.php?id=61556548766435&mibextid=2JQ9oc" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <IconTextBox icon={faFacebook} title="Facebook" text="" />
                </a>
              </div>
              <div className="mb-3">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <IconTextBox icon={faInstagram} title="Instagram" text="" />
              </a>
              </div>
              <div className="mb-3">
              <a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <IconTextBox icon={faTwitter} title="Twitter" text="" />
              </a>
              </div>
            </div>
          </Container>
          <ShortFooter />
        </div>
      )}
    </div>
  );
};

export default ContactUs;
