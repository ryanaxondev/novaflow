import { Check } from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/utils";

type WorkflowStepState = "complete" | "current" | "upcoming";

type WorkflowStep = {
  label:
    | "Prepare"
    | "Collect information"
    | "Set up access"
    | "Confirm readiness"
    | "Welcome";
  state: WorkflowStepState;
  emphasis: "primary" | "continuation";
};

const WORKFLOW_STEPS = [
  {
    label: "Prepare",
    state: "complete",
    emphasis: "primary",
  },
  {
    label: "Collect information",
    state: "complete",
    emphasis: "primary",
  },
  {
    label: "Set up access",
    state: "current",
    emphasis: "primary",
  },
  {
    label: "Confirm readiness",
    state: "upcoming",
    emphasis: "continuation",
  },
  {
    label: "Welcome",
    state: "upcoming",
    emphasis: "continuation",
  },
] as const satisfies readonly WorkflowStep[];

const OWNER_ROLES = [
  "People Operations",
  "IT",
  "Hiring Manager",
] as const;

const APPROVAL_STATES = [
  "Awaiting approval",
  "Approved",
] as const;

function WorkflowStepNode({
  step,
  index,
}: {
  step: WorkflowStep;
  index: number;
}) {
  const isFirst = index === 0;
  const isLastPrimary = index === 2;
  const isLast = index === WORKFLOW_STEPS.length - 1;

  return (
    <li
      aria-current={step.state === "current" ? "step" : undefined}
      className={cn(
        "relative col-span-2 flex min-w-0 flex-col items-center gap-2 text-center lg:col-span-1",
        step.emphasis === "continuation" &&
          "col-span-3 flex-row justify-center gap-3 pt-2 text-left lg:flex-col lg:justify-start lg:gap-2 lg:pt-0 lg:text-center",
      )}
    >
      {!isFirst && (
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute top-4.5 right-1/2 left-0 h-px bg-flow-line/60",
            step.emphasis === "continuation" && "hidden lg:block",
          )}
        />
      )}

      {!isLast && (
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute top-4.5 right-0 left-1/2 h-px bg-flow-line/60",
            (step.emphasis === "continuation" || isLastPrimary) &&
              "hidden lg:block",
          )}
        />
      )}

      <span
        className={cn(
          "relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full border text-xs font-semibold",
          step.state === "complete" &&
            "border-brand-blue bg-brand-blue text-primary-foreground",
          step.state === "current" &&
            "border-brand-cyan bg-brand-blue text-primary-foreground ring-4 ring-brand-cyan/25",
          step.state === "upcoming" &&
            "border-on-contrast/25 bg-surface-contrast text-on-contrast/70",
          step.emphasis === "continuation" && "size-7 lg:size-9",
        )}
      >
        {step.state === "complete" ? (
          <Check
            aria-hidden="true"
            className="size-4"
            strokeWidth={2}
          />
        ) : (
          <span
            aria-hidden="true"
            className={cn(
              "size-1.5 rounded-full bg-current",
              step.state === "current" && "size-2",
            )}
          />
        )}
      </span>

      <span className="relative z-10 flex min-w-0 flex-col gap-0.5">
        <span
          className={cn(
            "text-xs leading-4 font-medium text-on-contrast",
            step.emphasis === "continuation" && "text-on-contrast/80",
          )}
        >
          {step.label}
        </span>
        <span
          className={cn(
            "text-xs leading-4 text-on-contrast/50",
            step.state === "current" && "text-brand-cyan",
          )}
        >
          {step.state === "complete"
            ? "Complete"
            : step.state === "current"
              ? "Current"
              : "Upcoming"}
        </span>
      </span>
    </li>
  );
}

export function HeroProductWorkbench() {
  return (
    <section
      aria-labelledby="hero-workbench-title"
      className="relative isolate min-w-0 overflow-hidden rounded-2xl border border-structural/20 bg-surface-contrast text-on-contrast shadow-2xl"
    >
      <span
        aria-hidden="true"
        className="operational-grid pointer-events-none absolute inset-0 z-0"
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-4 border-b border-on-contrast/10 px-4 py-3 sm:px-6">
          <div className="flex min-w-0 items-center gap-2">
            <Image
              src="/brand/novaflow-mark.svg"
              alt=""
              width={18}
              height={18}
              className="size-[18px] shrink-0"
            />
            <span className="text-xs font-semibold text-on-contrast">
              NovaFlow
            </span>
          </div>

          <span className="flex shrink-0 items-center gap-2 text-xs text-on-contrast/80">
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-brand-cyan ring-4 ring-brand-cyan/10"
            />
            In progress
          </span>
        </div>

        <div className="p-4 sm:p-6">
          <header className="flex flex-col gap-1">
            <h2
              id="hero-workbench-title"
              className="text-lg leading-tight font-semibold tracking-tight text-on-contrast sm:text-xl"
            >
              Employee Onboarding Template
            </h2>
            <p className="text-xs font-medium text-flow-line">
              Current step
            </p>
          </header>

          <ol
            aria-label="Employee Onboarding workflow stages"
            className="mt-5 grid grid-cols-6 gap-x-2 gap-y-3 sm:mt-7 sm:gap-y-4 lg:grid-cols-5 lg:gap-x-0 lg:gap-y-0"
          >
            {WORKFLOW_STEPS.map((step, index) => (
              <WorkflowStepNode
                key={step.label}
                step={step}
                index={index}
              />
            ))}
          </ol>

          <section
            aria-labelledby="onboarding-guidance-title"
            className="mt-5 rounded-xl border border-on-contrast/10 bg-on-contrast/[0.035] p-3 sm:mt-6 sm:p-4"
          >
            <div className="flex items-center justify-between gap-4">
              <h3
                id="onboarding-guidance-title"
                className="text-xs font-semibold text-on-contrast"
              >
                Onboarding guidance
              </h3>
              <span className="text-xs font-medium text-on-contrast/70">
                Current
              </span>
            </div>

            <ul className="mt-3 grid grid-cols-2 gap-2 text-xs leading-4 text-on-contrast/65 sm:mt-4 sm:gap-3">
              <li className="flex min-w-0 items-center gap-2">
                <span
                  aria-hidden="true"
                  className="size-2 shrink-0 rounded-full bg-flow-line ring-4 ring-flow-line/10"
                />
                <span>Prepare</span>
              </li>
              <li className="flex min-w-0 items-center gap-2">
                <span
                  aria-hidden="true"
                  className="size-2 shrink-0 rounded-full bg-flow-line ring-4 ring-flow-line/10"
                />
                <span>Confirm readiness</span>
              </li>
            </ul>
          </section>

          <div className="mt-2 grid grid-cols-2 gap-2 sm:mt-3 sm:gap-3">
            <section
              aria-labelledby="people-operations-title"
              className="min-w-0 rounded-xl border border-on-contrast/10 bg-on-contrast/[0.035] p-3 sm:p-4"
            >
              <h3
                id="people-operations-title"
                className="text-xs font-semibold text-on-contrast"
              >
                People Operations
              </h3>
              <ul className="mt-2 space-y-1.5 sm:flex sm:flex-wrap sm:gap-2 sm:space-y-0">
                {OWNER_ROLES.map((role) => (
                  <li
                    key={role}
                    className="flex items-start gap-1.5 text-xs leading-4 text-on-contrast/75 sm:rounded-md sm:border sm:border-flow-line/35 sm:bg-brand-blue/10 sm:px-2 sm:py-1"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 size-1 shrink-0 rounded-full bg-flow-line sm:hidden"
                    />
                    {role}
                  </li>
                ))}
              </ul>
            </section>

            <section
              aria-labelledby="workflow-visibility-title"
              className="min-w-0 rounded-xl border border-on-contrast/10 bg-on-contrast/[0.035] p-3 sm:p-4"
            >
              <h3
                id="workflow-visibility-title"
                className="text-xs font-semibold text-on-contrast"
              >
                Workflow visibility
              </h3>
              <ul className="mt-2 space-y-1.5 sm:flex sm:flex-wrap sm:gap-x-3 sm:gap-y-2 sm:space-y-0">
                {APPROVAL_STATES.map((state) => (
                  <li
                    key={state}
                    className="flex items-start gap-1.5 text-xs leading-4 text-on-contrast/75"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-cyan"
                    />
                    {state}
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-xs leading-4 text-flow-line sm:mt-3 sm:w-fit sm:rounded-md sm:border sm:border-flow-line/35 sm:bg-brand-blue/10 sm:px-2 sm:py-1 sm:text-on-contrast/75">
                Connected tools
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}