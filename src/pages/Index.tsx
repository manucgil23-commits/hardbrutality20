import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { Marquee } from "@/components/Marquee";
import { EventsSection } from "@/components/EventsSection";
import { ResidentsSection } from "@/components/ResidentsSection";
import { VipListSection } from "@/components/VipListSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div 
        className="w-full bg-[#1c1c1c] relative z-0"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      >
        <HeroSection />
        <Marquee />
        <EventsSection />
        <ResidentsSection />
        <VipListSection />
      </div>
      <Footer />
    </main>
  );
};

export default Index;