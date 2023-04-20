import React from "react";
import { Link } from "react-router-dom";
import CommonButton from "../buttons/CommonButton";

export default function SmallScreenNav({ handleChangeOpenMenu }) {
    return (
        <div className="flex flex-wrap w-screen h-[14.75rem] transition-all absolute mt-20 bg-primaryblue top">
            <div className="flex items-center basis-full justify-center mt-8">
                <Link
                    to="/"
                    className="text-base font-medium text-white mr-[3.75rem] md:mr-20"
                    onClick={handleChangeOpenMenu}
                >
                    Home
                </Link>
                {/* <Link
                    to="/services"
                    className="text-base font-medium text-white mr-[3.75rem] md:mr-20"
                    onClick={handleChangeOpenMenu}
                >
                    Service
                </Link> */}
                {/* <Link
                    to="/about"
                    className="text-base font-medium text-white"
                    onClick={handleChangeOpenMenu}
                >
                    About
                </Link> */}
            </div>
            <div className="flex basis-full justify-center mt-6">
                <CommonButton
                    to={"/sign-in"}
                    text={"Login"}
                    bgColor={"bg-white"}
                    additionalStyles={"mr-4 md:mr-5"}
                    onClick={handleChangeOpenMenu}
                />
                <CommonButton
                    to={"/sign-up"}
                    text={"Sign Up"}
                    bgColor={"bg-primarypaleblue"}
                    onClick={handleChangeOpenMenu}
                />
            </div>
        </div>
    );
}
