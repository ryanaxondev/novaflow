import Link from "next/link";

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
    <header className="sticky top-0 z-50 border-b bg-background">
      <Container>
        <div className="grid grid-cols-[1fr_auto] grid-rows-[4rem] items-center gap-x-6 md:flex md:h-16 md:justify-between">
          <Link
            href="/"
            className="shrink-0 text-lg font-semibold"
          >
            NovaFlow
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
            className={cn(buttonVariants(), "hidden md:inline-flex")}
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
