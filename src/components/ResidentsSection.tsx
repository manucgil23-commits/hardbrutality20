import { useState } from "react";
import { X, Play, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import djMixxi from "@/assets/dj-mixxi.jpg";
import djRods from "@/assets/dj-rods.jpg";
import djSame from "@/assets/dj-same.jpg";
import djKoni from "@/assets/dj-koni.jpg";

interface DJ {
  name: string;
  image: string;
  role: string;
  shortBio: string;
  fullBio: string;
  genres: string[];
  musicUrl?: string;
}

const residents: DJ[] = [
  {
    name: "M.I.XX.I",
    image: djMixxi,
    role: "RESIDENT DJ",
    shortBio: "Nacida en Tudela, basada en Madrid. Sets machacones y divertidos.",
    fullBio: "Nacida en Tudela y basada en Madrid. M.I.XX.I fusiona lo sexy, metalero y punky, entregando sets machacones y divertidos. Ha destruido pistas en Fabrik, Groove, The Bassement y Sala Muv. Su estilo parte la pista al ritmo del galope.",
    genres: ["Schranz", "Hardtechno", "Acid", "Hardgroove"],
    musicUrl: "https://soundcloud.com",
  },
  {
    name: "RODS",
    image: djRods,
    role: "RESIDENT DJ",
    shortBio: "Hypnotic loops and relentless bass. The backbone of our sound.",
    fullBio: "RODS representa la esencia pura del hard techno madrileño. Con una década de experiencia tras los platos, su sonido hipnótico y su bajo incansable han definido el sonido de HardBrutality desde sus inicios. Residente en las mejores salas de Madrid.",
    genres: ["Hardtechno", "Industrial", "Hypnotic"],
    musicUrl: "https://soundcloud.com",
  },
  {
    name: "SAME",
    image: djSame,
    role: "RESIDENT DJ",
    shortBio: "Dark atmospheres and peak-time energy. The shadow in the booth.",
    fullBio: "SAME es la sombra en la cabina. Especialista en atmósferas oscuras y energía de peak-time, sus sets llevan al público a un viaje a través de los sonidos más oscuros del techno industrial. Su presencia en el escenario es tan magnética como su música.",
    genres: ["Industrial", "Dark Techno", "Peak-time"],
    musicUrl: "https://soundcloud.com",
  },
  {
    name: "KØNI",
    image: djKoni,
    role: "RESIDENT DJ",
    shortBio: "Acid-driven techno meets industrial rage. Pure adrenaline.",
    fullBio: "KØNI canaliza la rabia industrial a través de líneas ácidas devastadoras. Su techno cargado de adrenalina es un viaje sin retorno a través de los sonidos más agresivos de la escena. Cada set es una experiencia visceral que deja huella en quien lo vive.",
    genres: ["Acid", "Hardtechno", "Industrial Rage"],
    musicUrl: "https://soundcloud.com",
  },
];

export function ResidentsSection() {
  const [selectedDJ, setSelectedDJ] = useState<DJ | null>(null);

  return (
    <>
      <section id="residentes" className="py-24 bg-secondary/10 relative overflow-hidden">
        {/* Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-sans font-black text-[15vw] text-foreground/[0.02] whitespace-nowrap pointer-events-none">
          THE CORE
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Title */}
          <div className="mb-16 text-center">
            <h2 className="font-sans font-black text-5xl md:text-7xl lg:text-8xl text-foreground mb-2 tracking-tight">
              RESIDENT
            </h2>
            <h2 className="font-sans font-black text-5xl md:text-7xl lg:text-8xl text-laser tracking-tight">
              DJS
            </h2>
          </div>

          {/* DJ Grid - Fighting Game Style */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {residents.map((dj, index) => (
              <div
                key={dj.name}
                className="group relative aspect-[3/4] overflow-hidden border border-border hover:border-laser transition-all duration-500 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedDJ(dj)}
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
                  <h3 className="font-sans font-black text-2xl md:text-3xl lg:text-4xl text-foreground mb-2 group-hover:text-glow transition-all tracking-tight">
                    {dj.name}
                  </h3>

                  {/* Bio - Hidden until hover */}
                  <p className="font-mono text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 line-clamp-2">
                    {dj.shortBio}
                  </p>
                </div>

                {/* Selection Border Animation */}
                <div className="absolute inset-0 border-2 border-laser scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />

                {/* Corner Brackets */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-foreground opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Click Indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full border border-laser flex items-center justify-center bg-background/50">
                    <Play size={14} className="text-laser ml-0.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DJ Modal with Video Background */}
      {selectedDJ && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedDJ(null)}
        >
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://assets.mixkit.co/videos/4755/4755-720.mp4"
              type="video/mp4"
            />
          </video>

          {/* Dark Blurred Overlay */}
          <div className="absolute inset-0 bg-background/85 backdrop-blur-md" />

          {/* Modal Content */}
          <div
            className="relative w-full max-w-4xl bg-card/90 border border-border animate-slide-up backdrop-blur-sm"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedDJ(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center border border-border hover:border-laser hover:text-laser transition-colors bg-background/50"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Image */}
              <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto">
                <img
                  src={selectedDJ.image}
                  alt={selectedDJ.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card/90 md:block hidden" />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent md:hidden" />
              </div>

              {/* Info */}
              <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-center">
                <span className="inline-block font-mono text-xs text-laser border border-laser px-2 py-1 mb-4 self-start">
                  {selectedDJ.role}
                </span>

                <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 tracking-tight">
                  {selectedDJ.name}
                </h2>

                {/* Genres */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedDJ.genres.map((genre) => (
                    <span
                      key={genre}
                      className="font-mono text-xs text-muted-foreground bg-secondary px-3 py-1"
                    >
                      {genre}
                    </span>
                  ))}
                </div>

                {/* Bio */}
                <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-8">
                  {selectedDJ.fullBio}
                </p>

                {/* Music Link */}
                {selectedDJ.musicUrl && (
                  <a
                    href={selectedDJ.musicUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="brutal" className="gap-2">
                      <Music size={16} />
                      ESCUCHAR SETS
                    </Button>
                  </a>
                )}
              </div>
            </div>

            {/* Bottom Border Accent */}
            <div className="h-1 bg-laser" />
          </div>
        </div>
      )}
    </>
  );
}
