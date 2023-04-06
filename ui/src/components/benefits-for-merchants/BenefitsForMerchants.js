import React from "react";
import BenefitsForMerchantsHeader from "./BenefitsForMerchantsHeader";
import BenefitsForMerchantsList from "./BenefitsForMerchantsList";
import BenefitsForMerchantsProgressBar from "./BenefitsForMerchantsProgressBar";

export default function BenefitsForMerchants() {
    return (
        <section className="flex flex-col basis-full pl-[7.5rem] pr-[7.5rem]">
            <BenefitsForMerchantsHeader />
            <BenefitsForMerchantsList />
            <BenefitsForMerchantsProgressBar />
        </section>
    );
}
