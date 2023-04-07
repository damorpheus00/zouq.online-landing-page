import React from "react";
import JoinUsButton from "../../../../components/buttons/JoinUsButton";
import Header from "../../../../components/header/header";

export default function Hero() {
    return (
        <section className="flex flex-col basis-full min-h-[27.438rem] sm:min-h-[42.125rem] hero pl-5 pr-5 sm:pl-[7.5rem] sm:pr-[7.5rem]">
            <div className="mt-12 sm:mt-20 w-[19.063rem] sm:w-[31.875rem] mb-[1.875rem] sm:mb-[5.625rem]">
                <Header text1={"One-Stop-"} text2={"Halal Shop"} main={true} />
            </div>
            <div className="mb-4 sm:mb-6">
                <p className="text-base sm:text-lg font-black text-neutralcolorwhite common-text">
                    All your{" "}
                    <span className="text-primarypaleBlue"> halal needs </span>{" "}
                    in one marketplace
                </p>
            </div>
            <div className="flex">
                <JoinUsButton bgColor={"bg-neutralcolorwhite"} />
            </div>
        </section>
    );
}
