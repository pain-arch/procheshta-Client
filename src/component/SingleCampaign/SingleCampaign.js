import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import { Button, Col, Container, Row } from 'react-bootstrap';
import "./SingleCampaign.css";
import Footer from '../Footer/Footer';
const SingleCampaign = () => {
    const {key} = useParams();
    const { value2} = React.useContext(UserContext);
    const [camps, setCamps]=value2;
    const { register, handleSubmit, watch, errors } = useForm();
    const userEmail = sessionStorage.getItem("token");

    const onSubmit = data => {

        const campaignData = {
            Campaign: singleCam,
            Email: userEmail,
        };

        const url = `https://shielded-peak-65069.herokuapp.com/joinedcampaign`;

        fetch(url,{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },
          body: JSON.stringify(campaignData)
        })
        alert("Thanks For joining")
       };

    const singleCam = camps.find(cam=> cam._id === key);
    //console.log(singleCam);

    return (
        <div>
            <Container>
                <div>
                   <h1 className="text-center my-5 header-design">Campaign Details</h1>
                </div>
                <Row>
                        <Col className="left-side">
                            <div className="text-center">
                                <img className="w-75 border border-light border-3" src={singleCam.imageURL} alt="img" />
                            </div>
                        </Col>
                        <Col className="right-side bg-light rounded p-5">
                            <h2 className='fs-1' ><span style={{color: "#01ADD0"}}>{singleCam.Title}</span></h2>
                            <div className='d-flex mt-4'>
                                 <p>by <span style={{color: "#01ADD0",display :"inline-block",fontWeight : "700"}}>{singleCam.Name}</span></p>
                                 <p style={{display :"inline-block", fontWeight : "700"}} className='text-decoration-none mx-5'><span style={{backgroundColor : "#01ADD0" , padding : "5px", borderRadius : "5px", color: "white" }} >{singleCam.Status}</span></p>
                            </div>
                            <div className='d-flex mt-3'>
                                <h5 style={{display :"inline-block",fontWeight : "700"}}>Date: {singleCam.Date}</h5>
                                <h5 className='mx-5' style={{display :"inline-block",fontWeight : "700"}}>Place: {singleCam.Place}</h5>
                            </div>
                            <p className='mt-3' >{singleCam.Description}</p>
                            {
                                userEmail
                                
                                ?
                                    <div>
                                        {
                                            singleCam.Status === "Upcoming"
                                            
                                            ? 
                                                <form onSubmit={handleSubmit(onSubmit)}>
                                                    <Button className="btn btn-dark text-light mx-auto fw-bolder campaign-button"  id="submit_btn" type="submit" >Join Campaign</Button>
                                                </form>
                                            :
                                            
                                            ""
                                        }
                                    </div>
                                :
                                singleCam.Status === "Upcoming"?

                                    <a href='/login' className="btn btn-dark text-light mx-auto fw-bolder campaign-button"  id="submit_btn" type="submit" >Login to Join</a>
                                :
                                singleCam.Status === "Done"?

                                    ""
                                :
                                ""
                            }
                        </Col>
                    </Row>
            </Container>
            
            <Footer></Footer>
       </div> 
    );
};

export default SingleCampaign;