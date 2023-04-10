import React from "react";
import { Link } from "react-router-dom";
import JoinUsButton from "../../../../components/buttons/JoinUsButton";

export default function SmallScreenNav({ openMenu }) {
    return (
        <>
            {openMenu && (
                // h-[14.75rem]
                <div className="flex flex-wrap w-screen h-28 transition-all absolute mt-20 md:mt-[6.563rem] bg-primaryblue top">
                    {/* COMMENTED NO DESIGN YET */}
                    {/* <div className="flex items-center basis-full justify-center mt-8">
                        <Link
                            to="/home"
                            className="text-lg text-neutralcolorwhite mr-9 md:mr-20"
                        >
                            Home
                        </Link>
                        <Link
                            to="/services"
                            className="text-lg text-neutralcolorwhite mr-9 md:mr-20"
                        >
                            Service
                        </Link>
                        <Link
                            to="/about"
                            className="text-lg text-neutralcolorwhite"
                        >
                            About
                        </Link>
                    </div> */}
                    <div className="flex basis-full justify-center mt-6">
                        <JoinUsButton bgColor={"bg-primarypaleblue"} />
                    </div>
                </div>
            )}
        </>
    );
}
