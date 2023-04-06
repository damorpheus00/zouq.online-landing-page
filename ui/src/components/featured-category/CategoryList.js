import React from "react";
import resort from "../../assets/images/resort.png";
import restaurant from "../../assets/images/restaurant.png";
import groceries from "../../assets/images/groceries.png";
import fashion from "../../assets/images/fashion.png";
import CategoryListItem from "./CategoryListItem";

export default function CategoryList() {
    return (
        <div className="flex justify-between mb-[9.375rem]">
            <CategoryListItem imgSrc={resort} text={"HOTELS & RESORTS"} />
            <CategoryListItem imgSrc={restaurant} text={"RESTAURANTS"} />
            <CategoryListItem imgSrc={groceries} text={"GROCERIES"} />
            <CategoryListItem imgSrc={fashion} text={"FASHION & COSMETICS"} />
        </div>
    );
}
