import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        
        <div className="bottom">
          <div className="left">
            <h2>Ayush Portal</h2>
            
            {/* <span>© Profolio International Ltd. 2023</span> */}
            <span>© Copyright <strong>Ministry of Ayush</strong></span>
          </div>
          <div className="right">
            <div className="social">
            <a href="https://twitter.com/moayush" ><img src="/img/twitter.png" alt="" /></a>
            <a href="https://www.facebook.com/moayush"><img src="/img/facebook.png" alt="" /></a>
              <img src="/img/linkedin.png" alt="" />
              {/* <img src="/img/pinterest.png" alt="" /> */}
              <a href="https://www.instagram.com/ministryofayush/"><img src="/img/instagram.png" alt="" /></a>
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/img/coin.png" alt="" />
              <span>INR</span>
            </div>
            <img src="/img/accessibility.png" alt="" />
          </div>
          <span>
            <button className="buttonui">Feedback</button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;