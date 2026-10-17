"use client";
import { Mail, Phone, MapPin, GitBranch, Link2, Send, ArrowUpRight, MessageCircle } from "lucide-react";

const LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: "amritakumari24@navgurukul.org",
    href: "mailto:amritakumari24@navgurukul.org",
    id: "contact-email",
    color: "from-violet-500 to-indigo-600",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-8823818640",
    href: "tel:+918823818640",
    id: "contact-phone",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Korba, Chhattisgarh, India",
    href: "https://maps.google.com/?q=Korba,Chhattisgarh",
    id: "contact-location",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: GitBranch,
    label: "GitHub",
    value: "github.com/amritakumari",
    href: "https://github.com",
    id: "contact-github",
    color: "from-zinc-400 to-zinc-600",
  },
  {
    icon: Link2,
    label: "LinkedIn",
    value: "linkedin.com/in/amritakumari",
    href: "https://linkedin.com",
    id: "contact-linkedin",
    color: "from-blue-500 to-cyan-500",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 bg-zinc-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-violet-600/8 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 section-fade">
          <p className="text-violet-400 text-xs font-mono tracking-[0.3em] uppercase mb-4">
            Let&apos;s build together
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-6">
            Get In <span className="gradient-text-violet">Touch</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            I&apos;m actively looking for new opportunities. Whether you have a project in mind, want to collaborate, or just want to connect — my inbox is always open!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* ── Left: CTA card ── */}
          <div className="lg:col-span-2 section-fade">
            <div className="relative rounded-3xl overflow-hidden p-8 bg-gradient-to-br from-violet-600/20 to-indigo-600/10 border border-violet-500/20">
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-violet-500/15 blur-3xl" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-violet-600 flex items-center justify-center mb-6 shadow-lg shadow-violet-900/40">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-white font-black text-2xl mb-3">Let&apos;s Chat!</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                  I&apos;m a Full Stack &amp; AI Engineer with a passion for building impactful products. Currently pursuing my BCA (GPA 9.08) while working on real-world projects. Open to internships, freelance, and full-time roles.
                </p>

                <div className="space-y-2 mb-8">
                  {[
                    "React Native & React.js development",
                    "Python / Flask backend APIs",
                    "AI/ML & Generative AI integration",
                    "Full stack web & mobile apps",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-zinc-400 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>

                <a
                  href="mailto:amritakumari24@navgurukul.org"
                  id="contact-cta-email"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-violet-900/40 w-full justify-center"
                >
                  <Send className="w-4 h-4" />
                  Send me an Email
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>

          {/* ── Right: Contact links ── */}
          <div className="lg:col-span-3 section-fade" style={{ transitionDelay: "100ms" }}>
            <div className="space-y-3">
              {LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    id={link.id}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 p-5 rounded-2xl glass glass-hover transition-all"
                  >
                    <div className={`flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-0.5">
                        {link.label}
                      </p>
                      <p className="text-white font-medium text-sm truncate">{link.value}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
