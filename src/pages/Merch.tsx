import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MerchSection } from "@/components/MerchSection";
import { Helmet } from "react-helmet-async";

const Merch = () => {
  return (
    <>
      <Helmet>
        <title>Hard Wear | HardBrutality - Madrid Hard Techno Merch</title>
        <meta name="description" content="Merchandising oficial de HardBrutality. Camisetas, sudaderas y más. Madrid Hard Techno Culture." />
      </Helmet>
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20">
          <MerchSection />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Merch;
