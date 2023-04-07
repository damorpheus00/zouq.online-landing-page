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
        <div className="flex justify-between items-center mt-10 sm:mt-[7.375rem] mb-10">
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
                        scroll(-100);
                    }}
                    className="flex justify-center items-center mr-1 sm:mr-5"
                >
                    <img
                        src={leftHovered ? leftHover : leftDefault}
                        alt={"left-icon"}
                        className="h-6 w-6 sm:h-10 sm:w-10"
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
                        scroll(100);
                    }}
                    className="flex justify-center items-center "
                >
                    <img
                        src={rightHovered ? rightHover : rightDefault}
                        alt={"right-icon"}
                        className="h-6 w-6 sm:h-10 sm:w-10"
                    />
                </button>
            </div>
        </div>
    );
}
