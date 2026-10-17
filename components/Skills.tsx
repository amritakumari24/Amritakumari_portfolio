"use client";
import {
  SiReact, SiPython, SiFlask, SiNodedotjs, SiExpress, SiJavascript,
  SiHtml5, SiCss, SiTypescript, SiFastapi, SiVite,
  SiMongodb, SiGit, SiPostman, SiVscodium, SiDocker,
  SiRender, SiExpo, SiAndroid,
} from "react-icons/si";
import { FaBrain, FaRobot, FaMobile, FaCloud, FaTools, FaCode, FaAws } from "react-icons/fa";
import { VscTerminalBash } from "react-icons/vsc";

import type { IconType } from "react-icons";

type SkillItem = { name: string; Icon: IconType; color: string };

const SKILLS: {
  title: string;
  category: string;
  HeaderIcon: IconType;
  gradient: string;
  glow: string;
  items: SkillItem[];
}[] = [
    {
      title: "AI/ML & Generative AI",
      category: "AI",
      HeaderIcon: FaBrain,
      gradient: "from-violet-500 to-purple-600",
      glow: "shadow-violet-900/30",
      items: [
        { name: "Generative AI", Icon: FaRobot, color: "text-violet-400" },
        { name: "Claude API", Icon: FaBrain, color: "text-purple-400" },
        { name: "Codex", Icon: FaRobot, color: "text-indigo-400" },
        { name: "Groq API", Icon: FaBrain, color: "text-violet-300" },
      ],
    },
    {
      title: "Frontend Development",
      category: "FE",
      HeaderIcon: FaCode,
      gradient: "from-blue-500 to-cyan-500",
      glow: "shadow-blue-900/30",
      items: [
        { name: "React.js", Icon: SiReact, color: "text-cyan-400" },
        { name: "JavaScript", Icon: SiJavascript, color: "text-yellow-400" },
        { name: "TypeScript", Icon: SiTypescript, color: "text-blue-400" },
        { name: "HTML5", Icon: SiHtml5, color: "text-orange-400" },
        { name: "CSS3", Icon: SiCss, color: "text-blue-300" },
        { name: "Vite", Icon: SiVite, color: "text-purple-400" },
      ],
    },
    {
      title: "Backend & APIs",
      category: "BE",
      HeaderIcon: VscTerminalBash,
      gradient: "from-emerald-500 to-teal-500",
      glow: "shadow-emerald-900/30",
      items: [
        { name: "Python", Icon: SiPython, color: "text-yellow-400" },
        { name: "Flask", Icon: SiFlask, color: "text-white" },
        { name: "Node.js", Icon: SiNodedotjs, color: "text-green-400" },
        { name: "Express.js", Icon: SiExpress, color: "text-zinc-300" },
        { name: "FastAPI", Icon: SiFastapi, color: "text-teal-400" },
      ],
    },
    {
      title: "Mobile Development",
      category: "Mobile",
      HeaderIcon: FaMobile,
      gradient: "from-orange-500 to-amber-500",
      glow: "shadow-orange-900/30",
      items: [
        { name: "React Native", Icon: SiReact, color: "text-cyan-400" },
        { name: "Expo", Icon: SiExpo, color: "text-white" },
        { name: "Android Studio", Icon: SiAndroid, color: "text-green-400" },
      ],
    },
    {
      title: "Cloud & DevOps",
      category: "Cloud",
      HeaderIcon: FaCloud,
      gradient: "from-sky-500 to-indigo-500",
      glow: "shadow-sky-900/30",
      items: [
        { name: "AWS EC2", Icon: FaAws, color: "text-orange-400" },
        { name: "AWS S3", Icon: FaAws, color: "text-orange-300" },
        { name: "CloudFront", Icon: FaAws, color: "text-yellow-400" },
        { name: "Render", Icon: SiRender, color: "text-indigo-400" },
        { name: "Docker", Icon: SiDocker, color: "text-sky-400" },
      ],
    },
    {
      title: "Tools & Databases",
      category: "Tools",
      HeaderIcon: FaTools,
      gradient: "from-rose-500 to-pink-500",
      glow: "shadow-rose-900/30",
      items: [
        { name: "MongoDB", Icon: SiMongodb, color: "text-green-400" },
        { name: "Git", Icon: SiGit, color: "text-orange-400" },
        { name: "Postman", Icon: SiPostman, color: "text-orange-500" },
        { name: "VS Code", Icon: SiVscodium, color: "text-blue-400" },
      ],
    },
  ];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 bg-zinc-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 section-fade">
          <p className="text-violet-400 text-xs font-mono tracking-[0.3em] uppercase mb-4">
            What I bring to the table
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-6">
            Skills &amp; <span className="gradient-text-violet">Expertise</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            A versatile stack spanning AI, frontend, backend, mobile, and cloud — built through real-world projects.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((skill, idx) => {
            const HeaderIcon = skill.HeaderIcon;
            return (
              <div
                key={skill.title}
                className="section-fade group relative rounded-2xl glass glass-hover p-6 overflow-hidden cursor-default"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                {/* Hover glow */}
                <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />

                {/* Card header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${skill.gradient} shadow-lg ${skill.glow} group-hover:scale-110 transition-transform duration-300`}>
                    <HeaderIcon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-base leading-tight">{skill.title}</h3>
                </div>

                {/* Skill items with real icons */}
                <div className="grid grid-cols-2 gap-2">
                  {skill.items.map(({ name, Icon, color }) => (
                    <div
                      key={name}
                      className="flex items-center gap-2 px-2.5 py-2 rounded-xl bg-white/5 border border-white/8 group-hover:border-white/15 transition-all hover:bg-white/10 hover:scale-[1.03]"
                    >
                      <Icon className={`w-4 h-4 flex-shrink-0 ${color}`} />
                      <span className="text-zinc-300 text-xs font-medium truncate">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

