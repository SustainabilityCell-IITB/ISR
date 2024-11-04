import React from 'react';
import './Footer.css';
import Facebook from '../assets/Images/Facebook.webp';
import Instagram from '../assets/Images/Instagram.webp';
import LinkedIn from '../assets/Images/LinkedIn.webp'; 
import Logo from '../assets/Images/SCell-Logo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-left">
          <div className="logo"><img src={Logo}></img></div>
          <p>© Sustainability Cell IITB</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#Home">Move to the top</a></li>
            <li><a href='https://gymkhana.iitb.ac.in/~suscell/'>Sustainability Cell IITB</a></li>
          </ul>
        </div>
        <div className="footer-section SocialMedia-Container">
          <h4>Follow us on</h4>
            <ul>
                <a href="https://www.instagram.com/sustainabilitycell/"><img src={Instagram}></img></a>
                <a href="https://www.linkedin.com/company/sustainabilitycell/mycompany/"><img src={LinkedIn}></img></a>
                <a href="https://www.facebook.com/SustainabilityCell/"><img src={Facebook}></img></a>
            </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
