import { Benefits } from "@/components/marketing/Benefits";
import { Features } from "@/components/marketing/Features";
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
      </main>
    </>
  );
}
