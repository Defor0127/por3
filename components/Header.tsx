"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <Link href="/" className="logo" style={{ fontFamily: "var(--font-serif)" }}>
          illustory Van A
        </Link>
        <ul className={`navLinks ${menuOpen ? "open" : ""}`}>
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={pathname === href ? "active" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="navToggle"
          aria-label="메뉴 열기"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}
