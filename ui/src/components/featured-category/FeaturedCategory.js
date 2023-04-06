import React from "react";

import FeaturedCategoryHeader from "./FeaturedCategoryHeader";
import CategoryList from "./CategoryList";

export default function FeaturedCategory() {
    return (
        <section className="flex flex-col basis-full pl-[7.5rem] pr-[7.5rem]">
            <FeaturedCategoryHeader />
            <CategoryList />
        </section>
    );
}
