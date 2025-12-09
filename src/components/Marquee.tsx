export function Marquee() {
  const text = "HARD TECHNO • INDUSTRIAL • MADRID • 150 BPM+ • HARDBRUTALITY • ";
  
  return (
    <div className="bg-background border-y border-border py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Duplicate the text for seamless loop */}
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="font-display text-xl md:text-2xl tracking-[0.2em] mx-4"
          >
            {text.split("").map((char, index) => (
              <span
                key={index}
                className={char === "•" ? "text-laser" : "text-foreground"}
              >
                {char}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}