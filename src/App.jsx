import Navbar from "./Components/01_Navbar";
import Hero from "./Components/02_Hero";
import WhyitMatters from "./Components/03_Whyitmatters";
import Features from "./Components/04_Features";
import Motivation from "./Components/05_Motivation";
import CTA from "./Components/06_CTA";
import Footer from "./Components/07_Footer";
import "./Styles/Custom.css";
function App() {
  return (
    <> 
    <div className="app">
      <Navbar />
      <Hero />
      <WhyitMatters />
      <Features />
      <Motivation />
    </div>
    <CTA />
    <Footer />
    </>
  );
}
export default App;

