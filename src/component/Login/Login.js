import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import "./Login.css";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


firebase.initializeApp(firebaseConfig)

const Login = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email:'',
        photo: ''
      });

      const handlelogin=()=>{
        window.location.reload();
    }

      //const [loggedInUser, setLoggedInUser] = useContext(UserContext);
      const { value, value2 } = React.useContext(UserContext);
      const [loggedInUser, setLoggedInUser] = value;
      const [buyService, setbuyService] = value2;

    const history = useHistory();
    const location = useLocation();
    // let { from } = location.state || { from: { pathname: "/" } };
    let { from } = { from: { pathname: "/" } };
    
    const provider = new firebase.auth.GoogleAuthProvider();


      const handleSignIn = () =>{
        firebase.auth().signInWithPopup(provider)
        .then(res => {
          const {displayName, photoURL, email} = res.user;
          const signedInUser = {
            isSignedIn: true,
            name: displayName,
            email: email,
            photo: photoURL
          }
          setUser(signedInUser);
          setLoggedInUser(signedInUser);
          sessionStorage.setItem("token", signedInUser.email,signedInUser.name)
          history.replace(from);
          // console.log(displayName, email, photoURL);
          handlelogin();
        })
        .catch(err => {
          console.log(err);
          console.log(err.message);
        })
      }
    
      const handleSignOut = () => {
        firebase.auth().signOut()
        .then(res => {
          const signedOutUser = {
            isSignedIn: false, 
            name: '',
            photo:'',
            email:'',
            password:'',
            error:'',
            isValid:false,
            existingUser: false
          }
          setUser(signedOutUser);
          console.log(res);
        })
        .catch( err => {
    
        })
      }
    
      const is_valid_email = email =>  /(.+)@(.+){2,}\.(.+){2,}/.test(email); 
      const hasNumber = input => /\d/.test(input);
      
      const switchForm = e =>{
        const createdUser = {...user};
        createdUser.existingUser = e.target.checked;
        setUser(createdUser);
      }
      const handleChange = e =>{
        const newUserInfo = {
          ...user
        };
        //debugger;
        // perform validation
        let isValid = true;
        if(e.target.name === 'email'){
          isValid = is_valid_email(e.target.value);
        }
        if(e.target.name === "password"){
          isValid = e.target.value.length > 8 && hasNumber(e.target.value);
        }
    
        newUserInfo[e.target.name] = e.target.value;
        newUserInfo.isValid = isValid;
        setUser(newUserInfo);
      }
    
      const createAccount = (event) => {
        if(user.isValid){
          firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
          .then(res => {
            console.log(res);
            const createdUser = {...user};
            createdUser.isSignedIn = true;
            createdUser.error = '';
            setUser(createdUser);
          })
          .catch(err => {
            console.log(err.message);
            const createdUser = {...user};
            createdUser.isSignedIn = false;
            createdUser.error = err.message;
            setUser(createdUser);
          })
        }
        event.preventDefault();
        event.target.reset();
      } 
    
      const signInUser = event => {
        if(user.isValid){
          firebase.auth().signInWithEmailAndPassword(user.email, user.password)
          .then(res => {
            console.log(res);
            const createdUser = {...user};
            createdUser.isSignedIn = true;
            createdUser.error = '';
            setUser(createdUser);
            setLoggedInUser(createdUser);
            sessionStorage.setItem("token", createdUser.email)
            history.replace(from);
            // console.log(createdUser);
            handlelogin();
          })
          .catch(err => {
            console.log(err.message);
            const createdUser = {...user};
            createdUser.isSignedIn = false;
            createdUser.error = err.message;
            setUser(createdUser);
          })
        }
        event.preventDefault();
        event.target.reset();
      }
    return (
         <div>
           
         
            <div className="logindiv w-75 p-5 mt-5">
                    {/* {
                        user.isSignedIn && <div>
                        <p> Welcome, {user.name}</p>
                        <p>Your email: {user.email}</p>
                        <img src={user.photo} alt=""></img>
                        </div>
                    } */}
                    <h1 style={{color: "#01ADD0"}}>Login or Sign Up</h1>
                    <input type="checkbox" name="switchForm" onChange={switchForm} id="switchForm"/>
                    <label htmlFor="switchForm"> Click to Sign In</label>
                    <form style={{display:user.existingUser ? 'block': 'none'}} onSubmit={signInUser}>
                        <input className="input-design w-50 my-2" type="text" onBlur={handleChange} name="email" placeholder="Your Email" required/>
                        <br/>
                        <input className="input-design w-50 my-2" type="password" onBlur={handleChange} name="password" placeholder="Your Password" required/>
                        <br/>
                        <input style={{backgroundColor: "#01ADD0"}} className="submitbtn btn btn-dark mt-3" type="submit" value="Sign In"/>
                    </form>
                    <form style={{display:user.existingUser ? 'none': 'block'}} onSubmit={createAccount}>
                        <input className="input-design w-50 my-2" type="text" onBlur={handleChange} name="name" placeholder="Your Name" required/>
                        <br/>
                        <input className="input-design w-50 my-2" type="text" onBlur={handleChange} name="email" placeholder="Your Email" required/>
                        <br/>
                        <input className="input-design w-50 my-2" type="password" onBlur={handleChange} name="password" placeholder="Your Password (8 Characters)" required/>
                        <br/>
                        <input className="submitbtn" type="submit" value="Create Account"/>
                    </form>
                    {
                        user.error && <p style={{color:'red'}}>{user.error}</p>
                    }
                    <br></br>
                    {
                        user.isSignedIn ? <button className="submitbtn mt-2" onClick={handleSignOut} >Sign out</button> :
                        <button className="submitbtn mt-2" onClick={handleSignIn} >Sign in with Google</button>
                    }
        </div>

        </div> 
    );
};

export default Login;