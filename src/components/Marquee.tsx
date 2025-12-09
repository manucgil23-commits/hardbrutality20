export function Marquee() {
  const text = "HARD TECHNO • INDUSTRIAL • MADRID • 150 BPM+ • HARDBRUTALITY • ";
  
  return (
    <div className="bg-laser border-y border-laser py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Duplicate the text for seamless loop */}
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="font-mono font-bold text-xl md:text-2xl tracking-[0.2em] mx-4 text-foreground"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
