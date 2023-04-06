import React from "react";
import banner from "../../assets/images/zouq-banner.png";
import logo from "../../assets/images/logo.png";
import JoinUsButton from "../buttons/JoinUsButton";

export default function Banner() {
    return (
        <section className="flex mb-[11.25rem] relative">
            <img
                src={logo}
                alt={"zouqlogo"}
                className="logo absolute top-14 left-60"
            />
            <JoinUsButton
                absolute={true}
                absoluteStyle={"top-14 right-60"}
                bgColor={"bg-neutralcolorwhite"}
            />
            <img src={banner} className="w-full h-[10.5rem]" />
        </section>
    );
}
