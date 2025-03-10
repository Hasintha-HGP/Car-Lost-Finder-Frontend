import React, { useState,useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './About.css';
import Navi from '../Navigation/navi.jsx';
import Traff from '../Images/Home/Road.jpg';
import Police from '../Images/Home/Police.png';
import Comment from '../Comment section/Comment.jsx';
import chose from '../Images/Home/choose.png';
import Footer from '../Footer/Footer.jsx';
import { BsCarFront } from "react-icons/bs";
import { BsFillHousesFill } from "react-icons/bs";
import { BsBellFill } from "react-icons/bs";
import { BsFillPinMapFill } from "react-icons/bs";
import NotificationPanel from '../Notification/NotificationPanel.jsx'; 
import { useNavigate } from 'react-router-dom';
import UserService from '../Service/UserService.js';
import axios from 'axios';

function About(){
  const [searchQuery, setSearchQuery] = useState("");
  const navigate=useNavigate();
  const [userData, setUserData] = useState({});
  const [showNotifications, setShowNotifications] = useState(false);
  const [cityResults, setCityResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [nearGarages, setNearGarages] = useState([]);
  const [error, setError] = useState(null);


  const mockCities = [
    "Kandy", "Los Angeles", "Chicago", "Houston", "Phoenix",
    "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"
  ];

  useEffect(() => {
    if (!searchQuery) return; 
  
    axios.get(`http://localhost:8080/garagesNear/${searchQuery}`)
      .then(response => {
        if (response.data.statusCode === 200) {
          setNearGarages(response.data.garages);
          setError(null);
        } else {
          setNearGarages([]);
          setError("No garages found.");
        }
      })
      .catch(error => {
        console.error("Error fetching garages:", error);
        setError("Failed to fetch garages data.");
      });
  }, [searchQuery]); 
  

  
  const handleSearch = (e) => {
    e.preventDefault(); 
    const filteredCities = mockCities.filter(city =>
      city.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setCityResults(filteredCities);
    setShowResults(filteredCities.length > 0);
  };

  const handleRecentEntriesClick = () => {
    setShowNotifications((prevState) => !prevState);
  };
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    UserService.getProfile()
      .then((response) => {
        console.log("Full API Response:", response);
        localStorage.setItem('userDetails', JSON.stringify(response)); 
        if (response && response.user) {
          setUserData(response.user);
        } else {
          console.error("Invalid response format:", JSON.stringify(response));
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        if (error.response?.status === 401) {
          localStorage.removeItem('token');
          navigate('/login');
        }
      });
  }, [navigate]);

  useEffect(() => {
    const scrollRevealOption = {
      distance: "40px",
      duration: 1200,
      easing: "ease-in-out",
      opacity: 0,
      reset: false,
    };

    
    const revealElement = (selector, customOptions = {}) => {
      ScrollReveal().reveal(selector, { ...scrollRevealOption, ...customOptions });
    };

    
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    
    revealElement(".About_image img", { origin: "right" });
    revealElement(".aboutmain", { delay: 600 });
    revealElement(".aboutmain h1", { delay: 800 });
    revealElement(".aboutmain p", { delay: 1000 });
    revealElement(".about__card", { interval: 400 });
    revealElement(".icons", { interval: 400 });
    revealElement(".About_image1 img", {
      origin: "left",
      distance: "250px",
      duration: 1800,
      reset: true,
    });
    
    
    const handleScroll = () => console.log("Scrolling...");
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    }, []);

    const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
    return(
    <>
    
    <Navi/>
    <div className="scroll-container">
        <svg className="progress-ring" viewBox="0 0 100 100">
          <circle className="progress-ring__background" cx="50" cy="50" r="40"/>
          <circle
            className="progress-ring__progress"
            cx="50"
            cy="50"
            r="40"
            style={{ strokeDashoffset: 251 - (251 * scrollPercentage) / 100 }}
          />
          <text x="50" y="55" className="progress-text">{Math.round(scrollPercentage)}%</text>
        </svg>
      </div>
    <div className='about'>
     <div className='imag1'>
            <img src={Traff}></img>
     </div>
        
        <div className='aboutmain'>
            <h1><ins><b>WHAT WE OFFER</b></ins></h1>
            <p>WELCOME TO OUR CAR FINDING SYSTEM! WE OFFER A RELIABLE PLATFOAM FOR USERS TO REGISTER THEIR VEHICLES, MAINTAIN RECORDS,  AND QUIKLY UPDATE THEIR STATUS IN
            CASE OF LOSS OR THEFT. OUR SYSTEM ENSURES COMMUNITY COLLABORATION BY NOTIFYING OTHER USERS TO KEEP AN EYE OUT FOR STOLEN VEHICLES, ENHANCING THE CHANCES OF RECOVERY. TOGETHER , WE MAKE FINDING LOST VEHICLES EASIER AND
            FASTER</p>
            
        </div>
    <div className='About_container' id='about'>
        <div className='About_image'>
            <img src={Police} alt='about'/>
            </div>
            </div>

        <div className='work'>
            <h1 className='work_section'>Try Our Features</h1>
            <p className='work_section_description'> Explore how our platform makes vehicle management easier </p>
            <div className="about__grid">
        <div className="about__card">
          
          <h4>ADD YOUR VEHICLE</h4>
          <p>
          Quickly register your vehicle for secure record-keeping.
          </p>
        </div>
        <div className="about__card">
          
          <h4>Update Vehicle Status</h4>
          <p>
            Share important updates, such as if your vehicle is lost or recovered.
          </p>
        </div>
        <div className="about__card">
          
          <h4>Recent Entries</h4>
          <p>
          View vehicle details shared by others for better community collaboration.
          </p>
        </div>
        <div className="about__card">
          
          <h4>Add Garage Details</h4>
          <p>
          Maintain and organize your garage information effortlessly.
          </p>
        </div>
      </div>
      <p className='work_section_description'>Experience these features and simplify managing your vehicle details today! </p>
     </div>        
        
        <div className='icons'>
           <div className='icons1'>
            
            <a href='/Addcar'><p><b>ADD YOUR VEHICLE</b></p></a>
            <a href='/Addcar'>< BsCarFront  className='iconAdd'/></a>
            </div> 
            <div className='icons2'>
            
            <a href='/CarStatus'><p><b>UPDATE VEHICLE STATUS</b></p></a>
            <a href='/CarStatus'>< BsFillPinMapFill  className='iconAdd'/></a>
            </div>
            <div className='icons3'>
            
            <a onClick={handleRecentEntriesClick}><p><b>RECENT ENTRIES</b></p></a>
            <a onClick={handleRecentEntriesClick}>< BsBellFill  className='iconAdd'/></a>
            </div>  
            <div className='icons3'>
            
            <a href='/AddGarage'><p><b>ADD YOUR GARAGE</b></p></a>
            <a href='/AddGarage'>< BsFillHousesFill  className='iconAdd'/></a>
            </div>  
            
        </div>
        {showNotifications && <NotificationPanel />}
        <div className='garagesearch'>
          <h4>Find The Garage Near Your City</h4>
          <form className="search-bar" onSubmit={handleSearch}>
            <input
              type="search"
              name="search"
              pattern=".*\S.*"
              placeholder='Enter City'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-btn" type="submit">
              <span>Search</span>
            </button>
          </form>
        </div>

        {showResults && (
          <div className="search-result-panel">
          {nearGarages.map(garage => (
            <div key={garage.id} className="search-result-card">
              <strong>{garage.garageName}</strong>
              
              <p>Address: {garage.garageAddress}</p>
              <p>Home City: {garage.garageHome}</p>
              <p>Garage Specialization: {garage.garageSpecialization}</p>
              <p>Hotline Number: {garage.garageHotline}</p>
            </div>
          ))}
        </div>
        )}
        <div className='about_us' id='About_us'>
        <h4>About Us</h4>
        <p>Welcome to Car Finder Website, your trusted platform for safeguarding your vehicle information and personal details. Our mission is to provide a secure and reliable solution for managing your vehicle records while prioritizing your privacy.</p>
        <p>At Car Finder Website , we understand the importance of protecting sensitive information. That’s why we’ve implemented robust privacy measures to ensure your data remains secure and confidential. Our commitment to user privacy means you never have to worry about unauthorized access or misuse of your details.</p>
        <p>With features like vehicle registration, status updates, and community-driven collaboration, we aim to make managing and protecting your vehicle details seamless and stress-free. Rest assured, your trust and security are our top priorities.</p>
        <p>Join us today and experience a platform where privacy meets reliability.</p>
        </div>
        <div className='Review'>
        <h4>Add Online Review</h4>
        <p>Share your experience with us! Your feedback helps us improve and assists others in making the best choice</p>
        </div>
        <div className='About_image1'>
        <div className='About_image1'>
            <img src={chose}></img>
        </div>
        </div>
        <div className='Reviews'>
        <Comment/>
        </div>
        <div className='contact_us' id='contact_us'>
          <hr />
          <h4>Contact Us</h4>
          <p>011-3245606 | 0715345670</p>
          <p>University of Kelaniya, Dalugama, Sri Lanka</p>
          <p>lostcarfindlk@gmail.com</p>
          <hr />
        </div>
    </div>
    <Footer/>
    </>
    );
}

export default About
