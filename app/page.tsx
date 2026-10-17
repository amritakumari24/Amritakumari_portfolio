"use client";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HeroGlassmorphism from "@/components/ui/glassmorphism-trust-hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  // Scroll reveal — attach IntersectionObserver after mount
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );

    // Observe all .section-fade elements
    const elements = document.querySelectorAll(".section-fade");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-zinc-950 overflow-x-hidden">
      <Navbar />

      {/* ── 1. Hero ── */}
      <HeroSection />

      {/* ── 2. Glassmorphism Trust Hero (required component) ── */}
      <section id="about" className="relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-center mb-6 section-fade">
            <p className="text-violet-400 text-xs font-mono tracking-[0.3em] uppercase">
              About Me
            </p>
          </div>
        </div>
        <HeroGlassmorphism />
      </section>

      {/* ── 3. Skills ── */}
      <Skills />

      {/* ── 4. Experience ── */}
      <Experience />

      {/* ── 5. Projects ── */}
      <Projects />

      {/* ── 6. Certifications, Education & Awards ── */}
      <Certifications />

      {/* ── 7. Contact ── */}
      <Contact />

      {/* ── Footer ── */}
      <Footer />
    </main>
  );
}
