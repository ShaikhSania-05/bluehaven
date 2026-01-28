import {Link} from "react-router-dom";
import {MdPerson,MdMail,MdLock,MdVisibility,MdVisibilityOff} from "react-icons/md";
import {useState} from "react";

function Signup() {
    const [showPassword, setShowPassword]=useState(false);
    return (
    <div className="auth-page">
    <h1 className="auth-logo">BlueHaven</h1>
    <p className="auth-subtitle">
         Let's get started with mindful living ~
    </p>
        <div className="auth-form">
        <div className="input-box">
        <MdPerson className="icon-person"/>
        <input className="input-box-input" type="text" placeholder="User name"/>
    </div>
        <div className="input-box">
        <MdMail className="icon"/>
        <input className="input-box-input" type="email" placeholder="Email Address"/>
        </div>
        <div className="input-box">
        <MdLock className="icon"/>
        <input className="input-box-input" type={showPassword ? "text":"password"} placeholder="Password"/>
         <span className="toggle-eye" onClick={()=> setShowPassword(prev=>!prev)}>
        {showPassword ? <MdVisibilityOff/>
          :<MdVisibility/>}</span>
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