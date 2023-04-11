import React from "react";
import Header from "../../../../components/header/header";
import ServicesText from "./ServicesText";

export default function ServicesDescription() {
    return (
        <div className="flex basis-full xl:basis-7/12 flex-col">
            <div className="mb-5 sm:mb-[3.75rem]">
                <Header text1={"Our"} text2={"Services"} />
            </div>
            <div className="mb-5 sm:mb-[1.75rem]">
                <ServicesText
                    color={"text-neutralcolorwhite"}
                    text={
                        "Zouq streamlines application for Halal certification of interested establishments."
                    }
                    centered={false}
                />
            </div>
            <div className="mb-5 sm:mb-[2.5rem]">
                <ServicesText
                    color={"text-neutralcolorwhite"}
                    text={
                        "We partner with internationally recognized and reputable Halal certification bodies for all training and accreditation services."
                    }
                    centered={false}
                />
            </div>
            <div className="flex flex-col sm:mb-0 mb-7">
                <ServicesText
                    color={"text-neutralcolorwhite"}
                    text={"Contact us to get halal certified:"}
                    centered={false}
                />
                <ServicesText
                    color={"text-primarypaleblue"}
                    text={"solutions@zouq.online"}
                    centered={false}
                />
            </div>
        </div>
    );
}
