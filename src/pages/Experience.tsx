import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { GallerySection } from "@/components/GallerySection";
import { Helmet } from "react-helmet-async";

const Experience = () => {
  return (
    <>
      <Helmet>
        <title>The Experience | HardBrutality - Madrid Hard Techno</title>
        <meta name="description" content="Vive la experiencia HardBrutality. Galería de fotos de nuestras fiestas underground en Madrid." />
      </Helmet>
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20">
          <GallerySection />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Experience;
