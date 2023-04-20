import React, { useState } from "react";
import PinInput from "react-pin-input";
import AuthButton from "../../components/buttons/AuthButton";
import SignUpVerificationPageRow from "./component/SignUpVerificationPageRow";
import AuthHeaderText from "../../components/header/AuthHeaderText";

const SignUpVerificationPageRowContent = () => {
    const [pin, setPin] = useState("");
    const handlePinChange = (value) => {
        setPin(value);
    };

    return (
        <>
            <AuthHeaderText
                header={"Account Verification"}
                subHeader={
                    "We've sent a four-digit code to your email address, please enter it below."
                }
            />
            <div className="flex justify-center mb-[5rem]">
                <PinInput
                    length={4}
                    focus
                    secret
                    type="numeric"
                    onChange={handlePinChange}
                />
            </div>
            <div className="flex justify-center mb-[19.75rem] md:mb-[22.875rem] xl:mb-0">
                <AuthButton
                    disable={pin.length !== 4}
                    text={"Continue"}
                    to={"/sign-up-verification-2"}
                />
            </div>
        </>
    );
};

export default function SignUpVerificationPage() {
    return (
        <SignUpVerificationPageRow
            content={<SignUpVerificationPageRowContent />}
        />
    );
}
