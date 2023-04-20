import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-phone-number-input/style.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Routers from "./Routers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <React.StrictMode>
            <Routers />
        </React.StrictMode>
    </GoogleOAuthProvider>
);
