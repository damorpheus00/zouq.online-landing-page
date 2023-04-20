import React from "react";

export default function SignInButton({
    icon,
    text,
    alt,
    type,
    handleClick,
    profile,
}) {
    // const handleClick = () => {
    //     if (type === "sign-in") {
    //         window.location.href = "/";
    //     } else {
    //         window.location.href = "/sign-up-verification";
    //     }
    // };
    if (profile && profile.id) {
        window.location.href = "/sign-up-verification";
    }
    return (
        <button
            className="border-[#CBD0DC] border-[0.05rem] rounded-[6.25rem] py-[1.25rem] md:py-[1.125rem] xl:py-[1.125rem] min-w-[18.438rem] min-h-[3.75rem] md:min-w-[28.125rem] md:min-h-[3.75rem] xl:min-w-[28.125rem] mb-[1.25rem] relative"
            onClick={handleClick}
        >
            <img
                alt={alt}
                src={icon}
                className="absolute left-[1rem] top-[0.625rem]"
            />
            <span className="xl:text-base font-medium text-sm">{text}</span>
        </button>
    );
}
