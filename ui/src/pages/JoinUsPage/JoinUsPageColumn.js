import React from "react";

export default function JoinUsPageColumn({ children, additionalStyling }) {
    return (
        <div className={`flex flex-col h-screen bg-cover ${additionalStyling}`}>
            {children}
        </div>
    );
}
