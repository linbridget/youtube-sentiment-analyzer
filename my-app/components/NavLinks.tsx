"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

// navigation bar that allows users to access other pages but not the current page
export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-2 text-sm">
      {/* for each of the links */}
      {links.map((link, i) => {
        {/* isCurrent checks if href matches page user is on */}
        const isCurrent = pathname === link.href;
        return (
          <span key={link.href} className="flex items-center gap-2">
            {i > 0 && <span className="text-zinc-300">|</span>}
            {isCurrent ? (
              <span className="text-zinc-400">{link.label}</span>
            ) : (
              <Link
                href={link.href}
                className="text-zinc-500 transition-colors hover:text-zinc-800"
              >
                {link.label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
