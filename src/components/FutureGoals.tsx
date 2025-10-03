import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, School, Users } from "lucide-react";

const FutureGoals = () => {
  const goals = [
    {
      icon: BookOpen,
      title: "Qur'an & Arabic School",
      description: "Establish a specialized school for teaching the Qur'an and Arabic language to all ages and genders using a modern academic approach.",
    },
    {
      icon: School,
      title: "Islamic Academic School",
      description: "Build an Islamic school that integrates both academic education and Islamic values, providing comprehensive learning for the next generation.",
    },
    {
      icon: Users,
      title: "Practical Training Programs",
      description: "Launch training programs for refugee families, providing skills such as embroidery, cooking, and English language learning—helping them integrate effectively into society and support their children's education at home.",
    },
  ];

  return (
    <section id="future-goals" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Future Aspirations</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Looking ahead, Dar Al-Hikmah aspires to expand our services and impact through these ambitious initiatives 
            that will strengthen our community and empower future generations.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {goals.map((goal, index) => {
            const Icon = goal.icon;
            return (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6">
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{goal.title}</h3>
                      <p className="text-muted-foreground">{goal.description}</p>
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

export default FutureGoals;
