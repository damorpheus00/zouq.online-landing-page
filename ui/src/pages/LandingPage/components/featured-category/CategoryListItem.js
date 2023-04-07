import React from "react";

export default function CategoryListItem({ text, imgSrc }) {
    return (
        <div className="flex justify-center mr-5 sm:mr-0 basis-full sm:basis-3/12 items-end">
            <img
                src={imgSrc}
                alt="category-item"
                className="min-w-[13.125rem] min-h-[16.875rem] min-sm:h-[19.75rem] min-sm:w-[16.75rem] rounded-[1.25rem]"
            />
            <div className="flex justify-center items-center min-w-[13.125rem] min-h-[3.313rem] sm:min-h-[3.625rem] sm:min-w-[16.75rem] absolute category-text rounded-b-[1.25rem]">
                <p className="text-base text-neutralcolorwhite font-bold common-text rounded-b-[1.25rem]">
                    {text}
                </p>
            </div>
        </div>
    );
}
