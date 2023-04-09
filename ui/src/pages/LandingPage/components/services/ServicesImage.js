import React from "react";
import zouqHalal from "../../../../assets/images/zouq-halal-logo.png";
export default function ServicesImage() {
    return (
        <>
            <div className="flex justify-center sm:justify-start basis-full sm:basis-4/12">
                <img
                    src={zouqHalal}
                    alt="Zouq Halal"
                    className="h-[19.063rem] w-[20.938rem] sm:h-[18.563] sm:w-[19.125rem] xl:h-[24.688rem] xl:w-[25.375rem]"
                />
            </div>
        </>
    );
}
