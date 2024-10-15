import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";

export default function Home() {
  return (
      <nav className="hparah">
        <Header></Header>
        <Hero></Hero>
        <br />

        <h3 className="h3">STREAMLINE PAYMENT MANAGEMENT <br />
        & LEAD FUNNEL</h3>

        <br />

        <p> <i> <b>simplify </b> </i> track your invoices while effectively organizing your lead funnel through sales CRM.
        Capture and store important lead details to never miss out on valuable prospects.</p>

        <br />

        <h3 className="h3">GET LEADS IN YOUR SALES PIPELINE EFFORTLESSLY</h3>

        <br />

        <p><i><b>Capture</b></i> and store important lead details to ensure you never miss out on valuable prospects. Our CRM solution simplifies the process, allowing you to seamlessly organize contact information with ease. Our CRM ensures a smooth and streamlined sales process from start to finish.</p>
        
        <br />

        <h3 className="h3">CONVERT CONTACT LEADS INTO <br />
        CLOSED-WON DEALS</h3>

        <br />

        <p><i><b>Take control</b></i> of your sales pipeline by converting potential leads into tangible deals. Our feature empowers you to effortlessly create deals against your existing contacts, allowing you to capture essential details such as deal amount. Visually track your deals while monitoring progress and identifying bottleneck.</p>

              <br />





        <Footer></Footer>
        
      </nav>
  );
}
