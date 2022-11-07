import React, { useContext } from 'react'
import styled  from 'styled-components';
import HeroSection from './Components/HeroSection';
// import { useProductContext } from './context/productcontext';

const About = () => {
  // const myName = useProductContext();
  const storeName = "About Us"
  return (
    <>
      {/* {myName} */}
      <HeroSection storeName={storeName}/>
    </>
  )
}

// const Wrapper = styled.section`

// `;

export default About