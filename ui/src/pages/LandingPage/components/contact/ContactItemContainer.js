import React from "react";

export default function ContactItemContainer({ children }) {
    return (
        <div className="flex flex-col basis-full md:basis-4/12 xl:basis-2/12 justify-center xl:items-start items-center sm:mb-0 mb-[3.438rem]">
            {children}
        </div>
    );
}
