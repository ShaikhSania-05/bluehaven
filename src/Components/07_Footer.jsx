import BluehavenLogo from "../assets/images/Bluehavenlogo.png";
import {Link} from "react-router-dom";
function Footer() {
    return (
        <footer className="footer-section">
            <div className="footer-content">
                {/*Brand*/}
                <div className="footer-brand">
                    <img src={BluehavenLogo} alt="Bluehaven Logo" className="footer-logo-img"/>
                    <div className="footer-brand-text">
                    <h2 className="footer-logo brand-font">BlueHaven</h2>
                    <p className="footer-tagline">  
                        "Navigate your digital life with calm"
                    </p>
              </div>
                   </div>
                {/*Quick Links*/}
                <div className="footer-column">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/">Features</Link></li>
                        <li><Link to="/">Motivation</Link></li>
                        <li><Link to="/support">FAQ</Link></li>
                    </ul>
                </div>
                {/*Support*/}
                <div className="footer-column">
                    <h4>Support</h4>
                    <ul>
                        <li><Link to="/support">Help Center</Link></li>
                        <li><Link to="/support">Report An Issue,/</Link></li>
                        <li><Link to="/support">Feedback</Link></li>
                    </ul>
                </div>
                {/*Policies*/}
                <div className="footer-column">
                    <h4>Policies</h4>
                    <ul>
                        <li><Link to="/policies">Privacy Policy</Link></li>
                        <li><Link to="/policies">Terms of Service</Link></li>
                        <li><Link to="/policies">Data & Security</Link></li>
                    </ul>
                </div>
            </div>
            {/*Bottom Bar*/}
            <div className="footer-bottom">
                <p className="contact-label">Contact</p>
                <p className="contact-email"> 
                    <span className="email-icon">📧</span>
                    shaikhsania1251@gmail.com</p>
                    <p className="contact-email"> 
                        <span className="email-icon">📧</span>
                        aqsaanam.009@gmail.com</p>
                        <p>
                           © 2025-2026 Digital Well-Being Tracker. Developed & Designed By Shaikh Sania & Shaikh Aqsa.
                        </p>
            </div>
        </footer>
    );
}
export default Footer;

