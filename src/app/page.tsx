import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Impact from "@/components/Impact";
import HowItWorks from "@/components/HowItWorks";
import SavingsCalculator from "@/components/SavingsCalculator";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Impact />
      <Features />
      <HowItWorks />
      <SavingsCalculator />
      <Footer />
    </main>
  );
}
