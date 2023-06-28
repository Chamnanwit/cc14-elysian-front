import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import "flowbite";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-hwzo22lep52tc4jx.us.auth0.com"
    clientId="QLq6EvBUlE7hpRxnal2u3IJv2AcEvVAL"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Auth0Provider>
);
