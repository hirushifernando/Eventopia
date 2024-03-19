import React, { useState, useEffect } from 'react';
import { Spinner, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComp from '../components/NavComp';
import backgroundImage from './logo3.png';

import { Button, Card  } from 'react-bootstrap'; // Imported Button from react-bootstrap
import ListGroup from 'react-bootstrap/ListGroup';



const ContactUs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      const imageLoader = new Image();
      imageLoader.src = backgroundImage;
      imageLoader.onload = () => setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://storage.googleapis.com/voiceglow-cdn/vg_live_build/vg_bundle.js';
    script.async = true;
    script.onload = () => {
      window.VG_CONFIG = {
        ID: "7iu1hpu3o",
        region: 'na',
        render: 'popup',
        stylesheets: [
          "https://storage.googleapis.com/voiceglow-cdn/vg_live_build/styles.css",
        ],
      };
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {loading ? (
        <div className="d-flex align-items-center justify-content-center vh-100">
          <Spinner animation="border" variant="secondary" />
        </div>
      ) : (
        <div>
          <NavComp />
          <div style={{ width: '0', height: '0' }} id="VG_OVERLAY_CONTAINER">
          </div>

          <img src='re3.jpg' alt="Description of the image" style={{
          width: '100%', // Example width
          height: '350px', // Example height, auto will maintain aspect ratio
          filter: 'brightness(0.8)'
        }} />
        <Container className="d-flex flex-column align-items-center justify-content-center text-center">
            <div className="text-row" style={{ marginTop: '30px', color: '#9500AB' }}>
              <h3>Requirements</h3>
            </div>
            <div className="text-row" style={{ color: '#9500AB' }}>
              <h6>Choose the best place according to your Requirements</h6>
            </div>
          </Container>
          <div>
        <Card >
             
        </Card>
        </div>

        </div>
      )}
    </div>
  );
};

export default ContactUs;



