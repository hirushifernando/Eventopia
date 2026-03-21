import React, { useState, useEffect } from 'react';
import { Tab, Tabs} from 'react-bootstrap';
import NavComp from '../components/NavComp';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ShortFooter from '../components/ShortFooter';
import axios from 'axios';


const SettingsTabs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    city: '',
    country: '',
  });
  useEffect(() => {
    const registrationData = localStorage.getItem('registrationData');
    if (registrationData) {
      const data = JSON.parse(registrationData);
      setFormData({
        fullName: data.name,
        email: data.email,
        phoneNumber: '', // Set other fields if available
        city: '', // Set other fields if available
        country: '' // Set other fields if available
      });
    }
  }, []);

  useEffect(() => {
    const savedFormData = localStorage.getItem('formData');
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formData));
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      console.log('Form is valid. Data:', formData);
      axios.post('http://localhost:8002/setting', formData)
        .then(response => {
          console.log('Settings saved:', response.data);
          // Handle success, if needed
        })
        .catch(error => {
          console.error('Error saving settings:', error);
          // Handle error, if needed
        });
    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.fullName.trim()) {
      errors.fullName = 'Full name is required';
    }

    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Invalid email format';
    }

    if (!data.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required';
    } 

    if (!data.city.trim()) {
      errors.city = 'City is required';
    }

    if (!data.country.trim()) {
      errors.country = 'Country is required';
    }

    return errors;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

    return (
      <div>
         
          <div>
      <NavComp />
      <div className="container-fluid">
        <div className="row">
          <div className="col-9 col-md-9">
            <div style={{ paddingLeft: '20px', paddingRight: '30px', paddingTop: '20px' }}>
              <h2>Account Settings</h2>
              <Tabs defaultActiveKey="personal" id="settings-tabs">
                <Tab eventKey="personal" title="Personal">
                </Tab>
              </Tabs>
            </div>
          </div>
          
        </div>
        <Form style={{paddingLeft: '20px', paddingRight: '30px'}} onSubmit={handleFormSubmit}>
          <Row style={{marginTop: '30px'}}>
            <Col>
              <h6><b>Full name</b></h6>
              <Form.Control
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Full name"
                isInvalid={!!formErrors.fullName}
              />
              <Form.Control.Feedback type="invalid">{formErrors.firstName}</Form.Control.Feedback>
            </Col>
          </Row><br></br>
          <Form.Group className="mb-3" controlId="formEmail">
            <h6><b>Email address</b></h6>
            <Form.Control
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              type="email"
              placeholder="name@example.com"
              isInvalid={!!formErrors.email}
            />
            <Form.Control.Feedback type="invalid">{formErrors.email}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPhoneNumber">
            <h6><b>Phone Number</b></h6>
            <Form.Control
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              type="tel"
              placeholder="+94-00-000-0000"
              isInvalid={!!formErrors.phoneNumber}
            />
            <Form.Control.Feedback type="invalid">{formErrors.phoneNumber}</Form.Control.Feedback>
          </Form.Group>
          <Row>
            <Col>
            <h6><b>Country</b></h6>
              <Form.Control
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                placeholder="Sri Lanka"
                isInvalid={!!formErrors.country}
              />
              <Form.Control.Feedback type="invalid">{formErrors.country}</Form.Control.Feedback>
            </Col>
            <Col>
              <h6><b>City</b></h6>
              <Form.Control
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="Colombo"
                isInvalid={!!formErrors.city}
              />
              <Form.Control.Feedback type="invalid">{formErrors.city}</Form.Control.Feedback>
            </Col>
          </Row>
          <div className="save-changes-button-container"
         style={{
          marginTop: '40px',
          textAlign: 'center',
          marginBottom: '40px'
         }}>
            <button type="submit" className="save-button"
            style={{
              backgroundColor: '#c6c6f5',
              border: '2px solid #a600a6',
              borderRadius: '10px',
              padding:'10px 100px'
            }}>
             Save Changes
                  </button>
                </div>
              </Form>
            </div>
            <ShortFooter />
          </div>
        
      </div>
    );
  

  
};

export default SettingsTabs;














