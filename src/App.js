import './App.css';
import Home from "./component/Home/Home";
import Dashboard from "./component/Dashboard/DashBoard"; 
import Campaigns from "./component/Campaigns/Campaigns";
import Donation from "./component/Donation/Donation";
import AboutUs from "./component/AboutUs/AboutUs";
import Contact from "./component/Contact/Contact";
import AdminUpload from "./component/AdminUpload/AdminUpload";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import SingleCampaign from './component/SingleCampaign/SingleCampaign';
import CampaignUpload from './component/CampaignUpload/CampaignUpload';
import ArticleUpload from './component/ArticleUpload/ArticleUpload';
import Login from "./component/Login/Login";
import NavBar from './component/NavBar/NavBar';
import { createContext, useEffect } from 'react';
import { useState } from 'react';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ContactMessages from './component/ContactMessages/ContactMessages';
import NotFound from './component/NotFound/NotFound';


export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [camps, setCamps] = useState({});
  useEffect(() => {
    fetch("https://shielded-peak-65069.herokuapp.com/showcampaigns")
    .then(res=>res.json())
    .then(data=>setCamps(data))
},[]);
  return (

    <UserContext.Provider value = {{value :[loggedInUser, setLoggedInUser], value2 :[camps, setCamps]}}>
    <Router>
      <NavBar></NavBar>
      <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute exact path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route exact path="/campaigns">
            <Campaigns></Campaigns>
          </Route>
          <Route exact path="/campaigns/:key">
            <SingleCampaign></SingleCampaign>
          </Route>
          <Route exact path="/donation">
            <Donation></Donation>
          </Route>
          <Route exact path="/about-us">
            <AboutUs></AboutUs>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <PrivateRoute exact path="/adminupload">
            <AdminUpload></AdminUpload>
          </PrivateRoute>
          <PrivateRoute exact path="/campaignupload">
            <CampaignUpload></CampaignUpload>
          </PrivateRoute>
          <PrivateRoute exact path="/articleupload">
            <ArticleUpload></ArticleUpload>
          </PrivateRoute>
          <PrivateRoute exact path="/contactdetails">
            <ContactMessages></ContactMessages>
          </PrivateRoute>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
      </Switch>
    </Router>
  </UserContext.Provider>

  );
}

export default App;
