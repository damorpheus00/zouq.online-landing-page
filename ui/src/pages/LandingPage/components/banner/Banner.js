import React from "react";
import logo from "../../../../assets/images/logo.png";
import JoinUsButton from "../../../../components/buttons/JoinUsButton";

export default function Banner() {
    return (
        <section className="flex flex-wrap justify-between banner h-[12.375rem] md:h-[9.625rem] xl:h-[10.5rem] mb-[6.25rem] md:mb-40 xl:mb-[11.25rem] md:bg-contain xl:bg-cover bg-no-repeat bg-center">
            <div className="flex justify-center sm:justify-end items-center basis-full md:basis-4/12 xl:basis-3/12">
                <img
                    src={logo}
                    alt={"zouqlogo"}
                    className="mt-8 sm:mt-0 w-[9.125rem] h-[2.625rem] sm:w-[11.438rem] sm:h-[3.25rem] md:mr-2 xl:mr-10"
                />
            </div>
            <div className="flex justify-center sm:mb-0 mb-7 sm:justify-start items-center basis-full md:basis-3/12 xl:basis-3/12">
                <JoinUsButton bgColor={"bg-neutralcolorwhite"} />
            </div>
        </section>
    );
}
