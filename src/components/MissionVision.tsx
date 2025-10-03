import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, BookOpen, Users, GraduationCap, Heart } from "lucide-react";

const MissionVision = () => {
  const visionPillars = [
    {
      icon: BookOpen,
      title: "Teach the Qur'an",
      description: "Memorization, correct recitation, reflection, and practice of Qur'anic sciences",
    },
    {
      icon: GraduationCap,
      title: "Arabic Education",
      description: "Strengthen connection with the Qur'an and Sunnah through language mastery",
    },
    {
      icon: Users,
      title: "Islamic Programs",
      description: "Comprehensive courses for children, youth, and adults",
    },
    {
      icon: Heart,
      title: "Community Activities",
      description: "Seminars, competitions, family nights, and social gatherings that foster unity",
    },
  ];

  return (
    <section id="mission-vision" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Mission & Vision</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Mission */}
          <Card className="border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Dar Al-Hikmah strives to establish a strong foundation for Islamic education and community service. 
                    Our mission is to combine spiritual growth with practical education, empowering families and preparing 
                    future generations to be active, confident, and faithful members of society.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="border-2 border-secondary/20">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Eye className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    To be a beacon of knowledge and faith within our community, strengthening Islamic identity 
                    and fostering unity through balanced and authentic Islamic education that connects generations 
                    to their faith and empowers them for positive engagement.
                  </p>
                </div>
              </div>

              {/* Vision Pillars */}
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {visionPillars.map((pillar, index) => {
                  const Icon = pillar.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-secondary" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{pillar.title}</h4>
                        <p className="text-sm text-muted-foreground">{pillar.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
