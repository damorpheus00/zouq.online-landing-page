import React from "react";
import bannerLogo from "../../../../assets/images/banner-logo.png";

export default function Banner() {
    return (
        <section className="flex basis-full flex-wrap items-center justify-center banner min-h-[11.75rem] md:min-h-[11.25rem] xl:min-h-[10.188rem] mb-[6.25rem] md:mb-[6.75rem] xl:mb-40 bg-cover bg-no-repeat bg-center">
            <img
                src={bannerLogo}
                alt={"Zouq Logo"}
                className="min-h-8 min-w-[6.938rem]"
            />
        </section>
    );
}
