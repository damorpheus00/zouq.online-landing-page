import React from "react";
import servicesImage from "../../../../assets/images/services-image.png";

export default function ServicesImage() {
    return (
        <div className="flex justify-center items-start xl:items-center basis-full md:basis-6/12 xl:basis-5/12">
            <img src={servicesImage} className="" alt="Zouq Services" />
        </div>
    );
}
