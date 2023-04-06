import React from "react";
import JoinUsButton from "../buttons/JoinUsButton";
import Header from "../header/header";

export default function Hero() {
    return (
        <section className="flex flex-col basis-full h-[42.125rem] hero pl-[7.5rem] pr-[7.5rem]">
            <div className="mt-20 w-[31.875rem] mb-[5.625rem]">
                <Header text1={"One-Stop-"} text2={"Halal Shop"} main={true} />
            </div>
            <div className="mb-6">
                <p className="text-lg font-black text-neutralcolorwhite brand-text">
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
