import React from "react";
import logo from "../../assets/images/logo.svg";
import blackLogo from "../../assets/images/black-logo.svg";
import NavLink from "./NavLink";
import CommonButton from "../buttons/CommonButton";
import { useLocation } from "react-router-dom";

export default function NavBar({ openMenu, handleChangeOpenMenu }) {
    const { pathname } = useLocation();
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
            <div className="hidden xl:flex basis-6/12 justify-center text-white">
                <NavLink
                    href={"/"}
                    withMarginRight={true}
                    text={"Home"}
                    pathName={pathname}
                />
                {/* <NavLink
                    href={"/services"}
                    withMarginRight={true}
                    text={"Services"}
                    pathName={pathname}
                /> */}
                {/* <NavLink
                    href={"/about"}
                    withMarginRight={true}
                    text={"About"}
                    pathName={pathname}
                /> */}
            </div>
            <div className="hidden xl:flex justify-end basis-3/12 text-white">
                <CommonButton
                    to={"/sign-in"}
                    text={"Login"}
                    bgColor={"bg-white"}
                    additionalStyles={"mr-3"}
                />
                <CommonButton
                    to={"/sign-up"}
                    text={"Sign Up"}
                    bgColor={"bg-primarypaleblue"}
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
