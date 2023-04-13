import React from "react";

export default function ServicesText({ text, centered, color }) {
    return (
        <p
            className={`${color && color} text-base font-medium xl:text-xl ${
                centered && "text-center"
            } `}
        >
            {text}
        </p>
    );
}
