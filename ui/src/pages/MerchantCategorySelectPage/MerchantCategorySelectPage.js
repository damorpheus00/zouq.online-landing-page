import React, { useState } from "react";
import AuthContainer from "../../components/containers/AuthContainer";
import AuthCard from "../../components/cards/AuthCard";
import AuthButton from "../../components/buttons/AuthButton";
import MerchantCategorySelectPageHeader from "./component/MerchantCategorySelectPageHeader";
import MerchantCategorySelectPageList from "./component/MerchantCategorySelectPageList";

export default function MerchantCategorySelectPage() {
    const [select, setSelect] = useState("");
    const handleChangeSelect = (value) => {
        setSelect(value);
    };
    return (
        <AuthContainer>
            <AuthCard mediumSize={true}>
                <MerchantCategorySelectPageHeader />

                <MerchantCategorySelectPageList
                    handleChangeSelect={handleChangeSelect}
                    select={select}
                />

                <AuthButton
                    disable={!select}
                    text={"Select"}
                    to="/merchant-setup"
                />
            </AuthCard>
        </AuthContainer>
    );
}
