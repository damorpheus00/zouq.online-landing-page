import React from "react";

import ServicesImage from "./ServicesImage";
import ServicesDescription from "./ServicesDescription";

export default function Services() {
    return (
        <section className="flex justify-between basis-full pl-[7.5rem] pr-[7.5rem] mb-40">
            <ServicesImage />
            <ServicesDescription />
        </section>
    );
}
