import React from "react";
import AuthCard from "../../../components/cards/AuthCard";
import AuthCardItems from "../../../components/cards/AuthCardItems";

export default function SignInCard() {
    return (
        <AuthCard>
            <AuthCardItems type={"sign-in"} />
        </AuthCard>
    );
}
