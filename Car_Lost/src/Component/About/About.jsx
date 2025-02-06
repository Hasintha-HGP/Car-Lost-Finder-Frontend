import React, { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './About.css';
import Navi from '../Navigation/navi.jsx';
import Traff from '../Images/Home/Road.jpg';
import Police from '../Images/Home/Police.png';
import Comment from '../Comment section/Comment.jsx';
import chose from '../Images/Home/choose.png';
import Footer from '../Footer/Footer.jsx';
import { BsCarFront, BsFillHousesFill, BsBellFill, BsFillPinMapFill } from "react-icons/bs";
import NotificationPanel from '../Notification/NotificationPanel.jsx'; 

function About() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [cityResults, setCityResults] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);

  const mockCities = [
    "New York", "Los Angeles", "Chicago", "Houston", "Phoenix",
    "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"
  ];

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form submission
    const filteredCities = mockCities.filter(city =>
      city.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setCityResults(filteredCities);
    setShowResults(filteredCities.length > 0);
  };

  const handleRecentEntriesClick = () => {
    setShowNotifications(prevState => !prevState);
  };

  useEffect(() => {
    const scrollRevealOption = {
      distance: "100px",
      origin: "bottom",
      duration: 1000,
    };

    ScrollReveal().reveal(".About_image img", { ...scrollRevealOption, origin: "right" });
    ScrollReveal().reveal(".aboutmain", { ...scrollRevealOption, delay: 800 });
    ScrollReveal().reveal(".aboutmain h1", { ...scrollRevealOption, delay: 1000 });
    ScrollReveal().reveal(".aboutmain p", { ...scrollRevealOption, delay: 1200 });
    ScrollReveal().reveal(".about__card, .icons", { ...scrollRevealOption, interval: 500 });
    ScrollReveal().reveal(".About_image1 img", {
      ...scrollRevealOption,
      origin: "left",
      distance: "300px",
      duration: 2500,
      opacity: 0,
      reset: true
    });

    const handleScroll = () => {
      console.log("Scrolling...");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navi />
      <div className='about'>
        <div className='imag1'>
          <img src={Traff} alt="Traffic Scene" />
        </div>

        <div className='aboutmain'>
          <h1><ins><b>WHAT WE OFFER</b></ins></h1>
          <p>
            WELCOME TO OUR CAR FINDING SYSTEM! WE OFFER A RELIABLE PLATFORM FOR USERS TO REGISTER THEIR VEHICLES,
            MAINTAIN RECORDS, AND QUICKLY UPDATE THEIR STATUS IN CASE OF LOSS OR THEFT. OUR SYSTEM ENSURES COMMUNITY COLLABORATION
            BY NOTIFYING OTHER USERS TO KEEP AN EYE OUT FOR STOLEN VEHICLES, ENHANCING THE CHANCES OF RECOVERY.
          </p>
        </div>

        <div className='About_container' id='about'>
          <div className='About_image'>
            <img src={Police} alt="Police" />
          </div>
        </div>

        <div className='work'>
          <h1 className='work_section'>Try Our Features</h1>
          <p className='work_section_description'> Explore how our platform makes vehicle management easier </p>
          <div className="about__grid">
            {[
              { title: "ADD YOUR VEHICLE", desc: "Quickly register your vehicle for secure record-keeping." },
              { title: "Update Vehicle Status", desc: "Share important updates, such as if your vehicle is lost or recovered." },
              { title: "Recent Entries", desc: "View vehicle details shared by others for better community collaboration." },
              { title: "Add Garage Details", desc: "Maintain and organize your garage information effortlessly." }
            ].map((item, index) => (
              <div key={index} className="about__card">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='icons'>
          {[
            { href: "/Addcar", text: "ADD YOUR VEHICLE", icon: <BsCarFront className='iconAdd' /> },
            { href: "/CarStatus", text: "UPDATE VEHICLE STATUS", icon: <BsFillPinMapFill className='iconAdd' /> },
            { onClick: handleRecentEntriesClick, text: "RECENT ENTRIES", icon: <BsBellFill className='iconAdd' /> },
            { href: "/AddGarage", text: "ADD YOUR GARAGE", icon: <BsFillHousesFill className='iconAdd' /> }
          ].map((item, index) => (
            <div key={index} className='icons-item'>
              <a href={item.href} onClick={item.onClick}>
                <p><b>{item.text}</b></p>
                {item.icon}
              </a>
            </div>
          ))}
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
          <div className="search-results-panel">
            {cityResults.length > 0 ? cityResults.map((city, index) => (
              <div key={index} className="search-result-card">
                <h3>{city}</h3>
                <p>Find more about {city}</p>
              </div>
            )) : (
              <div className="no-results">No cities found</div>
            )}
          </div>
        )}

        <div className='about_us' id='About_us'>
          <h4>About Us</h4>
          <p>Welcome to Car Finder Website, your trusted platform for safeguarding your vehicle information and personal details.</p>
          <p>At Car Finder Website, we prioritize privacy and security while ensuring seamless vehicle management.</p>
        </div>

        <div className='contact_us' id='contact_us'>
          <hr />
          <h4>Contact Us</h4>
          <p>011-3245606 | 0715345670</p>
          <p>University of Kelaniya, Dalugama, Sri Lanka</p>
          <p>lostcarfindlk@gmail.com</p>
          <hr />
        </div>

        <div className='Review'>
          <h4>Add Online Review</h4>
          <p>Share your experience with us! Your feedback helps us improve.</p>
        </div>

        <div className='About_image1'>
          <img src={chose} alt="Choose Us" />
        </div>

        <div className='Reviews'>
          <Comment />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
