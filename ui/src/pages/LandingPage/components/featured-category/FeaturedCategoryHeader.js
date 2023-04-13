import React, { useState } from "react";

import leftDefault from "../../../../assets/images/left-default.png";
import rightDefault from "../../../../assets/images/right-default.png";
import leftHover from "../../../../assets/images/left-hover.png";
import rightHover from "../../../../assets/images/right-hover.png";
import Header from "../../../../components/header/header";

export default function FeaturedCategoryHeader({ scroll }) {
    const [leftHovered, setLeftHovered] = useState(false);
    const [rightHovered, setRightHovered] = useState(false);
    return (
        <div className="flex justify-between items-center mt-[2.625rem] sm:mt-20 mb-[1.875rem] md:mb-8 xl:mb-10">
            <Header text1={"Featured"} text2={"Categories"} />
            <div className="flex">
                <button
                    onMouseEnter={() => {
                        setLeftHovered(true);
                    }}
                    onMouseLeave={() => {
                        setLeftHovered(false);
                    }}
                    onClick={() => {
                        scroll(-350);
                    }}
                    className="flex justify-center items-center mr-2.5 xl:mr-5 md:mr-[0.625rem]"
                >
                    <img
                        src={leftHovered ? leftHover : leftDefault}
                        alt={"Zouq left icon"}
                        className="h-6 w-6 md:h-[2.125rem] md:w-[2.125rem] xl:h-10 xl:w-10"
                    />
                </button>
                <button
                    onMouseEnter={() => {
                        setRightHovered(true);
                    }}
                    onMouseLeave={() => {
                        setRightHovered(false);
                    }}
                    onClick={() => {
                        scroll(350);
                    }}
                    className="flex justify-center items-center"
                >
                    <img
                        src={rightHovered ? rightHover : rightDefault}
                        alt={"Zouq right icon"}
                        className="h-6 w-6 md:h-[2.125rem] md:w-[2.125rem] xl:h-10 xl:w-10"
                    />
                </button>
            </div>
        </div>
    );
}
