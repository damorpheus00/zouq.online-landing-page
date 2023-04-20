import React from "react";

export default function SignUpVerificationPageColumn({
    children,
    additionalStyling,
}) {
    return (
        <div
            className={`flex flex-col lg:h-screen bg-cover ${additionalStyling}`}
        >
            {children}
        </div>
    );
}
