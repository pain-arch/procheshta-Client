import React from 'react';
import "./NavBar.css";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from "../../images/logo1.png";

const NavBar = () => {
    const user = sessionStorage.getItem("token");
    const handlelogout = () =>{
        sessionStorage.setItem("token", "")
        window.location.reload();
    }
    
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/"><img src={logo} alt="logo"></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>

                        <NavLink className="mx-2 text-light text-decoration-none fs-5 navlinks" to="/">Home</NavLink>
                        <NavLink className="mx-2 text-light text-decoration-none fs-5 navlinks" to="/dashboard">Dashboard</NavLink>
                        <NavLink className="mx-2 text-light text-decoration-none fs-5 navlinks" to="/about-us">About Us</NavLink>
                        <NavLink className="mx-2 text-light text-decoration-none fs-5 navlinks" to="/campaigns">Campaigns</NavLink>
                        <NavLink className="mx-2 text-light text-decoration-none fs-5 navlinks" to="/donation">Donate Now!</NavLink>
                        <NavLink className="mx-2 text-light text-decoration-none fs-5 navlinks" to="/contact">Contact</NavLink>
                        {
                            user?<NavLink onClick={handlelogout} className="mx-2 btn btn btn-light" to="/login">Log Out</NavLink>:<NavLink className="mx-2 btn btn btn-light" to="/login">Login</NavLink>
                        }
                        
                    
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    );
};

export default NavBar;