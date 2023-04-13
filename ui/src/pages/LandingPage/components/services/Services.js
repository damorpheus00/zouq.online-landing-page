import React from "react";

import ServicesDescription from "./ServicesDescription";

import ServicesImage from "./ServicesImage";

export default function Services() {
    return (
        <section className="flex items-center flex-wrap sm:flex-row justify-between basis-full px-5 lg:px-[7.5rem] 2xl:px-[7.5rem] mb-[3.75rem] md:mb-[5.5rem] xl:mb-[12.5rem]">
            <ServicesDescription />
            <ServicesImage />
        </section>
    );
}
