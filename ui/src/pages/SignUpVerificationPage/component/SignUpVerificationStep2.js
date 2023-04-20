import React, { useState } from "react";
import SignUpVerificationPageRow from "./SignUpVerificationPageRow";
import AuthHeaderText from "../../../components/header/AuthHeaderText";
import AuthInput from "../../../components/inputs/AuthInput";
import PhoneInput from "react-phone-number-input";
import AuthButton from "../../../components/buttons/AuthButton";

const SignUpVerificationPageRowContent = () => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [acceptCondition, setAcceptCondition] = useState(false);
    return (
        <>
            <AuthHeaderText
                header={"Create Account"}
                subHeader={
                    "Create an account to start shopping, selling, and bidding on amazing products."
                }
            />
            <div className="flex justify-center">
                <AuthInput
                    withMarginTop={false}
                    name={"email"}
                    label={"Email Address"}
                    value={email}
                    onChange={setEmail}
                    placeholder={"username@gmail.com"}
                />
            </div>

            <div className={`flex  items-center flex-col mt-5 relative`}>
                <div>
                    <p className="text-lg text-white font-medium">Phone</p>
                    <div className="h-7 w-px bg-neutralcolorblack5 absolute top-[3.25rem] right-[27%] md:right-[35%] xl:right-[33%] z-10" />
                    <PhoneInput
                        placeholder="Enter phone number"
                        value={phone}
                        onChange={setPhone}
                    />
                </div>
            </div>
            <div className="flex justify-center mb-12 xl:mb-[3rem]">
                <AuthInput
                    withMarginTop={true}
                    name={"password"}
                    type={"password"}
                    label={"Password"}
                    value={password}
                    onChange={setPassword}
                    placeholder={"Password"}
                />
            </div>
            <div className="flex justify-center mb-8 xl:mb-[2rem]">
                <div className="flex w-[17.688rem] md:w-[22.75rem] xl:w-[22.75rem]">
                    <input
                        type="checkbox"
                        checked={acceptCondition}
                        className="h-[1.5rem] w-[1.5rem] mr-3"
                        onChange={() => setAcceptCondition(!acceptCondition)}
                    />
                    <p className="text-white text-sm">
                        By creating an account, I agree to the website's privacy
                        policy and terms and conditions{" "}
                    </p>
                </div>
            </div>
            <div className="flex justify-center xl:mb-0 md:mb-[4.875rem] mb-10">
                <AuthButton
                    disable={!phone || !password || !email || !acceptCondition}
                    to={"/sign-up-success"}
                    text={"Submit"}
                />
            </div>
        </>
    );
};

export default function SignUpVerificationStep2() {
    return (
        <SignUpVerificationPageRow
            content={<SignUpVerificationPageRowContent />}
        />
    );
}
