"use client";
import { Briefcase, Calendar, MapPin, ArrowUpRight, CheckCircle2 } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Frontend Developer Intern",
    company: "SetuMesh",
    period: "Jan 2026 — May 2026",
    location: "Remote",
    color: "from-violet-500 to-indigo-600",
    accent: "violet",
    highlights: [
      "Analyzed end-to-end system requirements and validated cross-platform responsive interface code, ensuring code quality compliance across development cycles.",
      "Executed frontend scripts in local dev environments using Git and ngrok, inspecting component lifecycles, debugging workflows, and documenting technical processes for team reuse.",
      "Collaborated closely with engineering teammates to resolve system inconsistencies and maintain clean, scalable code structures.",
    ],
    tech: ["React.js", "Git", "ngrok", "Responsive UI", "Debugging"],
    certLink: "https://drive.google.com/file/d/1IwjQl13sbRW7UEYEqNpixInBwxJ1xn7U/view",
  },
  {
    role: "React Developer Trainee",
    company: "NavGurukul Bootcamp",
    period: "Sep 2025 — Jan 2026",
    location: "Baru Sahib, India",
    color: "from-emerald-500 to-teal-600",
    accent: "emerald",
    highlights: [
      "Built modular React.js components utilizing efficient algorithms and state management techniques for dynamic rendering.",
      "Reviewed and optimized system logic across sprint cycles to adhere to strict coding standards and maintain consistent UI performance.",
    ],
    tech: ["React.js", "State Management", "Component Architecture", "Agile Sprints"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 bg-zinc-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 section-fade">
          <p className="text-violet-400 text-xs font-mono tracking-[0.3em] uppercase mb-4">
            Professional Journey
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Hands-on experience building production-grade frontends, debugging complex systems, and collaborating in agile engineering teams.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-white/10 to-transparent hidden md:block" />

          <div className="space-y-10">
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={exp.company}
                className="section-fade relative md:pl-20 group"
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-3.5 top-8 w-5 h-5 rounded-full bg-gradient-to-br ${exp.color} hidden md:flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform`}>
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                {/* Card */}
                <div className="relative rounded-2xl glass glass-hover p-8 overflow-hidden group-hover:glow-violet transition-all duration-300">
                  {/* Top gradient bar */}
                  <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${exp.color} opacity-60`} />
                  {/* Glow blob */}
                  <div className={`absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`} />

                  <div className="relative z-10">
                    {/* Role & Company */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <div className={`p-2 rounded-xl bg-gradient-to-br ${exp.color} shadow-md`}>
                            <Briefcase className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        </div>
                        <div className="ml-11">
                          <p className="text-zinc-300 font-semibold text-lg">{exp.company}</p>
                          <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-zinc-500">
                            <span className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5" />
                              {exp.period}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <MapPin className="w-3.5 h-3.5" />
                              {exp.location}
                            </span>
                            {exp.certLink && (
                              <a
                                href={exp.certLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-violet-400 hover:text-violet-300 transition-colors"
                              >
                                <ArrowUpRight className="w-3.5 h-3.5" />
                                View Certificate
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-3 mb-6">
                      {exp.highlights.map((point, i) => (
                        <li key={i} className="flex gap-3">
                          <CheckCircle2 className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" />
                          <span className="text-zinc-400 text-sm leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className={`px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-zinc-400 text-xs font-medium`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
