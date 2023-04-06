import React from "react";

export default function Footer() {
    return (
        <footer className="flex justify-between items-center h-16 bg-primaryblue pl-[7.5rem] pr-[7.5rem]">
            <p className="text-neutralcolorwhite brand-text text-sm font-[450]">
                Copyright © 2023 ZOUQ. All Rights Reserved.{" "}
            </p>
            <div className="flex">
                <a
                    href="#terms"
                    className="text-neutralcolorwhite brand-text text-sm font-[450] mr-5"
                >
                    Terms & Condition
                </a>
                <a
                    href="#privacy"
                    className="text-neutralcolorwhite brand-text text-sm font-[450] mr-5"
                >
                    Privacy Policy
                </a>
                <a
                    href="#cookie"
                    className="text-neutralcolorwhite brand-text text-sm font-[450]"
                >
                    Cookie Policy
                </a>
            </div>
        </footer>
    );
}
