"use client";
import {
  ArrowRight,
  Award,
  GitBranch,
  Link2,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Star,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-zinc-950 overflow-hidden flex items-center"
    >
      {/* ── Ambient background blobs ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-violet-600/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-indigo-600/10 blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-amber-500/5 blur-[80px]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* ── LEFT: Text Content ── */}
          <div className="lg:col-span-7 space-y-8">
            {/* Badge row */}
            <div
              className="flex flex-wrap items-center gap-3"
              style={{ animation: "fadeSlideIn 0.7s ease-out 0.1s both" }}
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3 h-3" />
                Available for Work
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-300 text-xs font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                Open to opportunities
              </span>
            </div>

            {/* Name & Title */}
            <div style={{ animation: "fadeSlideIn 0.7s ease-out 0.2s both" }}>
              <p className="text-zinc-500 text-sm font-mono tracking-widest uppercase mb-3">
                Hi, I&apos;m
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.9] mb-4">
                <span className="gradient-text">Amrita</span>
                <br />
                <span className="text-white">Kumari</span>
              </h1>
              <div className="flex items-center gap-3 mt-4">
                <div className="h-px w-12 bg-violet-500" />
                <span className="text-zinc-300 font-medium text-lg tracking-tight">
                  Full Stack &amp; AI Engineer
                </span>
              </div>
            </div>

            {/* Description */}
            <p
              className="text-zinc-400 text-lg leading-relaxed max-w-xl"
              style={{ animation: "fadeSlideIn 0.7s ease-out 0.3s both" }}
            >
              Software &amp; AI Engineer and 3rd-year BCA student with hands-on
              experience in{" "}
              <span className="text-violet-400 font-medium">
                React Native, React.js, Python &amp; Flask
              </span>
              . Skilled in AI/ML, Generative AI, and AI-assisted development
              using Claude and Codex.
            </p>

            {/* Location & Contact row */}
            <div
              className="flex flex-wrap gap-4 text-sm text-zinc-500"
              style={{ animation: "fadeSlideIn 0.7s ease-out 0.35s both" }}
            >
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> Korba, Chhattisgarh, India
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" /> +91-8823818640
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" /> amritakumari24@navgurukul.org
              </span>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4"
              style={{ animation: "fadeSlideIn 0.7s ease-out 0.4s both" }}
            >
              <a
                href="#projects"
                id="hero-view-work"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all hover:scale-[1.03] active:scale-[0.97] shadow-lg shadow-violet-900/40"
              >
                View My Work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-github"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white font-semibold text-sm backdrop-blur-sm transition-all"
              >
                <GitBranch className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-linkedin"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white font-semibold text-sm backdrop-blur-sm transition-all"
              >
                <Link2 className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* ── RIGHT: Glassmorphism Stats Card ── */}
          <div
            className="lg:col-span-5 space-y-4"
            style={{ animation: "fadeSlideIn 0.7s ease-out 0.5s both" }}
          >
            {/* 3-D flip wrapper — perspective lives here */}
            <div style={{ perspective: "1200px" }}>
              {/* Inner card — this is what rotates */}
              <div
                style={{
                  position: "relative",
                  transformStyle: "preserve-3d",
                  animation: "cardFlip 2s ease-in-out infinite",
                  borderRadius: "1.5rem",
                }}
              >
                {/* ── FRONT FACE ── */}
                <div
                  className="relative rounded-3xl glass p-8 glow-violet overflow-hidden"
                  style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                >
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-violet-500/10 blur-3xl" />
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-indigo-500/10 blur-3xl" />

                  <div className="relative z-10">
                    {/* Avatar */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 via-indigo-500 to-purple-600 flex items-center justify-center text-2xl font-black text-white shadow-lg">
                          AK
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-500 border-2 border-zinc-950" />
                      </div>
                      <div>
                        <h2 className="text-white font-bold text-lg leading-tight">Amrita Kumari</h2>
                        <p className="text-zinc-400 text-sm">Full Stack &amp; AI Engineer</p>
                        <div className="flex items-center gap-1 mt-1">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                          ))}
                          <Award className="w-3.5 h-3.5 text-amber-400 ml-1" />
                          <span className="text-zinc-500 text-xs ml-0.5">Award Winner</span>
                        </div>
                      </div>
                    </div>

                    {/* Stats grid */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {[
                        { value: "3+", label: "Projects" },
                        { value: "4+", label: "Certs" },
                        { value: "9.08", label: "GPA" },
                      ].map(({ value, label }) => (
                        <div key={label} className="rounded-2xl bg-white/5 border border-white/8 p-3 text-center">
                          <div className="text-xl font-black text-white">{value}</div>
                          <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-medium">{label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Skill bars */}
                    <div className="space-y-3">
                      {[
                        { label: "React.js / React Native", pct: 90 },
                        { label: "Python / Flask / APIs", pct: 85 },
                        { label: "AI/ML & Generative AI", pct: 80 },
                      ].map(({ label, pct }) => (
                        <div key={label}>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-zinc-400">{label}</span>
                            <span className="text-white font-medium">{pct}%</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-400"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {["React.js", "Python", "Flask", "AI/ML", "React Native", "AWS"].map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-zinc-400 text-[10px] font-medium tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ── BACK FACE ── */}
                <div
                  className="absolute inset-0 rounded-3xl glass glow-violet overflow-hidden"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  {/* Ambient blobs mirroring front */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-violet-500/10 blur-3xl" />
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-indigo-500/10 blur-3xl" />
                  {/* Full-card profile picture */}
                  <img
                    src="/profile.jpg"
                    alt="Amrita Kumari"
                    className="w-full h-full object-cover rounded-3xl"
                    style={{ display: "block" }}
                  />
                  {/* Subtle name overlay at the bottom */}
                  <div
                    className="absolute bottom-0 left-0 right-0 px-6 py-5 rounded-b-3xl"
                    style={{
                      background: "linear-gradient(to top, rgba(9,9,11,0.85) 0%, transparent 100%)",
                    }}
                  >
                    <p className="text-white font-bold text-lg leading-tight">Amrita Kumari</p>
                    <p className="text-zinc-400 text-sm">Full Stack &amp; AI Engineer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Marquee tech card */}
            <div className="rounded-3xl glass overflow-hidden py-5">
              <p className="px-6 text-xs text-zinc-500 uppercase tracking-wider font-medium mb-4">
                Technologies I work with
              </p>
              <div
                className="relative flex overflow-hidden"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                }}
              >
                <div
                  className="flex gap-8 whitespace-nowrap"
                  style={{ animation: "marquee 25s linear infinite" }}
                >
                  {[
                    "React.js", "React Native", "Python", "Flask", "Node.js",
                    "MongoDB", "AWS EC2", "AWS S3", "Generative AI", "Claude",
                    "Codex", "Express.js", "Git", "Docker", "FastAPI", "Vite",
                    "React.js", "React Native", "Python", "Flask", "Node.js",
                    "MongoDB", "AWS EC2", "AWS S3", "Generative AI", "Claude",
                    "Codex", "Express.js", "Git", "Docker", "FastAPI", "Vite",
                  ].map((tech, i) => (
                    <span
                      key={i}
                      className="text-zinc-400 text-sm font-medium hover:text-white transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-zinc-600 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest font-medium">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent" />
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes cardFlip {
          0%   { transform: rotateY(0deg); }
          45%  { transform: rotateY(0deg); }
          50%  { transform: rotateY(180deg); }
          95%  { transform: rotateY(180deg); }
          100% { transform: rotateY(360deg); }
        }
      `}</style>
    </section>
  );
}
