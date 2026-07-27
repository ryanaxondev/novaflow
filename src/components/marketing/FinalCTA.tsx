import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const DEMO_BOOKING_URL =
  "https://calendly.com/ryanaxondev/novaflow-introductory-demo";

export function FinalCTA() {
  return (
    <Section
      id="request-demo"
      className="bg-muted/20"
    >
      <Container>
        <div className="flex flex-col items-center gap-8 text-center">
          <SectionHeader
            title="Ready to make recurring work repeatable?"
            description="Start a conversation about how NovaFlow could support your team’s operational workflows."
          />

          <Link
            href={DEMO_BOOKING_URL}
            className={buttonVariants({ size: "lg" })}
          >
            Request a Demo
          </Link>
        </div>
      </Container>
    </Section>
  );
}
