import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faArrowAltCircleRight, faTimesCircle, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import NavComp from '../components/NavComp';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Row, Col} from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';
import ShortFooter from '../components/ShortFooter';

function Directory() {
  const [selectedVenue, setSelectedVenue] = useState(null);

  const selectVenue = (venue) => {
    setSelectedVenue(venue);
  };

  const clearSelectedVenue = () => {
    setSelectedVenue(null);
  };

  const openGoogleMaps = (location) => {
    const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(location)}`;
    window.open(mapsUrl, '_blank');
  };

  const venues = [
    {
      name: 'Serenity Springs Lodge',
      description: 'Serenity Springs Lodge is an ethereal haven that seamlessly blends celestial charm with lunar luxury. A truly out-of-this-world experience!',
      location: 'Velvet Valley Vista - Stardust Meadows, Dreamland',
      phone: '+1 (555) 123-4567',
      image: '/directory1.jpg',
    },
    {
      name: 'Enchanted Echo Hotel',
      description: 'Enchanted Echo Hotel is a symphony of comfort and magic. Each stay feels like a journey through the stars in Celestia City!',
      location: 'Mirage Oasis Manor - Illusion Isles, Enchanted Realm',
      phone: '+1 (555) 987-6543',
      image: '/directory2.jpg',
    },
    {
      name: 'Rainbow Ridge Resort',
      description: 'Rainbow Ridge Resort in Chroma Valley is a palette of joy. Every moment spent here feels like living in a spectrum of happiness.',
      location: 'Starlight Sanctuary Suites - Nebula Nook, Celestial City',
      phone: '+1 (555) 987-6543',
      image: '/directory4.jpg',
    },
  ];

  return (
    <div style={{ backgroundColor: '#dad2d2' }}>
      <NavComp />
      <img src='dir5.png' alt="Description of the image" style={{
          width: '100%', // Example width
          height: '450px', // Example height, auto will maintain aspect ratio
          filter: 'brightness(0.8)'
        }} />
        <Container className="d-flex flex-column align-items-center justify-content-center text-center">
          <div className="text-row" style={{ marginTop: '30px', color: '#9500AB' }}>
            <h3>Sales Directory</h3>
          </div>
          <div className="text-row" style={{ color: '#9500AB' }}>
            <h6>Choose Your Vendor</h6>
          </div>
        </Container>
      <Container style={{ marginTop: '30px' }}>
        <Tabs defaultActiveKey="home" id="justify-tab-example" className="mb-3" justify>
          <Tab eventKey="home" title={<span style={{ color: '#a600a6' }}>Venue Coordination</span>}>
            <Container style={{ marginTop: '30px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {venues.map((venue, index) => (
                  <Card
                    key={index}
                    style={{ width: '18rem', backgroundColor: '#e8e8e8', border: '2px solid #a600a6', marginBottom: '20px', borderRadius: '20px' }}
                  >
                    <Card.Img variant="top" src={venue.image} alt="Venue Image" style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}} />
                    <Card.Body>
                      <Card.Title>
                        <b>{venue.name}</b>
                      </Card.Title>
                      <p style={{ fontSize: '14px', textAlign: 'justify'  }}>{venue.description}</p>
                      <br />
                      <Card.Text>
                        <FontAwesomeIcon
                          icon={faMapMarkerAlt}
                          style={{ cursor: 'pointer' }}
                          onClick={() => openGoogleMaps(venue.location)}
                        />{' '}
                        {venue.location}
                        <br />
                        <FontAwesomeIcon icon={faPhone} /> {venue.phone}
                      </Card.Text>
                      <div style={{ textAlign: 'center', marginTop: '10px' }}>
                        <FontAwesomeIcon
                          icon={faArrowAltCircleRight}
                          style={{ cursor: 'pointer' }}
                          onClick={() => selectVenue(venue)}
                        />
                      </div>
                    </Card.Body>
                  </Card>
                ))}

                {selectedVenue && (
                  <Card style={{ marginTop: '20px', border: '2px solid #a600a6', width: '100%', backgroundColor: '#e8e8e8' }}>
                    <Card.Body>
                      <p><b><u>Serenity Springs Lodge</u></b></p>
                      <div>
                      <h6>Galactic Gourmet Gathering - January 20, 2024</h6>
                      <h6 style={{textAlign: 'justify'}}> "Absolutely enchanted by the celestial vibes at Serenity Springs Lodge! The staff made me feel like a lunar VIP. A heavenly experience!"</h6>
                      <p>⭐⭐⭐⭐⭐</p>
                      </div>
                      <div>
                      <h6>Prism Picnic - April 30, 2023</h6>
                      <h6 style={{textAlign: 'justify'}}> "The Serenity Springs Lodge were truly mesmerizing, and the Crystal Cascade Cabins added that extra touch of magic. Almost felt like I stepped into a fairy tale!"</h6>
                      <p>⭐⭐⭐⭐</p>
                      </div>
                      <p><b><u>Enchanted Echo Hotel</u></b></p>
                      <div>
                      <h6>Wonderland Whimsy - October 12, 2023</h6>
                      <h6 style={{textAlign: 'justify'}}> "Living in a spectrum of joy at Enchanted Echo Hotel! The colors of Chroma Valley painted my stay with happiness. A vibrant and delightful experience!"</h6>
                      <p>⭐⭐⭐⭐</p>
                      </div>
                      <div>
                      <h6>Cosmic Carnival - June 8, 2023</h6>
                      <h6 style={{textAlign: 'justify'}}> "Cosmic charm in Quasar Quay! Enchanted Echo Hotel delivered a stellar stay. The cosmic ambiance added a celestial touch to every moment!"</h6>
                      <p>⭐⭐⭐⭐</p>
                      </div>
                      <p><b><u>Rainbow Ridge Resort</u></b></p>
                      <div>
                      <h6>Rainbow Revelry - December 5, 2023</h6>
                      <h6 style={{textAlign: 'justify'}}> "A dreamy stay by Pixie Pond! WRainbow Ridge Resort Inn has a whimsy charm that's hard to resist. Maybe spotted a pixie or two by the water! Almost perfect!"</h6>
                      <p>⭐⭐⭐⭐⭐</p>
                      </div>
                      <div style={{ textAlign: 'center', marginTop: '10px' }}>
                        <FontAwesomeIcon
                          icon={faTimesCircle}
                          style={{ cursor: 'pointer', color: 'red', fontSize: '24px' }}
                          onClick={clearSelectedVenue}
                        />
                      </div>
                    </Card.Body>
                  </Card>
                )}
              </div>
            </Container>
          </Tab>
          <Tab eventKey="profile" title={<span style={{ color: '#a600a6' }}>Wedding Photographers</span>}>
         <Container style={{ marginTop: '30px' }}>
         <Row>

        <Col sm={12} md={6} lg={4} style={{ marginBottom: '20px' }}>
         <Card style={{ width: '100%', backgroundColor: '#e8e8e8', border: '2px solid #a600a6',  borderRadius: '20px' }}>
          <Card.Img variant="top" src="/directoryp1.png" alt="Venue Image" style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}}  />
          <Card.Body>
            <Card.Title>
              <b>LensCraft Visionaries</b>
            </Card.Title>
            <p style={{ fontSize: '14px', textAlign: 'justify'  }}>
            "LensCraft Visionaries has an unparalleled knack for capturing the pulse of the city with an artistic finesse. Each shot is a testament to their ability to turn the ordinary into the extraordinary."
            </p>
            <br />
            <Card.Text>
              <FontAwesomeIcon icon={faMailBulk} /> info@LensCraft.com
              <br />
              <FontAwesomeIcon icon={faPhone} /> +1 (555) 234-5678
            </Card.Text>
          </Card.Body>
         </Card>
        </Col>

        <Col sm={12} md={6} lg={4} style={{ marginBottom: '20px' }}>
        <Card style={{ width: '100%', backgroundColor: '#e8e8e8', border: '2px solid #a600a6',  borderRadius: '20px' }}>
          <Card.Img variant="top" src="/directoryp2.png" alt="Venue Image" style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}}  />
          <Card.Body>
            <Card.Title>
              <b>PixelPerch Studios</b>
            </Card.Title>
            <p style={{ fontSize: '14px', textAlign: 'justify'  }}>
            "PixelPerch Studios paints with the colors of the earth, turning every photograph into a vivid masterpiece. Their ability to harness the beauty of nature is simply awe-inspiring."
            </p>
            <br />
            <Card.Text>
              <FontAwesomeIcon icon={faMailBulk} /> info@PixelPerch.com
              <br />
              <FontAwesomeIcon icon={faPhone} /> +1 (555) 321-7890
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>

        <Col sm={12} md={6} lg={4} style={{ marginBottom: '20px' }}>
        <Card style={{ width: '100%', backgroundColor: '#e8e8e8', border: '2px solid #a600a6',  borderRadius: '20px' }}>
          <Card.Img variant="top" src="/directoryp3.png" alt="Venue Image" style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}}  />
          <Card.Body>
            <Card.Title>
              <b>Infinity Insight Photography</b>
            </Card.Title>
            <p style={{ fontSize: '14px', textAlign: 'justify' }}>
            "Infinity Insight Photography doesn't just capture pictures; they freeze time and encapsulate the essence of each moment. Their work is a doorway to a world where reality and enchantment converge."
            </p>
            <br />
            <Card.Text>
              <FontAwesomeIcon icon={faMailBulk} /> info@InfinityInsight.com
              <br />
              <FontAwesomeIcon icon={faPhone} /> +1 (555) 123-4567
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        </Row>
        </Container>
        </Tab>
          <Tab
            eventKey="longer-tab"
            title={<span style={{ color: '#a600a6' }}>Artist/Bands/Celebrity Management & Coordination</span>}
          >
            <Container style={{ marginTop: '30px' }}>
       <Row>
        <Col sm={12} md={6} lg={4} style={{ marginBottom: '20px' }}>
         <Card style={{ width: '100%', backgroundColor: '#e8e8e8', border: '2px solid #a600a6',  borderRadius: '20px' }}>
          <Card.Img variant="top" src="/directorym1.png" alt="Venue Image" style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}} />
          <Card.Body>
            <Card.Title>
              <b>Rhythmic Rebels Collective</b>
            </Card.Title>
            <p style={{ fontSize: '14px', textAlign: 'justify'  }}>
            "The Rhythmic Rebels Collective is a sonic rebellion that electrifies the soul! Their beats are a rebellion against the ordinary, creating a rhythmic revolution that's impossible to ignore."
            </p>
            <br />
            <Card.Text>
              <FontAwesomeIcon icon={faMailBulk} /> info@RhythmicRebels.com
              <br />
              <FontAwesomeIcon icon={faPhone} /> +1 (555) 876-5432
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>

        <Col sm={12} md={6} lg={4} style={{ marginBottom: '20px' }}>
        <Card style={{ width: '100%', backgroundColor: '#e8e8e8', border: '2px solid #a600a6' ,  borderRadius: '20px' }}>
          <Card.Img variant="top" src="/directorym2.png" alt="Venue Image" style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}} />
          <Card.Body>
            <Card.Title>
              <b>Beat Bliss Battalion</b>
            </Card.Title>
            <p style={{ fontSize: '14px', textAlign: 'justify',marginTop: '29px'  }}>
            "The Beat Bliss Battalion marches to the rhythm of pure joy! Each beat is a soldier in the battalion, creating a musical euphoria that infiltrates the heart with happiness."
            </p>
            <br />
            <Card.Text>
              <FontAwesomeIcon icon={faMailBulk} /> info@BeatBliss.com
              <br />
              <FontAwesomeIcon icon={faPhone} /> +1 (555) 987-6543
            </Card.Text>
          </Card.Body>
         </Card>
         </Col>

         <Col sm={12} md={6} lg={4} style={{ marginBottom: '20px' }}>
         <Card style={{ width: '100%', backgroundColor: '#e8e8e8', border: '2px solid #a600a6',  borderRadius: '20px' }}>
          <Card.Img variant="top" src="/directory5.jpeg" alt="Venue Image" style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px', height:'315px'}} />
          <Card.Body>
            <Card.Title>
              <b>Phoenix Rocks</b>
            </Card.Title>
            <p style={{ fontSize: '14px', textAlign: 'justify'  }}>
            "Phoenix Rocks is a fiery fusion of musical passion that ignites the spirit! With explosive melodies and soul-stirring lyrics, they blaze a trail of sonic rebellion against the mundane, setting hearts ablaze with their electrifying energy."
            </p>
            <br />
            <Card.Text>
              <FontAwesomeIcon icon={faMailBulk} /> info@PhoenixRocks.com
              <br />
              <FontAwesomeIcon icon={faPhone} /> +1 (555) 885-5253
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>

         </Row>
         </Container>
          </Tab>
        </Tabs>
      </Container>
      <ShortFooter />
    </div>
  );
}

export default Directory;





