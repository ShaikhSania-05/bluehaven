function Navbar() {
    return (
        <nav className ="Navbar">
            <h1 className="logo">Bluehaven</h1>
            <ul className="Nav-links">
                <li>Home</li>
                <li>Features</li>
                <li>Reviews</li>
                <li>About</li>
            </ul>
            <button className="nav-btn">Sign up</button>
        </nav>
    );
}
export default Navbar;