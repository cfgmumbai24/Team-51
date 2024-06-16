import React, { useState } from "react";
import "./Home.css";
import HealthCard from "./HealthCard";
import Family from "./Families";

const Home = ({ handleClick }) => {
  const [ok, set_ok] = useState(1);
  const [ok2, set_ok2] = useState(1);
  const handleViewReport = () => {
    set_ok(2);
  };

  const HC = () => {
    set_ok(3);
  };
  const hideMenu = () => {
    const navLinks = document.getElementById("navLinks");
    navLinks.style.display = "none";
  };

  const showMenu = () => {
    const navLinks = document.getElementById("navLinks");
    navLinks.style.display = "block";
  };

  return (
    <>
      {ok === 1 ? (
        <>
          <div>
            <section className="header">
              <nav>
                <a href="index.html">
                  <img src="images/logo1.png" alt="Logo" />
                </a>
                <div className="nav-links" id="navLinks">
                  <i className="fa fa-close" onClick={hideMenu}></i>
                  <ul>
                    <li>
                      <a href="index.html">HOME</a>
                    </li>
                    <li>
                      <a href="about.html">ABOUT</a>
                    </li>
                    <li>
                      <a href="">MAIN WEBSITE</a>
                    </li>
                    <li>
                      <a href="contact.html">CONTACT</a>
                    </li>
                  </ul>
                </div>
                <i className="fa fa-bars" onClick={showMenu}></i>
              </nav>

              <div className="text-box">
                <h1>GOAT MITRA</h1>
                <p>
                  A Gram Urja Foundation !<br />
                  We Rise by Lifting Others
                </p>
                <a href="https://temporary-alpha-snowy.vercel.app/" className="hero-btn">
                  contact a doctor immidiately 
                </a>
              </div>
            </section>

            <section className="course">
              <h1>Facilities We Offer</h1>
              <p>Platform for Families and Doctors to care for goats</p>
              <div className="row">
                <div className="course-col">
                  <h3>Families</h3>
                  <p>
                    Families can come up to have insight into caring for their
                    goats
                  </p>
                  <a href = "https://client-liart-theta.vercel.app/" onClick={HC}>Learn More</a>
                </div>
                <div className="course-col">
                  <h3>Doctors</h3>
                  <p>Platform to serve for the care and need for the goats</p>
                  <button onClick={handleViewReport}>Learn More</button>
                </div>
              </div>
            </section>

            <section className="cta">
              <h1>
                Enroll with us <br />
                Anywhere From India
              </h1>
              <a href="" className="hero-btn">
                CONTACT US
              </a>
            </section>

            <section className="footer">
              <h4>About Us</h4>
              <p>
                <br />
                We are spread across various villages across India.
              </p>
              <div className="icons">
                <a href="">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
              <a href="" className="footer-link">
                <p>
                  made with <i className="fa fa-heart-o"></i> by Team 51
                </p>
              </a>
            </section>
          </div>
        </>
      ) : (
        <>
          <>{ok === 2 ? <HealthCard /> : <></>}</>
          <>{ok === 3 ? <Family /> : <></>}</>
        </>
      )}
    </>
  );
};

export default Home;
