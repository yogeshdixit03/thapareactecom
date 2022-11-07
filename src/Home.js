import React from 'react'
import FeatureProducts from './Components/FeatureProducts'
import Footer from './Components/Footer'
import HeroSection from './Components/HeroSection'
import Services from './Components/Services'
import Trusted from './Components/Trusted'
const Home = () => {
  const storeName = "Slipkart Store"
  return (
    <>
      <HeroSection storeName={storeName}/>
      <FeatureProducts/>
      <Services/>
      <Trusted/>
    </>
  )
}
export default Home