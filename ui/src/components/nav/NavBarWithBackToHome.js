import React from "react";

import logo from "../../assets/images/logo.svg";
import CommonButton from "../buttons/CommonButton";

export default function NavBarWithBackToHome() {
    return (
        <nav className="bg-primaryblue flex justify-between items-center h-20 sm:h-[6.563rem] px-5 lg:px-[7.5rem] 2xl:px-[7.5rem]">
            <div className="flex sm:basis-3/12 basis-6/12">
                <img
                    src={logo}
                    alt={"Zouq Logo"}
                    className="sm:w-[11.313rem] sm:h-[3.225rem] w-[7.313rem] h-[2.063rem] transition-all"
                />
            </div>
            <div className="flex justify-end sm:basis-3/12 basis-6/12">
                <CommonButton
                    bgColor={"bg-neutralcolorwhite"}
                    text={"Back to home"}
                    to={"/"}
                />
            </div>
        </nav>
    );
}
