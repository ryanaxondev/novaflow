"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavigationItem = {
  label: string;
  href: string;
};

type MobileNavbarProps = {
  items: readonly NavigationItem[];
  cta: NavigationItem;
};

export function MobileNavbar({
  items,
  cta,
}: MobileNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") {
        return;
      }

      setIsOpen(false);
      toggleRef.current?.focus();
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="contents md:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-panel"
        className={cn(
          buttonVariants({
            variant: "outline",
            size: "icon",
          }),
          "size-11",
        )}
        onClick={() => setIsOpen((currentState) => !currentState)}
      >
        {isOpen ? (
          <X aria-hidden="true" />
        ) : (
          <Menu aria-hidden="true" />
        )}
      </button>

      {isOpen ? (
        <nav
          id="mobile-navigation-panel"
          aria-label="Mobile navigation"
          className="col-span-2 w-full border-t border-structural py-4"
        >
          <ul className="flex flex-col gap-1">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href={cta.href}
            className={buttonVariants({
              size: "marketing",
              className: "mt-3 w-full",
            })}
            onClick={closeMenu}
          >
            {cta.label}
          </Link>
        </nav>
      ) : null}
    </div>
  );
}
