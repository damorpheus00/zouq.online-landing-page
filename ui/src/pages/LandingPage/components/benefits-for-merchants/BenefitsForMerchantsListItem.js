import React from "react";
import benefitCheck from "../../../../assets/images/benefit-check.png";

export default function BenefitsForMerchantsListItem({
    textHeader,
    textDescription,
}) {
    return (
        <div
            className={`flex lg:mr-1 md:basis-5/12 xl:basis-4/12 rounded-2xl bg-cover xl:bg-contain bg-no-repeat bg-center min-h-[14.25rem] min-w-[20.8rem] md:min-w-[21.125rem] md:min-h-[15rem] xl:min-w-[23.313rem] xl:min-h-[19.313rem] flex-col benefits-for-merchants-container mb-7`}
        >
            <div className="flex justify-center mt-10 md:mt-10 xl:mt-12">
                <img
                    className="h-7 w-7 mr-1"
                    alt="Zouq benefits check list item."
                    src={benefitCheck}
                />
                <h3 className="text-lg md:text-2xl text-primarypaleblue font-black sm:mb-0 mb-4 text-shadow text-center whitespace-pre-wrap md:max-w-[16.4rem] xl:max-w-[20rem]">
                    {textHeader}
                </h3>
            </div>
            <div className="flex justify-center mt-4 md:mt-8 xl:mt-10">
                <h4 className="text-base md:text-lg xl:text-xl text-neutralcolorwhite font-medium xl:font-bold w-[18.75rem] md:w-[17.563rem] xl:w-[18.75rem] text-center">
                    {textDescription}
                </h4>
            </div>
        </div>
    );
}
