import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface Event {
  id: number;
  date: string;
  day: string;
  month: string;
  venue: string;
  lineup: string[];
  ticketUrl: string;
  details: string;
  comingSoon?: boolean;
}

const events: Event[] = [
  {
    id: 1,
    date: "18",
    day: "JUE",
    month: "DIC",
    venue: "SALA COCO",
    lineup: ["TARKNO", "CRIEVEK B2B MARCOSRII", "BLUNTZ B2B TASUIK", "KØNI B2B M.I.XX.I", "RODS B2B SAME"],
    ticketUrl: "https://web.fourvenues.com/es/coco-madrid/events/hardbrutality-18-12-2025-IX5H",
    details: "El hardgroove regresa con fuerza a la capital. Desde Berlín llega Tarkno, maestro del vinilo y referente absoluto del underground, acompañado por algunos de los DJs de Madrid que más están marcando la escena actual. Además, contamos con la presencia de @treze, una de las marcas urbanas más respetadas del momento. Prepárate para una noche de hardgroove sin frenos. ⭐ Ubicación: Calle Alcalá 20, 28014 Madrid, Spain",
    comingSoon: false,
  },
  {
    id: 2,
    date: "08",
    day: "JUE",
    month: "ENE",
    venue: "PRÓXIMAMENTE",
    lineup: ["???", "???", "???"],
    ticketUrl: "#",
    details: "Detalles próximamente...",
    comingSoon: true,
  },
  {
    id: 3,
    date: "15",
    day: "JUE",
    month: "ENE",
    venue: "PRÓXIMAMENTE",
    lineup: ["???", "???", "???"],
    ticketUrl: "#",
    details: "Detalles próximamente...",
    comingSoon: true,
  },
];

export function EventsSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="eventos" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-2 uppercase tracking-wider">
            Upcoming
          </h2>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-laser uppercase tracking-wider">
            Dates
          </h2>
        </div>

        {/* Events List */}
        <div className="space-y-6">
          {events.map((event) => (
            <div
              key={event.id}
              className={`group relative border bg-card transition-all duration-300 ${
                event.comingSoon 
                  ? 'border-border/50 opacity-80' 
                  : 'border-border hover:border-laser hover-lift'
              } overflow-hidden`}
            >
              {/* Coming Soon Ribbon */}
              {event.comingSoon && (
                <>
                  <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] z-10" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 w-[150%] bg-laser py-2 z-20">
                    <p className="font-display text-lg md:text-2xl text-background text-center tracking-[0.3em] uppercase whitespace-nowrap">
                      PRÓXIMAMENTE • PRÓXIMAMENTE • PRÓXIMAMENTE • PRÓXIMAMENTE
                    </p>
                  </div>
                </>
              )}

              {/* Main Card Content */}
              <div className={`flex flex-col md:flex-row md:items-center p-6 gap-6 ${event.comingSoon ? 'blur-[3px]' : ''}`}>
                {/* Date Block */}
                <div className="flex md:flex-col items-center md:items-start gap-2 md:gap-0 md:w-24">
                  <span className="font-display text-5xl md:text-6xl text-foreground leading-none">
                    {event.date}
                  </span>
                  <div className="flex md:flex-col gap-1">
                    <span className="font-mono text-xs text-muted-foreground">{event.day}</span>
                    <span className="font-mono text-xs text-laser">{event.month}</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-[1px] h-16 bg-border group-hover:bg-laser transition-colors" />

                {/* Event Info */}
                <div className="flex-1">
                  <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2 tracking-wider">
                    {event.venue}
                  </h3>
                  <p className="font-mono text-sm text-muted-foreground">
                    {event.lineup.join(" • ")}
                  </p>
                </div>

                {/* Buttons */}
                {!event.comingSoon && (
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" onClick={() => setExpandedId(expandedId === event.id ? null : event.id)}>
                      + INFO
                    </Button>
                    <Button variant="brutal" size="sm" asChild>
                      <a href={event.ticketUrl} target="_blank" rel="noopener noreferrer">
                        COMPRAR ENTRADAS
                      </a>
                    </Button>
                  </div>
                )}
              </div>

              {/* Expanded Details */}
              {expandedId === event.id && !event.comingSoon && (
                <div className="border-t border-border p-6 bg-secondary/20 animate-slide-up">
                  <div className="flex justify-between items-start">
                    <p className="font-mono text-sm text-muted-foreground max-w-2xl text-justify">
                      {event.details}
                    </p>
                    <button
                      onClick={() => setExpandedId(null)}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>
              )}

              {/* Corner Accent */}
              {!event.comingSoon && (
                <>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-laser opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-laser opacity-0 group-hover:opacity-100 transition-opacity" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
