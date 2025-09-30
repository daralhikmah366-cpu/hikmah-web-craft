import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

const BoardMembers = () => {
  const members = [
    {
      name: "Board Member Name",
      position: "President",
      email: "president@daralhikmah.org",
      phone: "(555) 123-4567",
    },
    {
      name: "Board Member Name",
      position: "Vice President",
      email: "vicepresident@daralhikmah.org",
      phone: "(555) 123-4568",
    },
    {
      name: "Board Member Name",
      position: "Secretary",
      email: "secretary@daralhikmah.org",
      phone: "(555) 123-4569",
    },
    {
      name: "Board Member Name",
      position: "Treasurer",
      email: "treasurer@daralhikmah.org",
      phone: "(555) 123-4570",
    },
  ];

  return (
    <section id="board" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Board Members</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our dedicated board members work tirelessly to guide and serve the foundation with wisdom and integrity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-center mb-1">{member.name}</h3>
                <p className="text-secondary font-medium text-center mb-4">{member.position}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <a href={`mailto:${member.email}`} className="hover:text-primary transition-colors">
                      {member.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <a href={`tel:${member.phone}`} className="hover:text-primary transition-colors">
                      {member.phone}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardMembers;
