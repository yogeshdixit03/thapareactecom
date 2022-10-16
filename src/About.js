import React from 'react'
import styled  from 'styled-components';
import HeroSection from './Components/HeroSection';

const About = () => {
  const storeName = "About Us"
  return (
    <HeroSection storeName={storeName}/>
  )
}

const Wrapper = styled.section`

`;

export default About