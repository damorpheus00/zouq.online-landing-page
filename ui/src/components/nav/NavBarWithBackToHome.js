import React from "react";

import logo from "../../assets/images/logo.svg";
import blackLogo from "../../assets/images/black-logo.svg";
import CommonButton from "../buttons/CommonButton";

export default function NavBarWithBackToHome({
    openMenu,
    handleChangeOpenMenu,
}) {
    return (
        <nav
            className={`${
                openMenu ? "bg-white" : "bg-primaryblue"
            } relative transition-all flex justify-between items-center h-20 px-5 sm:px-[2rem] lg:px-[7.5rem] 2xl:px-[7.5rem]`}
        >
            <div className="flex sm:basis-3/12 basis-6/12">
                <img
                    src={openMenu ? blackLogo : logo}
                    alt={"Zouq Logo"}
                    className="sm:w-[7.25rem] sm:h-[1.875rem] w-[7.313rem] h-[2.063rem] transition-all"
                />
            </div>

            <div className="hidden xl:flex justify-end basis-3/12 text-white">
                <CommonButton
                    bgColor={"bg-white"}
                    text={"Back to home"}
                    to={"/"}
                />
            </div>
            <div className="flex xl:hidden">
                <button onClick={handleChangeOpenMenu}>
                    <div className="flex flex-col h-5 z-10 relative transition-all">
                        <div
                            className={`rounded-full p-px mb-2 ${
                                openMenu
                                    ? "rotate-[135deg] absolute top-2.5 right-0 bg-black w-7"
                                    : "bg-white w-6"
                            }`}
                        />
                        <div
                            className={`rounded-full w-5 p-px mb-2 ${
                                openMenu ? "hidden" : "bg-white"
                            }`}
                        />
                        <div
                            className={`rounded-full p-px ${
                                openMenu
                                    ? "rotate-45 absolute top-2.5 right-0 bg-black w-7"
                                    : "bg-white w-6"
                            }`}
                        />
                    </div>
                </button>
            </div>
        </nav>
    );
}
