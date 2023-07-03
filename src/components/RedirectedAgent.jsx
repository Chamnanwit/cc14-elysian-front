import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function RedirectedAgent({ children }) {
  const myuser = useSelector((state) => state?.auth?.user);
  const { loginWithRedirect } = useAuth0();

  const userid = myuser?.id;

  // const { user, isAuthenticated, isLoading } = useAuth0();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  console.log("sssss", isAuthenticated, user);
  if (!isAuthenticated) {
    loginWithRedirect();
  }
  if (isAuthenticated && user.role === "AGENCY" && user.locked === true) {
    return <Navigate to="/phonenumber" />;
  }

  return children;
}
