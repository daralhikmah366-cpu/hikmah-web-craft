import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";

const Events = () => {
  const events = [
    {
      title: "Friday Prayer (Jummah)",
      date: "Every Friday",
      time: "1:00 PM - 2:00 PM",
      location: "Main Prayer Hall",
      description: "Weekly congregational Friday prayer with sermon (Khutbah)",
    },
    {
      title: "Quran Study Circle",
      date: "Every Sunday",
      time: "10:00 AM - 12:00 PM",
      location: "Education Center",
      description: "Weekly Quran recitation and tafsir (interpretation) study session",
    },
    {
      title: "Youth Islamic Program",
      date: "Every Saturday",
      time: "4:00 PM - 6:00 PM",
      location: "Community Hall",
      description: "Islamic education and activities for youth ages 12-18",
    },
    {
      title: "Community Iftar",
      date: "During Ramadan",
      time: "Sunset Time",
      location: "Main Hall",
      description: "Daily communal breaking of fast during the blessed month of Ramadan",
    },
  ];

  return (
    <section id="events" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Upcoming Events</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join us for our regular programs and special events designed to strengthen our faith and community bonds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">{event.title}</h3>
                <p className="text-muted-foreground mb-4">{event.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{event.location}</span>
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

export default Events;
