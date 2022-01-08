import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CallToAction.css';


const CallToAction = (props) => {
     
    return (
        
           <section className="cta-section mt-5 container-fluid">
              
                 <Row>
                   <Col>
                        {
                             props.volunteer?
                              <div className="cta text-center py-4">
                                   <h3>We make a life by what we give.</h3>
                                   <h3>Join with us as a Volunteer</h3> 
                              </div>
                       :
                              <div className="cta text-center py-4">
                                   <h3>Your Little Contribution Will Help A Lot</h3>
                                   <h3>Join Us By Donating</h3> 
                              </div>
                        }
                   </Col>
                   <Col className="text-center m-auto py-5">
                        {
                             props.volunteer?<Link className="cta-btn btn btn-light" to="/campaigns">Join as a volunteer</Link>
                             :<Link className="cta-btn btn btn-light" to="/donation">Donate Now</Link>
                        }
                   </Col>
                </Row>

           </section>

    );
};

export default CallToAction;