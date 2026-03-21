import React, { useState, useEffect } from 'react';
import { Spinner, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComp from '../components/NavComp';
import backgroundImage from './logo3.png';
import ShortFooter from '../components/ShortFooter';
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
     <div style={{ backgroundColor: '#f4dede' }}>
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
              <h3>Recommendation</h3>
            </div>
            <div className="text-row" style={{ color: '#9500AB' }}>
              <h6>Choose the best place according to your Requirements</h6>
            </div>
          </Container>
         <div>
          <div style={{
            width: '900px', // Adjust width as needed
            height: '200px', // Adjust height as needed
            backgroundColor: '#f0f0f0', // Change color as needed
            position: 'relative', // Adjust position as needed
            marginLeft: '300px', // Adjust margin as needed
            margin:'50px',
            padding: '10px', // Adjust padding as needed
            border: '2px solid #9500AB', // Add border for visual distinction
            borderRadius: '15px', // Add border radius for rounded corners
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add box shadow for depth
        }}>
                <p>AI-powered recommendation system for suitable places provides tailored suggestions based
                     on your input criteria.  Using advanced artificial intelligence algorithms, the system 
                     analyzes various factors such as location, capacity, amenities and your preferences to 
                     make personalized recommendations.  You have the flexibility to adjust budget limits, 
                     allowing you to refine your search based on financial considerations.  Whether planning
                      a corporate event, wedding or casual gathering, this recommendation system streamlines 
                      the venue selection process, ensuring you find the perfect venue that meets your specific
                       needs and budget constraints.  With its intuitive interface and customizable options, 
                       you can easily explore a wide range of venue options and ultimately enhance your event 
                       planning experience. <span style={{ color: '#9500AB', fontWeight:'700' }}>Click this chat bot</span></p>
                       </div>

        </div>
        </div>
      )}
        <ShortFooter />
    </div>
  );
};

export default ContactUs;



