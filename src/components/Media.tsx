import { Card, CardContent } from "@/components/ui/card";

const Media = () => {
  return (
    <section id="media" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Media & Updates</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay connected with our community through our latest updates, videos, and social media content.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-center">Follow Us on Facebook</h3>
              <div className="bg-muted rounded-lg flex items-center justify-center p-4">
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdaralhikmafondation&tabs=timeline&width=500&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  width="100%"
                  height="700"
                  style={{ border: "none", overflow: "hidden", maxWidth: "500px" }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  className="rounded-lg"
                ></iframe>
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4">
                Follow our Facebook page for the latest updates, event announcements, and community activities.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Media;
