import React from "react";
import Header from "../../../../components/header/header";
import ServicesText from "./ServicesText";

export default function ServicesDescription() {
    return (
        <div className="flex basis-full md:basis-5/12 xl:basis-6/12 flex-col mb-10 sm:mb-0">
            <div className="mb-4 md:mb-[2rem] xl:mb-[3.75rem]">
                <Header text1={"Our"} text2={"Services"} />
            </div>
            <div className="mb-4 xl:mb-10">
                <ServicesText
                    color={"text-white"}
                    text={
                        "Zouq streamlines application for Halal certification of interested establishments."
                    }
                    centered={false}
                />
            </div>
            <div className="mb-4 xl:mb-10">
                <ServicesText
                    color={"text-white"}
                    text={
                        "We partner with internationally recognized and reputable Halal certification bodies for all training and accreditation services."
                    }
                    centered={false}
                />
            </div>
            <div className="flex flex-col">
                <ServicesText
                    color={"text-white"}
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
