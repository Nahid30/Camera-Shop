import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';


const Header = () => {
    return (
       
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid ">
        <a class="navbar-brand" href="#">
            <img src={logo} alt="" />
        </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0 ">
        <li class="nav-item ">
          <a href="#">Home</a>
          
        </li>
        <li class="nav-item">
          <a href="#">Products</a>
        </li>
        <li class="nav-item">
          <a href="#">Shop</a>
        </li>
        <li class="nav-item">
          <a href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a href="#">Contact</a>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>

    );
};

export default Header;