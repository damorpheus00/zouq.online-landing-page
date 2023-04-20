import React from "react";

export default function AuthHeaderText({ header, subHeader, successPage }) {
    return (
        <>
            <div className="flex justify-center mb-2">
                <h3 className="xl:text-[2rem] text-2xl text-primarypaleblue font-black">
                    {header}
                </h3>
            </div>
            <div
                className={`flex justify-center ${
                    successPage
                        ? "xl:mb-[2.75rem] mb-[3.25rem]"
                        : "xl:mb-[3.75rem] md:mb-[3.75rem] mb-12"
                } `}
            >
                <p
                    className={`xl:text-xl text-white font-[450] ${
                        successPage
                            ? "w-[18.875rem] md:w-[29.313rem] xl:w-[29.313rem]"
                            : "w-[19.375rem] md:w-[21rem] xl:w-[24.75rem]"
                    } text-center`}
                >
                    {subHeader}
                </p>
            </div>
        </>
    );
}
