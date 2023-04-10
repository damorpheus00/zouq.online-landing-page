import React, { useState } from "react";
import NavBar from "./components/nav/NavBar";
import Hero from "./components/hero/Hero";
import FeaturedCategory from "./components/featured-category/FeaturedCategory";
import BenifitsForMerchants from "./components/benefits-for-merchants/BenefitsForMerchants";
import Services from "./components/services/Services";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "../../App.css";
import SmallScreenNav from "./components/small-screen-nav/SmallScreenNav";

function LandingPage() {
    const [openMenu, setOpenMenu] = useState(false);
    const handleChangeOpenMenu = () => {
        setOpenMenu(!openMenu);
    };
    return (
        <div className="flex relative basis-full flex-col h-view bg-primarydarkblue">
            <NavBar
                openMenu={openMenu}
                handleChangeOpenMenu={handleChangeOpenMenu}
            />
            <SmallScreenNav openMenu={openMenu} />
            <Hero />
            <FeaturedCategory />
            <BenifitsForMerchants />
            <Services />
            <Banner />
            <Contact />
            <Footer />
        </div>
    );
}

export default LandingPage;
