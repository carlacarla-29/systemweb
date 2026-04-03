"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const roles = [
  "Web Developer",
  "System Builder",
  "BSIT Student",
  "UI/UX Enthusiast",
];

const skills = [
  { name: "React", color: "bg-amber-500/10 text-amber-300 border-amber-500/30" },
  { name: "Next.js", color: "bg-white/10 text-amber-100 border-white/20" },
  { name: "TypeScript", color: "bg-yellow-500/10 text-yellow-300 border-yellow-500/30" },
  { name: "Tailwind CSS", color: "bg-amber-400/10 text-amber-200 border-amber-400/30" },
  { name: "Node.js", color: "bg-amber-600/10 text-amber-400 border-amber-600/30" },
  { name: "MySQL", color: "bg-orange-400/10 text-orange-300 border-orange-400/30" },
];

const projects = [
  {
    title: "Student Info System",
    description: "A full-stack information management system for tracking student records, grades, and enrollment.",
    tech: ["Next.js", "MySQL", "Tailwind"],
    href: "/projects",
  },
  {
    title: "Portfolio Website",
    description: "This portfolio — built with Next.js 15, Tailwind CSS v4, and shadcn/ui components.",
    tech: ["Next.js", "TypeScript", "shadcn"],
    href: "/projects",
  },
  {
    title: "Web-Based POS",
    description: "Point-of-sale system with inventory tracking, sales reporting, and user role management.",
    tech: ["React", "Node.js", "MySQL"],
    href: "/projects",
  },
];

export default function HomeContent() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 45);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((r) => (r + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url("/kian.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Google Font import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Syne:wght@700;800&display=swap');
        .hero-title { font-family: 'Syne', sans-serif; }
        .glow-dot { animation: pulse-glow 2s ease-in-out infinite; }
        @keyframes pulse-glow {
          0%, 100% { opacity: 1; box-shadow: 0 0 6px 2px #f59e0b; }
          50% { opacity: 0.4; box-shadow: 0 0 2px 1px #f59e0b; }
        }
        .card-hover {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }
        .fade-in { animation: fadeIn 0.7s ease both; }
        .fade-in-1 { animation: fadeIn 0.7s 0.1s ease both; }
        .fade-in-2 { animation: fadeIn 0.7s 0.25s ease both; }
        .fade-in-3 { animation: fadeIn 0.7s 0.4s ease both; }
        .fade-in-4 { animation: fadeIn 0.7s 0.55s ease both; }
        .fade-in-5 { animation: fadeIn 0.7s 0.7s ease both; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.18;
          pointer-events: none;
        }
      `}</style>

      {/* Dark overlay for text legibility over the photo */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.58)", zIndex: 1 }} />
      {/* Warm amber blobs matching city lights */}
      <div className="blob" style={{ width: 500, height: 500, background: "#f59e0b", top: -120, left: -100 }} />
      <div className="blob" style={{ width: 400, height: 400, background: "#d97706", top: 300, right: -80 }} />
      <div className="blob" style={{ width: 300, height: 300, background: "#fbbf24", bottom: 50, left: "40%" }} />

      <div className="relative max-w-5xl mx-auto px-6 py-16" style={{ zIndex: 2 }}>

        {/* ── HERO ── */}
        <section className="mb-24">
          <div className="fade-in mb-3">
            <span
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border"
              style={{ background: "rgba(245,158,11,0.15)", borderColor: "rgba(245,158,11,0.45)", color: "#fcd34d" }}
            >
              <span className="glow-dot w-2 h-2 rounded-full inline-block" style={{ background: "#f59e0b" }} />
              Open to Internship / Freelance
            </span>
          </div>

          <h1 className="hero-title fade-in-1 text-5xl sm:text-7xl font-extrabold leading-tight mb-4" style={{ color: "#f1f5f9" }}>
            Hi, I'm{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #f59e0b, #fcd34d)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Carl
            </span>
          </h1>

          <div className="fade-in-2 flex items-center gap-2 text-xl sm:text-2xl font-medium mb-6" style={{ color: "#94a3b8" }}>
            <span style={{ color: "#e2e8f0" }}>{displayed}</span>
            <span
              className="w-0.5 h-6 inline-block"
              style={{ background: "#f59e0b", animation: "blink 1s step-end infinite" }}
            />
            <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
          </div>

          <p className="fade-in-3 text-base sm:text-lg leading-relaxed max-w-xl mb-8" style={{ color: "#94a3b8" }}>
            A BSIT 3rd year student passionate about building clean, functional web apps and information systems.
            I love turning ideas into real, working software.
          </p>

          <div className="fade-in-4 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105 hover:brightness-110"
              style={{ background: "linear-gradient(135deg, #d97706, #f59e0b)", color: "#0a0a0a", fontWeight: 700 }}
            >
              View Projects →
            </Link>
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105"
              style={{ border: "1px solid rgba(245,158,11,0.35)", color: "#fef3c7", background: "rgba(245,158,11,0.07)" }}
            >
              Contact Me
            </Link>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section className="fade-in-5 mb-24">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#475569" }}>
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s.name}
                className={`px-3 py-1 rounded-full text-xs font-medium border ${s.color}`}
              >
                {s.name}
              </span>
            ))}
          </div>
        </section>

        {/* ── FEATURED PROJECTS ── */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#475569" }}>
              Featured Projects
            </p>
            <Link href="/projects" className="text-xs font-medium hover:underline" style={{ color: "#f59e0b" }}>
              See all →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {projects.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="card-hover block rounded-2xl p-5"
                style={{ background: "rgba(10,8,4,0.6)", border: "1px solid rgba(245,158,11,0.18)" }}
              >
                <h3 className="font-semibold mb-2 text-sm" style={{ color: "#f1f5f9", fontFamily: "'Syne', sans-serif" }}>
                  {p.title}
                </h3>
                <p className="text-xs leading-relaxed mb-4" style={{ color: "#64748b" }}>
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-xs"
                      style={{ background: "rgba(245,158,11,0.15)", color: "#fcd34d" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
