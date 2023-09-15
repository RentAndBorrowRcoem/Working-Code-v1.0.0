import React, { useState } from 'react';
import "../styles/PromoAdsC.css";
import Bed from "../assests/Bed.png"
import { AiOutlineTag , AiOutlineHeart} from 'react-icons/ai';


const PromoAdsC = () => {
  // Define state variables for each button's clicked state
  const [button1Clicked, setButton1Clicked] = useState(false);
  const [button2Clicked, setButton2Clicked] = useState(false);

  // Function to handle button 1 click
  const handleButton1Click = () => {
    setButton1Clicked(true); // Set button 1 to clicked
    setButton2Clicked(false); // Set button 2 to not clicked
  };

  // Function to handle button 2 click
  const handleButton2Click = () => {
    setButton1Clicked(false); // Set button 1 to not clicked
    setButton2Clicked(true); // Set button 2 to clicked
  };

  return (
    <div>
      <div className="PromoAds-bg-container">
        <div className="PromoAds-left-content">
          <div className="PromoAds-text-block1">
            <p>Promotions</p>
          </div>
          <div className="PromoAds-text-block2">
            <h2>Promo Ads</h2>
          </div>
        </div>
        <div className="PromoAds-right-content">
          <div className="PromoAds-arrow-block">
            <p>
              Check all ads
              <span className="arrow">&#10140;</span>
            </p>
          </div>
        </div>
      </div>

      {/* Buttons placed in a separate container */}
      <div className="PromoAds-buttons">
        <button
          className={`PromoAds-button1 ${button1Clicked ? 'clicked' : ''}`}
          onClick={handleButton1Click}
        >
          Promotions
        </button>
        <button
          className={`PromoAds-button2 ${button2Clicked ? 'clicked' : ''}`}
          onClick={handleButton2Click}
        >
          Promo Ads
        </button>
      </div>

      {/* Images container */}
      <div className="PromoAds-images-container">
        <div className="PromoAds-image-container">
          <img src={Bed} alt="Bed" className="PromoAds-image1" />
          <div className='Like-Icon1'><AiOutlineHeart className='Like-Icon-style'/></div>
          <div className='Promo-Ads-Icon1'><AiOutlineTag className='Price-Icon'/></div>
          <div className='Promo-Ads-text-Upper1'>40000</div>
          <div className='Promo-Ads-text-overlay1'>OnePlus Mobile</div>
        </div>
        <div className="PromoAds-image-container">
          <img src={Bed} alt="Bed" className="PromoAds-image2" />
          <div className='Like-Icon2'><AiOutlineHeart className='Like-Icon-style'/></div>
          <div className='Promo-Ads-Icon2'><AiOutlineTag className='Price-Icon'/></div>
          <div className='Promo-Ads-text-Upper2'>99</div>
          <div className='Promo-Ads-text-overlay2'>Mobile</div>
        </div>
        <div className="PromoAds-image-container">
          <img src={Bed} alt="Bed" className="PromoAds-image3" />
          <div className='Like-Icon3'><AiOutlineHeart className='Like-Icon-style'/></div>
          <div className='Promo-Ads-Icon3'><AiOutlineTag className='Price-Icon'/></div>
          <div className='Promo-Ads-text-Upper3'>price on call</div>
          <div className='Promo-Ads-text-overlay3'>Bed</div>
        </div>
      </div>
    </div>
  );
}

export default PromoAdsC;
