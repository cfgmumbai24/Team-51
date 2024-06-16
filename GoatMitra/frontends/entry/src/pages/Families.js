// import "./Family.css";
import React, { useState } from "react";

function Family() {
  return (
    <div>
      <section className="header">
        <nav>
          <a href="index.html">
            <img src="images/logo1.png" />
          </a>
          <div className="nav-links" id="navLinks">
            <i className="fa fa-close" onclick="hideMenu()"></i>
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
          <i className="fa fa-bars" onclick="showMenu()"></i>
        </nav>

        <div className="text-box">
          <h1>GRAM URJA</h1>
          <p>
            Welcome to Gram Urja Foundation !<br />
            We Rise by Lifting Others
          </p>
          <a href="contact.html" className="hero-btn">
            Visit Us to Know More
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
              Families can come up to have insight into caring for their goats
            </p>
            <a href="">Learn More</a>
          </div>
          <div className="course-col">
            <h3>Doctors</h3>
            <p>Platform to serve for the care and need for the goats</p>
            <a href="">Learn More</a>
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
  );
}

export default Family;
