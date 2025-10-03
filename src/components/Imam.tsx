import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, GraduationCap } from "lucide-react";

const Imam = () => {
  return (
    <section id="imam" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Imam</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 rounded-lg overflow-hidden bg-primary/10">
                    <img
                      src={imaamImage}
                      alt="Imam Masoud Sharaf Mohammed Al-Ajmi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Imam Masoud Sharaf Mohammed Al-Ajmi</h3>
                  <p className="text-secondary font-medium mb-4">Lead Imam & Religious Director</p>
                  <p className="text-muted-foreground mb-6">
                    Our Imam brings extensive Islamic scholarship and dedication to serving the Muslim community worldwide. 
                    With advanced academic credentials and years of experience, he provides spiritual guidance, leads prayers, 
                    delivers sermons, and contributes to Islamic education and outreach programs.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Academic Qualifications</h4>
                        <p className="text-sm text-muted-foreground">
                          Ph.D. in Islamic Studies (First-Class Honors) - Al-Isra University, USA<br />
                          M.A. in Islamic Studies - Al-Isra University, USA<br />
                          B.A. in Fundamentals of Religion (Hadith) - Al-Azhar University
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Professional Experience</h4>
                        <p className="text-sm text-muted-foreground">
                          Former Imam & Khateeb at Egyptian Ministry of Endowments (2006-2019)<br />
                          Islamic outreach and community service in the United States<br />
                          International speaker at Islamic conferences and lectures
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <BookOpen className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Contributions</h4>
                        <p className="text-sm text-muted-foreground">
                          Establishment of educational and dawah programs<br />
                          Spiritual guidance and counseling for the community<br />
                          Building bridges between faith and modern society
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Imam;
