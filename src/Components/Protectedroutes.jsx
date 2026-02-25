import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return (
      <Navigate
        to="/login"
        state={{ message: "Please login to continue your journey." }}
        replace
      />
    );
  }

  return children;
}

export default ProtectedRoute;
