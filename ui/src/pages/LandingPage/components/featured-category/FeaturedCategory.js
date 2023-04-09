import React, { useRef } from "react";

import FeaturedCategoryHeader from "./FeaturedCategoryHeader";
import CategoryList from "./CategoryList";

export default function FeaturedCategory() {
    const categoryListRef = useRef();
    const scroll = (scrollOffset) => {
        categoryListRef.current.scrollLeft += scrollOffset;
    };
    return (
        <section className="flex flex-col basis-full px-5 lg:px-[7.5rem]  2xl:px-[7.5rem] ">
            <FeaturedCategoryHeader scroll={scroll} />
            <CategoryList categoryListRef={categoryListRef} />
        </section>
    );
}
