import React, { useState } from "react";
import logo from "../../../../assets/images/logo.svg";
import blackLogo from "../../../../assets/images/black-logo.svg";
import burgerMenu from "../../../../assets/images/burger-menu.png";
import x from "../../../../assets/images/x.svg";
import JoinUsButton from "../../../../components/buttons/JoinUsButton";
import NavLink from "./NavLink";

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
                {/* COMMENTED NO DESIGN YET */}
                {/* <NavLink href={"/home"} withMarginRight={true} text={"Home"} />
                <NavLink
                    href={"/services"}
                    withMarginRight={true}
                    text={"Services"}
                />
                <NavLink
                    href={"/about"}
                    withMarginRight={true}
                    text={"About"}
                /> */}
            </div>
            <div className="hidden xl:flex justify-end basis-3/12 text-neutralcolorwhite">
                <JoinUsButton bgColor={"bg-primarypaleblue"} />
            </div>
            <div className="flex xl:hidden">
                <button onClick={handleChangeOpenMenu}>
                    <img
                        src={openMenu ? x : burgerMenu}
                        alt={"Zouq Logo"}
                        className="w-[2.125rem] h-[2.125rem]"
                    />
                </button>
            </div>
        </nav>
    );
}
