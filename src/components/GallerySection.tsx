import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const galleryImages = [
  { src: gallery1, span: "col-span-2 row-span-1" },
  { src: gallery2, span: "col-span-1 row-span-2" },
  { src: gallery3, span: "col-span-1 row-span-1" },
  { src: gallery4, span: "col-span-2 row-span-1" },
];

export function GallerySection() {
  return (
    <section id="galeria" className="py-24 bg-secondary/10 relative">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="font-display text-6xl md:text-8xl text-foreground mb-2">
            THE
          </h2>
          <h2 className="font-display text-6xl md:text-8xl text-laser">
            EXPERIENCE
          </h2>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden ${image.span}`}
            >
              <img
                src={image.src}
                alt={`Gallery ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover reveal-hover"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-background/60 group-hover:bg-transparent transition-colors duration-500" />
              
              {/* Red Glow on Hover */}
              <div className="absolute inset-0 bg-laser/0 group-hover:bg-laser/10 transition-colors duration-500" />
              
              {/* Border */}
              <div className="absolute inset-0 border border-border group-hover:border-laser transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
