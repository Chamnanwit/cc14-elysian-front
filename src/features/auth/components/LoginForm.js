import { connect } from "react-redux";
import loginAsync from "../slice/authSlice";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginForm = ({ loginAsync }) => {
  const [user] = useAuth0;
  useEffect(() => {
    console.log("loginอัฒโนมือ", user.email);
    loginAsync({ email: user.email, password: "123456" });
  }, []);

  return null;
};

export default connect(null, { loginAsync })(LoginForm);
