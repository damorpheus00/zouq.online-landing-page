import React from "react";
import AuthCard from "../../../components/cards/AuthCard";
import AuthCardItems from "../../../components/cards/AuthCardItems";
import AuthContainer from "../../../components/containers/AuthContainer";

export default function SignUpPageStep2() {
    const typeOfCustomer = localStorage.getItem("customer-type");
    return (
        <AuthContainer>
            <AuthCard>
                <AuthCardItems type="sign-up" typeOfCustomer={typeOfCustomer} />
            </AuthCard>
        </AuthContainer>
    );
}
