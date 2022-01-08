import React from 'react';
import {  Accordion, Col, Container, Row } from 'react-bootstrap';
import DonationImage from "../../images/Donate.png";
import BackToTop from "react-back-to-top-button";
import { useForm } from "react-hook-form";
import './Donation.css';
import Footer from '../Footer/Footer';

const Donation = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        const productData = {
            Name: data.Name,
            Email: data.Email,
            Phone: data.Phone,
            Amount: data.Amount,
            TrxID: data.TrxID,  
        };
        document.getElementById("Name").value="";
        document.getElementById("Email").value="";
        document.getElementById("Phone").value="";
        document.getElementById("Amount").value="";
        document.getElementById("TrxID").value="";


        const url = `https://shielded-peak-65069.herokuapp.com/givedonation`;

        fetch(url,{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },
          body: JSON.stringify(productData)
        })
        alert("Thanks For The Donation!");
       };
    return (
    <div style={{backgroundColor:"#b6edf8"}}>
        <Container>
            <section className="pt-5">
                <Row>
                    <Col className='text-center'>
                        <img className="w-75" src={DonationImage} alt="donate"></img>
                    </Col>
                    <Col className='text-center'>
                        <div className='donation-form'>
                            <form className='div-design p-5' onSubmit={handleSubmit(onSubmit)}>
                                <input className="input-design" name="Name" placeholder="Enter Name" id="Name" {...register('Name', { required: true})}/>
                                    <br></br>
                                <input className="input-design" name="Email" placeholder="Email" type="email" id="Email" {...register('Email', { required: true})}/>
                                    <br></br>
                                <input className="input-design" name="Phone" placeholder="Phone" id="Phone" {...register('Phone', { required: true})}/>
                                    <br></br>
                                <input className="input-design" name="Amount" placeholder="Amount" id="Amount" {...register('Amount', { required: true})}/>
                                    <br></br>
                                <input className="input-design" name="TrxID" placeholder="TrxID" id="TrxID" {...register('TrxID', { required: true})}/>
                                    <br></br>
                                <input className="mt-4 btn btn-outline-dark" id="submit_btn" type="submit" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </section>
            <section className='why-should-u-donate'>
                <div className='text-center'>
                    <h1 className="py-5 page-title">Why Should We Donate?</h1>
                 </div>
                 <div className='donation-img'>
                     <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9uYXRpb258ZW58MHx8MHx8&w=1000&q=80" alt='/'></img>
                     <img src='https://donate.worldvision.org/wp-content/uploads/2017/08/D200-0933-23_cmyk-1.jpg' alt='/'></img>
                     <img src='https://img.freepik.com/free-photo/woman-gloves-holding-donation-box-food-supplies-people-isolation-essential-goods-oil-canned-food-cereals-milk-vegetables-fruit_149384-276.jpg?size=626&ext=jpg' alt='/'></img>
                 </div>

                <div className='donate-description mt-5'>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>This Helps Us To Buy Foods For The Helpless People</Accordion.Header>
                                <Accordion.Body>
                                We are asking you to donate us ৳100 to help buying a food parcel for one homeless person everyday.
                                 It's our little initiative for feeding one person daily. Also a “ food for everyone" campaign aimed 
                                 at feeding homeless people  during this lockdown, is coming at 21 January, 2022. It's focusing on those
                                  people who are suffering and starving the most in this lockdown.
                                </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>We Make Shelters For The Homeless People</Accordion.Header>
                                <Accordion.Body>
                                One of the great problems of the 21st century is the exponential increase of the homeless. Those strange
                                 beings who daily grow in our streets as if they were weeds. We cannot not solve the problem of homelessness, 
                                 but we can try to give a little to those who think they've no home. When you contribute some it makes a whole
                                  for them. We try to make temporary shelter for those poeple for being safe and sound.
                                </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>A Big Part Of Our Donation Goes For The Education</Accordion.Header>
                                <Accordion.Body>
                                35% of our total donation goes to the education fund. Education is one of our basic need. You can help us to 
                                provide help all the kids country-wide to build a strong foundation for their future. Imagine life without the
                                 ability to read or do basic math. For 56% of elementary-aged children around the world who don't meet minimum 
                                 reading proficiency standards.Togather we can do something better for brightening their future.
                                </Accordion.Body>
                        </Accordion.Item>
                        
                    </Accordion>
                </div>
            </section>
        </Container>
        <Footer></Footer>
        <BackToTop
                    // showOnScrollUp
                    showAt={100}
                    speed={7000}
                    // easing="easeOutSine"
                >
                    <span className="backToTop"><img className="border border-dark border-2 rounded-circle" src="https://cdn.discordapp.com/attachments/560412279078780938/919876120659230740/Untitled_design__1_-removebg-preview.png" alt=""></img></span>
                </BackToTop>
    </div>
    );
};

export default Donation;