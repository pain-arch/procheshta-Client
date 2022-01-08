import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import "./CampaignUpload.css";
import Footer from '../Footer/Footer';

const CampaignUpload = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageUrl] = useState({});

     const onSubmit = data => {

         const productData = {
             Title: data.Title,
             Name: data.Name,
             Date: data.Date,
             Place: data.Place,
             Status: data.Status,
             Description: data.Description,
             imageURL: imageURL   
         };
         document.getElementById("Title").value="";
         document.getElementById("Name").value="";
         document.getElementById("Date").value="";
         document.getElementById("Place").value="";
         document.getElementById("Status").value="";
         document.getElementById("Description").value="";


         const url = `https://shielded-peak-65069.herokuapp.com/campaignupload`;

         fetch(url,{
           method:"POST",
           headers:{
               "Content-Type":"application/json"
           },
           body: JSON.stringify(productData)
         })
         alert("Campaign Added");
        };
// image to third party api 
     const handleUploadImage = event =>{
          const imageData = new FormData();
          imageData.set('key','14e1f186a88d520f5aafe4ad5bf34cc7');
          imageData.append('image', event.target.files[0])
    // image post to third-party app

          axios.post('https://api.imgbb.com/1/upload',imageData)
          .then(function(response){
              setImageUrl(response.data.data.display_url);
          })
          .catch(function(error){
              console.log(error);
          });
     }


    return (
        <div>
            <Container>
            <div style={{borderRadius : "10px"}} className="product-submit d-flex justify-content-center text-center bg-design mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 style={{color: "#01ADD0"}} class="mt-5 ">Add a new Campaign</h2>
                        
                <input className="input-design w-75 my-2" name="Title" placeholder="Title" id="Title" {...register('Title', { required: true, maxLength: 30 })}/>
                    <br></br>
                <input className="input-design w-75 my-2" name="Name" placeholder="Publisher Name" id="Name" {...register('Name', { required: true})}/>
                    <br></br>
                <input className="input-design w-75 my-2" name="Date" placeholder="Date" id="Date" {...register('Date', { required: true})}/>
                    <br></br>
                <input className="input-design w-75 my-2" name="Place" placeholder="Place" id="Place" {...register('Place', { required: true})}/>
                    <br></br>
                <input className="input-design w-75 my-2" name="Status" placeholder="Upcoming/Done" id="Status" {...register('Status', { required: true})}/>
                    <br></br>
                <textarea style={{height :"100px"}} className="input-design w-50 my-2" name="Description" placeholder="Description" id="Description" {...register('Description', { required: true})}/>
                    <br></br>
                <label for="files"
                    className="upload-pic d-flex justify-content-center w-50">Upload Campaign Picture</label>
                <input id="files" style={{visibility:"hidden"}} type="file" onChange={handleUploadImage} />
                    <br></br>
                <input class="mb-5 btn btn-dark" id="submit_btn" type="submit" />
             </form>
        </div>
        </Container>
        <Footer></Footer>
        </div>
    );
};

export default CampaignUpload;