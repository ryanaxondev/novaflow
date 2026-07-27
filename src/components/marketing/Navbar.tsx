import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";

const navigation = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <Container>
        <nav
          aria-label="Primary"
          className="flex h-16 items-center justify-between gap-6"
        >
          <Link
            href="/"
            className="shrink-0 text-lg font-semibold"
          >
            NovaFlow
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
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

          <Link
            href="#request-demo"
            className={buttonVariants()}
          >
            Request a Demo
          </Link>
        </nav>
      </Container>
    </header>
  );
}
