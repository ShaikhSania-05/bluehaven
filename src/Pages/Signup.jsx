import {Link} from "react-router-dom";

function Signup() {
    return (
    <div className="auth-page">
    <h1 className="auth-logo">BlueHaven</h1>
    <p className="auth-subtitle">
         Let's get started with mindful living ~
    </p>
        <div className="auth-form">
        <div className="input-box">
        <span className="material-icons">person</span>
        <input className="input-box-input" type="text" placeholder="User name"/>
    </div>
        <div className="input-box">
        <span className="material-icons">mail</span>
        <input className="input-box-input" type="email" placeholder="Email Address"/>
        </div>
        <div className="input-box">
        <span className="material-icons">lock</span>
        <input className="input-box-input" type="password" placeholder="Password"/>
        <span className="material-icons">visibility</span>
    </div>
        <button className="auth-button">Create Account</button>
        </div>
    <p className="auth-switch">
        Already have an account? <Link to="/login">Log in</Link>
    </p>
 </div>
    );
};
export default Signup;