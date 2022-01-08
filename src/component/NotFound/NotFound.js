import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import "./NotFound.css";

const NotFound = () => {
    return (
        <div>
            <div className='text-center'>
                <img src="https://static.vecteezy.com/system/resources/previews/002/144/831/non_2x/404-error-with-alien-spaceship-page-is-lost-and-not-found-message-free-vector.jpg" alt="img" />
            </div>
            <Footer></Footer>
        </div>
        
    );
};

export default NotFound;