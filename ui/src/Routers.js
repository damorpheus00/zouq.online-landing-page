import React, { useState } from "react";
import {
    BrowserRouter,
    Route,
    Routes,
    createBrowserRouter,
    useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import JoinUsPage from "./pages/JoinUsPage/JoinUsPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import NavBar from "./components/nav/NavBar";
import SmallScreenNav from "./components/small-screen-nav/SmallScreenNav";
import NavBarWithBackToHome from "./components/nav/NavBarWithBackToHome";

function App() {
    const [openMenu, setOpenMenu] = useState(false);
    const handleChangeOpenMenu = () => {
        setOpenMenu(!openMenu);
    };
    const { pathname } = useLocation();

    console.log(pathname);
    return (
        <div className="flex relative basis-full flex-col h-view bg-primarydarkblue">
            {pathname === "/sign-in" || pathname === "/sign-up" ? (
                <NavBarWithBackToHome />
            ) : (
                <>
                    <NavBar
                        openMenu={openMenu}
                        handleChangeOpenMenu={handleChangeOpenMenu}
                    />
                    <SmallScreenNav
                        openMenu={openMenu}
                        handleChangeOpenMenu={handleChangeOpenMenu}
                    />
                </>
            )}

            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/sign-in" element={<SignInPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
            </Routes>
        </div>
    );
}

const Routers = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <LandingPage />,
        },
        {
            path: "/login",
            element: <SignInPage />,
        },
        {
            path: "/sign-up",
            element: <SignUpPage />,
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
    ]);
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
};

export default Routers;
