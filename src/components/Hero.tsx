import { Button } from "@/components/ui/button";
import mosqueImage from "@/assets/mosque.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[600px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 107, 107, 0.7), rgba(26, 107, 107, 0.7)), url(${mosqueImage})`,
        }}
      />
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to Dar Al-Hikmah Islamic Foundation
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Serving and empowering the Muslim community through faith, knowledge, and compassion
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="secondary"
            className="text-lg"
            asChild
          >
            <a href="https://onlinecheckwriter.com/get-paid-by-form/" target="_blank" rel="noopener noreferrer">
              Donate Now
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg bg-white/10 border-white text-white hover:bg-white hover:text-primary"
            asChild
          >
            <a href="#about">Learn More</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
