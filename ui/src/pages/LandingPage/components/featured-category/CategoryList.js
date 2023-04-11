import React from "react";
import resort from "../../../../assets/images/resort.png";
import restaurant from "../../../../assets/images/restaurant.png";
import groceries from "../../../../assets/images/groceries.png";
import fashion from "../../../../assets/images/fashion.png";
import CategoryListItem from "./CategoryListItem";

export default function CategoryList({ categoryListRef }) {
    return (
        <div
            ref={categoryListRef}
            className="flex transition-all overflow-x-auto relative basis-full mb-14 sm:mb-[9.375rem]"
        >
            <CategoryListItem imgSrc={resort} text={"HOTELS & RESORTS"} />
            <CategoryListItem imgSrc={restaurant} text={"RESTAURANTS"} />
            <CategoryListItem imgSrc={groceries} text={"GROCERIES"} />
            <CategoryListItem imgSrc={fashion} text={"FASHION"} />
            <CategoryListItem imgSrc={fashion} text={"COSMETICS"} />
        </div>
    );
}
