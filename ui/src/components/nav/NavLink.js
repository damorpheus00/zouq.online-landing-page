import React from "react";
import { Link } from "react-router-dom";

export default function NavLink({ href, text, withMarginRight, pathName }) {
    return (
        <Link
            to={href}
            className={`transition-all hidden sm:flex text-base font-medium ${
                pathName === href &&
                "decoration-primarylightblue underline decoration-2 underline-offset-8 decoration-solid"
            } ${withMarginRight && "mr-[3.063rem]"}`}
        >
            {text}
        </Link>
    );
}
