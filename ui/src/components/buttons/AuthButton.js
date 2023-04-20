import React from "react";
import { Link } from "react-router-dom";

export default function AuthButton({ to, text, disable }) {
    return (
        <Link
            to={to}
            className={`${
                disable && "disable"
            } bg-primarypaleblue w-[18.438rem] md:w-[22.75rem] xl:w-[22.75rem] h-[3.25rem] text-lg font-bold text-center flex items-center justify-center rounded-[2.5rem]`}
        >
            {text}
        </Link>
    );
}
