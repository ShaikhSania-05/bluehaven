function Navbar() {
    return (
        <nav className ="navbar">
            <h1 className="logo">Bluehaven</h1>
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