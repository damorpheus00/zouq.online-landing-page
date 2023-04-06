import React from "react";

export default function JoinUsButton({ bgColor, absolute, absoluteStyle }) {
    return (
        <a
            href="#joinus"
            className={`${bgColor && bgColor} ${absolute ? "absolute" : ""} ${
                absoluteStyle ? absoluteStyle : ""
            } hover:bg-primarylightblue font-bold text-primarydarkblue text-lg primarydarkblue text-primarydarkblue w-36 h-[3.25rem] rounded-[2.5rem] text-center margin pt-3`}
        >
            Join us
        </a>
    );
}
