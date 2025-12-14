import { useState } from "react";
import { X, Play, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import djMixxi from "@/assets/dj-mixxi.jpg";
import djRods from "@/assets/dj-rods-new.jpg";
import djSame from "@/assets/dj-same.jpg";
import djKoni from "@/assets/dj-koni.png";

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
    genres: ["Schranz", "Urbano", "Acid", "Hardgroove"],
    musicUrl: "https://on.soundcloud.com/okwkBeKuIYynSUYixA",
  },
  {
    name: "RODS",
    image: djRods,
    role: "RESIDENT DJ",
    shortBio: "Hypnotic loops and relentless bass. The backbone of our sound.",
    fullBio: "RODS representa la esencia pura del hard techno madrileño. Con una década de experiencia tras los platos, su sonido hipnótico y su bajo incansable han definido el sonido de HardBrutality desde sus inicios. Residente en las mejores salas de Madrid.",
    genres: ["Hardtechno", "Industrial", "Hypnotic"],
    musicUrl: "https://soundcloud.com/hardbrutality/hardbrutality-podcast-6-rods",
  },
  {
    name: "SAME",
    image: djSame,
    role: "RESIDENT DJ",
    shortBio: "Dark atmospheres and peak-time energy. The shadow in the booth.",
    fullBio: "SAME es la sombra en la cabina. Especialista en atmósferas oscuras y energía de peak-time, sus sets llevan al público a un viaje a través de los sonidos más oscuros del techno industrial. Su presencia en el escenario es tan magnética como su música.",
    genres: ["Industrial", "Dark Techno", "Peak-time"],
    musicUrl: "https://soundcloud.com/samegothecure",
  },
  {
    name: "KØNI",
    image: djKoni,
    role: "RESIDENT DJ",
    shortBio: "Artista camaleónica y residente de Hard Brutality. Energía pura.",
    fullBio: "Artista camaleónica y residente de Hard Brutality. Koni tiene la misión de transmitir una vibra que prohíbe quedarse quieto. Su fuerte es el Hardbounce con ritmos rápidos y animados, aunque domina el terreno del Hardgroove, Hardance e incluso el Schranz. Ha llevado su energía a cabinas icónicas como Code By Fabrik, The Bassement, Avalon y Nitro.",
    genres: ["Hardbounce", "Hardgroove", "Hardance", "Schranz"],
    musicUrl: "https://on.soundcloud.com/w6exOB1YyUYJ5OP5sC",
  },
];

export function ResidentsSection() {
  const [selectedDJ, setSelectedDJ] = useState<DJ | null>(null);

  // Lock body scroll when modal is open
  const openModal = (dj: DJ) => {
    setSelectedDJ(dj);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedDJ(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section id="residentes" className="py-24 bg-secondary/10 relative overflow-hidden">
        {/* Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[15vw] text-foreground/[0.02] whitespace-nowrap pointer-events-none uppercase tracking-widest">
          THE CORE
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Title */}
          <div className="mb-16 text-center">
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-2 uppercase tracking-wider">
              Resident
            </h2>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-laser uppercase tracking-wider">
              DJs
            </h2>
          </div>

          {/* DJ Grid - Fighting Game Style */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {residents.map((dj, index) => (
              <div
                key={dj.name}
                className="group relative aspect-[3/4] overflow-hidden border border-border hover:border-laser transition-all duration-500 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => openModal(dj)}
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
                  <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground mb-2 group-hover:text-glow transition-all uppercase tracking-wide">
                    {dj.name}
                  </h3>

                  {/* Bio - Hidden until hover, only on desktop */}
                  <p className="hidden md:block font-mono text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 line-clamp-2">
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

      {/* DJ Modal */}
      {selectedDJ && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4"
          onClick={closeModal}
        >
          {/* Video Background */}
          <div className="absolute inset-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/hero-bg.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
          </div>

          {/* Modal Content */}
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-border animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Fixed position for mobile */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 md:top-4 md:right-4 z-20 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border border-border bg-card hover:border-laser hover:text-laser transition-colors"
            >
              <X size={16} className="md:w-5 md:h-5" />
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Image */}
              <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto">
                <img
                  src={selectedDJ.image}
                  alt={selectedDJ.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card md:block hidden" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent md:hidden" />
              </div>

              {/* Info */}
              <div className="p-4 pt-8 md:p-8 md:w-1/2 flex flex-col justify-center">
                <span className="inline-block font-mono text-xs text-laser border border-laser px-2 py-1 mb-4 self-start">
                  {selectedDJ.role}
                </span>

                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 uppercase tracking-wide">
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