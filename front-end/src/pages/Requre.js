import React, { useState, useEffect } from 'react';
import { Spinner, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComp from '../components/NavComp';
import backgroundImage from './logo3.png';



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
        </div>
      )}
    </div>
  );
};

export default ContactUs;
