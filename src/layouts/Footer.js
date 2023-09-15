import React from 'react';
import { footerStyles } from '../layouts/FooterStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      <main style={{ flex: 1 }}>
        
      </main>
      <footer style={footerStyles.container}>
  <div style={footerStyles.containerInner}>
    {/* Column 1 (Logo) */}
    <div style={footerStyles.column}>
      <img
        src="https://i0.wp.com/rentandborrow.in/wp-content/uploads/2022/12/Rent-and-Borrow-logos_white-Copy-1.png?resize=222%2C65&ssl=1"
        alt="RAB Logo"
        width="222"
        height="65"
      />
      <p>RAB is the best of the best.</p>
      <p>Rent and earn, Borrow and save!</p>
    </div>
    {/* Column 2 (Location) */}
    <div style={footerStyles.column }>
      <h6 style={footerStyles.columnTitle}>Locations</h6>
      <p>Pune</p>
      <p>Bangalore</p>
    </div>
  </div>
</footer>

      {/* Second Footer */}
      <footer style={footerStyles.contact}>
        <div style={footerStyles.containerInner}>
          <div style={footerStyles.column}>
            <FontAwesomeIcon icon={faEnvelope} size="1x" className="text-green-800" style={{ color: '#3cb371', marginRight: '8px' }} />
            <a href="mailto:support@rentandborrow.in" style={{ color: 'white', textDecoration: 'none' }}>
              support@rentandborrow.in
            </a>
          </div>
          <div style={footerStyles.column}>
            <FontAwesomeIcon icon={faMobileAlt} size="1x" className="text-green-800" style={{ color: '#3cb371', marginRight: '8px', marginLeft: '-120px' }} />
            <a href=" tel: +91-7028859186" style={{ color: 'white', textDecoration: 'none' }}>
                +91-7028859186
            </a>
          </div>
          <div style={footerStyles.column}>
      <span style={{ color: '#999999', marginRight: '20px' }}>FOLLOW US</span>
      <a href="https://twitter.com/your_twitter_url" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginRight: '10px', width: '30px', height: '30px', borderRadius: '50%', textAlign: 'center', lineHeight: '30px', textDecoration: 'none', border: '1px solid #999999' }}>
        <FontAwesomeIcon icon={faTwitter} size="1x" style={{ color: '#999999' }} />
      </a>
      <a href="https://www.instagram.com/your_instagram_url" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginRight: '10px', width: '30px', height: '30px', borderRadius: '50%', textAlign: 'center', lineHeight: '30px', textDecoration: 'none', border: '1px solid #999999' }}>
        <FontAwesomeIcon icon={faInstagram} size="1x" style={{ color: '#999999' }} />
      </a>
      <a href="https://www.linkedin.com/in/your_linkedin_url" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', width: '30px', height: '30px', borderRadius: '50%', textAlign: 'center', lineHeight: '30px', textDecoration: 'none', border: '1px solid #999999' }}>
        <FontAwesomeIcon icon={faLinkedin} size="1x" style={{ color: '#999999' }} />
      </a>
    </div>
        </div>
      </footer>

      {/* Third Footer */}
      <footer style={footerStyles.copyright}>
        <div style={footerStyles.containerInner}>
          <div style={footerStyles.column}>
            Made with 💙 in India - Copyright ©️ 2023. All rights reserved
          </div>
          <div style={footerStyles.column}>
            <a href="https://terms-conditions/" style={{ color: '#999999', textDecoration: 'none', marginLeft:'400px' }}>
              Terms &#038; Conditions
            </a>
          </div>
        </div>
      </footer>
      </div>
    
  );
};

export default Footer;

