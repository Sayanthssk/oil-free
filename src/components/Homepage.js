import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './Homepage.css'; // Custom CSS for additional styling
import Navbar from './Navbar';

const Homepage = () => {
  const images = [
    {
      src: 'https://img.freepik.com/free-photo/italian-food-concept-with-pasta-space-left_23-2147686519.jpg?t=st=1733114390~exp=1733117990~hmac=8c2a4ce5ff330e1e5b0a98c1a1f3bd8b95179a515f93e953ca8ea5a344b31147&w=996',
      alt: 'Delightful Meal',
    },
    {
      src: 'https://img.freepik.com/free-photo/italian-food-concept-with-pasta-space-left_23-2147686519.jpg?t=st=1733114390~exp=1733117990~hmac=8c2a4ce5ff330e1e5b0a98c1a1f3bd8b95179a515f93e953ca8ea5a344b31147&w=996',
      alt: 'Healthy Ingredients',
    },
    {
      src: 'https://img.freepik.com/free-photo/vegetable-mix-wooden-bucket_114579-18580.jpg?t=st=1732852499~exp=1732856099~hmac=ca36e59e290f2ff2e802ec92d3519a810eadc108e8ed6cc7041ff273b3004aee&w=996',
      alt: 'Oil-Free Recipes',
    },
    {
      src: 'https://img.freepik.com/premium-photo/frame-assorted-fresh-vegetables-still-life-ripe-vegetables_210733-1687.jpg?w=996',
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
              Welcome to oil-free Kitchens
            </h1>
            <p className="animate__animated animate__fadeInUp lead mt-3">
              Experience the healthiest and tastiest meals without a drop of oil and boil.
            </p>
            <a
              href="#contact"
              className="btn btn-outline-primary btn-lg mt-4 animate__animated animate__zoomIn"
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
          The very objective of this project is to make an Oil-Free Kitchen that will particularly target a health-conscious consumer who wants only oil-free food that is nutritious. As more and more people commit themselves to physical fitness, so is the urge growing for healthy eating through healthy, nourishing, and nutrient-rich food products that serve a healthier lifestyle. Oil-Free Kitchen is targeting the need to prepare food using the least amounts of oil, still retaining the essential nutrients and natural flavors. The business uses advanced cooking techniques that retain the best taste in enhanced nutritional value for the ingredients. The company therefore seeks to attract customers that seek wellness together with fantastic dining experiences through offering a diversity of healthy-eating menus in which no sacrifice was made as to flavor or satisfaction. Altogether, the company's goal is to supply nutritious and palatable meals satisfying the emerging demand for healthier food choices within a sustainable, oil-free culinary experience which promotes good health through long-term well-being.   
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
          <h2 className="text-center fw-bold mb-4 text-dark">Why Choose Us?</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <i className="bi bi-heart-fill display-4 text-primary"></i>
              <h5 className="mt-3 text-danger">Healthy & Nutritious</h5>
              <p className="text-muted">
                Our meals are crafted to provide maximum nutrition with zero compromises on taste.
              </p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-leaf-fill display-4 text-success"></i>
              <h5 className="mt-3 text-danger">100% Organic</h5>
              <p className="text-muted">
                We use only the finest organic ingredients sourced from trusted farms.
              </p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-award-fill display-4 text-warning"></i>
              <h5 className="mt-3 text-danger">Award-Winning Taste</h5>
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
