import { Link } from "react-router-dom";
import { MdLock, MdEmail, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useState, useEffect } from "react";
import Modal from "../Components/Modal";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { TbRubberStamp } from "react-icons/tb";
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [identifier, SetIdentifier] = useState("");
  const [password, SetPassword] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            identifier: identifier,
            password: password,
          }),
        },
      );

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        navigate("/");
      } else {
        setModalMessage(data.message || "Login Failed");
        setModalOpen(true);
      }
    } catch (err) {
      console.error("Login error:", err);
      setModalMessage("Unable to connect. Please try again later.");
      setModalOpen(true);
    }
  };
  useEffect(() => {
    if (location.state?.message) {
      setModalMessage(location.state.message);
      setModalOpen(true);
    }
  }, [location.state]);
  return (
    <div className="auth-page">
      <h1 className="auth-logo">BlueHaven</h1>
      <p className="auth-subtitle">Welcome back! Let's take today gently ~</p>
      <form className="auth-form" onSubmit={handleLogin}>
        <div className="input-box">
          <MdEmail className="icon" />
          <input
            className="input-box-input"
            type="text"
            placeholder="Email address/User Name"
            value={identifier}
            onChange={(e) => SetIdentifier(e.target.value)}
          />
        </div>
        <div className="input-box">
          <MdLock className="icon" />
          <input
            className="input-box-input"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => SetPassword(e.target.value)}
          />
          <button
            type="button"
            className="toggle-eye"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
          </button>
        </div>
        <button className="auth-button">Let's get started</button>
      </form>
      <p className="auth-switch">
        New here? <Link to="/signup">Create an account</Link>
      </p>
      <Modal
        isOpen={modalOpen}
        message={modalMessage}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
export default Login;
