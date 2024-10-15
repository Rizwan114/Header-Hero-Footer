import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Hero from '../components/hero';
import cssStyle from "../home/home.module.css"

const Home = () => {
  return (
    <div className={cssStyle.h2}>
      <Header></Header>
      <Hero></Hero>
      <br />

         
      <h2 className={cssStyle.h2}>CONVERT CONTACT LEADS INTO <br />
      CLOSED-WON DEALS</h2>
      <br />

      <p> <b>Take control </b> of your sales pipeline by converting potential leads into tangible deals. Our feature empowers you to effortlessly create deals against your existing contacts, allowing you to capture essential details such as deal amount. Visually track your deals while monitoring progress and identifying bottleneck.</p>


      <br />
      <br />

      <h2 className={cssStyle.h22}>CUSTOMIZE PROFESSIONAL <br />
INVOICES TO SEND YOUR <br />
CUSTOMERS</h2>
<br />

<p > <b>The invoice</b> feature enables you to create customized, professional invoices. Whether it's for full payments or partial amounts, you can easily generate invoices tailored to your business needs and send them directly to your customers. Simplify your billing process, ensuring smoother financial transactions.</p>

           <br />

      <Footer></Footer>
    </div>
  )
}

export default Home
