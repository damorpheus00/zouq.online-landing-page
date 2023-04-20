import React, { useState } from "react";

export default function MerchantCategorySelectListItem({
    text,
    imgSrc,
    firstItem,
    handleChangeSelect,
    select,
}) {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            onMouseEnter={() => {
                setHovered(true);
            }}
            onMouseLeave={() => {
                setHovered(false);
            }}
            onClick={() => {
                handleChangeSelect(text);
            }}
            className={`mr-4 xl:mr-[2rem] ${
                firstItem && "xl:ml-[2rem] ml-4"
            } overflow-hidden relative rounded-[1.25rem] min-h-[10.875rem] min-w-[11.813rem] md:min-h-[12.5rem] md:min-w-[13.75rem] xl:min-h-[14.563rem] xl:min-w-[15.5rem]`}
        >
            <img
                src={imgSrc}
                alt={`Zouq ${text}`}
                className="cursor-pointer min-h-[10.875rem] min-w-[11.813rem] xl:min-h-[14.563rem] xl:min-w-[15.5rem] transition-all duration-300 hover:scale-125 rounded-[1.25rem]"
            />
            <div
                className={`flex justify-center items-center absolute rounded-b-[1.25rem] top-[70%] xl:top-[80%] bottom-0 left-0 right-0 ${
                    hovered || select === text
                        ? "category-text-hovered"
                        : "category-text"
                } `}
            >
                <p
                    className={`text-base font-bold rounded-b-[1.25rem] ${
                        hovered || select === text ? "text-black" : "text-white"
                    }`}
                >
                    {text}
                </p>
            </div>
        </div>
    );
}
