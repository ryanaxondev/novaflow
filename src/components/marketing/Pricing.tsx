import { Check } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    name: "Starter",
    description:
      "For early-stage teams beginning to document and standardize recurring work.",
    price: "$99",
    billingLabel: "per workspace / month",
    capabilities: [
      "Workflow Design",
      "Guided Execution",
      "Centralized Knowledge",
    ],
    ctaLabel: "Request a Demo",
    recommended: false,
  },
  {
    name: "Pro",
    description:
      "For growing teams coordinating repeatable workflows across more people and responsibilities.",
    price: "$299",
    billingLabel: "per workspace / month",
    capabilities: [
      "Everything in Starter",
      "Automation & Approvals",
      "Analytics & Reporting",
      "Integrations",
    ],
    ctaLabel: "Request a Demo",
    recommended: true,
  },
  {
    name: "Enterprise",
    description:
      "For organizations planning a tailored rollout and broader operational adoption.",
    price: "Custom",
    billingLabel: null,
    capabilities: ["Everything in Pro", "Tailored rollout planning"],
    ctaLabel: "Contact Sales",
    recommended: false,
  },
] as const;

export function Pricing() {
  return (
    <Section
      id="pricing"
      className="bg-surface-base"
    >
      <Container>
        <div className="flex flex-col gap-12">
          <SectionHeader
            title="Simple pricing for repeatable operations"
            description="Compare illustrative packages for early-stage teams, growing teams, and organizations planning a tailored rollout."
          />

          <ul className="grid items-stretch gap-6 lg:grid-cols-3">
            {PLANS.map((plan) => (
              <li
                key={plan.name}
                className="flex"
              >
                <Card
                  className={cn(
                    "h-full w-full border border-transparent bg-surface-base [--card-spacing:--spacing(6)] ring-1 ring-structural",
                    plan.recommended &&
                      "border-brand-blue/25 bg-surface-operational shadow-sm ring-2 ring-brand-blue",
                  )}
                >
                  <CardHeader className="gap-5">
                    <div className="flex min-h-7 flex-wrap items-start justify-between gap-3">
                      <CardTitle>
                        <h3 className="text-lg font-semibold">{plan.name}</h3>
                      </CardTitle>

                      {plan.recommended ? (
                        <Badge>Recommended for growing teams</Badge>
                      ) : null}
                    </div>

                    <CardDescription className="leading-6">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex flex-1 flex-col gap-8">
                    <p className="flex min-h-14 flex-wrap items-end gap-x-2 gap-y-1">
                      <span className="text-4xl font-bold tracking-tight text-foreground">
                        {plan.price}
                      </span>
                      {plan.billingLabel ? (
                        <span className="pb-1 text-sm text-muted-foreground">
                          {plan.billingLabel}
                        </span>
                      ) : null}
                    </p>

                    <ul className="flex flex-col gap-3">
                      {plan.capabilities.map((capability) => (
                        <li
                          key={capability}
                          className="flex items-start gap-3 leading-6"
                        >
                          <Check
                            aria-hidden="true"
                            className={cn(
                              "mt-1 size-4 shrink-0",
                              plan.recommended
                                ? "text-brand-blue"
                                : "text-muted-foreground",
                            )}
                            strokeWidth={2}
                          />
                          <span>{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter
                    className={cn(
                      "border-structural bg-surface-subtle",
                      plan.recommended && "bg-surface-operational",
                    )}
                  >
                    <Link
                      href="#request-demo"
                      className={cn(
                        buttonVariants({
                          variant: plan.recommended ? "default" : "outline",
                          size: "marketing",
                        }),
                        "w-full",
                      )}
                    >
                      {plan.ctaLabel}
                    </Link>
                  </CardFooter>
                </Card>
              </li>
            ))}
          </ul>

          <p className="text-center text-sm leading-6 text-muted-foreground">
            Illustrative pricing for portfolio demonstration—not an active
            commercial offer.
          </p>
        </div>
      </Container>
    </Section>
  );
}
