import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function RedirectedOTP({ children }) {
  // const myuser = useSelector((state) => state?.auth?.user);
  const { loginWithRedirect } = useAuth0();

  // const userid = myuser?.id;

  const { user, isAuthenticated, isLoading } = useAuth0();
  //   const isAuthenticatedd = useSelector((state) => state.auth.isAuthenticated);
  const userr = useSelector((state) => state?.auth?.user);
  console.log("sssss", isAuthenticated, userr);
  if (!isAuthenticated) {
    <Navigate to="/register" />;
  } else if (!user) {
    return <Navigate to="/" />;
  } else if (userr?.locked === false || userr === null) {
    return <Navigate to="/" />;
  }

  return children;
}
