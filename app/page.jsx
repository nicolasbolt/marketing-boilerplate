import Hero from "@/components/landing/Hero";
import InfoBar from "@/components/landing/InfoBar";
import ProblemAgitation from "@/components/landing/ProblemAgitation";
import Solution from "@/components/landing/Solution";
import Features from "@/components/landing/Features";
import Testimonials from "@/components/landing/Testimonials";
import About from "@/components/landing/About";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <Hero />

      {/* InfoBar */}
      <InfoBar />

      {/* Problem Agitation */}
      <ProblemAgitation />

      {/* Solution */}
      <Solution />

      {/* Features */}
      <Features />

      {/* Testimonials */}
      <Testimonials />

      {/* About */}
      <About />

      {/* Call to Action */}
      <Pricing />

      {/* FAQ */}
      <FAQ />
    </main>
  );
}
