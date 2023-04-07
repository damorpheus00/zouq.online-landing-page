import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import JoinUsPageColumn from "./JoinUsPageColumn";
import JoinUsPageInput from "./JoinUsPageInput";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

export default function JoinUsPage() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className="flex basis-full">
            <JoinUsPageColumn additionalStyling="basis-5/12 signup-form-container">
                <form onSubmit={handleSubmit}>
                    <div className="flex">
                        <Link to="/" className="ml-[3.75rem] mt-9 h-[1.875rem]">
                            <img src={logo} className="h-[1.875rem]" />
                        </Link>
                    </div>
                    <div className="flex justify-center mt-[7.375rem]">
                        <p className="text-[2rem] text-primarypaleblue common-text font-black">
                            Be among our first users!{" "}
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-xl text-neutralcolorwhite common-text font-[450]">
                            Sign-up for our beta.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center mt-[3.75rem] mx-[8.375rem] mb-[3.75rem]">
                        <JoinUsPageInput
                            withMarginTop={false}
                            name={"full-name"}
                            label={"Full name"}
                            value={fullName}
                            onChange={setFullName}
                            placeholder={"Enter your full name"}
                        />

                        <JoinUsPageInput
                            name={"email"}
                            label={"Email Address"}
                            value={email}
                            onChange={setEmail}
                            placeholder={"username@gmail.com"}
                        />
                        <div className={`flex flex-col mt-5 relative`}>
                            <p className="text-lg text-neutralcolorwhite font-medium">
                                Phone Number
                            </p>
                            <div className="h-7 w-px bg-neutralcolorblack5 absolute top-[3.25rem] right-16 z-10" />
                            <PhoneInput
                                placeholder="Enter phone number"
                                value={phoneNumber}
                                onChange={setPhoneNumber}
                            />
                        </div>
                    </div>
                    <div className="flex mx-[8.375rem] ">
                        <button
                            type="submit"
                            className="bg-primarypaleblue w-full rounded-[2.5rem] px-4 py-3.5 common-text font-bold text-lg"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </JoinUsPageColumn>

            <JoinUsPageColumn additionalStyling="basis-7/12 signup-form-right-container" />
        </div>
    );
}
