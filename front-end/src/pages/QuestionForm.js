import React from 'react';
import { Button, FormControl, InputGroup, Row, Col, Container, Nav } from 'react-bootstrap';
import { AiOutlineEye } from 'react-icons/ai';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './questionform.css';
import { useStateValue } from './StateProvider';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
function FormHeader() {
  const navigate = useNavigate();
  const [{doc_name}, dispatch] = useStateValue();

  function navigates(){
    navigate("/response")
  }
  return (
    <>
      <div className="form_header">
        <Row className="align-items-center">
          <Col md={6} xs={12}>
            <Image src="/logo3.png" alt="Logo" fluid style={{ width: '200px', height: '150px' }} className="logo" />
          </Col>
          <Col md={6} xs={12}>
            <InputGroup className="mb-3">
              <FormControl placeholder="Untitled form" className="form_name" value={doc_name}/>
            </InputGroup>
          </Col>
        </Row>
        <div className="form_header_right">
          <ColorLensIcon className="form_header_icon" />
          <IconButton onClick={() => navigates()}>
            <AiOutlineEye className="form_header_icon" />
          </IconButton>

          <Button variant="primary" href="#contained-buttons" style={{backgroundColor: '#d7a3dc', border:'none', color:'black'}}>
            Send
          </Button>
          <MoreVertIcon className="form_header_icon" />
        </div>
      </div>
      {/* Move the Container outside the form_header div */}
      
    </>
  );
}

export default FormHeader;







