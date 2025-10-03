import { Button } from "@/components/ui/button";
import { DollarSign } from "lucide-react";

const Donation = () => {
  return (
    <section id="donation" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Support Our Mission</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Your generous donations help us continue serving the Muslim community and spreading the message of Islam.
            Every contribution, no matter the size, makes a meaningful difference.
          </p>
        </div>

        <div className="text-center">
          <div className="bg-primary-foreground/10 rounded-lg p-8 max-w-2xl mx-auto backdrop-blur">
            <DollarSign className="h-16 w-16 mx-auto mb-4 text-secondary" />
            <h3 className="text-2xl font-bold mb-4">Make Your Donation Today</h3>
            <p className="mb-6 opacity-90">
              "The example of those who spend their wealth in the way of Allah is like a seed of grain that grows seven ears;
              in every ear is a hundred grains." (Quran 2:261)
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8"
              asChild
            >
              <a href="https://enroll.zellepay.com/qr-codes?data=ewogICJhY3Rpb24iIDogInBheW1lbnQiLAogICJ0b2tlbiIgOiAiZGFyYWxoaWttYTM2N0BnbWFpbC5jb20iLAogICJuYW1lIiA6ICJEQVIgQUwtSElLTUEgRk9VTkRBVElPTiIKfQ==" target="_blank" rel="noopener noreferrer">
                Donate Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
