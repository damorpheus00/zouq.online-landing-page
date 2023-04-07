import React from "react";

export default function FooterText({
    link = true,
    href,
    text,
    additionalStyle,
}) {
    return (
        <>
            {link ? (
                <a
                    href={href}
                    className={`text-neutralcolorwhite brand-text text-sm font-[450] ${
                        additionalStyle && additionalStyle
                    }`}
                >
                    {text}
                </a>
            ) : (
                <p
                    className={`text-neutralcolorwhite brand-text text-sm font-[450] ${
                        additionalStyle && additionalStyle
                    }`}
                >
                    {text}
                </p>
            )}
        </>
    );
}
