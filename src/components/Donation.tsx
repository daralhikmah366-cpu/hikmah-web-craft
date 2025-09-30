import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Heart, Home, Users } from "lucide-react";

const Donation = () => {
  const causes = [
    {
      icon: Home,
      title: "Masjid Maintenance",
      description: "Supporting the upkeep and maintenance of our Islamic center.",
    },
    {
      icon: Users,
      title: "Community Programs",
      description: "Funding educational and social programs for the community.",
    },
    {
      icon: Heart,
      title: "Charity & Relief",
      description: "Providing assistance to those in need within our community.",
    },
  ];

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

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {causes.map((cause, index) => {
            const Icon = cause.icon;
            return (
              <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary mb-4">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{cause.title}</h3>
                  <p className="text-sm opacity-80">{cause.description}</p>
                </CardContent>
              </Card>
            );
          })}
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
              <a href="https://onlinecheckwriter.com/get-paid-by-form/" target="_blank" rel="noopener noreferrer">
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
