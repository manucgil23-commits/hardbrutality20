export function Marquee() {
  const segments = ["8 SOLD OUTS IN A ROW", "HARD BRUTALITY", "MADRID", "SALA COCO"];
  
  // Create seamless repeating content
  const repeatedContent = [...Array(30)].map((_, i) => (
    <span key={i} className="inline-flex items-center shrink-0">
      {segments.map((segment, segIndex) => (
        <span key={segIndex} className="inline-flex items-center">
          <span className="font-display text-xl md:text-2xl tracking-[0.2em] text-foreground">
            {segment}
          </span>
          <span className="font-display text-xl md:text-2xl tracking-[0.2em] text-laser mx-4">•</span>
        </span>
      ))}
    </span>
  ));
  
  return (
    <div className="bg-background border-y border-border py-4 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee-infinite" style={{ width: 'fit-content' }}>
        {repeatedContent}
      </div>
    </div>
  );
}