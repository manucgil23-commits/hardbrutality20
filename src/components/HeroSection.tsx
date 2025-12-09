import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSubtitle(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/70" />
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 noise-overlay" />
      
      {/* Scanlines */}
      <div className="absolute inset-0 scanlines opacity-30" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Main Title with Glitch Effect */}
        <h1 className="font-display text-[12vw] md:text-[10vw] lg:text-[8vw] leading-none tracking-wider text-foreground mb-4 relative">
          <span className="relative inline-block hover:animate-glitch-skew transition-all">
            HARD
            <span className="absolute inset-0 text-laser opacity-0 hover:opacity-100 transition-opacity" style={{ transform: "translate(2px, 2px)" }}>
              HARD
            </span>
          </span>
          <br />
          <span className="relative inline-block hover:animate-glitch-skew">
            BRUTALITY
            <span className="absolute inset-0 text-laser opacity-0 hover:opacity-100 transition-opacity" style={{ transform: "translate(-2px, -2px)" }}>
              BRUTALITY
            </span>
          </span>
        </h1>

        {/* Typewriter Subtitle */}
        {showSubtitle && (
          <p className="font-mono text-lg md:text-xl text-laser inline-block overflow-hidden whitespace-nowrap border-r-2 border-laser animate-typewriter">
            VAMOS POR TI MADRID
          </p>
        )}

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-mono text-xs text-muted-foreground tracking-widest">SCROLL</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-laser to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
