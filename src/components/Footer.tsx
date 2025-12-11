import { Instagram } from "lucide-react";
import logo from "@/assets/logo-header.png";

export function Footer() {
  return (
    <footer className="py-16 bg-background relative overflow-hidden">
      {/* Background Logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.03]">
        <img src={logo} alt="" className="w-[80vw] max-w-4xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="HardBrutality" className="h-36 md:h-44 glow-white" />
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/hardbrutality"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="w-5 h-5 group-hover:text-laser transition-colors" />
              <span>INSTAGRAM</span>
            </a>
            <a
              href="https://tiktok.com/@hardbrutality"
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
              href="https://soundcloud.com/hardbrutality"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="w-5 h-5 group-hover:text-laser transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c-.01-.057-.048-.1-.098-.1zm-.899.828c-.06 0-.091.037-.104.094L0 14.479l.165 1.308c.014.057.045.094.09.094s.089-.037.099-.094l.21-1.308-.21-1.334c-.01-.057-.044-.094-.09-.094zm1.83-1.229c-.061 0-.12.045-.12.104l-.21 2.563.225 2.458c0 .06.045.104.106.104.061 0 .12-.044.12-.104l.24-2.458-.24-2.563c0-.06-.06-.104-.12-.104zm.945-.089c-.075 0-.135.06-.15.135l-.193 2.64.21 2.544c.016.077.075.138.149.138.075 0 .135-.061.15-.138l.227-2.544-.227-2.64c-.015-.075-.06-.135-.135-.135l-.031-.015zm1.155.36c-.005-.09-.075-.149-.159-.149-.09 0-.158.06-.164.149l-.217 2.43.2 2.563c0 .09.075.157.164.157.09 0 .164-.067.164-.157l.227-2.563-.227-2.43h.012zm.78-1.545c-.09 0-.18.089-.18.179l-.165 3.975.18 2.519c0 .09.075.18.165.18s.18-.09.18-.18l.195-2.519-.21-3.975c0-.09-.09-.179-.18-.179h.015zm1.035.645c-.105 0-.195.09-.195.195l-.15 3.54.165 2.503c0 .105.09.195.18.195.105 0 .195-.09.195-.195l.18-2.503-.195-3.54c0-.105-.075-.195-.18-.195zm1.095-.315c-.12 0-.21.09-.225.209l-.15 3.63.165 2.489c.015.119.105.209.225.209.12 0 .21-.09.21-.209l.18-2.489-.165-3.63c-.015-.12-.105-.21-.225-.21h-.015zm1.065-.135c-.135 0-.225.105-.225.225l-.12 3.66.135 2.459c0 .135.09.24.21.24.135 0 .225-.105.24-.24l.149-2.459-.149-3.66c-.015-.12-.105-.225-.24-.225zm1.095.15c-.15 0-.255.105-.27.254l-.1 3.36.12 2.459c.015.135.12.255.255.255.15 0 .255-.12.27-.255l.135-2.459-.15-3.36c-.015-.15-.12-.255-.27-.255h.01zm2.145 1.02c-.135 0-.255.09-.285.225l-.09 2.13.105 2.444c.015.149.135.27.285.27.135 0 .27-.121.27-.27l.12-2.444-.12-2.13c-.015-.135-.135-.24-.285-.225zm1.155.135c-.165 0-.3.135-.315.3l-.09 1.92.105 2.444c.015.165.15.3.3.3.165 0 .3-.135.3-.3l.12-2.444-.12-1.92c0-.165-.135-.3-.3-.3zm1.215-.3c-.18 0-.33.15-.33.33l-.075 2.115.09 2.415c0 .18.15.33.315.33.18 0 .33-.15.33-.33l.105-2.415-.105-2.115c0-.18-.135-.33-.315-.33h-.015zm1.245.135c-.195 0-.345.15-.36.359l-.06 1.905.075 2.43c.015.195.165.359.36.359.18 0 .345-.164.345-.359l.09-2.43-.09-1.905c-.015-.21-.165-.36-.36-.36v.001zm3.705-.405c-.225 0-.405.18-.405.405v4.065c0 .225.165.405.39.405h3.42c1.32 0 2.4-1.065 2.4-2.385s-1.08-2.385-2.4-2.385c-.315 0-.615.06-.885.165-.18-1.065-1.11-1.875-2.22-1.875-.39 0-.765.09-1.095.255-.135.06-.165.12-.165.24v5.55c0 .24.195.435.435.435h4.215c.885 0 1.605-.72 1.605-1.605s-.72-1.605-1.605-1.605h-.54v-1.8c-.54-.39-1.2-.645-1.92-.645-.87 0-1.66.33-2.25.885l.045-1.11-.03.006z"/>
              </svg>
              <span>SOUNDCLOUD</span>
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