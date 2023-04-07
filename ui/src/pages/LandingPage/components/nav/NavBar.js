import React from "react";
import logo from "../../../../assets/images/logo.png";
import burgerMenu from "../../../../assets/images/burger-menu.png";
import JoinUsButton from "../../../../components/buttons/JoinUsButton";
import NavLink from "./NavLink";

export default function NavBar() {
    return (
        <nav className="flex justify-between items-center bg-primaryblue h-20 sm:h-[6.563rem] pl-5 pr-5 sm:pl-[7.5rem] sm:pr-[7.5rem]">
            <div className="flex sm:basis-3/12 basis-6/12">
                <img
                    src={logo}
                    alt={"zouqlogo"}
                    className="sm:w-[11.313rem] sm:h-[3.225rem] w-[7.313rem] h-[2.063rem]"
                />
            </div>
            <div className="hidden sm:flex basis-6/12 justify-center text-neutralcolorwhite">
                <NavLink href={"#home"} withMarginRight={true} text={"Home"} />
                <NavLink
                    href={"#services"}
                    withMarginRight={true}
                    text={"Services"}
                />
                <NavLink
                    href={"#about"}
                    withMarginRight={true}
                    text={"About"}
                />
            </div>
            <div className="hidden sm:flex justify-end basis-3/12 text-neutralcolorwhite">
                <JoinUsButton bgColor={"bg-primarypaleblue"} />
            </div>
            <div className="flex sm:hidden">
                <button>
                    <img
                        src={burgerMenu}
                        alt={"zouqlogo"}
                        className="w-[2.125rem] h-[2.125rem]"
                    />
                </button>
            </div>
        </nav>
    );
}
