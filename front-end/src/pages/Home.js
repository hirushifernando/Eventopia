import React, { useState, useEffect } from 'react';
import { Spinner, Carousel, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faAreaChart, faChartLine, faCheckCircle, faEnvelope, faRoad} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from './logo3.png';
import NavComp from '../components/NavComp';
import './home.css';
import Footer from '../components/Footer';

const IconTextBox = ({ icon, title, text }) => {
  return (
    <div className="text-center icon-text-box" style={{ border: '2px solid #9500AB', backgroundColor: '#DDDDDD', paddingTop: '5px', borderRadius: '10px', marginTop: '10px', width: '300px', height: '145px', marginLeft: '20px' }}>
      <FontAwesomeIcon icon={icon} />
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
};

const Loading = () => {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setLoading(false);
      }, 3500);
    };

    fetchData();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

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
        <div style={{backgroundColor: '#DDDDDD'}}>
          <NavComp />
          <Container fluid>
            <Carousel
              controls={false}
              indicators={false}
              interval={5000}
              fade={true}
              pause={false}
              className="custom-carousel"
            >
              <Carousel.Item>
                <img
                  className="d-block w-100 zoom-out-animation"
                  src="./slider4.jpg"
                  alt="First slide"
                />
                <Carousel.Caption style={{ color: '#fffff' }}>
                  <h6><b>Event day is your DREAM DAY</b></h6>
                  <h5>THE EVENTOPIA</h5>
                  <p>Your Style. Your Day. We Make It Happen.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 zoom-out-animation"
                  src="./slider6.jpg"
                  alt="Second slide"
                />
                <Carousel.Caption style={{ color: '#ffffff' }}>
                  <h6><b>Have A Magical Event with</b></h6>
                  <h5>THE EVENTOPIA</h5>
                  <p>Your Vision. Your Day. We Make It Happen.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 zoom-out-animation"
                  src="./slider5.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption style={{ color: '#ffffff' }}>
                  <h6><b>We are ...</b></h6>
                  <h5>THE EVENTOPIA</h5>
                  <p>Your Passion. Your Day. We Make It Happen.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Container>
          <Container className="d-flex flex-column align-items-center justify-content-center text-center">
            <div className="text-row" style={{ marginTop: '40px', color: '#9500AB' }}>
              <h6>LOOKING FOR THE BEST EVENT PLANNERS?</h6>
            </div>
            <div className="text-row" style={{ color: '#9500AB' }}>
              <h3>We Are Here To Help You.</h3>
            </div>

            <div className="flower-vines" style={{paddingBottom: '30px'}}>
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="secondary" />
            </div>
          </Container>
          <Container className="d-flex justify-content-center align-items-center ">
            <div className="d-flex flex-wrap justify-content-center">
              <div className="mb-3">
                <IconTextBox icon={faRoad} title="Venue Options" text="Plan your event by choosing a venue of your choice." />
              </div>
              <div className="mb-3">
                <IconTextBox icon={faGem} title="Create Event" text="Make your event the most successful it can be with our assistance." />
              </div>
              <div className="mb-3">
                <IconTextBox icon={faEnvelope} title="Pre-Made Solutions" text="There are several pre-made event planning options available for you to select from based on your needs." />
              </div>

              <div className="mb-3">
                <IconTextBox icon={faCheckCircle} title="Event Checklist" text="The flexibility to incorporate the tasks and activities you desire prior to event preparation." />
              </div>
              <div className="mb-3">
                <IconTextBox icon={faChartLine} title="Budget Tracker" text="Your event planning budget may be estimated with the use of a budget tracker." />
              </div>
              <div className="mb-3">
                <IconTextBox icon={faAreaChart} title="Venue Suggestions" text="We will recommend appropriate venues for the information you enter." />
              </div>
            </div>
          </Container>
          <Container className="d-flex flex-column align-items-center justify-content-center text-center">
            <div className="text-row" style={{ marginTop: '40px', color: '#9500AB' }}>
              <h6>DO YOU WANT EVENTS</h6>
            </div>
            <div className="text-row" style={{ color: '#9500AB' }}>
              <h3>We Make It Happen.</h3>
            </div>

            <div className="flower-vines" style={{paddingBottom: '30px'}}>
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="secondary" />
            </div>
          </Container>
          <Container className="d-flex flex-column align-items-center justify-content-center text-center">
            <div className="text-row" style={{ marginTop: '40px', color: '#7A7A7AF' }}>
              <h6>Your Vision. Your Style. Your Passion. Your Day. We make it Happen.</h6>
            </div>
            <div className="text-row" style={{ marginTop: '30px', color: '#7A7A7A' }}>
              <p>Many times, people assume that working with an event planner would be quite expensive, but in most cases, we can help you save money. In addition to immediately passing down our supplier discounts to you, we will collaborate with you to oversee the finances for your event. We will work with you to obtain the most value for your money on every minute aspect. You tell us how much you want to spend, and we'll make sure you stay inside that budget. Your finest event planner is us.</p>
            </div>
          </Container>
          <Container style={{ position: 'relative', marginTop: '30px' }}>
               <img src="./image2.jpg" className="img-fluid" alt="Client" />
               <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#fff' }}>
               <h4><b>We Make It Happen</b></h4>
               <Link to='/contact' className="btn btn-primary" style={{ backgroundColor: 'black' }}>Here we are</Link>
               </div>
          </Container>
          <Container className="d-flex flex-column align-items-center justify-content-center text-center">
            <div className="text-row" style={{ marginTop: '40px', color: '#9500AB' }}>
              <h6>OUR SUBSIDIARIES & PARTNERS</h6>
            </div>
            <div className="text-row" style={{ color: '#9500AB' }}>
              <h3>The Eventopia LK</h3>
            </div>

            <div className="flower-vines" style={{paddingBottom: '30px'}}>
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="secondary" />
            </div>
          </Container>
          <Container style={{ position: 'relative',width:'100%', height: '30%' }}>
            <img src="./image10.png" className="img-fluid" alt="Client" />
          </Container> 
          <Footer/>
          {scrolled && (
            <Button
              className="scroll-to-top-button"
              variant="info"
              onClick={scrollToTop}
            >
            ▲
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default Loading;






