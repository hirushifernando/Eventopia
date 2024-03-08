import React from 'react';
import { Button, FormControl, InputGroup, Row, Col, Container, Nav } from 'react-bootstrap';
import { AiOutlineEye } from 'react-icons/ai';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './questionform.css';

function FormHeader() {
  return (
    <>
      <div className="form_header">
        <Row className="align-items-center">
          <Col md={6} xs={12}>
            <Image src="/logo3.png" alt="Logo" fluid style={{ width: '200px', height: '150px' }} className="logo" />
          </Col>
          <Col md={6} xs={12}>
            <InputGroup className="mb-3">
              <FormControl placeholder="Untitled form" className="form_name" />
            </InputGroup>
          </Col>
        </Row>
        <div className="form_header_right">
          <ColorLensIcon className="form_header_icon" />
          <AiOutlineEye className="form_header_icon" />
          <Button variant="primary" href="#contained-buttons" style={{backgroundColor: '#d7a3dc', border:'none', color:'black'}}>
            Send
          </Button>
          <MoreVertIcon className="form_header_icon" />
        </div>
      </div>
      {/* Move the Container outside the form_header div */}
      <Container  >
        <Nav className="justify-content-center" variant="tabs" defaultActiveKey="/questions" >
          <Nav.Item>
            <Nav.Link eventKey="/questions">Questions</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/responses">Responses</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </>
  );
}

export default FormHeader;







