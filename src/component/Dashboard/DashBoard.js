import React, { useEffect, useState } from 'react';
import "./Dashboard.scss";
import BackToTop from "react-back-to-top-button";
import phone from "../../images/phone.png";
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';



const DashBoard = () => {
  const [ donations , setDonations] = useState([]);
  const [ admins,setAdmins]=useState([]);
  const [joinedCamps, setJoinedCamps] = useState([]);
  const [campaigns, setCampaigns] = useState([]);

    useEffect(()=>{
      const url = `https://shielded-peak-65069.herokuapp.com/showdonations`;
         fetch(url)
         .then(res => res.json())
         .then(data => setDonations(data))
      },[])
      useEffect(()=>{
        const url = `https://shielded-peak-65069.herokuapp.com/showcampaigns`;
           fetch(url)
           .then(res => res.json())
           .then(data => setCampaigns(data))
        },[])
      useEffect(()=>{
        const url = `https://shielded-peak-65069.herokuapp.com/showadmins`;
           fetch(url)
           .then(res => res.json())
           .then(data => setAdmins(data))
        },[])
        useEffect(()=>{
          const url = `https://shielded-peak-65069.herokuapp.com/showjoinedcampaigns`;
             fetch(url)
             .then(res => res.json())
             .then(data => setJoinedCamps(data))
          },[])
        const userEmail = sessionStorage.getItem("token");
        const admin = admins.find(admin => admin.Email === userEmail);
        const yourDonation = donations.filter(donation => donation.Email === userEmail);
        const yourJoinedCampaign = joinedCamps.filter(joined => joined.Email === userEmail);
        const allDonations = donations.map(donation => donation.Amount)
        const totalCampaigns = campaigns.length;
        const totalDonation = donations.length;
        const totalAdmins = admins.length;
        const totalVolunteers = joinedCamps.length;

        const handlelogout = () =>{
          sessionStorage.setItem("token", "")
          window.location.reload();
      }    

      const totalDonatedAmount = (amount) =>{
      let total = 0;
      for (let i = 0; i < amount.length; i++) {
        total += parseInt(amount[i]);
    }
    return total;
    }    
    const totalDonationAmount = totalDonatedAmount(allDonations);
    return (
        <div>
          {
            admin?
            
            
            <div style={{backgroundColor:"#b6edf8"}}>
            <div className="app-container">
   <div className="left-area">
     <button className="btn-close-left">
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="feather feather-x-circle" viewBox="0 0 24 24">
         <defs />
         <circle cx="12" cy="12" r="10" />
         <path d="M15 9l-6 6M9 9l6 6" />
       </svg>
     </button>
     <div className="app-name">Dashboard</div>
   
     <a href="/" onClick={handlelogout} className="btn-logout" title='Log Out'>
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="feather feather-log-out" viewBox="0 0 24 24">
         <defs />
         <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" />
       </svg>
     </a>
   </div>
   <div className="main-area">
     <button className="btn-show-right-area">
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-left">
         <polyline points="15 18 9 12 15 6" />
       </svg>
     </button>
     <button className="btn-show-left-area">
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
         <line x1="3" y1="12" x2="21" y2="12" />
         <line x1="3" y1="6" x2="21" y2="6" />
         <line x1="3" y1="18" x2="21" y2="18" />
       </svg>
     </button>
    
     <section className="content-section">
       <h1 className="section-header">Admin Panel</h1>
       <div className="access-links">
         <div className="access-link-wrapper">
           <Link to="/adminupload">
           <div className="access-icon">
             <img src="http://cdn.onlinewebfonts.com/svg/img_568656.png" alt=""></img>
           </div>
           </Link>
           <span className="access-text">Add new Admin</span>
         </div>
         <div className="access-link-wrapper">
         <Link to="/campaignupload">
           <div className="access-icon">
             <img src="https://static.thenounproject.com/png/155675-200.png" alt=""></img>
           </div>
           </Link>
           <span className="access-text">Add new Campaign</span>
         </div>
         <div className="access-link-wrapper">
         <Link to="/articleupload">
           <div className="access-icon">
             <img src="https://icon-library.com/images/article-icon-png/article-icon-png-2.jpg" alt=""></img>
           </div>
           </Link>
           <span className="access-text">Write an Article</span>
         </div>
         <div className="access-link-wrapper">
         <Link to="/contactdetails">
           <div className="access-icon">
             <img src="https://icon-library.com/images/send-message-icon-png/send-message-icon-png-29.jpg" alt=""></img>
           </div>
           </Link>
           <span className="access-text">All Messages</span>
         </div>
       </div>
     </section>
 
     <section className="content-section d-flex justify-content-around">
     <div className='mx-2'>
       <div className="progress" data-percentage="100">
         <span className="progress-left">
           <span className="progress-bar"></span>
         </span>
         <span className="progress-right">
           <span className="progress-bar"></span>
         </span>
         <div className="progress-value">
           <div>
             {totalCampaigns}<br/>
             <span>Campaigns Assigned</span>
           </div>
         </div>
       </div>
     </div>
         <div className='mx-2'>
       <div className="progress" data-percentage="100">
         <span className="progress-left">
           <span className="progress-bar"></span>
         </span>
         <span className="progress-right">
           <span className="progress-bar"></span>
         </span>
         <div className="progress-value">
           <div>
             {totalDonation}<br/>
             <span>Donation Count</span>
           </div>
         </div>
       </div>
     </div>
     <div className='mx-2'>
       <div className="progress" data-percentage="100">
         <span className="progress-left">
           <span className="progress-bar"></span>
         </span>
         <span className="progress-right">
           <span className="progress-bar"></span>
         </span>
         <div className="progress-value">
           <div>
             {totalDonationAmount}<br/>
             <span>Total Donation<br></br> Amount</span>
           </div>
         </div>
       </div>
     </div>
     <div className='mx-2'>
       <div className="progress" data-percentage="100">
         <span className="progress-left">
           <span className="progress-bar"></span>
         </span>
         <span className="progress-right">
           <span className="progress-bar"></span>
         </span>
         <div className="progress-value">
           <div>
             {totalAdmins}<br/>
             <span>Total Admins</span>
           </div>
         </div>
       </div>
     </div>
     <div className='mx-2'>
       <div className="progress" data-percentage="100">
         <span className="progress-left">
           <span className="progress-bar"></span>
         </span>
         <span className="progress-right">
           <span className="progress-bar"></span>
         </span>
         <div className="progress-value">
           <div>
             {totalVolunteers}<br/>
             <span>Total Volunteers</span>
           </div>
         </div>
       </div>
     </div>
 
     </section>
     <section className="content-section">
       <div className="section-header-wrapper">
         <h1 className="section-header">Recent Donation</h1>
       </div>
       <div className="files-table">
         <div className="files-table-header">
           <div className="column-header table-cell">Name</div>
           <div className="column-header table-cell">Phone</div>
           <div className="column-header table-cell size-cell">Amount</div>
           <div className="column-header table-cell">TrxID</div>
           <div className="column-header table-cell">Certificate</div>
         </div>
        {
           donations.map((donation, index)=>
           <div className="files-table-row">
           <div className="table-cell name-cell">{donation.Name}</div>
           <div className="table-cell">{donation.Phone}</div>
           <div className="table-cell">৳{donation.Amount}</div>
           <div className="table-cell name-cell">{donation.TrxID}</div>
           <div className="table-cell">
             <button className="btn btn-success">Upload</button>
           </div>
         </div>
           
           )
        }
       </div>
     </section>
   </div>
   <div className="right-area">
     <div className="right-area-header-wrapper">
       <p className="right-area-header">Admin Info</p>
     </div>
 
     <div className="download-item-line">
       <div className="download-area ">
           <img className='w-100' src={admin.imageURL} alt="email"/>
       </div>
     </div>
 
     <div className="download-item-line">
       <div className="download-area">
         <div>
             <p>Welcome, <span className='fw-bold'>{admin.Name}</span></p>
         </div>
       </div>
     </div>
 
     <div className="download-item-line">
       <div className="line-header">Email</div>
       <div className="download-area">
         <div className="download-item-icon">
             <p>{admin.Email}</p>
         </div>
       </div>
     </div>
 
     <div className="download-item-line">
       <div className="line-header">Phone</div>
       <div className="download-area">
       <icon><img className='download-icon mx-3' src={phone} alt="phone"></img></icon>
         <div className="download-item-icon">
             <p>{admin.Phone}</p>
         </div>
       </div>
     </div>
   </div>
 </div>
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


         
         
         :
         
         
         
         
         <div style={{backgroundColor:"#b6edf8"}}>
           <div className="app-container">
  <div className="left-area">
    <button className="btn-close-left">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="feather feather-x-circle" viewBox="0 0 24 24">
        <defs />
        <circle cx="12" cy="12" r="10" />
        <path d="M15 9l-6 6M9 9l6 6" />
      </svg>
    </button>
    <div className="app-name">Dashboard</div>
  
    <a onClick={handlelogout} href="/" className="btn-logout" title='Log Out'>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="feather feather-log-out" viewBox="0 0 24 24">
        <defs />
        <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" />
      </svg>
    </a>
  </div>
  <div className="main-area">
    <button className="btn-show-right-area">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-left">
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </button>
    <button className="btn-show-left-area">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    </button>
   
    <section className="content-section">
      <h1 className="section-header">User Panel</h1>
      <div className="access-links">
        <div className="access-link-wrapper">
        <Link to="/campaigns">
          <div className="access-icon">
            <img src="https://static.thenounproject.com/png/155675-200.png" alt=""></img>
          </div>
          </Link>
          <span className="access-text">Join new Campaign</span>
        </div>
        <div className="access-link-wrapper">
        <Link to="/articleupload">
          <div className="access-icon">
            <img src="https://icon-library.com/images/article-icon-png/article-icon-png-2.jpg" alt=""></img>
          </div>
          </Link>
          <span className="access-text">Write an Article</span>
        </div>
      </div>
    </section>

    <section className="content-section">
      <div className="section-header-wrapper">
        <h1 className="section-header">Your Joined Campaigns</h1>
      </div>
      <div className="files-table">
        <div className="files-table-header">
          <div className="column-header table-cell">Email</div>
          <div className="column-header table-cell">Campaign Name</div>
          <div className="column-header table-cell">Campaign Date</div>
          <div className="column-header table-cell">Campaign Place</div>
        </div>
       {
          yourJoinedCampaign.map((joined, index)=>
          <div className="files-table-row">
          <div className="table-cell name-cell">{joined.Email}</div>
          <div className="table-cell">{joined.Campaign.Title}</div>
          <div className="table-cell">{joined.Campaign.Date}</div>
          <div className="table-cell">{joined.Campaign.Place}</div>
        </div>
          
          )
       }
      </div>
    </section>

    <section className="content-section">
      <div className="section-header-wrapper">
        <h1 className="section-header">Your Donation</h1>
      </div>
      <div className="files-table">
        <div className="files-table-header">
          <div className="column-header table-cell">Name</div>
          <div className="column-header table-cell">Phone</div>
          <div className="column-header table-cell size-cell">Amount</div>
          <div className="column-header table-cell">TrxID</div>
        </div>
       {
          yourDonation.map((donation, index)=>
          <div className="files-table-row">
          <div className="table-cell name-cell">{donation.Name}</div>
          <div className="table-cell">{donation.Phone}</div>
          <div className="table-cell">৳{donation.Amount}</div>
          <div className="table-cell name-cell">{donation.TrxID}</div>
        </div>
          
          )
       }
      </div>
    </section>
  </div>
  <div className="right-area">
    <div className="right-area-header-wrapper">
      <p className="right-area-header">User Info</p>
    </div>

    <div className="download-item-line">
      <div className="download-area ">
          <img className='w-100' src={"https://clipart.world/wp-content/uploads/2021/06/Welcome-clipart-png.png"} alt="email"/>
      </div>
    </div>
    <div className="download-item-line">
      <div className="line-header">Your Email</div>
      <div className="download-area">
        <div className="download-item-icon">
            <p>{userEmail}</p>
        </div>
      </div>
    </div>
  </div>
</div>
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
          }
        </div>
    );
};

export default DashBoard;