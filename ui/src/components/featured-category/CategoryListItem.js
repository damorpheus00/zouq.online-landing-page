import React from "react";

export default function CategoryListItem({ text, imgSrc }) {
    return (
        <div className="flex justify-center basis-3/12 items-end">
            <img
                src={imgSrc}
                className="h-[19.75rem] w-[16.75rem] rounded-[1.25rem]"
            />
            <div className="flex justify-center items-center h-[3.625rem] absolute category-text w-[16.75rem] rounded-b-[1.25rem]">
                <p className="text-base text-neutralcolorwhite font-bold brand-text rounded-b-[1.25rem]">
                    {text}
                </p>
            </div>
        </div>
    );
}
