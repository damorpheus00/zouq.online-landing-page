import React from "react";
import bannerLogo from "../../../../assets/images/banner-logo.png";

export default function Banner() {
    return (
        <section className="flex basis-full flex-wrap items-center justify-center banner p-14 h-24 md:h-[8rem] xl:h-[10rem] mb-[6.25rem] md:mb-40 xl:mb-[11.25rem] bg-cover md:bg-contain xl:bg-cover bg-no-repeat bg-center">
            <img src={bannerLogo} alt={"Zouq Logo"} className="h-8" />
        </section>
    );
}
