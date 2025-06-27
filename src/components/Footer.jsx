
import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import TermsOfUsePage from './TermsOfUsePage';
import PrivacyPolicyPage from './PrivacyPolicyPage';

import { FaGooglePlay, FaApple } from 'react-icons/fa';
import "../styles/Footer.css"; 
import icons from "../assets/icons.png"


const AppDownloadLink = ({ IconComponent, text, link }) => (
    <a href={link} className="footer-app-link" target="_blank" rel="noopener noreferrer">
        {/* Render the React Icon Component passed as a prop */}
        {IconComponent && <IconComponent className="footer-app-icon" />}
        {text}
    </a>
);

const QuickLink = ({ to, label }) => {
    const navigate = useNavigate(); 

    const handleClick = (e) => {
        e.preventDefault(); 
        navigate(to);       
    };

    return (
        
        <span className="footer-quick-link" onClick={handleClick} role="link" tabIndex={0}>
            {label}
        </span>
    );
};

// --- Main Footer Component ---

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content-wrapper">
    
                <div className="footer-section footer-about">
                    <img src={icons} alt="Red White Cricket Live Logo" className="footer-logo" />
                    <p className="footer-description">
                        King's Cricket Live Line provide fastest live line score, commentary, scorecard, odds, session and over history. Get fastest live cricket match update & analysis.
                    </p>
                </div>

            
                <div className="footer-section-group">
                    
                    <div className="footer-section footer-get-app">
                        <h3 className="footer-heading">Get The App On</h3>
                        <AppDownloadLink
                            IconComponent={FaGooglePlay} 
                            text="Google Play"
                            link="https://play.google.com/store/search?q&c=apps" 
                        />
                        <AppDownloadLink
                            IconComponent={FaApple}
                            text="App Store"
                            link="https://apps.apple.com/us/app/yourapp/id1234567890" 
                        />
                    </div>

            
                    <div className="footer-section footer-quick-links">
                        <h3 className="footer-heading">Quick Links</h3>
                        <QuickLink label="Privacy Policy" to="/privacypolicy" className="Privacy-Link" />
                        <br /><br />
                        <QuickLink label="Terms of Use" to="/termsofuse" className="Terms-Link" />   
                    </div>

                
                    <div className="footer-section footer-contact">
                        <h3 className="footer-heading">Contact Us</h3>
                        <p className="footer-contact-info">kingscricket@gmail.com</p>
                        <p className="footer-contact-info">DE, USA</p>
                    </div>
                </div>
            </div>

            
            <hr className="footer-divider" />

    
            <div className="footer-copyright">
                <p>
                    Copyright & Design By @Kings Cricket live Cll |
                    <QuickLink label="Privacy Policy" to="/privacypolicy" /> ||
                    <QuickLink label="Terms of Use" to="/termsofuse" />
                </p>
            </div>
        </footer>
    );
};

export default Footer;