import React, { useState } from "react";
import hidePassIcon from "../../assets/images/hide-pass.svg";
import showPassIcon from "../../assets/images/show-pass.svg";

export default function AuthInput({
    name,
    label,
    type,
    value,
    placeholder,
    onChange,
    withMarginTop = true,
}) {
    const [showPass, setShowPass] = useState(false);
    const handlePasswordIconChange = () => {
        setShowPass(!showPass);
    };
    return (
        <div
            className={`flex flex-col w-[18.125rem] md:w-[22.875rem] xl:w-[22.75rem] relative ${
                withMarginTop && "mt-5"
            }`}
        >
            <label htmlFor={name} className="text-lg text-white font-medium">
                {label}
            </label>
            <input
                name={name}
                value={value}
                type={
                    type === "password"
                        ? showPass === true
                            ? "text"
                            : "password"
                        : type
                }
                required
                onChange={(e) => {
                    onChange(e.target.value);
                }}
                placeholder={placeholder}
                className="mt-3 rounded-[2.5rem] px-4 py-3.5"
            />
            {type === "password" && (
                <img
                    src={showPass ? showPassIcon : hidePassIcon}
                    alt="show-pass-icon"
                    onClick={handlePasswordIconChange}
                    className="h-[1.5rem] w-[1.5rem] absolute right-4 top-[3.4rem] cursor-pointer"
                />
            )}
        </div>
    );
}
