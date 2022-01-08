import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Slider.css";
import slider1 from "../../images/slider1.jpg";
import slider2 from "../../images/slider2.jpg";
import slider3 from "../../images/slider3.jpg";
import { NavLink } from 'react-router-dom';

const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slider1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="banner-quote">
                            <h1 className="banner-title-design" >Blood Donation</h1>
                            <p>"There is a hope of life to someone in your blood donation.”</p>
                            <NavLink className="btn btn-light my-3" to="/campaigns">Join Campaign</NavLink>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slider2}
                    alt="Second slide"
                    />

                    <Carousel.Caption >
                        <div className="banner-quote">
                            <h1 className="banner-title-design" >Flood Relief</h1>
                            <p>"Each of us as human beings has a responsibility to reach out to help<br/> our brothers and sisters affected by disasters."</p>
                            <NavLink className="btn btn-light text-dark my-3" to="/campaigns">Join Campaign</NavLink>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slider3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className="banner-quote">
                            <h1 className="banner-title-design" >Trash Killing</h1>
                            <p>"We hate the hand that comes out of a car and just drops litter in the street, destroying nature."</p>
                            <NavLink className="btn btn-light text-dark my-3" to="/campaigns">Join Campaign</NavLink>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </div>
    );
};

export default Slider;