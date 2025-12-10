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
          src="https://assets.mixkit.co/videos/4755/4755-720.mp4"
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
        {/* Logo with Glow */}
        <img
          src={logo}
          alt="HardBrutality"
          className="w-[80vw] md:w-[60vw] lg:w-[50vw] max-w-4xl glow-white mb-8 animate-fade-in"
        />

        {/* Neon Glitch Subtitle */}
        {showSubtitle && (
          <p className="font-display text-xl md:text-3xl text-foreground tracking-[0.3em] neon-glitch-text">
            VAMOS POR TI MADRID
          </p>
        )}
      </div>
    </section>
  );
}