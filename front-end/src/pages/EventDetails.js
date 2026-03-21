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
import doc_image from "../images/recent.png";
import { useNavigate } from 'react-router-dom';
import ShortFooter from '../components/ShortFooter';
import axios from "axios"

function EventForm() {
  const navigate = useNavigate();
  function navigate_to(docname){
    var fname=docname.split(".");
    navigate("/form/" + fname[0])

}
  
  const [files,setFiles] = useState([]);
  async function filenames() {
    try {
        var request = await axios.get("http://localhost:8002/get_all_filenames")
        let filenames = request.data;
        setFiles(filenames);
    } catch (error) {
        console.error("An error occurred while fetching filenames:", error);
        // Handle the error appropriately (e.g., display an error message to the user)
    }
 }
    filenames()
    function createForm(){
        var create_form_id = uuid();
        console.log(create_form_id);
        var questions_list = [{questionText:"Question", questionType:"radio", options:[{optionText: "Option 1"}], open:true, required:false}];
        axios.post(`http://localhost:8002/question_form/${create_form_id}`,{
            "document_name": "untitled_form",
            "doc_desc": "Add Description",
            "questions": questions_list
        })
        navigate("/form/" + create_form_id);
    }
    
  return (
      <div style={{backgroundColor: 'white'}}>
        
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
          </Container>
          <Container fluid className="header" style={{ backgroundColor: 'white', color: 'white' }}>
                <div className='main_body'>
                    <div className="mainbody_top">
                        <div className="mainbody_top_left" style={{ fontSize: "16px", fontWeight: "bold", color: '#9500AB' }}>
                            Recent forms
                        </div>
                    </div>
                    <div className="mainbody_doc">
                        {files.map((ele) => (
                            <div className='doc_card' onClick={() => navigate_to(ele)}>
                                <img src={doc_image} alt='Your Document' className='doc_image' />
                                <div className='doc_card_content' style={{ color: '#000000' }}>
                                    <h5 style={{ overflow: "ellipsis" }}>{ele ? ele : "Untitled Doc"}</h5>
                                    <h6>Opened 6 Jan 2024</h6>
                                    <div className='doc_content' style={{ fontSize: "12px", color: "black" }}>
                                        <div className='content_left'>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                <div className="text-row" style={{ marginTop: '40px', color: '#9500AB',paddingLeft:"690px" }}>
              <h6>RECENT FORM</h6>
            </div>
            <div className="text-row" style={{ color: '#9500AB' ,paddingLeft:"580px" }}>
              <h3>The Form You Customized</h3>
            </div>
            </Container>
          <ShortFooter />
      </div>
  );
}
export default EventForm;









