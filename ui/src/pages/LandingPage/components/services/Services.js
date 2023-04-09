import React from "react";

import ServicesImage from "./ServicesImage";
import ServicesDescription from "./ServicesDescription";

export default function Services() {
    return (
        <section className="flex flex-wrap-reverse sm:flex-row justify-between basis-full px-5 lg:px-[7.5rem]  2xl:px-[7.5rem]  mb-[3.75rem] sm:mb-40">
            <ServicesImage />
            <ServicesDescription />
        </section>
    );
}
