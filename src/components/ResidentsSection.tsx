import djMixxi from "@/assets/dj-mixxi.jpg";
import djRods from "@/assets/dj-rods.jpg";
import djSame from "@/assets/dj-same.jpg";
import djKoni from "@/assets/dj-koni.jpg";

interface DJ {
  name: string;
  image: string;
  role: string;
  bio: string;
}

const residents: DJ[] = [
  {
    name: "M.I.XX.I",
    image: djMixxi,
    role: "FOUNDER",
    bio: "Raw industrial sounds. No compromise. Madrid's hardest selector.",
  },
  {
    name: "RODS",
    image: djRods,
    role: "RESIDENT",
    bio: "Hypnotic loops and relentless bass. The backbone of our sound.",
  },
  {
    name: "SAME",
    image: djSame,
    role: "RESIDENT",
    bio: "Dark atmospheres and peak-time energy. The shadow in the booth.",
  },
  {
    name: "KØNI",
    image: djKoni,
    role: "RESIDENT",
    bio: "Acid-driven techno meets industrial rage. Pure adrenaline.",
  },
];

export function ResidentsSection() {
  return (
    <section id="residentes" className="py-24 bg-secondary/10 relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[20vw] text-foreground/[0.02] whitespace-nowrap pointer-events-none">
        THE CORE
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="font-display text-6xl md:text-8xl text-foreground mb-2">
            RESIDENT
          </h2>
          <h2 className="font-display text-6xl md:text-8xl text-laser">
            DJS
          </h2>
        </div>

        {/* DJ Grid - Fighting Game Style */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {residents.map((dj, index) => (
            <div
              key={dj.name}
              className="group relative aspect-[3/4] overflow-hidden border border-border hover:border-laser transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <img
                src={dj.image}
                alt={dj.name}
                className="absolute inset-0 w-full h-full object-cover grayscale-hover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Red Noise Effect on Hover */}
              <div className="absolute inset-0 bg-laser/20 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity noise-overlay" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                {/* Role Tag */}
                <span className="inline-block font-mono text-[10px] md:text-xs text-laser border border-laser px-2 py-1 mb-2">
                  {dj.role}
                </span>

                {/* Name */}
                <h3 className="font-display text-2xl md:text-4xl text-foreground mb-2 group-hover:text-glow transition-all">
                  {dj.name}
                </h3>

                {/* Bio - Hidden until hover */}
                <p className="font-mono text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {dj.bio}
                </p>
              </div>

              {/* Selection Border Animation */}
              <div className="absolute inset-0 border-2 border-laser scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />

              {/* Corner Brackets */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
