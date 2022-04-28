import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App/App";
import { Auth0Provider } from "@auth0/auth0-react";
import history from "./Utils/history";
import { getConfig } from "./Utils/config";
import { StoreProvider } from "./Stores/Contexts/Store";
import {
  initialState,
  classroomReducer,
} from "./Stores/Reducers/ClassroomReducer";

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

// Please see https://auth0.github.io/auth0-react/interfaces/auth0_provider.auth0provideroptions.html
// for a full list of the available properties on the provider
const config = getConfig();

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  ...(config.audience ? { audience: config.audience } : null),
  redirectUri: window.location.origin,
  onRedirectCallback,
};

ReactDOM.render(
  <StoreProvider initialState={initialState} reducer={classroomReducer}>
    <Auth0Provider {...providerConfig}>
      <App />
    </Auth0Provider>
  </StoreProvider>,
  document.getElementById("root")
);
