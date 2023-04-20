import React from "react";

export default function AuthContainer({ children }) {
    return (
        <div className="bg-dirtywhite flex justify-center items-center text-neutralcolorblack">
            {children}
        </div>
    );
}
