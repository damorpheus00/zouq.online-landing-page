import React, { useRef } from "react";
import MerchantCategorySelectListItem from "./MerchantCategorySelectListItem";
import resort from "../../../assets/images/resort.png";
import restaurant from "../../../assets/images/restaurant.png";
import groceries from "../../../assets/images/groceries.png";
import fashion from "../../../assets/images/fashion.png";
import cosmetics from "../../../assets/images/cosmetics.png";
import { useDraggable } from "react-use-draggable-scroll";

export default function MerchantCategorySelectPageList({
    handleChangeSelect,
    select,
}) {
    const ref = useRef();
    const { events } = useDraggable(ref);
    return (
        <div
            ref={ref}
            {...events}
            className="flex max-w-[20.938rem] md:max-w-[44rem] xl:max-w-[58.75rem] transition-all overflow-x-hidden mb-[5.5rem] md:mb-20 xl:mb-20"
        >
            <MerchantCategorySelectListItem
                handleChangeSelect={handleChangeSelect}
                firstItem={true}
                imgSrc={resort}
                text={"HOTELS & RESORTS"}
                select={select}
            />
            <MerchantCategorySelectListItem
                handleChangeSelect={handleChangeSelect}
                imgSrc={restaurant}
                text={"RESTAURANTS"}
                select={select}
            />
            <MerchantCategorySelectListItem
                handleChangeSelect={handleChangeSelect}
                imgSrc={groceries}
                text={"GROCERIES"}
                select={select}
            />
            <MerchantCategorySelectListItem
                handleChangeSelect={handleChangeSelect}
                imgSrc={fashion}
                text={"FASHION"}
                select={select}
            />
            <MerchantCategorySelectListItem
                handleChangeSelect={handleChangeSelect}
                imgSrc={cosmetics}
                text={"COSMETICS"}
                select={select}
            />
        </div>
    );
}
