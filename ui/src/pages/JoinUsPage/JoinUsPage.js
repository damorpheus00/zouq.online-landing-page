import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import JoinUsPageColumn from "./JoinUsPageColumn";
import JoinUsPageInput from "./JoinUsPageInput";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import congratulationsIcon from "../../assets/images/congratulations-icon.svg";
import API from "../../helpers/api";

export default function JoinUsPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [customer, setCustomer] = useState("");
    const [success, setSuccess] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await API.joinus.joinus(name, email, customer, phone);
        const { data } = response;
        if (data.success === "true") {
            setSuccess(true);
        }
    };

    useEffect(() => {
        if (success) {
            const timeout = setTimeout(() => {
                // 👇️ redirects to our FB page
                window.location.replace("https://www.facebook.com/ZouqOnline");
            }, 3000);

            return () => clearTimeout(timeout);
        }
    }, [success]);

    return (
        <>
            {/* Success Page */}
            {success ? (
                <div className="flex basis-full">
                    <JoinUsPageColumn additionalStyling="basis-full md:basis-6/12 xl:basis-5/12 signup-form-container px-4 md:px-0">
                        <div className="mt-[2.375rem] md:mt-0 join-us-form bg-cover bg-center rounded-[1.25rem] md:rounded-none">
                            <div className="flex justify-center md:justify-start">
                                <Link
                                    to="/"
                                    className="ml-0 md:ml-8 xl:ml-[3.75rem] mt-9 h-[1.875rem]"
                                >
                                    <img
                                        src={logo}
                                        alt="Zouq Logo"
                                        className="h-[1.875rem]"
                                    />
                                </Link>
                            </div>
                            <div className="flex justify-center mt-[3.75rem] md:mt-[5.75rem] xl:mt-[7.375rem]">
                                <p className="text-2xl md:text-[1.75rem] xl:text-[2rem] text-primarypaleblue font-black text-center">
                                    Congratulations
                                </p>
                            </div>
                            <div className="flex justify-center mt-2 md:mt-0 mx-[1.688rem] md:mx-10 xl:mx-[8.375rem]">
                                <p className="md:text-lg xl:text-xl text-white font-[450] text-center">
                                    A representative will be reaching out to you
                                    for our beta testing soon.
                                </p>
                            </div>
                            <div className="flex justify-center mt-14">
                                <img
                                    src={congratulationsIcon}
                                    className="h-[8.25rem] w-[8.25rem]"
                                    alt="Congratulations!"
                                />
                            </div>
                            <div className="flex mx-[1.688rem] md:mx-10 xl:mx-[8.375rem] mt-8 mb-[2rem] md:mb-0">
                                <Link
                                    to="/"
                                    className="bg-primarypaleblue w-full rounded-[2.5rem] px-4 py-3.5 font-bold text-lg text-center"
                                >
                                    Back to home{" "}
                                </Link>
                            </div>
                        </div>
                    </JoinUsPageColumn>

                    <JoinUsPageColumn additionalStyling="basis-0 md:basis-7/12 signup-form-right-container" />
                </div>
            ) : (
                <div className="flex basis-full">
                    <JoinUsPageColumn additionalStyling="basis-full md:basis-6/12 xl:basis-5/12 signup-form-container px-4 md:px-0">
                        <form
                            onSubmit={handleSubmit}
                            className="mt-[2.375rem] md:mt-0 join-us-form bg-cover bg-center rounded-[1.25rem] md:rounded-none"
                        >
                            <div className="flex justify-center md:justify-start">
                                <Link
                                    to="/"
                                    className="ml-0 md:ml-8 xl:ml-[3.75rem] mt-9 h-[1.875rem]"
                                >
                                    <img
                                        src={logo}
                                        alt="Zouq Logo"
                                        className="h-[1.875rem]"
                                    />
                                </Link>
                            </div>
                            <div className="flex justify-center mt-[3.75rem] md:mt-[5.75rem] xl:mt-[7.375rem]">
                                <h3 className="text-2xl md:text-[1.75rem] xl:text-[2rem] text-primarypaleblue font-black text-center">
                                    Be among our first users!
                                </h3>
                            </div>
                            <div className="flex justify-center mt-2 md:mt-0">
                                <h4 className="md:text-lg xl:text-xl text-white font-[450]">
                                    Sign-up for our beta.
                                </h4>
                            </div>
                            <div className="flex flex-col justify-center mt-[3.625rem] md:mt-[3.75rem] mx-[1.688rem] md:mx-10 xl:mx-[8.375rem]">
                                <JoinUsPageInput
                                    withMarginTop={false}
                                    name={"full-name"}
                                    label={"Full name"}
                                    value={name}
                                    onChange={setName}
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
                                    <p className="text-lg text-white font-medium">
                                        Phone
                                    </p>
                                    <div className="h-7 w-px bg-neutralcolorblack5 absolute top-[3.25rem] right-16 z-10" />
                                    <PhoneInput
                                        placeholder="Enter phone number"
                                        value={phone}
                                        onChange={setPhone}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between mt-12 mx-[1.688rem] md:mx-10 xl:mx-[8.375rem]">
                                <div className="flex">
                                    <input
                                        type="radio"
                                        name="customer"
                                        className="md:mr-1 xl:mr-2"
                                        value="customer"
                                        checked={customer === "customer"}
                                        onChange={(e) => {
                                            setCustomer(e.target.value);
                                        }}
                                    />
                                    <label
                                        htmlFor="customer"
                                        className="text-sm md:text-base text-white"
                                    >
                                        I am a customer
                                    </label>
                                </div>
                                <div className="flex">
                                    <input
                                        type="radio"
                                        name="merchant"
                                        className="md:mr-1 xl:mr-2"
                                        value="merchant"
                                        checked={customer === "merchant"}
                                        onChange={(e) => {
                                            setCustomer(e.target.value);
                                        }}
                                    />
                                    <label
                                        htmlFor="merchant"
                                        className="text-sm md:text-base text-white"
                                    >
                                        I am a merchant
                                    </label>
                                </div>
                            </div>
                            <div className="flex mx-[1.688rem] md:mx-10 xl:mx-[8.375rem] mt-8 mb-[2rem] md:mb-0">
                                <button
                                    type="submit"
                                    className={`bg-primarypaleblue w-full rounded-[2.5rem] px-4 py-3.5  font-bold text-lg ${
                                        !name || !email || !phone || !customer
                                            ? "opacity-5"
                                            : ""
                                    }`}
                                    disabled={
                                        !name || !email || !phone || !customer
                                    }
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </JoinUsPageColumn>

                    <JoinUsPageColumn additionalStyling="basis-0 md:basis-7/12 signup-form-right-container" />
                </div>
            )}
        </>
    );
}
