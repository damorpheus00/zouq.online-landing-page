import React from "react";

export default function JoinUsPageInput({
    name,
    label,
    value,
    placeholder,
    onChange,
    withMarginTop = true,
}) {
    return (
        <div className={`flex flex-col ${withMarginTop && "mt-5"}`}>
            <label htmlFor={name} className="text-lg text-white font-medium">
                {label}
            </label>
            <input
                name={name}
                value={value}
                required
                onChange={(e) => {
                    onChange(e.target.value);
                }}
                placeholder={placeholder}
                className="mt-3 rounded-[2.5rem] px-4 py-3.5"
            />
        </div>
    );
}
