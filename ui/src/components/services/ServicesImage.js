import React from "react";
import zouqHalal from "../../assets/images/zouq-halal-logo.png";
export default function ServicesImage() {
    return (
        <>
            <div className="flex sm:basis-4/12">
                <img src={zouqHalal} className="h-[24.688rem] w-[25.375rem]" />
            </div>
        </>
    );
}
