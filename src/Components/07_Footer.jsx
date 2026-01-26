import BluehavenLogo from "../assets/images/Bluehavenlogo.png";

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
                        <li>About</li>
                        <li>Features</li>
                        <li>Motivation</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                {/*Support*/}
                <div className="footer-column">
                    <h4>Support</h4>
                    <ul>
                        <li>Help Center</li>
                        <li>Report An Issue</li>
                        <li>Feedback</li>
                    </ul>
                </div>
                {/*Policies*/}
                <div className="footer-column">
                    <h4>Policies</h4>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Data & Security</li>
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

