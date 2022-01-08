import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import "./ContactMessages.css";

const ContactMessages = () => {
    const [messages, setMessages] = useState([]);
    useEffect(()=>{
        const url = `https://shielded-peak-65069.herokuapp.com/showcontacts`;
           fetch(url)
           .then(res => res.json())
           .then(data => setMessages(data))
        },[])
    return (
        <div>
            <h1 className='text-center my-5'>All the Messages</h1>
            <Container>
            {
                messages.map(message=>
                <div className='my-2'>
                   
                    <div className="files-table">
                        <div className="files-table-header">
                            <div className="column-header table-cell">Email</div>
                            <div className="column-header table-cell">Message</div>
                        </div>
        
           
                        <div className="files-table-row">
                            <div className="table-cell name-cell">{message.Email}</div>
                            <div className="table-cell name-cell">{message.Message}</div>
                        </div>
    
                    </div>
                
                    
                </div>
                )
            }
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default ContactMessages;