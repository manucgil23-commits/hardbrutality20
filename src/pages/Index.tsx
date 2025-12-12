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
      <HeroSection />
      <Marquee />
      <EventsSection />
      <ResidentsSection />
      <VipListSection />
      <Footer />
    </main>
  );
};

export default Index;