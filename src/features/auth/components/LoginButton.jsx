import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { checkMeAsync } from "../slice/authSlice";

function LoginButton() {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    if (isAuthenticated) {
      const email = user?.email;
      await dispatch(checkMeAsync(email));
    } else {
      loginWithRedirect();
    }
  };

  return (
    <div>
      {!isAuthenticated ? (
        <button
          className="border border-1 border-c-blue1 rounded-full px-5 py-1 text-c-blue1 font-semibold hover:bg-c-blue1 hover:text-c-white1 active:scale-95 hover:scale-105 transition-all duration-200"
          onClick={handleLogin}
        >
          Log In
        </button>
      ) : null}
    </div>
  );
}

export default LoginButton;

// className ="border border-1 border-c-blue1 rounded-full px-5 py-1 text-c-blue1 font-semibold hover:bg-c-blue1 hover:text-c-white1  active:scale-95  hover:scale-105 transition-all duration-200";
