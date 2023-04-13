import React from "react";

export default function ContactItemContainer({ children, firstItem }) {
    return (
        <div
            className={`flex flex-col basis-full xl:basis-2/12 justify-center xl:items-start items-center xl:mb-0 sm:mb-[3.5rem] ${
                firstItem ? "mb-[3.5rem]" : "mb-10"
            }`}
        >
            {children}
        </div>
    );
}
