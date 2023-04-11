import React from "react";
import check from "../../../../assets/images/check.png";

export default function BenefitsForMerchantsListItem({
    textHeader,
    textDescription,
    largeMarginBottom,
}) {
    return (
        <div
            className={`flex items-start sm:items-center ${
                largeMarginBottom ? "mb-10 sm:mb-[3.75rem]" : "mb-8"
            }`}
        >
            <div className="flex justify-center sm:mr-4 min-h-7 min-w-7 sm:static absolute">
                <img alt="Zouq benefits check list item." src={check} />
            </div>
            <div className="flex flex-col">
                <h3 className="text-lg md:text-2xl xl:text-[2.5rem] text-primarypaleblue font-black sm:ml-0 ml-9 sm:mb-0 mb-4">
                    {textHeader}
                </h3>
                <h4 className="text-base md:text-lg xl:text-2xl text-neutralcolorwhite font-medium sm:font-bold">
                    {textDescription}
                </h4>
            </div>
        </div>
    );
}
