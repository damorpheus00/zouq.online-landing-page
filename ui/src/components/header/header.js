import React from "react";

export default function Header({ text1, text2, main }) {
    return (
        <>
            {main ? (
                <h1 className="text-6xl font-black text-neutralcolorwhite brand-text">
                    {text1}{" "}
                    <span className="text-primarypaleBlue">{text2}</span>
                </h1>
            ) : (
                <p className="text-6xl font-black text-neutralcolorwhite brand-text">
                    {text1}{" "}
                    <span className="text-primarypaleBlue">{text2}</span>
                </p>
            )}
        </>
    );
}
