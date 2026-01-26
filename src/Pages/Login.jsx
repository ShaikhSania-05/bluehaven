import {Link} from "react-router-dom";

function Login() {
return (
    <div className="auth-page">
    <h1 className="auth-logo">BlueHaven</h1>
    <p className="auth-subtitle"> 
        Welcome back! Let's take today gently ~
    </p>
         <div className="auth-form">
         <div className="input-box">
         <span className="material-icons">mail</span>
         <input className="input-box-input" type="text" placeholder="Email address/User Name"/>
    </div>
        <div className="input-box">
        <span className="material-icons">lock</span>
        <input className="input-box-input" type="password" placeholder="Password"/>
        <span className="material-icons">visibility</span>
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