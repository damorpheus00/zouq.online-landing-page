import React from "react";
import FooterText from "./FooterText";

export default function Footer() {
    return (
        <footer className="flex flex-wrap justify-center sm:justify-between items-center h-[5.75rem] sm:h-16 bg-primaryblue pl-5 pr-5 sm:pl-[7.5rem] sm:pr-[7.5rem]">
            <div className="flex sm:mt-0 mt-1">
                <FooterText
                    text={"Copyright © 2023 ZOUQ. All Rights Reserved."}
                    link={false}
                />
            </div>
            <div className="flex mb-1">
                <FooterText
                    text={"Terms & Condition"}
                    href={"#terms"}
                    additionalStyle={"mr-5"}
                />
                <FooterText
                    text={"Privacy Policy"}
                    href={"#privacy"}
                    additionalStyle={"mr-5"}
                />
                <FooterText text={"Cookie Policy"} href={"#cookie"} />
            </div>
        </footer>
    );
}
