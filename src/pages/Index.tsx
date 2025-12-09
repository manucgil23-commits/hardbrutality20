import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { EventsSection } from "@/components/EventsSection";
import { ResidentsSection } from "@/components/ResidentsSection";
import { MerchSection } from "@/components/MerchSection";
import { GallerySection } from "@/components/GallerySection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <EventsSection />
      <ResidentsSection />
      <MerchSection />
      <GallerySection />
      <Footer />
    </main>
  );
};

export default Index;
