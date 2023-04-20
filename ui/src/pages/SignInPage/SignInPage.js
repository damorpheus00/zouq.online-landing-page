import React from "react";
import SignInCard from "./components/SignInCard";
import AuthContainer from "../../components/containers/AuthContainer";

export default function LoginPage() {
    return (
        <AuthContainer>
            <SignInCard />
        </AuthContainer>
    );
}
