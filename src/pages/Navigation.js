import React from "react";
import "../Styles/Navigation.css";
import "../Styles/Links.css";
import "../Styles/Content.css"; 
import "../Styles/Video.css"; 
import "../Styles/Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Player } from 'video-react';
import Collection from '../pages/Collection'; 
import Blog from '../pages/Blog'; 
import ContactUs from '../pages/ContactUs'; 
import AboutUs from "../pages/AboutUs";
import Footer from "../Components/Footer";  
export default class Navigation extends React.Component {
  render() {
    return (
      <div className="page">
<div className="main">
         <nav className="navigation-bar" id="navigation-bar">
        <img
            src={require("../images/logo.jpg")}
            alt="logo"
            className="logo-img"
          />
          <ul className="list">
            <li className="list-item">
              <a href="#about-us" className="anchor">من نحن؟</a>
            </li>
            <li className="list-item">
              <a href="#collection" className="anchor">Collection</a>
            </li>
            <li className="list-item">
              <a href="#blog" className="anchor">BLOG</a>
            </li>
            <li className="list-item">
              <a href="#contact-us" className="anchor">CONTACT US</a>
            </li>
            <div className="links">
              <FontAwesomeIcon icon={faFacebook} className="facebook-icon" />
              <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
            </div>
          </ul>

        </nav>
     <img src={require("../images/img.jpg")} width="100%" height="100%"/>
     </div>
     <div id="about-us">
          <AboutUs />
        </div>
               
        <div id="collection">
          <Collection/>
        </div>
        <div id="blog">
        <Blog/>
        </div>
        <div id="contact-us">
          <ContactUs/>
        </div>
<Footer/>
      </div>
     
    );
  }
}
