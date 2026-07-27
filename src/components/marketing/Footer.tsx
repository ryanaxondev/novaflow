import Link from "next/link";

import { Container } from "@/components/ui/Container";

const FOOTER_NAVIGATION = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Request a Demo", href: "#request-demo" },
] as const;

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <Container>
        <div className="flex flex-col gap-8 py-10 sm:py-12 md:flex-row md:items-end md:justify-between">
          <div className="flex max-w-md flex-col items-start gap-3">
            <Link
              href="/"
              className="rounded-sm text-lg font-semibold outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              NovaFlow
            </Link>
            <p className="leading-6 text-muted-foreground">
              NovaFlow helps growing teams build repeatable systems.
            </p>
            <p className="text-sm text-muted-foreground">© 2026 NovaFlow.</p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {FOOTER_NAVIGATION.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-sm text-sm font-medium text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
