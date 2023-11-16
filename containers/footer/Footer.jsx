import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg'
const Footer = () => {
  return (
    <div className="gpt3_footer secion_padding">
      <div className="gpt3_footer-heading">
        <h1 className="gradient_text">Do you want to step into future before others</h1>
      </div>
      <div className="gpt3_footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3_footer-links">
        <div className="gpt3_footer-links_logo">
          <img src={gpt3Logo} alt="logo "/>
          <p>Copyright all rights reserved</p>
        </div>
        <div className="gpt3_footer-links_div">
          <h4>Links</h4>
          <h4>Overons</h4>
          <h4>Social Media</h4>
          <h4>Counters</h4>
          <h4>Contact</h4>
        </div>
        <div className="gpt3_footer-links_div">
          <h4>Links</h4>
          <h4>Overons</h4>
          <h4>Social Media</h4>
          <h4>Counters</h4>
          <h4>Contact</h4>
        </div>
        <div className="gpt3_footer-links_div">
          <h4>Company</h4>
          <h4>Terms and condition</h4>
          <h4>Privacy Policy</h4>
          
          <h4>Contact</h4>
        </div>
        <div className="gpt3_footer-links_div">
          <h4>Get in touch</h4>
          <h4>Crechword k12 182 DK</h4>
          <h4>09-5796589</h4>
          <h4>infouhuh.net</h4>
          
        </div>
      </div>
      <div className="gpt3_footer-copyright">
        <p>2021 GPT-3 All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
