import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Heart, Users } from "lucide-react";

const AboutUs = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Qur'an & Arabic Education",
      description: "Teaching the Qur'an, Arabic language, Islamic knowledge, manners, and ethics to nurture the next generation of Muslim children.",
    },
    {
      icon: Heart,
      title: "Refugee Support & Care",
      description: "Serving the broader Muslim community, including refugees in need of care, support, and guidance.",
    },
    {
      icon: Users,
      title: "Daily Prayers & Programs",
      description: "Establishing the five daily prayers, Friday Khutbahs, and programs that strengthen spiritual and community bonds.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Us</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Dar Al-Hikmah Islamic Foundation is a community-based educational institution dedicated to nurturing 
            the next generation of Muslim children and serving the broader Muslim community with spiritual guidance, 
            educational resources, and comprehensive support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
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
