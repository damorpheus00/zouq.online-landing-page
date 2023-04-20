import React from "react";

export default function CustomerTypeBox({ type, setSelected, selected }) {
    return (
        <div
            className={`${
                type === "Buyer" &&
                "xl:mr-[1.25rem] md:mr-[1.25rem] mr-[0.688rem]"
            } ${
                selected === type ? "type-box-focus" : "type-box"
            } flex justify-center items-center w-[8.875rem] h-[7.5rem] md:h-[9.125rem] md:w-[11.063rem] xl:w-[11.063rem] xl:h-[9.125rem] rounded-lg`}
            onClick={() => {
                setSelected(type);
                localStorage.setItem("customer-type", type);
            }}
        >
            <p className="text-base xl:text-[1.375rem] text-white font-black">
                {type}
            </p>
        </div>
    );
}
