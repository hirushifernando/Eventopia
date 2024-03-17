import React, {useState} from 'react';
import { Spinner,Container, Row, Col, Image, Button, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import NavComp from '../components/NavComp';
import "./eventdetails.css";
import blank from "../images/Start-New-Form.png";
import wedding from "../images/p1.jpg";
import party from "../images/p2.jpg";
import partyT from "../images/p4.jpg";
import weddingT from "../images/p5.png";
import workshopT from "../images/p5.jpg";
import workshopM from "../images/p6.jpg";
import eventT from "../images/p7.jpg";
import uuid from "react-uuid";
import doc_image from "../images/p3.jpg";
import { useNavigate } from 'react-router-dom';
import ShortFooter from '../components/ShortFooter';
import axios from "axios"

function EventForm() {
  const navigate = useNavigate();

  const createForm = () => {
      const id_ = uuid();
      navigate("/form/" + id_);
  };

  return (
      <div style={{backgroundColor: 'white'}}>
          <Container fluid className="header" style={{ backgroundColor: '#4f0176', color: 'white' }}>
                <Row className="align-items-center justify-content-center flex-column-reverse flex-md-row">
                    <Col xs={12} md={4} className='header_left text-center'>
                        <Image src="./logo3.png" alt="Logo" fluid style={{ width: '200px', height: '150px' }} />
                    </Col>
                    <Col xs={12} md={4} className='header_name text-center text-md-left'>
                        <h1>Customization form</h1>
                    </Col>
                    <Col xs={12} md={4} className='header_search d-flex justify-content-center justify-content-md-end'>
                        <FormControl type="text" className="search-input" placeholder="Search..." />
                        <Button type="submit" className="search-button ml-2">🔍︎</Button>
                    </Col>
                </Row>
            </Container>
          <Container fluid className="template_section">
              <Row className="justify-content-center">
                  <Col xs={12} sm={12} md={10} lg={8} xl={6}>
                      <div className='template_top'>
                          <div className='template_left'>
                              <span style={{ fontSize: "16px", color: "#202124", fontWeight: "bold" }}>Start a New Form</span>
                          </div>
                      </div>
                      <div className='template_body'>
                          <div className='card' onClick={createForm}>
                              <img src={blank} alt='Blank Form' className='card_image' />
                              <p className='card_title'>Blank</p>
                          </div>
                          <div className='card' onClick={createForm}>
                              <img src={wedding} alt='Wedding Menu Form' className='card_image' />
                              <p className='card_title'>Wedding Menu</p>
                          </div>
                          <div className='card' onClick={createForm}>
                              <img src={party} alt='Party Menu Form' className='card_image' />
                              <p className='card_title'>Party Menu</p>
                          </div>
                          <div className='card' onClick={createForm}>
                              <img src={partyT} alt='Party Theme Form' className='card_image' />
                              <p className='card_title'>Party Theme</p>
                          </div>
                          <div className='card' onClick={createForm}>
                              <img src={weddingT} alt='Wedding Theme Form' className='card_image' />
                              <p className='card_title'>Wedding Theme</p>
                          </div>
                          <div className='card' onClick={createForm}>
                              <img src={workshopT} alt='Workshop Theme Form' className='card_image' />
                              <p className='card_title'>Workshop Theme</p>
                          </div>
                          <div className='card' onClick={createForm}>
                              <img src={workshopM} alt='Workshop Theme Form' className='card_image' />
                              <p className='card_title'>Workshop Menu</p>
                          </div>
                          <div className='card' onClick={createForm}>
                              <img src={eventT} alt='Event Theme Form' className='card_image' />
                              <p className='card_title'>Event Theme</p>
                          </div>
                      </div>
                  </Col>
              </Row>
              <div className="text-row" style={{ marginTop: '40px', color: '#9500AB',paddingLeft:"690px" }}>
                <h6>CUSTOMIZATION</h6>
              </div>
                <div className="text-row" style={{ color: '#9500AB' ,paddingLeft:"600px" }}>
                <h3>Customize To Your Liking</h3>
                </div>
                <div className="flower-vines" style={{ paddingBottom: '10px', paddingLeft:"690px"}}>
                    <Spinner animation="grow" variant="secondary" />
                    <Spinner animation="grow" variant="secondary" />
                    <Spinner animation="grow" variant="secondary" />
                    <Spinner animation="grow" variant="secondary" />
                </div>
          </Container>
          <Container fluid className="header" style={{ backgroundColor: 'white', color: 'white' }}>
                <div className='main_body'>
                    <div className="mainbody_top">
                        <div className="mainbody_top_left" style={{ fontSize: "16px", fontWeight: "bold", color: '#9500AB' }}>
                            Recent forms
                        </div>
                    </div>
                    <div className="mainbody_doc">
                        
                            <div className='doc_card'>
                                <img src={doc_image} alt='Your Document' className='doc_image' />
                                <div className='doc_card_content' style={{ color: '#000000' }}>
                                    <h5 style={{ overflow: "ellipsis" }}></h5>
                                    <h6>Opened 6 Jan 2024</h6>
                                    <div className='doc_content' style={{ fontSize: "12px", color: "black" }}>
                                        <div className='content_left'>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                    </div>

                </div>
                <div className="text-row" style={{ marginTop: '40px', color: '#9500AB',paddingLeft:"690px" }}>
              <h6>RECENT FORM</h6>
            </div>
            <div className="text-row" style={{ color: '#9500AB' ,paddingLeft:"580px" }}>
              <h3>The Form You Customized</h3>
            </div>
                <div className="flower-vines" style={{ paddingBottom: '20px', paddingLeft:"690px" }}>
                    <Spinner animation="grow" variant="secondary" />
                    <Spinner animation="grow" variant="secondary" />
                    <Spinner animation="grow" variant="secondary" />
                    <Spinner animation="grow" variant="secondary" />
                </div>
            </Container>
          <ShortFooter />
      </div>
  );
}
export default EventForm;









