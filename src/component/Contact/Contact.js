import React from 'react';
import { useForm } from "react-hook-form";
import BackToTop from "react-back-to-top-button";
import address from "../../images/address.png";
import email from "../../images/email.png";
import phone from "../../images/phone.png";
import Footer from '../Footer/Footer';
import "./Contact.css";

const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        const contactData = {
            Name: data.Name,
            Email: data.Email,
            Message: data.Message, 
        };
        document.getElementById("Name").value="";
        document.getElementById("Email").value="";
        document.getElementById("Message").value="";


        const url = `https://shielded-peak-65069.herokuapp.com/contact`;

        fetch(url,{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },
          body: JSON.stringify(contactData)
        })
        alert("Message Sent");
       };

    return (
        <div style={{backgroundColor:"#b6edf8"}}>
            <section className="contact-form-section container">
                <div className='text-center'>
                    <h1 className="py-5 page-title">Contact Us</h1>
                </div>
                <div className='text-center'>
                    <p className="py-5 page-title bg-info">
                    In case, you have any queries regarding our voluntary works, campaigns or donation, simply let us know.
                    <br></br>You can contact us by email or a phone call. Or you can also send us message using the from below!<br></br> We are one click away.</p>
                </div>
                <div class="conact-body d-flex justify-content-center">
                    <div class="left-contact-body mx-5">
                        <div className="icon-and-info my-4">
                            <icon><img className='contact-icon mx-3' src={address} alt="address"></img></icon>
                            <div>
                                <h3>Address</h3>
                                <p>Road 6, Block B, Ashulia Model Town, Savar, Dhaka-1345, Bangladesh.</p>
                            </div>
                        </div>
                        <div className="icon-and-info my-4">
                            <icon><img className='contact-icon mx-3' src={email} alt="email"></img></icon>
                            <div>
                                <h3>Email</h3>
                                <p>procheshta.help@gmail.com</p>
                            </div>
                        </div>
                        <div className="icon-and-info my-4">
                            <icon><img className='contact-icon mx-3' src={phone} alt="phone"></img></icon>
                            <div>
                                <h3>Phone Number</h3>
                                <p>+02-9630221</p>
                            </div>
                        </div>
                    </div>
                    <div className="right-contact-body mx-5">
                    <div className='contact-form'>
                            
                            <form className='div-design p-5' onSubmit={handleSubmit(onSubmit)}>
                                <input className="input-design" name="Name" placeholder="Enter Name" id="Name" {...register('Name', { required: true})}/>
                                    <br></br>
                                <input className="input-design" name="Email" placeholder="Email" type="email" id="Email" {...register('Email', { required: true})}/>
                                    <br></br>
                                <textarea className="input-design" name="Message" placeholder="Your Message" id="Message" {...register('Message', { required: true})}/>
                                    <br></br>
                                <input className="mt-3 btn btn-outline-dark" id="submit_btn" type="submit" />
                            </form>
                        </div>
                    </div>  
                </div>
        </section>
        <Footer></Footer>
        <BackToTop
                    // showOnScrollUp
                    showAt={100}
                    speed={8000}
                    // easing="easeOutSine"
                >
                    <span className="backToTop"><img className="border border-dark border-2 rounded-circle" src="https://cdn.discordapp.com/attachments/560412279078780938/919876120659230740/Untitled_design__1_-removebg-preview.png" alt=""></img></span>
        </BackToTop>
        </div>
    );
};

export default Contact;