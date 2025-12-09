import { useEffect, useState } from "react";

export function HeroSection() {
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSubtitle(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect fill='%23000'/%3E%3C/svg%3E"
      >
        <source
          src="https://assets.mixkit.co/videos/4755/4755-720.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-background/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        {/* Typographic Composition */}
        <div className="flex flex-col items-center animate-fade-in">
          {/* HARD - Solid White */}
          <h1 className="font-sans font-black text-[18vw] md:text-[14vw] lg:text-[12vw] leading-[0.85] text-foreground tracking-tighter">
            HARD
          </h1>
          {/* BRUTALITY - Outline Style */}
          <h1 className="font-sans font-black text-[18vw] md:text-[14vw] lg:text-[12vw] leading-[0.85] text-outline tracking-tighter -mt-2 md:-mt-4">
            BRUTALITY
          </h1>
        </div>

        {/* Neon Subtitle */}
        <div className="mt-8 md:mt-12">
          {showSubtitle && (
            <p className="font-sans font-black text-xl md:text-3xl lg:text-4xl text-neon tracking-[0.2em] animate-fade-in">
              VAMOS POR TI MADRID
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
