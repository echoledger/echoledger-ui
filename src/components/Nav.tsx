"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Nav reading order, left → right:
//   Method / Research             ─ the practice's positioning
//   MCP / Agent                   ─ the technical surfaces buyers/builders use
//   About / Contact               ─ who's behind it, how to reach them
//
// In-page sections live on the home route. Links are written as `/#id` so they
// work from any page: on `/` they scroll to the section; on a sub-page (e.g.
// `/mcp` or `/agent`) they route home, then scroll. `/mcp` and
// `/agent` are real routes.
const sectionLinks = [
  
  { label: "Method", href: "/#method" },
  { label: "Research", href: "/#research" },
  { label: "MCP", href: "/mcp" },
  { label: "Agent", href: "/agent" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function Nav() {
  const pathname = usePathname();

  // On the home page, intercept the logo click to smooth-scroll to top (a
  // Link to the current route is otherwise a no-op). On any other route, let
  // the Link navigate home normally.
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-[rgb(58_106_120/0.2)] bg-[rgb(10_14_26/0.85)] px-8 backdrop-blur">
      <div className="mx-auto flex h-28 max-w-[1100px] items-center justify-between">
        <Link
          href="/"
          onClick={handleLogoClick}
          aria-label="EchoLedger home"
          className="flex items-center gap-4 text-[1.5rem] font-medium tracking-tight text-[var(--color-text-primary)]"
        >
          <Image
            src="/echoledger-mark.png"
            alt="EchoLedger"
            width={128}
            height={128}
            priority
            className="h-20 w-20 shrink-0"
          />
          <span>
            echoledger<span className="text-[var(--color-accent)]">.</span>ai
          </span>
        </Link>
        <ul className="flex gap-8 text-sm text-[var(--color-text-secondary)]">
          {sectionLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="transition-colors hover:text-[var(--color-accent)]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
