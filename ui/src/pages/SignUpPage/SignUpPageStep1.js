import React, { useEffect, useState } from "react";
import AuthContainer from "../../components/containers/AuthContainer";
import AuthCard from "../../components/cards/AuthCard";
import AuthButton from "../../components/buttons/AuthButton";
import CustomerTypeBox from "./components/CustomerTypeBox";

export default function SignUpPage() {
    const [selected, setSelected] = useState("");

    return (
        <AuthContainer>
            <AuthCard>
                <div className="flex xl:mb-12 mb-12">
                    <h2 className="xl:w-[13.438rem] md:w-[17rem] text-2xl font-black text-center">
                        Are you a Merchant? or a Buyer?
                    </h2>
                </div>
                <div className="flex xl:mb-20 md:mb-20 mb-[8.875rem]">
                    <CustomerTypeBox
                        type="Buyer"
                        setSelected={setSelected}
                        selected={selected}
                    />
                    <CustomerTypeBox
                        type="Merchant"
                        setSelected={setSelected}
                        selected={selected}
                    />
                </div>
                <div className="flex xl:mb-[7rem] md:mb-[7.375rem] mb-10">
                    <AuthButton
                        disable={!selected}
                        text={"Continue"}
                        to={"/sign-up-step-2"}
                    />
                </div>
            </AuthCard>
        </AuthContainer>
    );
}
