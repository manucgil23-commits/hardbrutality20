import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-16 bg-background relative overflow-hidden">
      {/* Background Logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[30vw] text-foreground/[0.03] whitespace-nowrap pointer-events-none select-none">
        HB
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Logo */}
          <div className="font-display text-4xl md:text-6xl text-foreground">
            HARD<span className="text-laser">BRUTALITY</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="w-5 h-5 group-hover:text-laser transition-colors" />
              <span>INSTAGRAM</span>
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="w-5 h-5 group-hover:text-laser transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              <span>TIKTOK</span>
            </a>
            <a
              href="mailto:contact@hardbrutality.com"
              className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              CONTACTO
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-border mb-8" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Legal */}
          <p className="font-mono text-xs text-muted-foreground">
            © 2024 HARDBRUTALITY. ALL RIGHTS RESERVED.
          </p>

          {/* Tagline */}
          <p className="font-mono text-xs text-laser tracking-widest">
            MADRID HARD TECHNO CULTURE
          </p>
        </div>
      </div>
    </footer>
  );
}
