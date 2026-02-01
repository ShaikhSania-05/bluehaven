import Hero from "../Components/Hero.jsx";
import Whyitmatters from "../Components/Whyitmatters.jsx";
import Features from "../Components/Features.jsx";
import Motivation from "../Components/Motivation.jsx";
import CTA from "../Components/CTA.jsx";
import FAQ from "../Components/FAQ.jsx";
import Footer from "../Components/Footer.jsx";
function Home() {
  return (
    <> 
    <div className="app">
      <Hero />
      <Whyitmatters />
      <Features />
      <Motivation />
    </div>
    <CTA />
    <FAQ />
    <Footer />
    </>
  );
}
export default Home;
