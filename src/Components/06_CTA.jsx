import { Link } from "react-router-dom";
function CTA() {
    return (
         <section id="cta" className="cta-section">
            <div className="cta-content">
            <h2 className="cta-title">
                Start Your Well-Being Journey With 
               <br/>
                      BlueHaven Today!
            </h2>
            <Link to="/signup">
            <button className="cta-button">
                Get Started For Free 
            </button>
            </Link>
            </div>
        </section>
    );
}
export default CTA;