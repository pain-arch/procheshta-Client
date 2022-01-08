import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const PreviousCampaigns = (props) => {
    const {campaigns} = props;
    //console.log(props.campaigns)
    const previousCamp = campaigns.filter(campaign => campaign.Status === "Done");
    return (
        <div> 
            <div className="text-center">
                <h1 className="py-5 page-title">Our Previous Campaigns</h1>
            </div>

            <Container>
            <Row xs={1} lg={3} md={2} sm={1} className="g-5 mx-3">
                        {previousCamp.map( campaign => (
                            <Col key={campaign.key} >
                                <Card className="card-design">
                                    <Card.Img className="w-100 mx-auto p-3" variant="top" src={campaign.imageURL} />
                                    <Card.Body>
                                    <Card.Title className="fs-2 title-design fw-bolder">{campaign.Title}</Card.Title>
                                    <Card.Text>Hosted by <span className="fw-bolder creator-name">{campaign.Name}</span></Card.Text>
                                    <Link to={`/campaigns/${campaign._id}`} className="text-center">
                                         <Button className="btn text-light mx-auto fw-bolder campaign-button">See Details</Button>
                                    </Link> 
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
            </Container>
        </div>
    );
};

export default PreviousCampaigns;