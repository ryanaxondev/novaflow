import { Benefits } from "@/components/marketing/Benefits";
import { FAQ } from "@/components/marketing/FAQ";
import { Features } from "@/components/marketing/Features";
import { Footer } from "@/components/marketing/Footer";
import { Hero } from "@/components/marketing/Hero";
import { Navbar } from "@/components/marketing/Navbar";
import { Pricing } from "@/components/marketing/Pricing";
import { Problem } from "@/components/marketing/Problem";
import { SocialProof } from "@/components/marketing/SocialProof";
import { Solution } from "@/components/marketing/Solution";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Benefits />
        <Features />
        <SocialProof />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
