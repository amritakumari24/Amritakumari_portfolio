"use client";
import { ArrowUpRight, Bot, Building2, ExternalLink, GitBranch, HeartPulse } from "lucide-react";

const PROJECTS = [
  {
    title: "AI-Assisted Leave Management System",
    icon: Building2,
    description:
      "Developed RESTful backend APIs using Python/Flask and Express.js, implementing custom DSA logic for evaluation accuracy and automated processing. Validated database operations and secure JWT authentication while maintaining structured documentation for deployment.",
    tech: ["Python", "Flask", "Express.js", "JWT", "REST APIs", "DSA", "MongoDB"],
    color: "from-violet-600 to-indigo-600",
    glow: "rgba(139,92,246,0.12)",
    link: undefined,
    github: "https://github.com/amritakumari24/LeaveManagementSystem",
    featured: true,
  },
  {
    title: "Healthcare Appointment & Records Portal",
    icon: HeartPulse,
    description:
      "Built responsive patient routing and lazy-loading components designed for efficient client-side data handling and caching. Managed cross-component application state to eliminate data mismatches during core booking workflows.",
    tech: ["React.js", "Lazy Loading", "State Management", "REST APIs", "Client-side Caching"],
    color: "from-emerald-500 to-teal-600",
    glow: "rgba(16,185,129,0.10)",
    link: undefined,
    github: "https://github.com/amritakumari24/healthcareportal",
    featured: true,
  },
  {
    title: "KidChatBot — AI Learning Assistant",
    icon: Bot,
    description:
      "Developed KidChatBot, a child-friendly AI learning assistant using React, Vite, FastAPI, and the Groq API to deliver short, age-appropriate answers with Markdown rendering. Implemented voice interaction using the Web Speech API — speech recognition, text-to-speech, pause/stop controls, and animated bunny responses. Built a responsive UI with light/dark themes, browser-persisted chat history, question tracking, a 20-question conversation limit, and accessible focus states.",
    tech: ["React", "Vite", "FastAPI", "Groq API", "Web Speech API", "Markdown", "AI/ML"],
    color: "from-orange-500 to-amber-500",
    glow: "rgba(251,146,60,0.10)",
    link: "https://kidchatbot-frontend.onrender.com/",
    github: "https://github.com/amritakumari24/kidchatbot",
    featured: true,
    badge: "Present",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 bg-zinc-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-violet-600/5 blur-[120px]" />
        <div className="absolute bottom-1/3 left-0 w-80 h-80 rounded-full bg-indigo-600/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 section-fade">
          <p className="text-violet-400 text-xs font-mono tracking-[0.3em] uppercase mb-4">
            What I&apos;ve built
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-6">
            Featured <span className="gradient-text-violet">Projects</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Real-world applications spanning AI chatbots, healthcare portals, and enterprise management systems — each built with production best practices.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-8">
          {PROJECTS.map((project, idx) => (
            <div
              key={project.title}
              className="section-fade group relative rounded-3xl glass overflow-hidden"
              style={{
                boxShadow: `0 0 60px ${project.glow}`,
                transitionDelay: `${idx * 100}ms`,
              }}
            >
              {/* Top bar */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.color} opacity-70`} />

              <div className="p-8 md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left */}
                  <div className="lg:col-span-8">
                    {/* Title row */}
                    <div className="flex flex-wrap items-start gap-3 mb-4">
                      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${project.color} shadow-lg`}>
                        <project.icon className="h-5 w-5 text-white" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="text-xl md:text-2xl font-black text-white">
                            {project.title}
                          </h3>
                          {project.badge && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-500/15 border border-green-500/30 text-green-400 text-[10px] font-semibold uppercase tracking-wider">
                              <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                              </span>
                              {project.badge}
                            </span>
                          )}
                          {project.featured && (
                            <span className="px-2.5 py-0.5 rounded-full bg-violet-500/15 border border-violet-500/30 text-violet-300 text-[10px] font-semibold uppercase tracking-wider">
                              Featured
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <p className="text-zinc-400 leading-relaxed mb-6">{project.description}</p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-zinc-400 text-xs font-medium hover:text-white hover:border-white/20 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: action buttons */}
                  <div className="lg:col-span-4 flex flex-col gap-3">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        id={`project-live-${idx}`}
                        className={`group/btn flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${project.color} text-white font-semibold text-sm transition-all hover:scale-[1.03] active:scale-[0.97] shadow-lg`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`project-github-${idx}`}
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-all"
                    >
                      <GitBranch className="w-4 h-4" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
