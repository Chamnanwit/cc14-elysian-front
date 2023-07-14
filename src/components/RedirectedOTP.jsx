import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function RedirectedOTP({ children }) {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const userr = useSelector((state) => state?.auth?.user);

  if (!isAuthenticated) {
    <Navigate to="/register" />;
  } else if (!user) {
    return <Navigate to="/" />;
  } else if (userr?.locked === false || userr === null) {
    return <Navigate to="/" />;
  }

  return children;
}
