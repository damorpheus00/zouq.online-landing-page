import React from "react";
import logo from "../../assets/images/logo.png";
import fbLogo from "../../assets/images/fb-logo.png";
import instaLogo from "../../assets/images/insta-logo.png";
import linkedInLogo from "../../assets/images/linkedin-logo.png";

export default function Contact() {
    return (
        <section className="flex justify-evenly basis-full pl-[7.5rem] pr-[7.5rem] mb-[11.375rem]">
            <div className="flex flex-col basis-2/12 ">
                <img src={logo} className="h-8 w-28 mb-5" />
                <p className="text-base text-neutralcolorwhite brand-text mb-3.5 font-[450]">
                    Follow us on social media:
                </p>
                <div className="flex">
                    <img src={fbLogo} className="mr-5" />
                    <img src={instaLogo} className="mr-5" />
                    <img src={linkedInLogo} />
                </div>
            </div>
            <div className="flex flex-col basis-2/12 justify-center">
                <p className="text-xl text-neutralcolorwhite brand-text mb-3 font-black">
                    QUICK LINK
                </p>
                <p className="text-base text-neutralcolorwhite brand-text mb-3 font-[450]">
                    Services
                </p>
                <p className="text-base text-neutralcolorwhite brand-text font-[450]">
                    About
                </p>
            </div>
            <div className="flex flex-col basis-2/12 justify-center">
                <p className="text-xl text-neutralcolorwhite brand-text mb-3 font-black">
                    CONTACT US
                </p>
                <p className="text-base text-neutralcolorwhite brand-text mb-3 font-[450]">
                    solutions@zouq.online
                </p>
                <p className="text-base text-neutralcolorwhite brand-text font-[450]">
                    1-650-785-2013
                </p>
            </div>
        </section>
    );
}
