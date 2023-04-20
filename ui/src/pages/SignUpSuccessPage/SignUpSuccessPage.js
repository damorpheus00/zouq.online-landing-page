import React from "react";
import SignUpVerificationPageRow from "../SignUpVerificationPage/component/SignUpVerificationPageRow";
import congratulationsIcon from "../../assets/images/congratulations-icon.svg";
import { Link } from "react-router-dom";
import AuthHeaderText from "../../components/header/AuthHeaderText";

const SignUpSuccessPageContent = () => {
    return (
        <>
            <AuthHeaderText
                header={"Congratulations"}
                subHeader={
                    "Your account has been successfully created. You are now one step closer to exploring all the features."
                }
                successPage={true}
            />

            <div className="flex justify-center xl:mb-20">
                <img
                    src={congratulationsIcon}
                    className="h-[8.25rem] w-[8.25rem]"
                    alt="Congratulations!"
                />
            </div>
            <div className="flex mx-[1.688rem] md:mx-[10.594rem] xl:mx-[8.375rem] mt-20 xl:mt-8 md:mb-[18.625rem] mb-[13.5rem] xl:mb-[2rem]">
                <Link
                    to="/merchant-category-select"
                    className="bg-primarypaleblue w-full rounded-[2.5rem] px-4 py-3.5 font-bold text-lg text-center"
                >
                    Proceed to next step
                </Link>
            </div>
        </>
    );
};

export default function SignUpSuccess() {
    return <SignUpVerificationPageRow content={<SignUpSuccessPageContent />} />;
}
