import Hero from "../components/Hero";
import About from "../components/About";
import WhoShowsUp from "../components/WhoShowsUp";
import HowItWorks from "../components/HowItWorks";
import Events from "../components/Events";
import EmailSignup from "../components/EmailSignup";
import Gallery from "../components/Gallery";
import FAQ from "../components/FAQ";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <WhoShowsUp />
      <HowItWorks />
      <Events />
      <EmailSignup />
      <Gallery />
      <FAQ />
      <Sponsors />
      <Footer />
    </main>
  );
}
