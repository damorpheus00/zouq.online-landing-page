import React, { useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPageStep1 from "./pages/SignUpPage/SignUpPageStep1";
import NavBar from "./components/nav/NavBar";
import SmallScreenNav from "./components/small-screen-nav/SmallScreenNav";
import SmallScreenNavAuth from "./components/small-screen-nav/SmallScreenNavAuth";
import NavBarWithBackToHome from "./components/nav/NavBarWithBackToHome";
import SignUpPageStep2 from "./pages/SignUpPage/components/SignUpPageStep2";
import SignUpVerificationPage from "./pages/SignUpVerificationPage/SignUpVerificationPage";
import SignUpVerificationStep2 from "./pages/SignUpVerificationPage/component/SignUpVerificationStep2";
import SignUpSuccessPage from "./pages/SignUpSuccessPage/SignUpSuccessPage";
import MerchantCategorySelectPage from "./pages/MerchantCategorySelectPage/MerchantCategorySelectPage";
import MerchantSetupPage from "./pages/MerchantSetupPage/MerchantSetupPage";

function App() {
    const [openMenu, setOpenMenu] = useState(false);
    const handleChangeOpenMenu = () => {
        setOpenMenu(!openMenu);
    };
    const { pathname } = useLocation();
    const navAuthPaths = [
        "/sign-in",
        "/sign-up",
        "/sign-up-step-2",
        "/merchant-category-select",
        "/merchant-setup",
    ];
    const noNavPaths = [
        "/sign-up-verification",
        "/sign-up-verification-2",
        "/sign-up-success",
    ];
    return (
        <div className="flex relative basis-full flex-col h-view bg-primarydarkblue">
            {navAuthPaths.includes(pathname) ? (
                <>
                    <NavBarWithBackToHome
                        openMenu={openMenu}
                        handleChangeOpenMenu={handleChangeOpenMenu}
                    />
                    {openMenu && (
                        <SmallScreenNavAuth
                            handleChangeOpenMenu={handleChangeOpenMenu}
                        />
                    )}
                </>
            ) : noNavPaths.includes(pathname) ? (
                <></>
            ) : (
                <>
                    <NavBar
                        openMenu={openMenu}
                        handleChangeOpenMenu={handleChangeOpenMenu}
                    />
                    {openMenu && (
                        <SmallScreenNav
                            handleChangeOpenMenu={handleChangeOpenMenu}
                        />
                    )}
                </>
            )}

            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path="/services" element={<ServicesPage />} />
                <Route exact path="/sign-in" element={<SignInPage />} />
                <Route exact path="/sign-up" element={<SignUpPageStep1 />} />
                <Route
                    exact
                    path="/sign-up-step-2"
                    element={<SignUpPageStep2 />}
                />
                <Route
                    exact
                    path="/sign-up-verification"
                    element={<SignUpVerificationPage />}
                />
                <Route
                    exact
                    path="/sign-up-verification-2"
                    element={<SignUpVerificationStep2 />}
                />
                <Route
                    exact
                    path="/sign-up-success"
                    element={<SignUpSuccessPage />}
                />
                <Route
                    exact
                    path="/merchant-category-select"
                    element={<MerchantCategorySelectPage />}
                />
                <Route
                    exact
                    path="/merchant-setup"
                    element={<MerchantSetupPage />}
                />
            </Routes>
        </div>
    );
}

const Routers = () => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
};

export default Routers;
