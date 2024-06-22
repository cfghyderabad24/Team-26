import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Correct path to slick.css
import 'slick-carousel/slick/slick-theme.css'; // Correct path to slick-theme.css
import './Home.css';

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="Home">
      <header className="header">
        <Slider {...sliderSettings}>
          <div><img src="/images/image1.jpg" alt="Slide 1" /></div>
          <div><img src="/images/image2.jpg" alt="Slide 2" /></div>
          <div><img src="/images/image3.jpg" alt="Slide 3" /></div>
        </Slider>
        <h1>NGO Organization</h1>
      </header>

      <section className="content">
        <div className="division" id="student">
          <h2>Student</h2>
          <p>Information about student involvement...</p>
          <Link to="/login">Login</Link> {/* Link to login page */}
        </div>
        <div className="division" id="volunteer">
          <Link to="/volunteer">
            <h2>Volunteer</h2>
            <p>Information about volunteering...</p>
            <Link to="/login">Login</Link> 
          </Link>
        </div>
        <div className="division" id="ngo">
          <h2>NGO</h2>
          <p>Information about the NGO...</p>
          <Link to="/login">Login</Link> 
        </div>
        <div className="division" id="trust">
          <Link to="/trustee">
            <h2>Trust</h2>
            <p>Information about trust...</p>
            <Link to="/login">Login</Link> 
          </Link>
        </div>
        <div className="division" id="alumni">
          <Link to="/alumni/home">
          <h2>Alumni</h2>
          <p>Information about alumni...</p>
          <Link to="/login">Login</Link> 
          </Link>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 stbhatevaraorg. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
