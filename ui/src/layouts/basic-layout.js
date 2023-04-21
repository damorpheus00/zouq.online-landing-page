import React, { useState } from 'react';
import './index.scss';
import { useLocation } from "react-router-dom";
import NavBar from "../components/nav/NavBar";
import SmallScreenNav from "../components/small-screen-nav/SmallScreenNav";
import SmallScreenNavAuth from "../components/small-screen-nav/SmallScreenNavAuth";
import NavBarWithBackToHome from "../components/nav/NavBarWithBackToHome";

function BasicLayout(props) {
	const { pathname } = useLocation();
	const [openMenu, setOpenMenu] = useState(false);
    const handleChangeOpenMenu = () => {
        setOpenMenu(!openMenu);
    };
	
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
			{props.children}
		</div>
	);
}

export default BasicLayout;
