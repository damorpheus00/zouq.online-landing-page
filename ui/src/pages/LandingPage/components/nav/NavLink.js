import React from "react";
import { Link } from "react-router-dom";

export default function NavLink({ href, text, withMarginRight }) {
    return (
        <Link
            to={href}
            className={`hidden sm:flex text-base font-medium ${
                withMarginRight && "mr-[3.063rem]"
            }`}
        >
            {text}
        </Link>
    );
}
