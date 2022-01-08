import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const WhatWeDo = () => {
    return (
        <div>
            
            <Container>
                <div className="text-center">
                    <h1 className="what-do-we-do fw-bold">What Do We Do?</h1>
                    <p>As the largest not-for-profit exclusively for 
                        young people and social change, Procheshta's 
                        hundreds of members represent every Bangladesh 
                        area code and 131 countries. Using our digital 
                        platform, Procheshta members join our volunteer, 
                        social change, and civic action campaigns to make 
                        real-world impact on causes they care about  
                         <Link className='ps-2' to="/about-us">Visit Our Team</Link>.</p>
                </div>
                <Row xs={1} lg={2} md={2} sm={1} className="g-5 mx-3">
                    <Col>
                     <div className="text-center">
                         <img className="w-75" alt="img" src="https://s3.amazonaws.com/utep-uploads/wp-content/uploads/unr/2020/10/26164456/unr-msw-what-you-need-to-start-your-own-social-work-private-practice-image.jpg"></img>
                     </div>
                    </Col>
                    <Col>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Host Various Civic Campaigns</Accordion.Header>
                                <Accordion.Body>
                                We host various type of civic campaigns for the sake of human kind. We beleive in 
                                loving, respecting and helping people. Every lives matter!Awareness campaigns are often
                                 the first step to introduce the audience to new services, programmes, facilities or actions. It is aimed at 
                                 building familiarity to a desirable behavior, say, promoting immunization or improving public health.
                                </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>We collect Donations</Accordion.Header>
                                <Accordion.Body>
                                The knowledge that you're helping others is hugely empowering and, 
                                in turn, can make you feel happier and more fulfilled. Research has 
                                identified a link between making a donation to charity and increased
                                 activity in the area of the brain that registers pleasure - proving 
                                 that as the old adage goes, it really is far better to give than to 
                                 receive.
                                </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Spread Awareness</Accordion.Header>
                                <Accordion.Body>
                                wareness matters because it can help to improve the 
                                lives of patients. Knowledge is a powerful tool. It 
                                causes people to take action that can improve treatments, 
                                diagnostics, and social supports. Increased understanding 
                                about chronic conditions in the community can have three 
                                powerful effects.
                                </Accordion.Body>
                        </Accordion.Item>
                        
                        </Accordion>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default WhatWeDo;