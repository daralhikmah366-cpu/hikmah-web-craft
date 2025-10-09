import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.png";
import gallery5 from "@/assets/gallery5.jpg";
import gallery6 from "@/assets/gallery6.jpg";
import gallery7 from "@/assets/gallery7.jpg";
import gallery8 from "@/assets/gallery8.jpg";

const Gallery = () => {
  const images = [
    { src: gallery1, alt: "Islamic education classroom teaching" },
    { src: gallery2, alt: "Community learning session" },
    { src: gallery3, alt: "Students in class" },
    { src: gallery4, alt: "Youth Islamic education program" },
    { src: gallery5, alt: "Prayer congregation" },
    { src: gallery6, alt: "Arabic language learning" },
    { src: gallery7, alt: "Islamic studies classroom" },
    { src: gallery8, alt: "Educational activities" },
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Gallery</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Glimpses from our community events, programs, and activities at Dar Al-Hikmah Islamic Foundation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="aspect-video overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
