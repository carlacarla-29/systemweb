const projects = [
  {
    title: "Student Information System",
    description:
      "A full-stack web system for managing student records, enrollment, grades, and course scheduling. Built for academic use with role-based access (admin, faculty, student).",
    tech: ["Next.js", "MySQL", "Tailwind CSS", "TypeScript"],
    status: "Completed",
    type: "Academic",
  },
  {
    title: "Portfolio Website",
    description:
      "This portfolio — a clean, dark-themed personal site built with Next.js 15, Tailwind CSS v4, and shadcn/ui. Features smooth animations, typing effects, and responsive layout.",
    tech: ["Next.js", "TypeScript", "shadcn/ui", "Tailwind"],
    status: "Live",
    type: "Personal",
  },
  {
    title: "Web-Based POS System",
    description:
      "Point-of-sale system with real-time inventory tracking, daily/weekly sales reports, and user role management. Designed for small retail businesses.",
    tech: ["React", "Node.js", "Express", "MySQL"],
    status: "Completed",
    type: "Academic",
  },
  {
    title: "Barangay Management System",
    description:
      "A records management system for a local barangay office — handles resident profiles, clearance requests, and document generation.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    status: "Completed",
    type: "Academic",
  },
  {
    title: "Library Borrowing Tracker",
    description:
      "Web app to track book borrowing and returns for a school library. Includes QR scan support, overdue notifications, and inventory dashboard.",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    status: "In Progress",
    type: "Personal",
  },
];

const statusColor: Record<string, string> = {
  Live: "bg-green-500/10 text-green-400 border-green-500/30",
  Completed: "bg-amber-500/10 text-amber-300 border-amber-500/30",
  "In Progress": "bg-orange-500/10 text-orange-300 border-orange-500/30",
};

export default function Projects() {
  return (
    <div
      className="relative overflow-hidden min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/kian.jpg')",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');
        .syne { font-family: 'Syne', sans-serif; }
        .blob-p {
          position: absolute; border-radius: 50%; filter: blur(90px);
          opacity: 0.13; pointer-events: none;
        }
        .proj-card { transition: transform 0.22s ease, box-shadow 0.22s ease; }
        .proj-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 24px 48px rgba(0,0,0,0.45);
        }
        .fade-in { animation: fadeUp 0.6s ease both; }
        .fade-in-1 { animation: fadeUp 0.6s 0.1s ease both; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Dark overlay */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.58)", zIndex: 1 }} />
      <div
        className="blob-p"
        style={{
          width: 500,
          height: 500,
          background: "#f59e0b",
          top: -80,
          left: -120,
        }}
      />
      <div
        className="blob-p"
        style={{
          width: 350,
          height: 350,
          background: "#d97706",
          bottom: 0,
          right: -80,
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 py-16" style={{ zIndex: 2 }}>
        <div className="mb-12">
          <p
            className="fade-in text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#475569" }}
          >
            My Work
          </p>
          <h1
            className="syne fade-in-1 text-5xl sm:text-6xl font-extrabold"
            style={{ color: "#f1f5f9" }}
          >
            Projects I've{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#f59e0b,#fcd34d)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              built
            </span>
          </h1>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.title}
              className="proj-card rounded-2xl p-5 flex flex-col"
              style={{
                background: "rgba(10,8,4,0.6)",
                border: "1px solid rgba(245,158,11,0.18)",
              }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-2 mb-3">
                <span
                  className="text-xs px-2 py-0.5 rounded"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    color: "#475569",
                  }}
                >
                  {p.type}
                </span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full border ${statusColor[p.status]}`}
                >
                  {p.status}
                </span>
              </div>

              <h3
                className="syne text-sm font-bold mb-2"
                style={{ color: "#f1f5f9" }}
              >
                {p.title}
              </h3>
              <p
                className="text-xs leading-relaxed flex-1 mb-4"
                style={{ color: "#64748b" }}
              >
                {p.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded"
                    style={{
                      background: "rgba(245,158,11,0.15)",
                      color: "#fcd34d",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
