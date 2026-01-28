import Navbar from "../Components/01_Navbar.jsx";
import Hero from "../Components/02_Hero.jsx";
import Whyitmatters from "../Components/03_Whyitmatters.jsx";
import Features from "../Components/04_Features.jsx";
import Motivation from "../Components/05_Motivation.jsx";
import CTA from "../Components/06_CTA.jsx";
import Footer from "../Components/07_Footer.jsx";
function Home() {
  return (
    <> 
    <div className="app">
      <Navbar />
      <Hero />
      <Whyitmatters />
      <Features />
      <Motivation />
    </div>
    <CTA />
    <Footer />
    </>
  );
}
export default Home;
