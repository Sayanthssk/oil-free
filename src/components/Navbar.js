import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm" style={{ background: 'linear-gradient(to bottom, #f3da94, #fce6b5)' }}>
      <div className="container d-flex align-items-center justify-content-between">
        {/* Logos */}
        <div className="d-flex align-items-center">
          <img src="/me.png" alt="Logo 1" className="me-2" style={{ height: '50px' }} />
          {/* <img src="/logo2.png" alt="Logo 2" className="me-2" style={{ height: '50px' }} />  */}
        </div>
        {/* Navigation Links */}
        <ul className="navbar-nav flex-row mx-auto">
          <li className="nav-item px-3">
            <Link to='/' className="nav-link text-dark fw-bold" >Brand</Link>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link text-dark fw-bold" href="#about">About us</a>
          </li>
          <li className="nav-item px-3">
            <Link to='/menu' className="nav-link text-dark fw-bold" >Center of Excellence</Link>
          </li>
          <li className="nav-item px-3">
            <Link className="nav-link text-dark fw-bold" href="#media">Cart</Link>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link text-dark fw-bold" href="#careers">Careers</a>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link text-dark fw-bold" href="#contact">Contact Us</a>
          </li>
        </ul>
        {/* Order Online Button */}
        <div>
          <button className="btn btn-primary px-4" style={{ borderRadius: '30px' }}>
            Order Online
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;