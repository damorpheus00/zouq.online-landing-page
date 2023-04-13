import React, { useState } from "react";

export default function CategoryListItem({ text, imgSrc }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => {
                setHovered(true);
            }}
            onMouseLeave={() => {
                setHovered(false);
            }}
            className="mx-5 md:mr-[1.75rem] md:mx-0 xl:mx-[2.7rem] overflow-hidden relative rounded-[1.25rem] min-h-[16.875rem] min-w-[13.125rem] md:min-h-[16.875rem] md:min-w-[13.5rem] xl:min-h-[19.75rem] xl:min-w-[16.75rem]"
        >
            <img
                src={imgSrc}
                alt={`Zouq ${text}`}
                className="min-h-[16.875rem] min-w-[13.125rem] md:min-h-[19.75rem] md:min-w-[16.75rem] transition-all duration-300 hover:scale-125 rounded-[1.25rem]"
            />
            <div
                className={`flex justify-center items-center absolute rounded-b-[1.25rem] top-[80%] bottom-0 left-0 right-0 ${
                    hovered ? "category-text-hovered" : "category-text"
                } `}
            >
                <p
                    className={`text-base font-bold rounded-b-[1.25rem] ${
                        hovered ? "text-black" : "text-neutralcolorwhite"
                    }`}
                >
                    {text}
                </p>
            </div>
        </div>
    );
}
