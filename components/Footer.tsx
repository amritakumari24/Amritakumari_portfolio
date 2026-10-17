"use client";
import { Code2, Heart, GitBranch, Link2, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-zinc-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
              <Code2 className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-bold text-white text-sm">
              Amrita<span className="text-violet-400">.</span>dev
            </span>
          </div>

          {/* Copyright */}
          <p className="text-zinc-500 text-sm flex items-center gap-1.5">
            Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> by Amrita Kumari &copy; {new Date().getFullYear()}
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[
              { icon: GitBranch, href: "https://github.com", label: "GitHub" },
              { icon: Link2, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:amritakumari24@navgurukul.org", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="w-9 h-9 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-all hover:scale-110"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}

            {/* Scroll to top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Scroll to top"
              className="w-9 h-9 rounded-xl border border-violet-500/30 bg-violet-500/10 hover:bg-violet-500/20 flex items-center justify-center text-violet-400 hover:text-violet-300 transition-all hover:scale-110"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
