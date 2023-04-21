import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import "./index.css";
import "react-phone-number-input/style.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import store, { history } from './store';
import Routes from './routes';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <React.StrictMode>
            <Provider store={store()}>
                <ConnectedRouter history={history}>
                    <Routes />
                </ConnectedRouter>
            </Provider>
        </React.StrictMode>
    </GoogleOAuthProvider>
);
