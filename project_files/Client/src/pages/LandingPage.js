import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import doctorImg from "../assets/landing-doctor.png"; // ✅ Corrected here

function LandingPage() {
  return (
    <div className="landing-container">
      <nav className="navbar">
        <h1 className="logo">
          Doc<span className="logo-accent">Spot</span>
        </h1>
        <div className="nav-buttons">
          <Link to="/register-doctor" className="text-webnavyblue underline font-medium ml-4">
           Register as Doctor
          </Link>

          <Link to="/login" className="signin">Sign In</Link>
          <Link to="/signup" className="signup">Sign Up</Link>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-text">
          <h2>Seamless Doctor Booking</h2>
          <p>
            Book appointments with trusted healthcare professionals near you,
            anytime, anywhere.
          </p>
          <Link to="/home" className="cta-button">
            Find Doctors
          </Link>
        </div>
        <div className="hero-image">
          <img src={doctorImg} alt="DocSpot Demo" />
        </div>
      </section>

      <section className="why-section">
        <h3>Why DocSpot?</h3>
        <p>
          We help patients connect with the right doctors in just a few clicks –
          quick, easy, and secure.
        </p>
      </section>

      <footer className="footer">
        &copy; {new Date().getFullYear()} DocSpot. All rights reserved.
      </footer>
    </div>
  );
}

export default LandingPage;
