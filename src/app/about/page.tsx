import React from 'react';
import Header from "../components/header";
import Footer from '../components/footer';
import Hero from '../components/hero';
import cssStyle from "../about/about.module.css"


const About = () => {
  return (
    <div className={cssStyle.h3}>
      <Header></Header>
      <Hero></Hero>
      <br />

      <h3 className={cssStyle.heading}>SUPPORT BEYOND TIME ZONES</h3>

      <br />

      <p className={cssStyle.parahgraph}>Bridge the gap between your brand and your customers. Integrate our live chat feature, which is specially designed for e-commerce businesses to keep customer support services 24.7 active.</p>

        <br />

        <h3 className={cssStyle.center}>Encourage Impulsive Purchasing</h3>

        <br />
        <br />

        <h3 className={cssStyle.heading}>I Take Convenient Breaks, <br /> Thanks To Mobile App</h3>

        <br />
        

        <p className={cssStyle.parahgraph}>SwiftSales Social Media Integration has brought all my customer support under one umbrella. While the mobile app is best because I can manage frequent visitors and can guide them with product selection from anywhere.</p>

          <br />


      <Footer></Footer>
    </div>
  )
}

export default About
