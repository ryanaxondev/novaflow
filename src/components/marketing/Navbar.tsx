import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";

const navigation = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  return (
    <header className="border-b">
      <Container>
        <nav
          aria-label="Primary"
          className="flex h-16 items-center justify-between"
        >
          <Link
            href="/"
            className="text-lg font-semibold"
          >
            NovaFlow
          </Link>

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

          <Link href="#pricing">
            <Button>
              Get Started
            </Button>
          </Link>
        </nav>
      </Container>
    </header>
  );
}