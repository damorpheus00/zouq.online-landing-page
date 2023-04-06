import React from "react";
import logo from "../../assets/images/logo.png";
import JoinUsButton from "../buttons/JoinUsButton";
import NavLink from "./NavLink";

export default function NavBar() {
    return (
        <nav className="flex items-center bg-primaryblue nav-bar pl-[7.5rem] pr-[7.5rem]">
            <div className="flex basis-3/12">
                <img src={logo} alt={"zouqlogo"} className="logo" />
            </div>
            <div className="flex basis-6/12 justify-center text-neutralcolorwhite">
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
            <div className="flex justify-end basis-3/12 text-neutralcolorwhite">
                <JoinUsButton bgColor={"bg-primarypaleblue"} />
            </div>
        </nav>
    );
}
