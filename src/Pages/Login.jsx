import {Link} from "react-router-dom";
import {MdLock,MdEmail,MdVisibility,MdVisibilityOff} from "react-icons/md";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
function Login() {
    const [showPassword, setShowPassword]=useState(false);
    const [identifier, SetIdentifier] = useState("");
    const [password, SetPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
    console.log("Signup data:", identifier, password);
    localStorage.setItem("token","dummy-token");
    navigate ("/");
 };
return (
    <div className="auth-page">
    <h1 className="auth-logo">BlueHaven</h1>
    <p className="auth-subtitle"> 
        Welcome back! Let's take today gently ~
    </p>
         <form className="auth-form"
         onSubmit={handleLogin}>
         <div className="input-box">
         <MdEmail className="icon"/>
         <input className="input-box-input" type="text" placeholder="Email address/User Name"
         value={identifier} onChange={(e) => SetIdentifier(e.target.value)}/>
    </div>
        <div className="input-box">
         <MdLock className="icon"/>
        <input className="input-box-input" type={showPassword ? "text":"password"} placeholder="Password"
        value={password} onChange={(e) => SetPassword(e.target.value)}/>
         <button
         type="button" className="toggle-eye" onClick={()=> setShowPassword(prev=>!prev)}>
        {showPassword ? <MdVisibilityOff/>
          :<MdVisibility/>}
          </button>
        </div>
        <button className="auth-button">Let's get started</button>
    </form>
    <p className="auth-switch">
        New here? <Link to="/signup">Create an account</Link>
    </p>
    </div>
);
}
export default Login;