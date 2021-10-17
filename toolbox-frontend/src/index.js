import React from "react";
import ReactDOM from "react-dom";
//import { Route, BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App";
import {clientId, domain} from "./Secrets.js";

//const routes = (
//  <BrowserRouter>
//    <div>
//      <Route path="/" component={App} />
//    </div>
//  </BrowserRouter>
//);

ReactDOM.render(
  <Auth0Provider
    domain= {domain}
    clientId= {clientId}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
