import React from "react";

export default function ServicesText({ text, centered = true, color }) {
    return (
        <p
            className={`${
                color && color
            } text-base font-medium sm:text-2xl sm:font-bold ${
                centered && "text-center"
            } `}
        >
            {text}
        </p>
    );
}
