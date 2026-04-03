const timeline = [
  {
    year: "2026 – Present",
    title: "BS Information Technology",
    place: "3rd Year Student",
    desc: "Focusing on web systems, database management, and software engineering principles.",
  },
  {
    year: "2025",
    title: "Web-Based Projects",
    place: "Personal & Academic",
    desc: "Built multiple full-stack applications using Next.js, React, Node.js, and MySQL.",
  },
  {
    year: "2023",
    title: "Started Coding Journey",
    place: "Self-taught + University",
    desc: "Fell in love with building things for the web. Started with HTML/CSS, moved to React fast.",
  },
];

const values = [
  {
    icon: "⚡",
    label: "Fast Learner",
    desc: "I pick up new technologies quickly and enjoy the process.",
  },
  {
    icon: "🛠",
    label: "Builder Mindset",
    desc: "I prefer learning by building real, working things.",
  },
  {
    icon: "🎯",
    label: "Detail-Oriented",
    desc: "I care about clean code and polished user experience.",
  },
  {
    icon: "🤝",
    label: "Team Player",
    desc: "Comfortable collaborating in group projects and pair programming.",
  },
];

export default function AboutPage() {
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
        .blob-a {
          position: absolute; border-radius: 50%; filter: blur(80px);
          opacity: 0.14; pointer-events: none;
        }
        .fade-in { animation: fadeUp 0.6s ease both; }
        .fade-in-1 { animation: fadeUp 0.6s 0.1s ease both; }
        .fade-in-2 { animation: fadeUp 0.6s 0.2s ease both; }
        .fade-in-3 { animation: fadeUp 0.6s 0.3s ease both; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .val-card:hover { transform: translateY(-3px); }
        .val-card { transition: transform 0.2s ease; }
      `}</style>

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.58)",
          zIndex: 1,
        }}
      />
      {/* Warm blobs */}
      <div
        className="blob-a"
        style={{
          width: 420,
          height: 420,
          background: "#f59e0b",
          top: -60,
          right: -100,
        }}
      />
      <div
        className="blob-a"
        style={{
          width: 320,
          height: 320,
          background: "#d97706",
          bottom: 80,
          left: -60,
        }}
      />

      <div
        className="relative max-w-5xl mx-auto px-6 py-16"
        style={{ zIndex: 2 }}
      >
        {/* Header */}
        <div className="mb-14">
          <p
            className="fade-in text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#475569" }}
          >
            About Me
          </p>
          <h1
            className="syne fade-in-1 text-5xl sm:text-6xl font-extrabold mb-5"
            style={{ color: "#f1f5f9" }}
          >
            A Bit{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#f59e0b,#fcd34d)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              About Me
            </span>
          </h1>
        <p
  className="fade-in-2 text-base leading-relaxed max-w-2xl"
  style={{ color: "#94a3b8" }}
>
  Hi, <b>I’m <span className="text-white">Carl Ian L. Rapada</span></b>, a 
  <strong className="text-white">third-year BSIT student</strong> at 
  <strong className="text-white">Cordova Public College</strong>. 

  I am passionate about <strong className="text-white">web development</strong> 
  and building <strong className="text-white">functional, user-friendly systems</strong>. 

  I have experience with 
  <strong className="text-white"> HTML, CSS, JavaScript, TypeScript, Next.js, PHP, and MySQL</strong>. 

  I enjoy developing <strong className="text-white">full-stack applications</strong>, 
  including <strong className="text-white">student systems, hotel booking systems, and portfolio websites</strong>. 

  These projects strengthened my 
  <strong className="text-white">problem-solving</strong>, 
  <strong className="text-white">system design</strong>, and 
  <strong className="text-white">clean coding</strong> skills. 

  As an aspiring <strong className="text-white">software developer</strong>, 
  I continuously learn and improve to build 
  <strong className="text-white">innovative and impactful solutions</strong>.
</p>
        </div>
        {/* Values grid */}
        <div className="fade-in-3 grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {values.map((v) => (
            <div
              key={v.label}
              className="val-card rounded-2xl p-4"
              style={{
                background: "rgba(10,8,4,0.55)",
                border: "1px solid rgba(245,158,11,0.18)",
              }}
            >
              <div className="text-2xl mb-2">{v.icon}</div>
              <p
                className="text-sm font-semibold mb-1"
                style={{ color: "#e2e8f0" }}
              >
                {v.label}
              </p>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "#64748b" }}
              >
                {v.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ color: "#475569" }}
          >
            Timeline
          </p>
          <div className="relative">
            {/* vertical line */}
            <div
              className="absolute left-0 top-0 bottom-0 w-px"
              style={{
                background: "rgba(255,255,255,0.07)",
                marginLeft: "3px",
              }}
            />
            <div className="space-y-8 pl-8">
              {timeline.map((t, i) => (
                <div key={i} className="relative">
                  {/* dot */}
                  <div
                    className="absolute -left-8 top-1 w-2 h-2 rounded-full"
                    style={{
                      background: "linear-gradient(135deg,#f59e0b,#fcd34d)",
                      marginLeft: "-3px",
                    }}
                  />
                  <p className="text-xs mb-1" style={{ color: "#475569" }}>
                    {t.year}
                  </p>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "#e2e8f0" }}
                  >
                    {t.title}
                  </p>
                  <p className="text-xs mb-1" style={{ color: "#f59e0b" }}>
                    {t.place}
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "#64748b" }}
                  >
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
