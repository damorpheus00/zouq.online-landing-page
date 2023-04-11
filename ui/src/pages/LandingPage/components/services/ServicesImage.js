import React from "react";
import servicesImage from "../../../../assets/images/services-image.png";

export default function ServicesImage() {
    return (
        <div className="flex justify-center items-center basis-full xl:basis-5/12 mt-2 md:mt-10 xl:mt-0">
            <img src={servicesImage} className="" alt="Zouq Services" />
        </div>
    );
}
