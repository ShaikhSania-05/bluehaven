import BluehavenLogo from "../assets/images/Bluehavenlogo.png";
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <nav className ="navbar">
            <div className="navbar-brand">
                <img src={BluehavenLogo} alt="navbarlogo"/>
            <h1 className="logo brand-font">Bluehaven</h1>
            </div>
            <ul className="nav-links">
                <li><Link to= "/">Home</Link></li>
                <li><Link to="/">Features</Link></li>
                <li><Link to="/reviews">Reviews</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <Link to="/login">
            <button className="nav-button">
                Sign in
            </button>
        </Link>
        </nav>
    );
}
export default Navbar;
