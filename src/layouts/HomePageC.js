import React from "react";
import "../styles/HomePageC.css";
import image1 from "../assests/hero-bg.jpg";
import Mobile from "../assests/icons8-iphone-14-100.png";
import clothes from "../assests/icons8-clothes-96-1.png";
import wardrobe from "../assests/icons8-wardrobe-100.png";
import sports from "../assests/icons8-sports-100.png";
import tv from "../assests/icons8-tv-100.png";
import { FaSearch, FaRegKeyboard } from "react-icons/fa";

const HomePageC = () => {
  return (
    <div className="bg-image">
      <img src={image1} alt="Background" className="bg-image" />
      <div className="info-text">
        <p>More than 63 ads in 6 categories</p>
      </div>
      <div className="info-text2">
        <h1>List or find anything, literally.</h1>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Type your search term..." />
        <FaRegKeyboard className="keyboard-icon" />
        <button>
          <FaSearch className="search-icon" />
          Search
        </button>
      </div>
      <div className="button-container">
        <div className="custom-button-container">
        <button className="custom-button">
          <img src={tv} alt="TV" />
        </button>
        <p>Electronics</p>
        </div>
        
        <div className="custom-button-container">
        <button className="custom-button">
          <img src={Mobile} alt="Mobile" />
        </button>
        <p>Mobiles</p>
        </div>

        <div className="custom-button-container">
        <button className="custom-button">
          <img src={wardrobe} alt="Wardrobe" />
        </button>
        <p>Furniture</p>
        </div>

        <div className="custom-button-container">
        <button className="custom-button">
          <img src={clothes} alt="Clothes" />
        </button>
        <p>Parking Space</p>
        </div>

        <div className="custom-button-container">
        <button className="custom-button">
          <img src={clothes} alt="Clothes" />
        </button>
        <p>Clothes</p>
        </div>

        <div className="custom-button-container">
        <button className="custom-button">
          <img src={sports} alt="Sports" />
        </button>
        <p>Sports & Gym</p>
        </div>
        
      </div>
    </div>
  );
};

export default HomePageC;
