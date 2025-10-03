import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import MissionVision from "@/components/MissionVision";
import FutureGoals from "@/components/FutureGoals";
import Imam from "@/components/Imam";
import Dawah from "@/components/Dawah";
import Donation from "@/components/Donation";
import Media from "@/components/Media";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutUs />
      <MissionVision />
      <FutureGoals />
      <Imam />
      <Dawah />
      <Donation />
      <Media />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
