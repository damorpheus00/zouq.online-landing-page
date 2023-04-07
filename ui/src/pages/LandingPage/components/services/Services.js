import React from "react";

import ServicesImage from "./ServicesImage";
import ServicesDescription from "./ServicesDescription";

export default function Services() {
    return (
        <section className="flex flex-wrap-reverse sm:flex-row justify-between basis-full pl-5 pr-5 sm:pl-[7.5rem] sm:pr-[7.5rem] mb-[3.75rem] sm:mb-40">
            <ServicesImage />
            <ServicesDescription />
        </section>
    );
}
