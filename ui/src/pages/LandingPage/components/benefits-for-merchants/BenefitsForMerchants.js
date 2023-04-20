import React from "react";
import BenefitsForMerchantsHeader from "./BenefitsForMerchantsHeader";
import BenefitsForMerchantsList from "./BenefitsForMerchantsList";

export default function BenefitsForMerchants() {
    return (
        <section className="flex flex-col basis-full px-5 sm:px-[2rem] lg:px-[7.5rem] 2xl:px-[7.5rem]">
            <BenefitsForMerchantsHeader />
            <BenefitsForMerchantsList />
        </section>
    );
}
