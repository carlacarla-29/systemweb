"use client";

import { useState } from "react";

const socials = [
  { label: "GitHub", icon: "⌥", href: "https://github.com/carlacarla-29", desc: "Check out my repositories" },
  { label: "Facebook", icon: "in", href: "https://www.facebook.com/profile.php?id=61585201757209", desc: "Connect with me professionally" },
  { label: "Email", icon: "@", href: "kianrapada4@email.com", desc: "kianrapada4@gmail.com" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Replace with your actual form handler / EmailJS / etc.
    setSent(true);
  }

  return (
 <div
      className="relative overflow-hidden min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/kian.jpg')",
      }}
    >      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');
        .syne { font-family: 'Syne', sans-serif; }
        .blob-c {
          position: absolute; border-radius: 50%; filter: blur(90px);
          opacity: 0.13; pointer-events: none;
        }
        .fade-in  { animation: fadeUp 0.6s ease both; }
        .fade-in-1{ animation: fadeUp 0.6s 0.1s ease both; }
        .fade-in-2{ animation: fadeUp 0.6s 0.2s ease both; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .field {
          width: 100%;
          background-image: ;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          padding: 10px 14px;
          color: #e2e8f0;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s;
        }
        .field::placeholder { color: #334155; }
        .field:focus { border-color: rgba(245,158,11,0.6); }
        .social-card { transition: transform 0.2s ease, background 0.2s ease; }
        .social-card:hover { transform: translateY(-2px); background: rgba(245,158,11,0.12) !important; }
      `}</style>

      {/* Dark overlay */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.58)", zIndex: 1 }} />
      <div className="blob-c" style={{ width: 450, height: 450, background: "#f59e0b", top: -80, right: -100 }} />
      <div className="blob-c" style={{ width: 300, height: 300, background: "#d97706", bottom: 60, left: -60 }} />

      <div className="relative max-w-5xl mx-auto px-6 py-16" style={{ zIndex: 2 }}>

        {/* Heading */}
        <div className="mb-12">
          <p className="fade-in text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#475569" }}>
            Get In Touch
          </p>
          <h1 className="syne fade-in-1 text-5xl sm:text-6xl font-extrabold" style={{ color: "#f1f5f9" }}>
            Let's{" "}
            <span style={{ background: "linear-gradient(90deg,#f59e0b,#fcd34d)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              connect
            </span>
          </h1>
          <p className="fade-in-2 mt-3 text-sm" style={{ color: "#64748b", maxWidth: 480 }}>
            Have a project in mind, want to collaborate, or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">

          {/* Contact Form */}
          <div
            className="fade-in-2 rounded-2xl p-6"
            style={{ background: "rgba(10,8,4,0.6)", border: "1px solid rgba(245,158,11,0.18)" }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="text-4xl mb-3"></div>
                <p className="syne text-lg font-bold mb-1" style={{ color: "#f1f5f9" }}>Message sent!</p>
                <p className="text-sm" style={{ color: "#64748b" }}>I'll get back to you as soon as I can.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "#94a3b8" }}>Name</label>
                  <input
                    className="field"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "#94a3b8" }}>Email</label>
                  <input
                    className="field"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "#94a3b8" }}>Message</label>
                  <textarea
                    className="field"
                    name="message"
                    rows={5}
                    placeholder="What's on your mind?"
                    value={form.message}
                    onChange={handleChange}
                    required
                    style={{ resize: "none" }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:brightness-110 hover:scale-[1.01]"
                  style={{ background: "linear-gradient(135deg, #d97706, #f59e0b)", color: "#0a0a0a", fontWeight: 700 }}
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>

          {/* Socials */}
          <div className="fade-in-2 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#475569" }}>
              Find me on
            </p>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card flex items-center gap-4 rounded-xl p-4"
                style={{ background: "rgba(10,8,4,0.55)", border: "1px solid rgba(245,158,11,0.18)", textDecoration: "none" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ background: "rgba(245,158,11,0.2)", color: "#f59e0b" }}
                >
                  {s.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "#e2e8f0" }}>{s.label}</p>
                  <p className="text-xs" style={{ color: "#475569" }}>{s.desc}</p>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
