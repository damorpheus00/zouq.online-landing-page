import React from "react";

export default function Header({ text1, text2, main }) {
    return (
        <>
            {main ? (
                <h1 className="leading-8 text-[2.5rem] md:text-5xl xl:text-6xl font-black text-neutralcolorwhite ">
                    {text1}
                    <span className="text-primarypaleBlue">{text2}</span>
                </h1>
            ) : (
                <p className="text-2xl md:text-5xl xl:text-6xl font-black text-neutralcolorwhite ">
                    {text1}{" "}
                    <span className="text-primarypaleBlue">{text2}</span>
                </p>
            )}
        </>
    );
}
