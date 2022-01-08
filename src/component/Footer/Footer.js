import React from 'react';
import './Footer.css';
import logo from "../../images/logo1.png";
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        
        <footer className="page-footer font-small blue pt-4 mt-5">
            <Container>
        <div className="container-fluid text-center text-md-left">
            <div className="row">
                <div className="col-md-4 mt-md-0 mt-3">
                    <h5 className="text-uppercase"> <img src={logo} alt="footer-logo"/> </h5>
                    <p className="footer-text">Just Serve in your community <br></br> and make difference in this world.</p>
                </div>

                <hr className="clearfix w-100 d-md-none pb-0"/>

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="links-title-design">Main</h5>
                    <ul className="list-unstyled">
                        <li><a className="text-dark text-decoration-none" href="/">Home</a></li>
                        <li><a className="text-dark text-decoration-none" href="/dashboard">Dashboard</a></li>
                        <li><a className="text-dark text-decoration-none" href="/campaigns">Campaigns</a></li>
                    </ul>
                </div>

                <div className="col-md-2 mb-md-0 mb-3">
                    <h5 className="links-title-design">Inner Pages</h5>
                    <ul className="list-unstyled">
                        <li><a className="text-dark text-decoration-none" href="/about-us">About Us</a></li>
                        <li><a className="text-dark text-decoration-none" href="/contact">Contact</a></li>
                    </ul>
                </div>

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="links-title-design">Others</h5>
                    <ul className="list-unstyled">
                        <li><a className="text-dark text-decoration-none" href="/login">Sign In</a></li>
                        <li><a className="text-dark text-decoration-none" href="login">Register Now</a></li>
                        <li><a className="text-dark text-decoration-none" href="/donation">Donate!</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="footer-copyright text-light text-center py-3">© 2022 Copyright: <b>Procheshta</b>
        </div>
        </Container>

</footer>
    );
};

export default Footer;