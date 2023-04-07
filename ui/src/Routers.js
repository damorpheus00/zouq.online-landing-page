import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import JoinUsPage from "./pages/JoinUsPage/JoinUsPage";

const Routers = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <LandingPage />,
        },
        {
            path: "/join-us",
            element: <JoinUsPage />,
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Routers;
