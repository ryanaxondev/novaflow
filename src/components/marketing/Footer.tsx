import Link from "next/link";

import { BrandLockup } from "@/components/marketing/BrandLockup";
import { Container } from "@/components/ui/Container";

const FOOTER_NAVIGATION = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Request a Demo", href: "#request-demo" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-structural/20 bg-surface-contrast text-on-contrast">
      <Container>
        <div className="flex flex-col gap-8 py-10 sm:py-12 md:flex-row md:items-end md:justify-between">
          <div className="flex max-w-md flex-col items-start gap-3">
            <Link
              href="/"
              className="inline-flex rounded-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/70"
            >
              <BrandLockup size="compact" />
            </Link>
            <p className="leading-6 text-on-contrast/70">
              NovaFlow helps growing teams build repeatable systems.
            </p>
            <p className="text-sm text-on-contrast/70">© 2026 NovaFlow.</p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {FOOTER_NAVIGATION.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-sm text-sm font-medium text-on-contrast/70 outline-none transition-colors hover:text-on-contrast focus-visible:text-on-contrast focus-visible:ring-3 focus-visible:ring-ring/70"
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
