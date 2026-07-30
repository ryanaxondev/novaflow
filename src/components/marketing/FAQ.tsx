"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const FAQ_ITEMS = [
  {
    question: "What is NovaFlow?",
    answer:
      "NovaFlow helps growing teams build repeatable systems for recurring work. It brings together the documentation, workflows, templates, metrics, and integrations that support a more consistent way of operating.",
  },
  {
    question: "Who is NovaFlow designed for?",
    answer:
      "NovaFlow is designed primarily for early-stage founders and growing teams whose work is becoming harder to coordinate consistently as the team expands.",
  },
  {
    question: "How is NovaFlow different from task-management tools?",
    answer:
      "Task-management tools usually focus on tracking individual tasks. NovaFlow focuses on making recurring work repeatable by connecting the instructions, workflows, templates, and signals that teams rely on to operate consistently.",
  },
  {
    question: "How does the illustrative pricing work?",
    answer:
      "The plans show how NovaFlow’s approved capabilities are grouped across Starter, Pro, and Enterprise. The pricing is illustrative and does not represent a live checkout, billing, or subscription-management flow.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "A self-serve free trial is not part of the current website experience. You can request a demo to discuss NovaFlow, your team’s workflows, and the illustrative plans.",
  },
  {
    question: "What happens after I request a demo?",
    answer:
      "You’ll be taken to NovaFlow’s approved booking page, where you can choose an available time for an introductory conversation about your team’s recurring workflows.",
  },
] as const;

export function FAQ() {
  return (
    <Section
      id="faq"
      className="border-y border-structural bg-surface-subtle"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
          <SectionHeader
            className="mx-0 items-start text-left lg:self-start"
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Answers to common questions about NovaFlow, its approach, and the current demo process."
          />

          <Accordion className="overflow-hidden rounded-2xl border border-structural bg-surface-base px-5 sm:px-7">
            {FAQ_ITEMS.map((item) => (
              <AccordionItem
                key={item.question}
                value={item.question}
                className="border-structural"
              >
                <AccordionTrigger className="py-6 text-base font-semibold sm:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="max-w-2xl pb-6 text-sm sm:text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </Section>
  );
}
