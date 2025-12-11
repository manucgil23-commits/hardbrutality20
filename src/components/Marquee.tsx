export function Marquee() {
  const text = "HARD TECHNO • INDUSTRIAL • MADRID • 150 BPM+ • HARDBRUTALITY • ";
  
  // Create content that repeats enough times to fill screen
  const repeatedContent = [...Array(12)].map((_, i) => (
    <span
      key={i}
      className="font-display text-xl md:text-2xl tracking-[0.2em] mx-4 shrink-0 inline-flex"
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
  ));
  
  return (
    <div className="bg-background border-y border-border py-4 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee-infinite" style={{ width: 'fit-content' }}>
        {repeatedContent}
        {repeatedContent}
      </div>
    </div>
  );
}