import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthGuard({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = "token"; //localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return children;
}

export default AuthGuard;
