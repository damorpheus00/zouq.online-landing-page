import React from "react";
import { Link } from "react-router-dom";
import JoinUsButton from "../../../../components/buttons/JoinUsButton";

export default function MediumScreenNav({ openMenu }) {
    return (
        <>
            {openMenu && (
                <div className="flex flex-wrap w-screen h-[14.75rem] transition-all absolute mt-[6.563rem] bg-primaryblue top">
                    <div className="flex items-center basis-full justify-center mt-8">
                        <Link
                            to="/home"
                            className="text-lg text-neutralcolorwhite mr-20"
                        >
                            Home
                        </Link>
                        <Link
                            to="/services"
                            className="text-lg text-neutralcolorwhite  mr-20"
                        >
                            Service
                        </Link>
                        <Link
                            to="/about"
                            className="text-lg text-neutralcolorwhite"
                        >
                            About
                        </Link>
                    </div>
                    <div className="flex basis-full justify-center mt-6">
                        <JoinUsButton bgColor={"bg-primarypaleblue"} />
                    </div>
                </div>
            )}
        </>
    );
}
