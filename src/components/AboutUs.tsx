import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Heart, Users } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: BookOpen,
      title: "Islamic Education",
      description: "Promoting authentic Islamic knowledge and understanding through comprehensive educational programs.",
    },
    {
      icon: Heart,
      title: "Community Service",
      description: "Serving our community with compassion and dedication, following the teachings of Islam.",
    },
    {
      icon: Users,
      title: "Unity & Brotherhood",
      description: "Building a strong, united Muslim community based on Islamic principles and mutual support.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Us</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Dar Al-Hikmah Islamic Foundation is dedicated to serving the Muslim community by providing
            spiritual guidance, educational resources, and community support rooted in Islamic values and teachings.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
