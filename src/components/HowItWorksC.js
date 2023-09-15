import React from 'react';
import '../styles/HowItWorksC.css';
import bgImg from "../assests/hiw-bg.jpg";
import Hiw1 from "../assests/hiw-1.png";
import Hiw2 from "../assests/hiw-2.png";
import Hiw3 from "../assests/hiw-3.png";
import Hiw4 from "../assests/hiw-4.png";

const HowItWorksC = () => {
  return (
    <div>
      <div className='HowItWorks-bg-image-container'>
        <img src={bgImg} alt="Background" className="HowItWorks-bg-image"></img>
        <div className='HowItWorks-Left-Content'>
          <div className='HowItWorks-text-content1'>
            <p>Get more Exposure?</p>
          </div>
          <div className='HowItWorks-text-content2'>
            <h2>How It Works?</h2>
          </div>
        </div>
        <div className='HowItWorks-Right-Content'>
          <div className='HowItWorks-text-content3'>
            <p>
              Register now
              <span className="HowItWorks-arrow">&#10140;</span>
            </p>
          </div>
        </div>
      </div>

      <div className='HowItWorks-Image-grid-parent'>
        <div className='HowItWorks-Image-grid1'>
          <div className='Hiw-Image-container'>
            <p className='Image-Label'>1</p>
            <img src={Hiw1} className='Hiw1-img' alt='Image 1' />
            <div className='Hiw-Image-text'>
              <h2>Register FREE</h2>
              <p>Register your account with us completely FREE </p>
            </div>
          </div>
        </div>
        <div className='HowItWorks-Image-grid1'>
          <div className='Hiw-Image-container'>
            <p className='Image-Label'>2</p>
            <img src={Hiw2} className='Hiw2-img' alt='Image 2' />
            <div className='Hiw-Image-text'>
              <h2>Submit Ad</h2>
              <p>Submit your product details and get listed</p>
            </div>
          </div>
        </div>
        <div className='HowItWorks-Image-grid1'>
          <div className='Hiw-Image-container'>
            <p className='Image-Label'>3</p>
            <img src={Hiw3} className='Hiw3-img' alt='Image 3' />
            <div className='Hiw-Image-text'>
              <h2>Get Exposure</h2>
              <p>Expand your reach to a larger audience</p>
            </div>
          </div>
        </div>
        <div className='HowItWorks-Image-grid1'>
          <div className='Hiw-Image-container'>
            <p className='Image-Label'>4</p>
            <img src={Hiw4} className='Hiw4-img' alt='Image 4' />
            <div className='Hiw-Image-text'>
              <h2>Earn & Save</h2>
              <p>Earn by renting out your products, Save by borrowing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorksC;
