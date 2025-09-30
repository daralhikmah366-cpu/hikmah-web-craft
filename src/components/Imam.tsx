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
                  <div className="w-48 h-48 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-6xl font-bold text-primary">IM</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Imam Name</h3>
                  <p className="text-secondary font-medium mb-4">Lead Imam & Religious Director</p>
                  <p className="text-muted-foreground mb-6">
                    Our Imam brings years of Islamic scholarship and dedication to serving the Muslim community.
                    With deep knowledge of Quran, Hadith, and Islamic jurisprudence, he provides spiritual guidance,
                    leads prayers, and offers counseling to community members.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Education</h4>
                        <p className="text-sm text-muted-foreground">
                          Advanced degrees in Islamic Studies from renowned Islamic institutions
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <BookOpen className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Expertise</h4>
                        <p className="text-sm text-muted-foreground">
                          Quranic exegesis, Hadith studies, Islamic jurisprudence, and spiritual counseling
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Experience</h4>
                        <p className="text-sm text-muted-foreground">
                          Over 15 years of service to the Muslim community in various capacities
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
