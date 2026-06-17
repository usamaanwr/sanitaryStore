import React from 'react'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import WhyChooseUs from '../components/WhyChooseUs'
import ActionBanner from '../components/ActionBanner'
import CustomManufacture from '../components/CustomManufacture'
import CustomVideoShowcase from '../components/CustomVideoShowcase'

function Home() {
  return (
<div>
    <Hero/>
    <FeaturedProducts/>
    <CustomManufacture/>
    <WhyChooseUs/>
    <ActionBanner/>
    <CustomVideoShowcase/>
</div>
  )
}

export default Home