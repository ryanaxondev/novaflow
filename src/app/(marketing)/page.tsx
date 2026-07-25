import { Benefits } from "@/components/marketing/Benefits";
import { Features } from "@/components/marketing/Features";
import { Hero } from "@/components/marketing/Hero";
import { Navbar } from "@/components/marketing/Navbar";
import { Problem } from "@/components/marketing/Problem";
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
      </main>
    </>
  );
}
