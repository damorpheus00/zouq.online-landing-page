import React from "react";
import benefitCheck from "../../../../assets/images/benefit-check.png";

export default function BenefitsForMerchantsListItem({
    textHeader,
    textDescription,
    largeMarginBottom,
}) {
    return (
        <div
            className={`flex md:mr-3 md:basis-5/12 xl:basis-4/12 xl:mr-0 bg-contain bg-no-repeat bg-center h-[17rem] lg:h-[19.313rem] flex-col benefits-for-merchants-container ${
                largeMarginBottom
                    ? "mb-10 sm:mb-[3.75rem] xl:mb-0"
                    : "mb-5 sm:mb-0 xl:mb-0"
            }`}
        >
            <div className="flex justify-center mt-[4rem] lg:mt-[3.125rem]">
                <img
                    className="h-7 w-7 mr-1"
                    alt="Zouq benefits check list item."
                    src={benefitCheck}
                />
                <h3 className="text-lg md:text-xl xl:text-2xl text-primarypaleblue font-black sm:mb-0 mb-4 text-shadow">
                    {textHeader}
                </h3>
            </div>
            <div className="flex justify-center mt-2 lg:mt-10 sm:px-0 px-10">
                <h4 className="text-base md:text-lg xl:text-xl text-neutralcolorwhite font-medium sm:font-bold lg:w-[18.75rem] text-center">
                    {textDescription}
                </h4>
            </div>
        </div>
    );
}
