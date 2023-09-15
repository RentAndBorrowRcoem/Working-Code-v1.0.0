import React from "react";
import "../styles/CategoriesC.css";
import "../styles/GlobalStyles.css";
import Clothes from "../assests/Clothes.jpg";
import Furniture from "../assests/Furniture.jpg";
import Parking from "../assests/Parking1.jpg"
import Mobile from "../assests/Mobile.jpg";
import electronics from "../assests/electronics.jpg"


const CategoriesC = () => {
  return (
    <div className="bg-container">
      <div className="left-content">
        <div className="text-block">
          <p>Most Popular</p>
        </div>
        <div className="text-block">
          <h2>Categories</h2>
        </div>
      </div>
      <div className="right-content">
        <div className="arrow-block">
          <p>
            Browse Categories
            <span className="arrow">&#10140;</span>
          </p>
        </div>
      </div>
      <div className="Category-button-container">
        <div className="category-button">
          <span>Electronics</span>
          <img src={electronics} alt="electronics" />
        </div>
        <div className="category-button">
          <span>Mobiles</span>
          <img src={Mobile} alt="Mobile" />
        </div>
        <div className="category-button">
          <span>Furniture</span>
          <img src={Furniture} alt="Furniture" />
        </div>
        <div className="category-button">
          <span>Parking Space</span>
          <img src={Parking} alt="Parking" />
        </div>
        <div className="category-button">
          <span>Clothes</span>
          <img src={Clothes} alt="Clothes" />
        </div>
      </div>
    </div>
  );
};

export default CategoriesC;
