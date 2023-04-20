import React from "react";

export default function AuthCard({ children, mediumSize }) {
    return (
        <div
            className={`flex flex-col items-center bg-white mt-[3.75rem] mb-[8rem] md:mb-[12.625rem] xl:mb-[7.5rem] md:mt-[7.625rem] xl:mt-[9.688rem] ${
                mediumSize
                    ? "w-[20.938rem] md:w-[44rem] xl:w-[58.75rem] md:py-14 py-10 xl:py-[3.75rem]"
                    : "w-[20.938rem] md:min-w-[44rem] xl:w-[44.125rem] px-5 py-10 xl:px-[8rem] md:py-14 xl:py-20"
            } h-[33.125rem] md:h-[34.75rem] xl:h-[39.125rem] rounded-[1.25rem] md:rounded-xl xl:rounded-[1.25rem]`}
        >
            {children}
        </div>
    );
}
