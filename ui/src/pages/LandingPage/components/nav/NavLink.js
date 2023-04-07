import React from "react";

export default function NavLink({ href, text, withMarginRight }) {
    return (
        <a
            href={href}
            className={`hidden sm:flex text-base font-medium ${
                withMarginRight && "mr-[3.063rem]"
            }`}
        >
            {text}
        </a>
    );
}