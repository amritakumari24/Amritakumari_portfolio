"use client";
import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

const NAV_LINKS = [
  { label: "About",          href: "#about" },
  { label: "Skills",         href: "#skills" },
  { label: "Experience",     href: "#experience" },
  { label: "Projects",       href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact",        href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active, setActive]       = useState("");
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl border-b shadow-lg"
          : "bg-transparent"
      }`}
      style={scrolled ? {
        backgroundColor: "var(--nav-bg)",
        borderColor: "var(--border)",
        boxShadow: `0 4px 24px var(--shadow-color)`,
      } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group" aria-label="Home">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold tracking-tight text-sm sm:text-base" style={{ color: "var(--text-primary)" }}>
              Amrita<span className="text-violet-400">.</span>dev
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActive(link.label)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === link.label
                    ? "bg-violet-500/15 text-violet-400"
                    : "hover:bg-black/5 dark:hover:bg-white/5"
                }`}
                style={{ color: active === link.label ? undefined : "var(--text-secondary)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Hire Me */}
            <a
              href="mailto:amritakumari24@navgurukul.org"
              id="nav-hire-btn"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-violet-900/30"
            >
              Hire Me
            </a>

            {/* Mobile hamburger */}
            <button
              id="nav-menu-toggle"
              className="md:hidden p-2 rounded-lg transition-colors"
              style={{ color: "var(--text-secondary)" }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t backdrop-blur-xl"
          style={{ backgroundColor: "var(--nav-bg)", borderColor: "var(--border)" }}
        >
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => { setMenuOpen(false); setActive(link.label); }}
                className="block px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
                style={{ color: "var(--text-secondary)" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:amritakumari24@navgurukul.org"
              className="block mt-3 px-4 py-2.5 rounded-xl text-sm font-semibold text-center bg-violet-600 hover:bg-violet-500 text-white transition-all"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
