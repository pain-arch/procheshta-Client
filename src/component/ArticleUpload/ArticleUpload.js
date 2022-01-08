import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import "./ArticleUpload.css";
import Footer from '../Footer/Footer';

const ArticleUpload = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageUrl] = useState({});

     const onSubmit = data => {

         const productData = {
             Name: data.Name,
             Email: data.Email,
             Article: data.Article,
             imageURL: imageURL   
         };
         document.getElementById("Name").value="";
         document.getElementById("Email").value="";
         document.getElementById("Article").value="";


         const url = `https://shielded-peak-65069.herokuapp.com/articleupload`;

         fetch(url,{
           method:"POST",
           headers:{
               "Content-Type":"application/json"
           },
           body: JSON.stringify(productData)
         })
         alert("Article Submitted");
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
                        <h2 style={{color: "#01ADD0"}} class="mt-5 ">Write a new Article</h2>
                                
                        <input className="input-design w-75 my-2" name="Name" placeholder="Publisher Name" id="Name" {...register('Name', { required: true})}/>
                            <br></br>
                        <input className="input-design w-75 my-2" name="Email" placeholder="Email" type="email" id="Email" {...register('Email', { required: true})}/>
                            <br></br>
                        <textarea style={{height :"100px"}} className="input-design w-50 my-2" name="Article" placeholder="Article" id="Article" {...register('Article', { required: true})}/>
                            <br></br>
                        <label for="files"
                            className="upload-pic d-flex justify-content-center  w-50">Upload Article Picture</label>
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

export default ArticleUpload;