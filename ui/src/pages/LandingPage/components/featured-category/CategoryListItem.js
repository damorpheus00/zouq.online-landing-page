import React from "react";

export default function CategoryListItem({ text, imgSrc }) {
    return (
        <div className="flex justify-center mr-5 md:mr-10 xl:mr-0 basis-full md:basis-4/12 xl:basis-3/12 items-end">
            <img
                src={imgSrc}
                alt="category-item"
                className="min-w-[13.125rem] min-h-[16.875rem] md:min-h-[18.125rem] md:min-w-[15.813rem] xl:min-h-[19.75rem] xl:min-w-[16.75rem] rounded-[1.25rem]"
            />
            <div className="flex justify-center items-center min-w-[13.125rem] min-h-[3.313rem] md:min-h-[3.625rem] md:min-w-[15.9rem] xl:min-h-[3.625rem] xl:min-w-[16.75rem] absolute category-text rounded-b-[1.25rem]">
                <p className="text-base text-neutralcolorwhite font-bold  rounded-b-[1.25rem]">
                    {text}
                </p>
            </div>
        </div>
    );
}
