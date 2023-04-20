import React from "react";
import BenefitsForMerchantsListItem from "./BenefitsForMerchantsListItem";

export default function BenefitsForMerchantsList() {
    return (
        <div className="flex sm:justify-center xl:justify-evenly items-center flex-wrap xl:flex-nowrap basis-full mb-[3.25rem] md:mb-[3.75rem] xl:mb-40">
            <BenefitsForMerchantsListItem
                textHeader={"Increased Orders"}
                withMarginRight={true}
                textDescription={
                    "Zouq is designed to help merchants or sellers reach more customers and get more orders or bookings."
                }
            />
            <BenefitsForMerchantsListItem
                textHeader={"Convenient Delivery"}
                textDescription={
                    "Zouq arranges on-demand or scheduled delivery to your customer’s location."
                }
            />
            <BenefitsForMerchantsListItem
                textHeader={"Fast & Secure Payment"}
                textDescription={
                    "Zouq offers safe and flexible payment options for your customers."
                }
                lastItem={true}
            />
        </div>
    );
}
