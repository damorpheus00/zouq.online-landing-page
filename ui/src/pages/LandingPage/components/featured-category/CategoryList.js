import React from "react";
import resort from "../../../../assets/images/resort.png";
import restaurant from "../../../../assets/images/restaurant.png";
import groceries from "../../../../assets/images/groceries.png";
import fashion from "../../../../assets/images/fashion.png";
import cosmetics from "../../../../assets/images/cosmetics.png";
import CategoryListItem from "./CategoryListItem";

export default function CategoryList({ categoryListRef }) {
    return (
        <div
            ref={categoryListRef}
            className="flex transition-all overflow-x-hidden mb-[3.75rem] md:mb-[4.25rem] xl:mb-40"
        >
            <CategoryListItem imgSrc={resort} text={"HOTELS & RESORTS"} />
            <CategoryListItem imgSrc={restaurant} text={"RESTAURANTS"} />
            <CategoryListItem imgSrc={groceries} text={"GROCERIES"} />
            <CategoryListItem imgSrc={fashion} text={"FASHION"} />
            <CategoryListItem imgSrc={cosmetics} text={"COSMETICS"} />
        </div>
    );
}
