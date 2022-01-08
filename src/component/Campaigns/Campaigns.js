import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BackToTop from "react-back-to-top-button";
import Footer from '../Footer/Footer';
import "./Campaigns.css";
import CallToAction from '../CallToAction/CallToAction';

const Campaigns = () => {
    const [campaigns, setCampaigns]= useState([]);
    useEffect(() => {
        fetch("https://shielded-peak-65069.herokuapp.com/showcampaigns")
        .then(res=>res.json())
        .then(data=>setCampaigns(data))
    },[]);
    
    // console.log(campaigns);
    return (
        <div className="campaign-body">
            <div>
            <div>
                <Container>
                    <div className="text-center">
                    <h1 className="py-5 page-title">All Of Our Campaigns</h1>
                    </div>
                    <Row xs={1} lg={3} md={2} sm={1} className="g-5 mx-3">
                        {campaigns.map( campaign =>  (
                            <Col key={campaign._id} >
                                <Card className="card-design">
                                    <Card.Img className="w-100 mx-auto p-3" variant="top" src={campaign.imageURL} />
                                    <Card.Body>
                                    <Card.Title className="fs-2 title-design fw-bolder">{campaign.Title}</Card.Title>
                                    <Card.Text>Posted by <span className="fw-bolder creator-name">{campaign.Name}</span></Card.Text>
                                    <Card.Text>
                                        {campaign.Description.slice(0,150)}....
                                    </Card.Text>
                                    <Link to={`/campaigns/${campaign._id}`} className="text-center">
                                         {
                                             campaign.Status === "Upcoming" ? <Button className="btn text-light mx-auto fw-bolder campaign-button">Join Campaign</Button>
                                             :<Button className="btn text-light mx-auto fw-bolder campaign-button">See Details</Button>
                                         }
                                    </Link>    
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
                <CallToAction></CallToAction>
                <Footer/>
                <BackToTop
                    // showOnScrollUp
                    showAt={100}
                    speed={7000}
                    // easing="easeOutSine"
                >
                    <span className="backToTop"><img className="border border-dark border-2 rounded-circle" src="https://cdn.discordapp.com/attachments/560412279078780938/919876120659230740/Untitled_design__1_-removebg-preview.png" alt=""></img></span>
                </BackToTop>
            </div>
        </div>
        </div>
    );
};

export default Campaigns;