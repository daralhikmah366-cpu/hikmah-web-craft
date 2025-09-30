import { Card, CardContent } from "@/components/ui/card";
import { BookHeart, Globe, HandHeart, MessageCircle } from "lucide-react";

const Dawah = () => {
  const programs = [
    {
      icon: Globe,
      title: "Community Outreach",
      description: "Engaging with the broader community to share the peaceful message of Islam through interfaith dialogues and community events.",
    },
    {
      icon: BookHeart,
      title: "Educational Programs",
      description: "Offering comprehensive Islamic education classes for all ages, covering Quran, Hadith, and Islamic studies.",
    },
    {
      icon: MessageCircle,
      title: "Guidance & Counseling",
      description: "Providing spiritual guidance and counseling services to help individuals strengthen their faith and overcome challenges.",
    },
    {
      icon: HandHeart,
      title: "Social Support",
      description: "Supporting new Muslims and those seeking to learn about Islam with mentorship and community integration programs.",
    },
  ];

  return (
    <section id="dawah" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Dawah & Outreach</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our Dawah programs aim to share the beautiful teachings of Islam with wisdom, patience, and compassion,
            following the example of Prophet Muhammad (peace be upon him).
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                      <p className="text-muted-foreground">{program.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Dawah;
