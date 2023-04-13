import React, { useState } from "react";
import Hero from "./components/hero/Hero";
import FeaturedCategory from "./components/featured-category/FeaturedCategory";
import BenifitsForMerchants from "./components/benefits-for-merchants/BenefitsForMerchants";
import Services from "./components/services/Services";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "../../App.css";

function LandingPage() {
    return (
        <>
            <Hero />
            <FeaturedCategory />
            <BenifitsForMerchants />
            <Services />
            <Banner />
            <Contact />
            <Footer />
        </>
    );
}

export default LandingPage;
