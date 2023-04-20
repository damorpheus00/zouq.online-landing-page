import React from "react";
import { Link } from "react-router-dom";
import CommonButton from "../buttons/CommonButton";

export default function SmallScreenNav({ handleChangeOpenMenu }) {
    return (
        <div className="flex justify-center items-center flex-wrap w-screen h-[10.5rem] transition-all absolute mt-20 bg-primaryblue top">
            <CommonButton
                bgColor={"bg-white"}
                text={"Back to home"}
                to={"/"}
                onClick={handleChangeOpenMenu}
            />
        </div>
    );
}
