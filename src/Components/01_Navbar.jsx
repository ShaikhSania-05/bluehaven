import BluehavenLogo from "../assets/images/Bluehavenlogo.svg";

function Navbar() {
    return (
        <nav className ="navbar">
            <div className="navbar-brand">
                <img src={BluehavenLogo} alt="navbarlogo"/>
            <h1 className="logo brand-font">Bluehaven</h1>
            </div>
            <ul className="nav-links">
                <li>Home</li>
                <li>Features</li>
                <li>Reviews</li>
                <li>About</li>
            </ul>
            <button className="nav-button">
                Sign up
            </button>
        </nav>
    );
}
export default Navbar;
