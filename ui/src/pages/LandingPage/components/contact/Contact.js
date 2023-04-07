import React from "react";
import logo from "../../../../assets/images/logo.png";
import fbLogo from "../../../../assets/images/fb-logo.png";
import instaLogo from "../../../../assets/images/insta-logo.png";
import linkedInLogo from "../../../../assets/images/linkedin-logo.png";
import ContactItemContainer from "./ContactItemContainer";
import ContactHeaderText from "./ContactHeaderText";
import ContactText from "./ContactText";

export default function Contact() {
    return (
        <section className="flex flex-wrap justify-evenly basis-full pl-5 pr-5 sm:pl-[7.5rem] sm:pr-[7.5rem] mb-16 sm:mb-[11.375rem]">
            <ContactItemContainer>
                <img alt="logo" src={logo} className="h-8 w-28 mb-5" />
                <p className="text-base text-neutralcolorwhite common-text mb-1 sm:mb-3.5 font-[450]">
                    Follow us on social media:
                </p>
                <div className="flex">
                    <img src={fbLogo} alt="FB Logo" className="mr-5" />
                    <img
                        src={instaLogo}
                        alt="Instagram Logo"
                        className="mr-5"
                    />
                    <img src={linkedInLogo} alt="LinkedIn Logo" />
                </div>
            </ContactItemContainer>
            <ContactItemContainer>
                <ContactHeaderText text={"QUICK LINK"} />
                <ContactText
                    link={true}
                    href={"#services"}
                    text={"Services"}
                    withMarginBottom={true}
                />
                <ContactText
                    link={true}
                    href={"#about"}
                    text={"About"}
                    withMarginBottom={false}
                />
            </ContactItemContainer>
            <ContactItemContainer>
                <ContactHeaderText text={"CONTACT US"} />
                <ContactText
                    link={false}
                    text={"solutions@zouq.online"}
                    withMarginBottom={true}
                />
                <ContactText
                    link={false}
                    text={"1-650-785-2013"}
                    withMarginBottom={false}
                />
            </ContactItemContainer>
        </section>
    );
}
