"use client";
import Image from "next/image";
import { Award, GraduationCap, Trophy, BookOpen, Calendar, ExternalLink, X } from "lucide-react";
import { useState } from "react";

const CERTS = [
  {
    title: "Introducing Generative AI with AWS",
    issuer: "Udacity",
    date: "Aug 2025",
    img: "/certs/cert-aws.png",
    accent: "from-orange-500 to-amber-500",
    border: "border-orange-500/20",
    link: "https://www.udacity.com/certificate/e/c97213ce-595a-11f0-9dee-f7d1ca465723",
  },
  {
    title: "Version Control",
    issuer: "Meta",
    date: "Jan 2025",
    img: "/certs/cert-meta.png",
    accent: "from-blue-500 to-indigo-500",
    border: "border-blue-500/20",
    link: "https://www.coursera.org/account/accomplishments/verify/TBPAYCA6JPPE",
  },
  {
    title: "Introduction to Docker",
    issuer: "Google Cloud",
    date: "Jul 2026",
    img: "/certs/cert-docker.png",
    accent: "from-cyan-500 to-sky-500",
    border: "border-cyan-500/20",
    link: "https://www.coursera.org/account/accomplishments/verify/BO5XM3UNS3GW",
  },
  {
    title: "Introduction to Git and GitHub",
    issuer: "Google",
    date: "Feb 2025",
    img: "/certs/cert-git.png",
    accent: "from-emerald-500 to-teal-500",
    border: "border-emerald-500/20",
    link: "https://www.coursera.org/account/accomplishments/verify/09D3PAUW5L09",
  },
];

const EDUCATION = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Eternal University, Baru Sahib",
    period: "2024 — Present",
    grade: "GPA: 9.08",
    icon: GraduationCap,
    color: "from-violet-500 to-indigo-600",
  },
  {
    degree: "Higher Secondary (12th Standard)",
    school: "SAGES Banki Mongra, Korba, CG",
    period: "2021 — 2022",
    grade: "90%",
    icon: BookOpen,
    color: "from-blue-500 to-cyan-500",
  },
  {
    degree: "Secondary School (10th Standard)",
    school: "GHHS Mongra, Korba, CG",
    period: "2019 — 2020",
    grade: "95%",
    icon: BookOpen,
    color: "from-emerald-500 to-teal-500",
  },
];

const AWARDS = [
  {
    title: "Certificate for Excellence",
    org: "Eternal University",
    date: "Nov 2025",
    desc: "Recognized for outstanding performance in the NavGurukul Program.",
    icon: Trophy,
    color: "from-amber-500 to-yellow-500",
  },
  {
    title: "Volunteer Teacher",
    org: "Akal Academy, Baru Sahib",
    date: "Nov 2024",
    desc: "Conducted an engaging one-day teaching session for 2nd-grade students.",
    icon: Award,
    color: "from-rose-500 to-pink-500",
  },
];

export default function Certifications() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="certifications" className="relative py-28 bg-zinc-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="relative max-w-2xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox}
              alt="Certificate"
              width={800}
              height={800}
              className="w-full h-auto rounded-2xl shadow-2xl object-contain"
            />
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 section-fade">
          <p className="text-violet-400 text-xs font-mono tracking-[0.3em] uppercase mb-4">
            Learning &amp; Achievements
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-6">
            Certifications &amp; <span className="gradient-text">Education</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Continuous learning through prestigious certifications and exceptional academic performance.
          </p>
        </div>

        {/* ── Certificate Image Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20 section-fade">
          {CERTS.map((cert, idx) => (
            <div
              key={cert.title}
              className={`group relative rounded-2xl border ${cert.border} bg-zinc-900/60 overflow-hidden cursor-pointer hover:scale-[1.02] transition-all duration-300`}
              style={{ transitionDelay: `${idx * 70}ms` }}
              onClick={() => setLightbox(cert.img)}
            >
              {/* Certificate image */}
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src={cert.img}
                  alt={cert.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </div>
                {/* Top gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.accent}`} />
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="text-white font-semibold text-sm leading-snug mb-1 line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-zinc-500 text-xs font-medium">{cert.issuer}</p>
                <div className="flex items-center justify-between mt-1.5">
                  <div className="flex items-center gap-1.5 text-zinc-600 text-xs">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 text-[10px] font-medium text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Verify
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Education + Awards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Education */}
          <div className="lg:col-span-2 section-fade">
            <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-violet-400" /> Education
            </h3>
            <div className="space-y-4">
              {EDUCATION.map((edu, idx) => {
                const Icon = edu.icon;
                return (
                  <div
                    key={edu.degree}
                    className="group flex gap-4 rounded-2xl glass glass-hover p-5"
                    style={{ transitionDelay: `${idx * 80}ms` }}
                  >
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">{edu.degree}</h4>
                      <p className="text-zinc-400 text-xs mt-0.5">{edu.school}</p>
                      <div className="flex flex-wrap items-center gap-3 mt-2">
                        <span className="flex items-center gap-1 text-zinc-500 text-xs">
                          <Calendar className="w-3 h-3" /> {edu.period}
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-white/5 text-zinc-400 text-xs font-semibold">
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Awards */}
          <div className="section-fade" style={{ transitionDelay: "100ms" }}>
            <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-400" /> Awards &amp; Volunteering
            </h3>
            <div className="space-y-4">
              {AWARDS.map((award) => {
                const Icon = award.icon;
                return (
                  <div key={award.title} className="group rounded-2xl glass glass-hover p-5 relative overflow-hidden">
                    <div className={`absolute -top-6 -right-6 w-20 h-20 rounded-full bg-gradient-to-br ${award.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity`} />
                    <div className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br ${award.color} flex items-center justify-center shadow-md`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm">{award.title}</h4>
                        <p className="text-zinc-500 text-xs mt-0.5 font-medium">{award.org}</p>
                        <p className="text-zinc-400 text-xs mt-2 leading-relaxed">{award.desc}</p>
                        <div className="flex items-center gap-1 mt-2 text-zinc-600 text-xs">
                          <Calendar className="w-3 h-3" /> {award.date}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
