import { useEffect, useState } from "react";
import logo from "@/assets/logo-hardbrutality.png";

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
          src="/videos/hero-bg.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 noise-overlay" />
      
      {/* Scanlines */}
      <div className="absolute inset-0 scanlines opacity-20" />

      {/* Red Gradient Accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-laser/10 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        {/* Logo with Glow - positioned relative for text overlay */}
        <div className="relative">
          <img
            src={logo}
            alt="HardBrutality"
            className="w-[80vw] md:w-[60vw] lg:w-[50vw] max-w-4xl glow-white animate-fade-in"
          />
          
          {/* Neon Glitch Subtitle - positioned inside the logo area */}
          {showSubtitle && (
            <div className="absolute -bottom-8 sm:bottom-4 md:bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
              <p className="font-display text-lg md:text-2xl lg:text-3xl text-foreground tracking-[0.3em] neon-glitch-text whitespace-nowrap">
                VAMOS POR TI MADRID
              </p>
              
              {/* Madrid Stars (7 stars: 4 top + 3 bottom) */}
              <div className="flex flex-col items-center gap-1 opacity-80">
                <div className="flex items-center gap-2">
                  {[...Array(4)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3 h-3 md:w-4 md:h-4 text-foreground"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                    </svg>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  {[...Array(3)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3 h-3 md:w-4 md:h-4 text-foreground"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}