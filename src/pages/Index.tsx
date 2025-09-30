import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import BoardMembers from "@/components/BoardMembers";
import Dawah from "@/components/Dawah";
import Imam from "@/components/Imam";
import Donation from "@/components/Donation";
import Events from "@/components/Events";
import Media from "@/components/Media";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutUs />
      <BoardMembers />
      <Dawah />
      <Imam />
      <Donation />
      <Events />
      <Media />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
