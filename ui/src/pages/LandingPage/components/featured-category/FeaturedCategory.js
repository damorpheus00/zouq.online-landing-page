import React, { useRef } from "react";

import FeaturedCategoryHeader from "./FeaturedCategoryHeader";
import CategoryList from "./CategoryList";

export default function FeaturedCategory() {
    const categoryListRef = useRef();
    const scroll = (scrollOffset) => {
        categoryListRef.current.scrollLeft += scrollOffset;
    };
    return (
        <section className="flex flex-col basis-full pl-5 pr-5 sm:pl-[7.5rem] sm:pr-[7.5rem]">
            <FeaturedCategoryHeader scroll={scroll} />
            <CategoryList categoryListRef={categoryListRef} />
        </section>
    );
}
