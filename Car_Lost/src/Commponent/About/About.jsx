import React, { useState, useEffect } from 'react';
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
import NotificationPanel from '../Notification/NotificationPanel.jsx/';  

function About() {
  const [showNotifications, setShowNotifications] = useState(false);

  // Toggle function for showing notifications
  const handleRecentEntriesClick = () => {
    setShowNotifications((prevState) => !prevState);
  };

  useEffect(() => {
    const scrollRevealOption = {
      distance: "100px",
      origin: "bottom",
      duration: 1000,
    };

    ScrollReveal().reveal(".About_image img", {
      ...scrollRevealOption,
      origin: "right",
    });

    ScrollReveal().reveal(".aboutmain", {
      ...scrollRevealOption,
      delay: 800,
    });
    ScrollReveal().reveal(".aboutmain h1", {
      ...scrollRevealOption,
      delay: 1000,
    });
    ScrollReveal().reveal(".aboutmain p", {
      ...scrollRevealOption,
      delay: 1200,
    });
    ScrollReveal().reveal(".about__card", {
      ...scrollRevealOption,
      interval: 500,
    });
    ScrollReveal().reveal(".icons", {
      ...scrollRevealOption,
      interval: 500,
    });
    ScrollReveal().reveal(".About_image1 img", {
      ...scrollRevealOption,
      origin: "left",
      distance: "300px",
      duration: 2500,
      opacity: 0,
      reset: true,
    });
  }, []);

  return (
    <>
      <Navi />
      <div className="about">
        <div className="imag1">
          <img src={Traff} alt="Traffic" />
        </div>

        <div className="aboutmain">
          <h1>
            <ins>
              <b>WHAT WE OFFER</b>
            </ins>
          </h1>
          <p>WELCOME TO OUR CAR FINDING SYSTEM...</p>
        </div>

        <div className="About_container" id="about">
          <div className="About_image">
            <img src={Police} alt="about" />
          </div>
        </div>

        <div className="work">
          <h1 className="work_section">Try Our Features</h1>
          <p className="work_section_description">
            Explore how our platform makes vehicle management easier
          </p>
          <div className="about__grid">
            <div className="about__card">
              <h4>ADD YOUR VEHICLE</h4>
              <p>Quickly register your vehicle for secure record-keeping.</p>
            </div>
            <div className="about__card">
              <h4>Update Vehicle Status</h4>
              <p>Share important updates, such as if your vehicle is lost or recovered.</p>
            </div>
            <div className="about__card">
              <h4>Recent Entries</h4>
              <p>
                View vehicle details shared by others for better community collaboration.
              </p>
            </div>
            <div className="about__card">
              <h4>Add Garage Details</h4>
              <p>Maintain and organize your garage information effortlessly.</p>
            </div>
          </div>
          <p className="work_section_description">
            Experience these features and simplify managing your vehicle details today!
          </p>
        </div>

        <div className="icons">
          <div className="icons1">
            <a href="/Addcar">
              <p>
                <b>ADD YOUR VEHICLE</b>
              </p>
            </a>
            <a href="/Addcar">
              <BsCarFront className="iconAdd" />
            </a>
          </div>
          <div className="icons2">
            <a href="#">
              <p>
                <b>UPDATE VEHICLE STATUS</b>
              </p>
            </a>
            <a href="#">
              <BsFillPinMapFill className="iconAdd" />
            </a>
          </div>
          <div className="icons3">
            <a onClick={handleRecentEntriesClick}>
              <p>
                <b>RECENT ENTRIES</b>
              </p>
            </a>
            <a>
              <BsBellFill className="iconAdd" />
            </a>
          </div>
          <div className="icons3">
            <a href="/AddGarage">
              <p>
                <b>ADD YOUR GARAGE</b>
              </p>
            </a>
            <a href="/AddGarage">
              <BsFillHousesFill className="iconAdd" />
            </a>
          </div>
        </div>

        {/* Show notification panel only if toggled */}
        {showNotifications && <NotificationPanel />}

        <div className="about_us" id="About_us">
          <h4>About Us</h4>
          <p>Welcome to Car Finder Website, your trusted platform...</p>
        </div>

        <div className="Review">
          <h4>Add Online Review</h4>
          <p>Share your experience with us! Your feedback helps...</p>
        </div>

        <div className="About_image1">
          <img src={chose} alt="Choose" />
        </div>

        <div className="Reviews">
          <Comment />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
