import React, { useState } from "react";

import leftDefault from "../../assets/images/left-default.png";
import rightDefault from "../../assets/images/right-default.png";
import leftHover from "../../assets/images/left-hover.png";
import rightHover from "../../assets/images/right-hover.png";
import Header from "../header/header";

export default function FeaturedCategoryHeader() {
    const [leftHovered, setLeftHovered] = useState(false);
    const [rightHovered, setRightHovered] = useState(false);
    return (
        <div className="flex justify-between items-center mt-[7.375rem] mb-10">
            <Header text1={"Featured"} text2={"Categories"} />
            <div className="flex">
                <button
                    onMouseEnter={() => {
                        setLeftHovered(true);
                    }}
                    onMouseLeave={() => {
                        setLeftHovered(false);
                    }}
                    className="flex justify-center items-center mr-5 h-10 w-10"
                >
                    <img
                        src={leftHovered ? leftHover : leftDefault}
                        alt={"left-icon"}
                        className=""
                    />
                </button>
                <button
                    onMouseEnter={() => {
                        setRightHovered(true);
                    }}
                    onMouseLeave={() => {
                        setRightHovered(false);
                    }}
                    className="flex justify-center items-center h-10 w-10"
                >
                    <img
                        src={rightHovered ? rightHover : rightDefault}
                        alt={"right-icon"}
                        className=""
                    />
                </button>
            </div>
        </div>
    );
}
