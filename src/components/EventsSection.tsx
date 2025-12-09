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
}

const events: Event[] = [
  {
    id: 1,
    date: "21",
    day: "SAB",
    month: "DIC",
    venue: "SALA MONDO DISKO",
    lineup: ["M.I.XX.I", "RODS", "SAME", "KØNI"],
    ticketUrl: "#",
    details: "Evento especial de cierre de año. Doors open 23:00. Dress code: All black. No photos allowed on the dancefloor.",
  },
  {
    id: 2,
    date: "18",
    day: "SAB",
    month: "ENE",
    venue: "INDUSTRIAL COPERA",
    lineup: ["SAMA'", "HÉCTOR OAKS", "RODS"],
    ticketUrl: "#",
    details: "Warehouse rave. 3 rooms, 12 hours non-stop. Expect the unexpected. Limited capacity - get your tickets early.",
  },
  {
    id: 3,
    date: "15",
    day: "SAB",
    month: "FEB",
    venue: "FABRIK MADRID",
    lineup: ["CHARLIE SPARKS", "M.I.XX.I", "KØNI"],
    ticketUrl: "#",
    details: "Main room takeover. Industrial hard techno all night. Sound system by Funktion-One.",
  },
];

export function EventsSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="eventos" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="font-sans font-black text-5xl md:text-7xl lg:text-8xl text-foreground mb-2 tracking-tight">
            UPCOMING
          </h2>
          <h2 className="font-sans font-black text-5xl md:text-7xl lg:text-8xl text-laser tracking-tight">
            RAVES
          </h2>
        </div>

        {/* Events List */}
        <div className="space-y-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="group relative border border-border bg-card hover:border-laser transition-all duration-300 hover-lift"
            >
              {/* Main Card Content */}
              <div className="flex flex-col md:flex-row md:items-center p-6 gap-6">
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
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" onClick={() => setExpandedId(expandedId === event.id ? null : event.id)}>
                    + INFO
                  </Button>
                  <Button variant="brutal" size="sm">
                    COMPRAR ENTRADAS
                  </Button>
                </div>
              </div>

              {/* Expanded Details */}
              {expandedId === event.id && (
                <div className="border-t border-border p-6 bg-secondary/20 animate-slide-up">
                  <div className="flex justify-between items-start">
                    <p className="font-mono text-sm text-muted-foreground max-w-2xl">
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
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-laser opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-laser opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}