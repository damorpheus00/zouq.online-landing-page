import React from "react";
import Header from "../../../../components/header/header";

export default function Hero() {
    return (
        <section className="flex flex-col basis-full min-h-[27.438rem] sm:min-h-[30rem] xl:min-h-[40.063rem] hero px-5 sm:px-[2rem] lg:px-[7.5rem] 2xl:px-[7.5rem]">
            <div className="mt-16 sm:mt-20 w-[21rem] sm:w-[20.938rem] xl:w-[31.875rem] mb-[1.875rem] sm:mb-9 xl:mb-10">
                <Header text1={"One-Stop-"} text2={"Halal Shop"} main={true} />
            </div>
            <div className="mb-4 sm:mb-6">
                <p className="text-base sm:text-lg font-black text-white">
                    All your{" "}
                    <span className="text-primarypaleblue"> halal needs </span>{" "}
                    in one marketplace
                </p>
            </div>
        </section>
    );
}
