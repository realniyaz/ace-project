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

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* 1. Global Navigation Bar Component */}
      <Navbar />

      {/* 2. Interactive Animated Hero Fold & Lead Form Component */}
      <Hero />

      {/* Future components will be cleanly appended directly right here as we draft them */}
      <Overview/>
      <Highlights/>
      <Pricing/>
      <Amenities/>
      <FloorPlans/>
      <Location/>
      <FooterContact/>
      <Footer/>
    </div>
  );
}