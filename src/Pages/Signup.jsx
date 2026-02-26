import { Link } from "react-router-dom";
import {
  MdPerson,
  MdMail,
  MdLock,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";
import { useState } from "react";
import Modal from "../Components/Modal";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, SetUsername] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            email: email,
            password: password,
          }),
        },
      );

      const data = await res.json();

      if (res.ok) {
        setModalMessage(data.message || "Please Login");
        setShouldRedirect(true);
        setModalOpen(true);
      } else {
        setModalMessage(data.message || "Signup failed");
        setShouldRedirect(false);
        setModalOpen(true);
      }
    } catch (err) {
      console.error("Signup error:", err);
    }
  };

  return (
    <div className="auth-page">
      <h1 className="auth-logo">BlueHaven</h1>
      <p className="auth-subtitle">Let's get started with mindful living ~</p>
      <form className="auth-form" onSubmit={handleSignup}>
        <div className="input-box">
          <MdPerson className="icon-person" />
          <input
            className="input-box-input"
            type="text"
            placeholder="User name"
            value={username}
            onChange={(e) => SetUsername(e.target.value)}
          />
        </div>
        <div className="input-box">
          <MdMail className="icon" />
          <input
            className="input-box-input"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
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
        <button className="auth-button" type="submit">
          Create Account
        </button>
      </form>
      <p className="auth-switch">
        Already have an account? <Link to="/login">Log in</Link>
      </p>
      <Modal
        isOpen={modalOpen}
        message={modalMessage}
        onClose={() => {
          setModalOpen(false);
          if (shouldRedirect) {
            navigate("/login");
          }
        }}
      />
    </div>
  );
}
export default Signup;
