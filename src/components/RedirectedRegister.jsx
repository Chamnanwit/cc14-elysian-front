import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function RedirectedRegister({ children }) {
  const { loginWithRedirect } = useAuth0();

  const { user, isAuthenticated, isLoading } = useAuth0();
  //   const isAuthenticatedd = useSelector((state) => state.auth.isAuthenticated);
  const userr = useSelector((state) => state?.auth?.user);
  // console.log("sssss", isAuthenticated, user);
  if (userr?.locked === false) {
    return <Navigate to="/register" />;
  } else if (userr?.role === "AGENCY" && userr?.locked === true) {
    return <Navigate to="/phonenumber" />;
  } else if (!isAuthenticated) {
    loginWithRedirect();
  }

  return children;
}
