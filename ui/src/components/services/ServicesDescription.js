import React from "react";
import Header from "../header/header";

export default function ServicesDescription() {
    return (
        <div className="flex sm:basis-7/12 flex-col items-center">
            <div className="mb-[3.75rem]">
                <Header text1={"Our"} text2={"Services"} />
            </div>
            <div className="mb-[1.75rem]">
                <p className="text-neutralcolorwhite text-2xl font-bold text-center">
                    Zouq streamlines application for Halal certification of
                    interested establishments.
                </p>
            </div>
            <div className="mb-[2.5rem]">
                <p className="text-neutralcolorwhite text-2xl font-bold text-center">
                    We partner with internationally recognized and reputable
                    Halal certification bodies for all training and
                    accreditation services.
                </p>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-neutralcolorwhite text-2xl font-bold">
                    Contact us to get halal certified:
                </p>
                <p className="text-2xl font-bold text-primarypaleblue">
                    solutions@zouq.online
                </p>
            </div>
        </div>
    );
}
