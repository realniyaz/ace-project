import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Highlights from "@/components/Highlights";
import Pricing from "@/components/Pricing";
import Amenities from "@/components/Amenities";
import FloorPlans from "@/components/FloorPlans";
import Location from "@/components/Location";
import FooterContact from "@/components/FooterContact";
import Footer from "@/components/Footer";
import WelcomeModal from "@/components/WelcomeModal";

// 1. Import the Floating Actions component file
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <>
      <WelcomeModal />
      <Navbar />

      {/* Fixed: Appended explicit lower mobile padding boundaries to clear floating blocks */}
      <main className="relative min-h-dvh bg-white overflow-x-hidden antialiased pb-[56px] lg:pb-0 selection:bg-[#991b1b]/10 selection:text-[#991b1b]">
        <Hero />
        <Overview />
        <Highlights />
        <Pricing />
        <Amenities />
        <FloorPlans />
        <Location />
        <FooterContact />
      </main>

      <Footer />

      {/* 2. Place Floating Actions at the global root bottom level */}
      <FloatingActions />
    </>
  );
}