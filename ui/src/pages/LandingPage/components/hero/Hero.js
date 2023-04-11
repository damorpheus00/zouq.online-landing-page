import React from "react";
import CommonButton from "../../../../components/buttons/CommonButton";
import Header from "../../../../components/header/header";

export default function Hero() {
    return (
        <section className="flex flex-col basis-full min-h-[27.438rem] sm:min-h-[42.125rem] hero px-5 lg:px-[7.5rem] 2xl:px-[7.5rem]">
            <div className="mt-12 sm:mt-20 w-[19.063rem] sm:w-[31.875rem] mb-[1.875rem] sm:mb-[5.625rem]">
                <Header text1={"One-Stop-"} text2={"Halal Shop"} main={true} />
            </div>
            <div className="mb-4 sm:mb-6">
                <p className="text-base sm:text-lg font-black text-neutralcolorwhite">
                    All your{" "}
                    <span className="text-primarypaleblue"> halal needs </span>{" "}
                    in one marketplace
                </p>
            </div>
            <div className="flex">
                <CommonButton
                    to={"/join-us"}
                    text={"Join Us"}
                    bgColor={"bg-neutralcolorwhite"}
                />
            </div>
        </section>
    );
}
