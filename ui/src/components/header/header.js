import React from "react";

export default function Header({ text1, text2, main }) {
    return (
        <>
            {main ? (
                <h1 className="sm:leading-[3rem] xl:leading-[3.875rem] text-[2.5rem] sm:text-[2.75rem] xl:text-[3.625rem] font-black text-white ">
                    {text1}
                    <span className="text-primarypaleblue">{text2}</span>
                </h1>
            ) : (
                <h2 className="text-2xl md:text-[1.75rem] xl:text-[2.5rem] font-black text-white ">
                    {text1}{" "}
                    <span className="text-primarypaleblue">{text2}</span>
                </h2>
            )}
        </>
    );
}
