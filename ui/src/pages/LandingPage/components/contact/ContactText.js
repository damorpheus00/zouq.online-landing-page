import React from "react";
import { Link } from "react-router-dom";

export default function ContactText({ link, href, text, withMarginBottom }) {
    return (
        <>
            {link ? (
                <Link
                    to={href}
                    className={`text-base text-neutralcolorwhite font-[450] ${
                        withMarginBottom && "mb-3 "
                    }`}
                >
                    {text}
                </Link>
            ) : (
                <p
                    className={`text-base text-neutralcolorwhite font-[450] ${
                        withMarginBottom && "mb-3 "
                    }`}
                >
                    {text}
                </p>
            )}
        </>
    );
}
