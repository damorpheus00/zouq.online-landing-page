import React from "react";
import { Link } from "react-router-dom";

export default function CommonButton({
    text,
    bgColor,
    absolute,
    absoluteStyle,
    to,
    additionalStyles,
}) {
    return (
        <Link
            to={to}
            className={`${bgColor && bgColor} ${absolute ? "absolute" : ""} ${
                absoluteStyle ? absoluteStyle : ""
            } ${
                additionalStyles && additionalStyles
            } hover:bg-primarylightblue font-bold text-lg primarydarkblue text-primarydarkblue w-36 h-[3.25rem] rounded-[2.5rem] transition-all text-center pt-3`}
        >
            {text}
        </Link>
    );
}
