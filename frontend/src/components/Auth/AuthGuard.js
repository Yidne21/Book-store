import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthGuard({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (!token) {
      navigate("/signup");
    }

    if (role) {
      navigate(`/dashboard/${role}`);
    }
  }, [navigate]);

  return children;
}

export default AuthGuard;
