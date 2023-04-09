import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import JoinUsPage from "./pages/JoinUsPage/JoinUsPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import HomePage from "./pages/HomePage.js/HomePage";

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
        {
            path: "/services",
            element: <ServicesPage />,
        },
        {
            path: "/about",
            element: <AboutPage />,
        },
        {
            path: "/home",
            element: <HomePage />,
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Routers;
