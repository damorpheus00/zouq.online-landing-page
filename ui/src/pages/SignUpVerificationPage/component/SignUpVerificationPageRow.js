import React from "react";
import SignUpVerificationPageColumn from "./SignUpVerificationPageColumn";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function SignUpVerificationPageRow({ content }) {
    return (
        <div className="flex basis-full">
            <SignUpVerificationPageColumn additionalStyling="z-10 basis-full xl:basis-5/12 signup-form-container px-4 py-[2.375rem] xl:px-0 xl:py-0">
                <div className="flex flex-col account-card bg-no-repeat bg-cover rounded-[1.25rem] md:rounded-xl xl:rounded-none">
                    <div className="flex justify-center sm:justify-start mt-8 sm:mt-0 mb-10 md:mb-[4.25rem] xl:mb-[6.42rem]">
                        <Link
                            to="/"
                            className="ml-0 md:ml-10 xl:ml-[3.75rem] md:mt-8 xl:mt-[2.198rem] xl:h-[1.758rem]"
                        >
                            <img
                                src={logo}
                                alt="Zouq Logo"
                                className="h-[1.758rem]"
                            />
                        </Link>
                    </div>
                    {content}
                </div>
            </SignUpVerificationPageColumn>
            <SignUpVerificationPageColumn additionalStyling="basis-0 xl:basis-7/12 signup-form-right-container" />
        </div>
    );
}
