import Link from "next/link";

import { BrandLockup } from "@/components/marketing/BrandLockup";
import { MobileNavbar } from "@/components/marketing/MobileNavbar";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const navigation = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

const cta = {
  label: "Request a Demo",
  href: "#request-demo",
} as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-structural bg-surface-base">
      <Container>
        <div className="grid grid-cols-[1fr_auto] grid-rows-[4rem] items-center gap-x-6 md:flex md:h-16 md:justify-between">
          <Link
            href="/"
            className="inline-flex shrink-0 rounded-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <BrandLockup size="default" />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden md:block"
          >
            <ul className="flex items-center gap-8">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            href={cta.href}
            className={cn(
              buttonVariants({ size: "marketing" }),
              "hidden md:inline-flex",
            )}
          >
            {cta.label}
          </Link>

          <MobileNavbar
            items={navigation}
            cta={cta}
          />
        </div>
      </Container>
    </header>
  );
}
