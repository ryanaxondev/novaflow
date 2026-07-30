import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const DEMO_BOOKING_URL =
  "https://calendly.com/ryanaxondev/novaflow-introductory-demo";

export function FinalCTA() {
  return (
    <Section
      id="request-demo"
      className="bg-surface-contrast text-on-contrast"
    >
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeader
            className="mx-0 max-w-3xl items-start text-left"
            title={
              <span className="text-on-contrast">
                Ready to make recurring work repeatable?
              </span>
            }
            description={
              <span className="text-on-contrast/70">
                Start a conversation about how NovaFlow could support your
                team’s operational workflows.
              </span>
            }
          />

          <Link
            href={DEMO_BOOKING_URL}
            className={cn(
              buttonVariants({ size: "marketing" }),
              "w-full bg-on-contrast text-brand-navy hover:bg-on-contrast/90 sm:w-auto",
            )}
          >
            Request a Demo
          </Link>
        </div>
      </Container>
    </Section>
  );
}
