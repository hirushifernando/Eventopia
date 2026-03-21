import React, { useState } from 'react';
import { Container, Tab, Tabs, Card, Row, Col, Spinner } from 'react-bootstrap';
import { faGlobe, faLocation, faMailBulk, faPhone, faCalendarAlt  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './eventdetails.css'

const IconTextBox = ({ icon, title, text }) => (
  <div className="text-center icon-text-box" style={{ paddingTop: '25px', marginTop: '10px', width: '250px', height: '100px', marginLeft: '10px' }}>
    <FontAwesomeIcon icon={icon} />
    <h4>{title}</h4>
    <p>{text}</p>
  </div>
);

const EnchantingBlissMenu = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const availableDates = [
    new Date('2024-03-28'), new Date('2024-03-29'), new Date('2024-03-30'),new Date('2024-04-22'), new Date('2024-04-23'), new Date('2024-04-24')];

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const dayClassName = (date) => {
    const formattedDate = date.toDateString();
    const isAvailable = availableDates.some((availableDate) => availableDate.toDateString() === formattedDate);
    return isAvailable ? 'highlighted-day' : null;
  };

    return (
        <div style={{ textAlign: 'center' }}>
       <Container className="d-flex flex-column align-items-center justify-content-center text-center">
            <div className="text-row" style={{ marginTop: '40px', color: '#9500AB' }}>
              <h6>ENCHANTING BLISS CELEBRATION</h6>
            </div>
            <div className="text-row" style={{ color: '#9500AB' }}>
              <h3>2024</h3>
            </div>

            <div className="calendar-icon" onClick={toggleCalendar}>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </div>

        {showCalendar && (
          <div className="calendar-container">
            <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            inline
            minDate={new Date()}
            maxDate={new Date('2024-04-31')}
            dayClassName={dayClassName}
            />
          </div>
        )}

            <div className="flower-vines" style={{ paddingBottom: '30px' }}>
              <Spinner animation="grow" variant="secondary" />
              <Spinner animation="grow" variant="secondary" />
              <Spinner animation="grow" variant="secondary" />
              <Spinner animation="grow" variant="secondary" />
            </div>
          </Container>
  
        <Row style={{marginTop: '30px'}}>
        <Col sm={12} md={6} lg={4} style={{ marginBottom: '30px' }}>
         <Card style={{ width: '95%', height:'102%', backgroundColor: '#CD7F32', border: '2px solid #a600a6' }}>
          <Card.Body>
            <Card.Title style={{color: '#A90000'}}>
              <b>BRONZE</b>
            </Card.Title>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Welcome drink</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Lemon Thais Fishcake with chilli Dizzle & salad</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Two appetizers</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Three types of Salad</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Two meat dishes (chicken/beef/pork)</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Two fish dishes</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Three vegetable dishes</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Choose three from a selection of rice / noodles / pasta dishes</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Five types of dessert</b></p>
            <h4 style={{color: '#FD0000 '}}>LKR 6,200</h4>
            <h6>per person</h6>
            <p>terms and conditions apply*</p>
          </Card.Body>
         </Card>
        </Col>

        <Col sm={12} md={6} lg={4} style={{ marginBottom: '20px' }}>
        <Card style={{ width: '95%', height:'100%', backgroundColor: '#C0C0C0', border: '2px solid #a600a6' }}>
          <Card.Body>
          <Card.Title style={{color: '#A90000'}}>
              <b>SILVER</b>
            </Card.Title>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Welcome drink</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Lemon Thais Fishcake with chilli Dizzle & salad</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Two appetizers</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Four types of Salad</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Three meat dishes (chicken/beef/pork) </b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Two fish dishes</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Four vegetable dishes</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Choose three from a selection of rice / noodles / pasta dishes</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Six types of dessert</b></p>
            <h4 style={{color: '#FD0000 '}}>LKR 6,800</h4>
            <h6>per person</h6>
            <p>terms and conditions apply*</p>
          </Card.Body>
        </Card>
        </Col>
        <Col sm={12} md={6} lg={4} style={{ marginBottom: '20px' }}>
        <Card style={{ width: '95%', height:'100%', backgroundColor: '#d4af37', border: '2px solid #a600a6' }}>
          <Card.Body>
          <Card.Title style={{color: '#A90000'}}>
              <b>GOLD</b>
            </Card.Title>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Welcome drink</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Lemon Thais Fishcake with chilli Dizzle & salad</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Three appetizers</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Six types of Salad</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Three meat dishes (chicken/beef/ pork / mutton) </b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Three seafood dishes (fish/prawns / cuttlefish)</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Four vegetable dishes</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Choose three from a selection of rice / noodles / pasta dishes</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Seven types of dessert</b></p>
            <h4 style={{color: '#FD0000 '}}>LKR 7,000</h4>
            <h6>per person</h6>
            <p>terms and conditions apply*</p>
          </Card.Body>
        </Card>
        </Col>
    </Row>
    <Container className="d-flex flex-column align-items-center justify-content-center text-center">
            <div className="text-row" style={{ marginTop: '40px', color: '#9500AB' }}>
              <h6>CONTACT US</h6>
            </div>
            <div className="text-row" style={{ color: '#9500AB' }}>
              <h3>Enchanting Bliss Celebration</h3>
            </div>

            <div className="flower-vines" style={{ paddingBottom: '30px' }}>
              <Spinner animation="grow" variant="secondary" />
              <Spinner animation="grow" variant="secondary" />
              <Spinner animation="grow" variant="secondary" />
              <Spinner animation="grow" variant="secondary" />
            </div>
          </Container>
          <Container className="d-flex flex-column align-items-center justify-content-center text-center" style={{marginBottom: '80px'}}>
            <div className="d-flex flex-wrap justify-content-center">
              <div className="mb-3">
                <IconTextBox icon={faPhone} title="Phone" text="+1 (555) 987-6543" />
              </div>
              <div className="mb-3">
                <IconTextBox icon={faMailBulk} title="Email" text="enchanting.bliss@fantasyinbox.com" />
              </div>
              <div className="mb-3">
                <IconTextBox icon={faLocation} title="Address" text="Enchanted Avenue, Wonderland Woods, Dreamland" />
              </div>
              <div className="mb-3">
                <IconTextBox icon={faGlobe} title="Website" text="enchantingbliss.lk" />
              </div>
            </div>
          </Container>
      </div>
    );
  };

const WeddingMenu = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const availableDates = [ new Date('2024-03-15'), new Date('2024-03-16'), new Date('2024-03-18'), new Date('2024-03-19'), new Date('2024-03-20'), new Date('2024-04-01'), new Date('2024-04-02'), new Date('2024-04-03'), new Date('2024-04-18'), new Date('2024-04-19')];

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };
  const dayClassName = (date) => {
    const formattedDate = date.toDateString();
    const isAvailable = availableDates.some((availableDate) => availableDate.toDateString() === formattedDate);
    return isAvailable ? 'highlighted-day' : null;
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Container className="d-flex flex-column align-items-center justify-content-center text-center">
        <div className="text-row" style={{ marginTop: '40px', color: '#9500AB' }}>
          <h6>RADIANT LOVE FIESTA</h6>
        </div>
        <div className="text-row" style={{ color: '#9500AB' }}>
          <h3>2024</h3>
        </div>

        <div className="calendar-icon" onClick={toggleCalendar}>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </div>

        {showCalendar && (
          <div className="calendar-container">
            <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            inline
            minDate={new Date()}
            maxDate={new Date('2024-04-31')}
            dayClassName={dayClassName}
            />
          </div>
        )}

            <div className="flower-vines" style={{ paddingBottom: '30px' }}>
              <Spinner animation="grow" variant="secondary" />
              <Spinner animation="grow" variant="secondary" />
              <Spinner animation="grow" variant="secondary" />
              <Spinner animation="grow" variant="secondary" />
            </div>
          </Container>
  
        <Row style={{marginTop: '30px'}}>
        <Col sm={12} md={6} lg={4} style={{ marginBottom: '30px' }}>
         <Card style={{ width: '95%', height:'102%', backgroundColor: '#CD7F32', border: '2px solid #a600a6' }}>
          <Card.Body>
            <Card.Title style={{color: '#A90000'}}>
              <b>BRONZE</b>
            </Card.Title>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Welcome drink</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>One soup</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Two appetizers</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Four types of Salad</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Two meat dishes (chicken/beef/pork)</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Two fish dishes</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Three vegetable dishes</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Choose three from a selection of rice / noodles / pasta dishes</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Five types of dessert</b></p>
            <h4 style={{color: '#FD0000 '}}>LKR 6,800</h4>
            <h6>per person</h6>
            <p>terms and conditions apply*</p>
          </Card.Body>
         </Card>
        </Col>

        <Col sm={12} md={6} lg={4} style={{ marginBottom: '20px' }}>
        <Card style={{ width: '95%', height:'100%', backgroundColor: '#C0C0C0', border: '2px solid #a600a6' }}>
          <Card.Body>
          <Card.Title style={{color: '#A90000'}}>
              <b>SILVER</b>
            </Card.Title>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Welcome drink</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>One soup</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Two appetizers</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Five types of Salad</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Three meat dishes (chicken/beef/pork) </b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Two fish dishes</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Four vegetable dishes</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Choose three from a selection of rice / noodles / pasta dishes</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Six types of dessert</b></p>
            <h4 style={{color: '#FD0000 '}}>LKR 7,300</h4>
            <h6>per person</h6>
            <p>terms and conditions apply*</p>
          </Card.Body>
        </Card>
        </Col>
        <Col sm={12} md={6} lg={4} style={{ marginBottom: '20px' }}>
        <Card style={{ width: '95%', height:'100%', backgroundColor: '#d4af37', border: '2px solid #a600a6' }}>
          <Card.Body>
          <Card.Title style={{color: '#A90000'}}>
              <b>GOLD</b>
            </Card.Title>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Welcome drink</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>One soup</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Three appetizers</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Eight types of Salad</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Three meat dishes (chicken/beef/ pork / mutton) </b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Three seafood dishes (fish/prawns / cuttlefish)</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Four vegetable dishes</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Choose three from a selection of rice / noodles / pasta dishes</b></p>
            <p style={{ fontSize: '16px', textAlign: 'center'  }}><b>Seven types of dessert</b></p>
            <h4 style={{color: '#FD0000 '}}>LKR 7,600</h4>
            <h6>per person</h6>
            <p>terms and conditions apply*</p>
          </Card.Body>
        </Card>
        </Col>
    </Row>
    <Container className="d-flex flex-column align-items-center justify-content-center text-center">
            <div className="text-row" style={{ marginTop: '40px', color: '#9500AB' }}>
              <h6>CONTACT US</h6>
            </div>
            <div className="text-row" style={{ color: '#9500AB' }}>
              <h3>Radiant Love Fiesta</h3>
            </div>

            <div className="flower-vines" style={{ paddingBottom: '30px' }}>
              <Spinner animation="grow" variant="secondary" />
              <Spinner animation="grow" variant="secondary" />
              <Spinner animation="grow" variant="secondary" />
              <Spinner animation="grow" variant="secondary" />
            </div>
          </Container>
          <Container className="d-flex flex-column align-items-center justify-content-center text-center" style={{marginBottom: '80px'}}>
            <div className="d-flex flex-wrap justify-content-center">
              <div className="mb-3">
                <IconTextBox icon={faPhone} title="Phone" text="+1 (555) 123-4567" />
              </div>
              <div className="mb-3">
                <IconTextBox icon={faMailBulk} title="Email" text="radiant.love@emailmagic.com" />
              </div>
              <div className="mb-3">
                <IconTextBox icon={faLocation} title="Address" text="Celestial Lane, Galaxy Gardens, Stardust City" />
              </div>
              <div className="mb-3">
                <IconTextBox icon={faGlobe} title="Website" text="radiantlove.com" />
              </div>
            </div>
          </Container>
      </div>
    );
  };


function JustifiedExample() {
  const [activeTab, setActiveTab] = useState("Radiant Love Fiesta");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Container style={{ marginTop: '30px' }}>
        <Tabs
          defaultActiveKey={activeTab}
          id="justify-tab-example"
          className="mb-3 text-center"
          justify
          onSelect={handleTabChange}
        >
          <Tab eventKey="Radiant Love Fiesta" title={<span style={{ color: '#a600a6', fontSize: '0.8rem' }}>Radiant Love Fiesta</span>}>
            {activeTab === "Radiant Love Fiesta" && <WeddingMenu />}
          </Tab>
          <Tab
            eventKey="Enchanting Bliss Celebration"
            title={<span style={{ color: '#a600a6', fontSize: '0.8rem' }}>Enchanting Bliss</span>}
          >
            {activeTab === "Enchanting Bliss Celebration" && <EnchantingBlissMenu />}
          </Tab>
          <Tab eventKey="Disco Delight Soiree" title={<span style={{ color: '#a600a6', fontSize: '0.8rem'  }}>Disco Delight Soiree </span>}>
          <div className="page-container">
        <Container className="d-flex flex-column align-items-center justify-content-center text-center">
          <div className="text-row" style={{ marginTop: '60px', color: '#9500AB' }}>
            <h6>DISCO DELIGHT SOIREE</h6>
          </div>
          <div className="text-row" style={{ color: '#9500AB' }}>
            <h3>2024</h3>
          </div>
          <div className="flower-vines" style={{ paddingBottom: '30px' }}>
          <Spinner animation="border" variant="danger" />
          <Spinner animation="border" variant="danger" />
          <Spinner animation="border" variant="danger" />
          <Spinner animation="border" variant="danger" />
          </div>
          <div className="upcoming-event-text" style={{color: 'white'}}>
            <p>Upcoming Event: Disco Delight Soiree</p>
            <p>Date: [Upcoming Event Date]</p>
            <p>Location: [Upcoming Event Location]</p>
          </div>
        </Container>
      </div>
          </Tab>
          <Tab eventKey="Electric Euphoria Fiesta Content" title={<span style={{ color: '#a600a6', fontSize: '0.8rem'  }}>Electric Euphoria Fiesta </span>}>
          <div className="page-container">
        <Container className="d-flex flex-column align-items-center justify-content-center text-center">
          <div className="text-row" style={{ marginTop: '60px', color: '#9500AB' }}>
            <h6>ELECTRIC EUPHORIA FIESTA </h6>
          </div>
          <div className="text-row" style={{ color: '#9500AB' }}>
            <h3>2024</h3>
          </div>
          <div className="flower-vines" style={{ paddingBottom: '30px' }}>
          <Spinner animation="border" variant="danger" />
          <Spinner animation="border" variant="danger" />
          <Spinner animation="border" variant="danger" />
          <Spinner animation="border" variant="danger" />
          </div>
          <div className="upcoming-event-text" style={{color: 'white'}}>
            <p>Electric Euphoria Fiesta </p>
            <p>Date: [Upcoming Event Date]</p>
            <p>Location: [Upcoming Event Location]</p>
          </div>
        </Container>
      </div>
          </Tab>
          <Tab eventKey="Hearts of Hope Gala " title={<span style={{ color: '#a600a6', fontSize: '0.8rem'  }}>Hearts of Hope Gala </span>}>
          <div className="page-container">
        <Container className="d-flex flex-column align-items-center justify-content-center text-center">
          <div className="text-row" style={{ marginTop: '60px', color: '#9500AB' }}>
            <h6>HEARTS OF HOPE GALA </h6>
          </div>
          <div className="text-row" style={{ color: '#9500AB' }}>
            <h3>2024</h3>
          </div>
          <div className="flower-vines" style={{ paddingBottom: '30px' }}>
          <Spinner animation="border" variant="danger" />
          <Spinner animation="border" variant="danger" />
          <Spinner animation="border" variant="danger" />
          <Spinner animation="border" variant="danger" />
          </div>
          <div className="upcoming-event-text" style={{color: 'white'}}>
            <p>Hearts of Hope Gala </p>
            <p>Date: [Upcoming Event Date]</p>
            <p>Location: [Upcoming Event Location]</p>
          </div>
        </Container>
      </div> 
          </Tab>
          <Tab eventKey="Unity Upliftment Ball " title={<span style={{ color: '#a600a6', fontSize: '0.8rem'  }}>Unity Upliftment Ball </span>}>
          <div className="page-container">
        <Container className="d-flex flex-column align-items-center justify-content-center text-center">
          <div className="text-row" style={{ marginTop: '60px', color: '#9500AB' }}>
            <h6>UNITY UPLIFTMENT BALL</h6>
          </div>
          <div className="text-row" style={{ color: '#9500AB' }}>
            <h3>2024</h3>
          </div>
          <div className="flower-vines" style={{ paddingBottom: '30px' }}>
          <Spinner animation="border" variant="danger" />
          <Spinner animation="border" variant="danger" />
          <Spinner animation="border" variant="danger" />
          <Spinner animation="border" variant="danger" />
          </div>
          <div className="upcoming-event-text" style={{color: 'white'}}>
            <p>Unity Upliftment Ball</p>
            <p>Date: [Upcoming Event Date]</p>
            <p>Location: [Upcoming Event Location]</p>
          </div>
        </Container>
      </div> 
          </Tab>
          <Tab eventKey="Innovate ICT Intensive " title={<span style={{ color: '#a600a6', fontSize: '0.8rem'  }}>Innovate ICT Intensive</span>}>
          <div className="page-container">
        <Container className="d-flex flex-column align-items-center justify-content-center text-center">
          <div className="text-row" style={{ marginTop: '60px', color: '#9500AB' }}>
            <h6>INNOVATE ICT INTENSIVE</h6>
          </div>
          <div className="text-row" style={{ color: '#9500AB' }}>
            <h3>2024</h3>
          </div>
          <div className="flower-vines" style={{ paddingBottom: '30px' }}>
          <Spinner animation="border" variant="danger" />
          <Spinner animation="border" variant="danger" />
          <Spinner animation="border" variant="danger" />
          <Spinner animation="border" variant="danger" />
          </div>
          <div className="upcoming-event-text" style={{color: 'white'}}>
            <p>EInnovate ICT Intensive</p>
            <p>Date: [Upcoming Event Date]</p>
            <p>Location: [Upcoming Event Location]</p>
          </div>
        </Container>
      </div> 
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default JustifiedExample;