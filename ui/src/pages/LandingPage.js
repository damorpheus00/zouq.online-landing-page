import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import FeatCategories from '../components/FeatCategories'
import About from '../components/About'
import OurServices from '../components/OurServices'
import Plan from '../components/Plan'
import Testimonials from '../components/Testimonials'


function LandingPage() {
  return (
      <section className="landingpage">
          <NavBar />
          <HeroSection />
          {/* <Hero /> */}
          <div className="frame2">
              <div className="frame3">
                <FeatCategories />
                <About />
                <OurServices />
                <Plan />
              </div>
              <Testimonials />
          </div>
       
    </section>
  )
}

export default LandingPage