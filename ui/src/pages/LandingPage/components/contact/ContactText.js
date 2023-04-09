import React from "react";

export default function ContactText({ link, href, text, withMarginBottom }) {
    return (
        <>
            {link ? (
                <a
                    href={href}
                    className={`text-base text-neutralcolorwhite  font-[450] ${
                        withMarginBottom && "mb-3 "
                    }`}
                >
                    {text}
                </a>
            ) : (
                <p
                    className={`text-base text-neutralcolorwhite  font-[450] ${
                        withMarginBottom && "mb-3 "
                    }`}
                >
                    {text}
                </p>
            )}
        </>
    );
}
