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
            className="flex justify-center mr-5 md:mr-10 basis-full md:basis-4/12 xl:basis-3/12 items-end overflow-hidden rounded-[1.25rem] relative min-w-max"
        >
            <img
                src={imgSrc}
                alt={`Zouq ${text}`}
                className="basis-full transition-all duration-300 hover:scale-150 rounded-[1.25rem]"
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
