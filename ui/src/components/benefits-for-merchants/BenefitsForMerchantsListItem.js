import React from "react";
import check from "../../assets/images/check.png";

export default function BenefitsForMerchantsListItem({
    textHeader,
    textDescription,
    largeMarginBottom,
}) {
    return (
        <div
            className={`flex items-center ${
                largeMarginBottom ? "mb-[3.75rem]" : "mb-8"
            }`}
        >
            <div className="flex justify-center items center mr-4 ">
                <img src={check} />
            </div>
            <div className="flex flex-col">
                <p className="text-[2.5rem] text-primarypaleblue font-black">
                    {textHeader}
                </p>
                <p className="text-2xl text-neutralcolorwhite font-bold">
                    {textDescription}
                </p>
            </div>
        </div>
    );
}
