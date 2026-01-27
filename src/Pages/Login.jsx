import {Link} from "react-router-dom";
import {MdLock,MdEmail,MdVisibility,MdVisibilityOff} from "react-icons/md";
import {useState} from "react";

function Login() {
    const [showPassword, setShowPassword]=useState(false);
return (
    <div className="auth-page">
    <h1 className="auth-logo">BlueHaven</h1>
    <p className="auth-subtitle"> 
        Welcome back! Let's take today gently ~
    </p>
         <div className="auth-form">
         <div className="input-box">
         <MdEmail className="icon"/>
         <input className="input-box-input" type="text" placeholder="Email address/User Name"/>
    </div>
        <div className="input-box">
         <MdLock className="icon"/>
        <input className="input-box-input" type={showPassword ? "text":"password"} placeholder="Password"/>
         <span className="toggle-eye" onClick={()=> setShowPassword(prev=>!prev)}>
        {showPassword ? <MdVisibilityOff/>
          :<MdVisibility/>}</span>
        </div>
        <button className="auth-button">Let's get started</button>
    </div>
    <p className="auth-switch">
        New here? <Link to="/signup">Create an account</Link>
    </p>
    </div>
);
}
export default Login;