import React, { useState } from 'react';
import './index.scss';
import { useLocation } from "react-router-dom";
import NavBar from "../components/nav/NavBar";
import SmallScreenNav from "../components/small-screen-nav/SmallScreenNav";
import SmallScreenNavAuth from "../components/small-screen-nav/SmallScreenNavAuth";
import NavBarWithBackToHome from "../components/nav/NavBarWithBackToHome";

function SignupStepsLayout(props) {
	const [openMenu, setOpenMenu] = useState(false);
    const handleChangeOpenMenu = () => {
        setOpenMenu(!openMenu);
    };

	return (
		<>
            <div className="flex relative basis-full flex-col h-view bg-primarydarkblue">
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
            </div>
            <div>
                {props.children}
            </div>
        </>
	);
}

export default SignupStepsLayout;
