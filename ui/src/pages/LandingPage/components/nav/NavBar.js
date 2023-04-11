import React from "react";
import logo from "../../../../assets/images/logo.svg";
import blackLogo from "../../../../assets/images/black-logo.svg";
import NavLink from "./NavLink";
import CommonButton from "../../../../components/buttons/CommonButton";

export default function NavBar({ openMenu, handleChangeOpenMenu }) {
    return (
        <nav
            className={`${
                openMenu ? "bg-neutralcolorwhite" : "bg-primaryblue"
            } relative transition-all flex justify-between items-center h-20 sm:h-[6.563rem] px-5 lg:px-[7.5rem] 2xl:px-[7.5rem]`}
        >
            <div className="flex sm:basis-3/12 basis-6/12">
                <img
                    src={openMenu ? blackLogo : logo}
                    alt={"Zouq Logo"}
                    className="sm:w-[11.313rem] sm:h-[3.225rem] w-[7.313rem] h-[2.063rem] transition-all"
                />
            </div>
            <div className="hidden xl:flex basis-6/12 justify-center text-neutralcolorwhite">
                <NavLink href={"/home"} withMarginRight={true} text={"Home"} />
                <NavLink
                    href={"/services"}
                    withMarginRight={true}
                    text={"Services"}
                />
                <NavLink
                    href={"/about"}
                    withMarginRight={true}
                    text={"About"}
                />
            </div>
            <div className="hidden xl:flex justify-end basis-3/12 text-neutralcolorwhite">
                <CommonButton
                    to={"/login"}
                    text={"Login"}
                    bgColor={"bg-neutralcolorwhite"}
                    additionalStyles={"mr-5"}
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
                            className={`p-px mb-2 ${
                                openMenu
                                    ? "rotate-[135deg] absolute top-2.5 right-0 bg-black w-7"
                                    : "bg-neutralcolorwhite w-6"
                            }`}
                        />
                        <div
                            className={`w-5 p-px mb-2 ${
                                openMenu ? "hidden" : "bg-neutralcolorwhite"
                            }`}
                        />
                        <div
                            className={`p-px ${
                                openMenu
                                    ? "rotate-45 absolute top-2.5 right-0 bg-black w-7"
                                    : "bg-neutralcolorwhite w-6"
                            }`}
                        />
                    </div>
                </button>
            </div>
        </nav>
    );
}
