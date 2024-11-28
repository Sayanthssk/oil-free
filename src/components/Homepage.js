import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './Homepage.css'; // Custom CSS for additional styling
import Navbar from './Navbar';

const Homepage = () => {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
      alt: 'Delightful Meal',
    },
    {
      src: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Healthy Ingredients',
    },
    {
      src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
      alt: 'Oil-Free Recipes',
    },
    {
      src: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Oil-Free Recipes',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (direction) => {
    if (direction === 'next') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="homepage">
      <Navbar />

      {/* Hero Section */}
      <div className="hero-section position-relative text-center text-white d-flex align-items-center justify-content-center">
        <div className="hero-image">
          <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="w-100" />
        </div>
        <div className="hero-overlay text-center">
          <div className="container">
            <h1 className="animate__animated animate__fadeInDown display-4 fw-bold">
              Welcome to Oil-Free Delights
            </h1>
            <p className="animate__animated animate__fadeInUp lead mt-3">
              Experience the healthiest and tastiest meals without a drop of oil.
            </p>
            <a
              href="#contact"
              className="btn btn-primary btn-lg mt-4 animate__animated animate__zoomIn"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          className="btn btn-dark btn-lg hero-nav prev"
          onClick={() => handleScroll('prev')}
        >
          ‹
        </button>
        <button
          className="btn btn-dark btn-lg hero-nav next"
          onClick={() => handleScroll('next')}
        >
          ›
        </button>

        {/* Indicators */}
        <div className="image-indicator position-absolute d-flex justify-content-center">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="about-section py-5 text-center bg-primary-subtle">
        <div className="container">
          <h2 className="fw-bold mb-4">About Us</h2>
          <p className="text-muted">
            The no oil, no boil restaurant idea has been adopted in response to the need for healthy
            nutrition...
          </p>
          <p className="text-muted">
            I am well-trained in the health food industry through the inheritance of an online
            health food center...
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section py-5 text-white bg-primary-subtle">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Why Choose Us?</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <i className="bi bi-heart-fill display-4 text-primary"></i>
              <h5 className="mt-3">Healthy & Nutritious</h5>
              <p className="text-muted">
                Our meals are crafted to provide maximum nutrition with zero compromises on taste.
              </p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-leaf-fill display-4 text-success"></i>
              <h5 className="mt-3">100% Organic</h5>
              <p className="text-muted">
                We use only the finest organic ingredients sourced from trusted farms.
              </p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-award-fill display-4 text-warning"></i>
              <h5 className="mt-3">Award-Winning Taste</h5>
              <p className="text-muted">
                Enjoy food that has won hearts and accolades for its amazing flavors.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="contact-section py-5 text-center bg-transparent ">
        <div className="container">
          <h2 className="fw-bold mb-4">Contact Us</h2>
          <p className="text-muted">
            We'd love to hear from you! Reach out to us for bookings, inquiries, or just to say
            hello.
          </p>
          <form className="mt-4">
            <div className="row">
              <div className="col-md-6 mb-3">
                <input type="text" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="col-md-6 mb-3">
                <input type="email" className="form-control" placeholder="Your Email" required />
              </div>
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-lg">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
