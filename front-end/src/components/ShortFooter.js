import React from 'react';
import { Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4" style={{ marginTop: '30px' }}>
      <Container>
        <hr className="my-3" style={{ borderColor: 'white' }} />
        <p className='text-center'>© 2024 The Eventopia LK. All Rights Reserved. Developed and Powered by Eventopia Team IIT</p>
      </Container>
    </footer>
  );
};

export default Footer;


