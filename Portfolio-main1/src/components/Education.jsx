

// import { useEffect, useRef, useState } from "react";
// import { SectionWrapper } from "../hoc";

// const educationData = [
//   {
//     period: "2023 — Present",
//     degree: "B.Tech — Electronics & Communication Engineering",
//     school: "Birla Institute of Technology, Mesra · Ranchi, Jharkhand",
//     score: "CGPA: 8.58 / 10",
//     status: "ongoing",
//   },
//   {
//     period: "2022",
//     degree: "Intermediate (Class XII) — CBSE",
//     school: "Sharda Global School · Ranchi, Jharkhand",
//     score: "92.8%",
//     status: "completed",
//   },
//   {
//     period: "2020",
//     degree: "Matriculation (Class X)",
//     school: "Sharda Global School · Ranchi, Jharkhand",
//     score: "95.8%",
//     status: "completed",
//   },
// ];

// // Build the full code string to type out
// function buildCodeLines(data) {
//   const lines = [];
//   lines.push({ raw: `const education = [`, tokens: [{ t: "kw", v: "const " }, { t: "id", v: "education" }, { t: "pl", v: " = [" }] });
//   data.forEach((edu, i) => {
//     const shortDegree = edu.degree.length > 26 ? edu.degree.slice(0, 26) + "…" : edu.degree;
//     const shortSchool = edu.school.length > 26 ? edu.school.slice(0, 26) + "…" : edu.school;
//     lines.push({ raw: `  {`, tokens: [{ t: "pl", v: "  {" }] });
//     lines.push({ raw: `    period: "${edu.period}",`, tokens: [{ t: "pl", v: "    " }, { t: "prop", v: "period" }, { t: "pl", v: ': ' }, { t: "str", v: `"${edu.period}"` }, { t: "pl", v: "," }] });
//     lines.push({ raw: `    degree: "${shortDegree}",`, tokens: [{ t: "pl", v: "    " }, { t: "prop", v: "degree" }, { t: "pl", v: ': ' }, { t: "str", v: `"${shortDegree}"` }, { t: "pl", v: "," }] });
//     lines.push({ raw: `    school: "${shortSchool}",`, tokens: [{ t: "pl", v: "    " }, { t: "prop", v: "school" }, { t: "pl", v: ': ' }, { t: "str", v: `"${shortSchool}"` }, { t: "pl", v: "," }] });
//     lines.push({ raw: `    score: "${edu.score}",`, tokens: [{ t: "pl", v: "    " }, { t: "prop", v: "score" }, { t: "pl", v: ': ' }, { t: "score", v: `"${edu.score}"` }, { t: "pl", v: "," }] });
//     lines.push({ raw: `    status: "${edu.status}",`, tokens: [{ t: "pl", v: "    " }, { t: "prop", v: "status" }, { t: "pl", v: ': ' }, { t: edu.status === "ongoing" ? "green" : "purple", v: `"${edu.status}"` }, { t: "pl", v: "," }] });
//     lines.push({ raw: i < data.length - 1 ? `  },` : `  }`, tokens: [{ t: "pl", v: i < data.length - 1 ? "  }," : "  }" }] });
//   });
//   lines.push({ raw: `];`, tokens: [{ t: "pl", v: "];" }] });
//   lines.push({ raw: ``, tokens: [] });
//   lines.push({ raw: `export default Education;`, tokens: [{ t: "kw", v: "export default " }, { t: "score", v: "Education" }, { t: "pl", v: ";" }] });
//   return lines;
// }

// const TOKEN_COLORS = {
//   kw: "#cba6f7",
//   id: "#89b4fa",
//   prop: "#89dceb",
//   str: "#a6e3a1",
//   score: "#f9e2af",
//   pl: "#cdd6f4",
//   green: "#22c55e",
//   purple: "#8b5cf6",
// };

// const CODE_LINES = buildCodeLines(educationData);
// const FULL_CODE = CODE_LINES.map(l => l.raw).join("\n");

// const Education = () => {
//   const entriesRef = useRef([]);
//   const sectionRef = useRef(null);
//   const [typedChars, setTypedChars] = useState(0);
//   const [started, setStarted] = useState(false);
//   const [showCursor, setShowCursor] = useState(true);
//   const rafRef = useRef(null);

//   // Intersection observer to start typing when section visible
//   useEffect(() => {
//     const cardObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.style.opacity = "1";
//             entry.target.style.transform = "translateY(0)";
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );
//     entriesRef.current.forEach((el) => el && cardObserver.observe(el));

//     const sectionObserver = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !started) setStarted(true);
//       },
//       { threshold: 0.2 }
//     );
//     if (sectionRef.current) sectionObserver.observe(sectionRef.current);

//     return () => {
//       cardObserver.disconnect();
//       sectionObserver.disconnect();
//     };
//   }, [started]);

//   // Typing effect
//   useEffect(() => {
//     if (!started) return;
//     let char = 0;
//     const speed = 18; // ms per char
//     const type = () => {
//       char++;
//       setTypedChars(char);
//       if (char < FULL_CODE.length) {
//         rafRef.current = setTimeout(type, speed);
//       }
//     };
//     rafRef.current = setTimeout(type, 300);
//     return () => clearTimeout(rafRef.current);
//   }, [started]);

//   // Blinking cursor
//   useEffect(() => {
//     const id = setInterval(() => setShowCursor(v => !v), 530);
//     return () => clearInterval(id);
//   }, []);

//   // Render typed lines with syntax highlighting
//   const renderTypedCode = () => {
//     let charsLeft = typedChars;
//     const renderedLines = [];

//     CODE_LINES.forEach((line, li) => {
//       if (charsLeft <= 0) return;
//       const lineRaw = line.raw;
//       const lineChars = Math.min(charsLeft, lineRaw.length);
//       charsLeft -= lineRaw.length + 1; // +1 for \n

//       if (lineRaw.length === 0) {
//         renderedLines.push(<div key={li} style={{ lineHeight: "1.95", fontSize: 12.5 }}>&nbsp;</div>);
//         return;
//       }

//       // Render tokens up to lineChars typed
//       let cursor = 0;
//       const spans = [];
//       for (const tok of line.tokens) {
//         if (cursor >= lineChars) break;
//         const visible = tok.v.slice(0, lineChars - cursor);
//         spans.push(
//           <span key={tok.t + cursor} style={{ color: TOKEN_COLORS[tok.t] || "#cdd6f4" }}>
//             {visible}
//           </span>
//         );
//         cursor += tok.v.length;
//       }

//       // Is cursor on this line?
//       const isCurrentLine = charsLeft >= -lineRaw.length && charsLeft <= 0 && typedChars < FULL_CODE.length;

//       renderedLines.push(
//         <div key={li} style={{ display: "flex", alignItems: "baseline", fontSize: 12.5, lineHeight: "1.95", whiteSpace: "pre" }}>
//           <span style={{ display: "inline-block", width: 26, textAlign: "right", marginRight: 16, color: "#3d4451", userSelect: "none", flexShrink: 0 }}>
//             {li + 1}
//           </span>
//           {spans}
//           {isCurrentLine && (
//             <span style={{
//               display: "inline-block", width: 2, height: "1em",
//               background: showCursor ? "#8b5cf6" : "transparent",
//               marginLeft: 1, verticalAlign: "text-bottom",
//               transition: "background 0.1s",
//             }} />
//           )}
//         </div>
//       );
//     });

//     return renderedLines;
//   };

//   return (
//     <section
//       id="education"
//       ref={sectionRef}
//       style={{
//         background: "#0d0d0f",
//         minHeight: "100vh",
//         // padding: "6rem 1.25rem",
//         // fontFamily: "'Courier New', Courier, monospace",
//         position: "relative",
//         overflow: "hidden",
//         fontWeight:"bold"
//       }}
//     >
//       <style>{`
//         .edu-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 2.5rem;
//           align-items: start;
//         }
//         .edu-code-panel { display: block; }
//         @media (max-width: 768px) {
//           .edu-grid { grid-template-columns: 1fr; }
//           .edu-code-panel { display: none; }
//         }
//       `}</style>

//       {/* Ambient blobs */}
//       <div style={{ position: "absolute", top: "10%", left: "-5%", width: 300, height: 300, background: "radial-gradient(circle, rgba(139,92,246,0.13) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
//       <div style={{ position: "absolute", bottom: "10%", right: "-5%", width: 240, height: 240, background: "radial-gradient(circle, rgba(34,197,94,0.09) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

//       <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>

//         {/* Heading */}
//         <div style={{ marginBottom: "3rem" }}>
//           {/* <p style={{ color: "#6b7280", fontSize: 13, letterSpacing: "0.1em", marginBottom: 6 }}>
//             <span style={{ color: "#8b5cf6" }}>{"// "}</span>section_03
//           </p> */}
//           <h2 style={{ fontSize: "clamp(1.8rem, 5vw, 3.2rem)", fontWeight: 800, color: "#f9fafb", letterSpacing: "-0.02em", fontFamily: "'Courier New', monospace", margin: 0 }}>
//             Education
//           </h2>
//         </div>

//         <div className="edu-grid">

//           {/* ── LEFT: Cards ── */}
//           <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
//             {educationData.map((edu, i) => (
//               <div
//                 key={i}
//                 ref={(el) => (entriesRef.current[i] = el)}
//                 onMouseEnter={e => e.currentTarget.style.background = "rgba(139,92,246,0.09)"}
//                 onMouseLeave={e => e.currentTarget.style.background = "rgba(22,27,34,0.75)"}
//                 style={{
//                   opacity: 0,
//                   transform: "translateY(20px)",
//                   transition: `opacity 0.5s ease ${i * 0.15}s, transform 0.5s ease ${i * 0.15}s, background 0.25s`,
//                   background: "rgba(22,27,34,0.75)",
//                   border: "1px solid rgba(139,92,246,0.15)",
//                   borderLeft: "3px solid",
//                   borderLeftColor: i === 0 ? "#22c55e" : "#8b5cf6",
//                   borderRadius: "0 12px 12px 0",
//                   padding: "1.4rem 1.6rem",
//                   cursor: "default",
//                 }}
//               >
//                 <span style={{
//                   fontFamily: "'Courier New', monospace", fontSize: 11,
//                   color: i === 0 ? "#22c55e" : "#8b5cf6",
//                   background: i === 0 ? "rgba(34,197,94,0.08)" : "rgba(139,92,246,0.1)",
//                   border: `1px solid ${i === 0 ? "rgba(34,197,94,0.2)" : "rgba(139,92,246,0.2)"}`,
//                   padding: "2px 10px", borderRadius: 4, letterSpacing: "0.06em",
//                   display: "inline-block", marginBottom: 10,
//                 }}>{edu.period}</span>

//                 <p style={{ fontSize: "0.97rem", fontWeight: 700, color: "#f9fafb", marginBottom: 5, lineHeight: 1.4, fontFamily: "'Courier New', monospace" }}>{edu.degree}</p>
//                 <p style={{ fontSize: "0.82rem", color: "#6b7280", marginBottom: 12, fontFamily: "system-ui, sans-serif", lineHeight: 1.5 }}>{edu.school}</p>

//                 <span style={{ fontFamily: "'Courier New', monospace", fontSize: 12, color: "#fbbf24", background: "rgba(251,191,36,0.08)", border: "1px solid rgba(251,191,36,0.2)", padding: "3px 10px", borderRadius: 5 }}>{edu.score}</span>
//               </div>
//             ))}
//           </div>

//           {/* ── RIGHT: Typing code editor (desktop only) ── */}
//           <div className="edu-code-panel" style={{
//             background: "#161b22",
//             border: "1px solid rgba(139,92,246,0.22)",
//             borderRadius: 14,
//             overflow: "hidden",
//             boxShadow: "0 0 60px rgba(139,92,246,0.08)",
//             position: "sticky",
//             top: "2rem",
//           }}>
//             {/* Title bar */}
//             <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 18px", background: "#1c2128", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
//               <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57", display: "inline-block" }} />
//               <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e", display: "inline-block" }} />
//               <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840", display: "inline-block" }} />
//               <span style={{ marginLeft: 12, fontSize: 13, color: "#8b9096", letterSpacing: "0.03em" }}>Education.jsx</span>
//               <span style={{ fontSize: 12, color: "#3d4451", marginLeft: 4 }}>— react</span>

//               {/* Typing indicator */}
//               {typedChars < FULL_CODE.length && typedChars > 0 && (
//                 <span style={{ marginLeft: "auto", fontSize: 11, color: "#22c55e", fontFamily: "'Courier New', monospace", letterSpacing: "0.05em" }}>
//                   ● typing...
//                 </span>
//               )}
//               {typedChars >= FULL_CODE.length && (
//                 <span style={{ marginLeft: "auto", fontSize: 11, color: "#8b5cf6", fontFamily: "'Courier New', monospace" }}>
//                   ✓ done
//                 </span>
//               )}
//             </div>

//             {/* Code area */}
//             <div style={{ padding: "1.4rem 1.6rem", overflowX: "auto", minHeight: 490 }}>
//               {started ? renderTypedCode() : (
//                 <div style={{ color: "#3d4451", fontSize: 12.5, lineHeight: "1.95" }}>
//                   <span style={{ color: "#3d4451" }}>// scroll down to load...</span>
//                 </div>
//               )}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };
// export default SectionWrapper(Education,"education");






///////////// updated1///////////////
import { useEffect, useRef, useState } from "react";
import { SectionWrapper } from "../hoc";
import { educationData } from "../constants";

/* ── Syntax token builder ── */
function buildCodeLines(data) {
  const lines = [];
  const push = (raw, tokens) => lines.push({ raw, tokens });

  push(`const education = [`, [
    { t: "kw", v: "const " },
    { t: "id", v: "education" },
    { t: "pl", v: " = [" },
  ]);

  data.forEach((edu, i) => {
    const shortDegree = edu.degree.length > 28 ? edu.degree.slice(0, 28) + "…" : edu.degree;
    const shortSchool = edu.school.length > 28 ? edu.school.slice(0, 28) + "…" : edu.school;
    push(`  {`, [{ t: "pl", v: "  {" }]);
    push(`    period: "${edu.period}",`, [{ t: "pl", v: "    " }, { t: "prop", v: "period" }, { t: "pl", v: ": " }, { t: "str", v: `"${edu.period}"` }, { t: "pl", v: "," }]);
    push(`    degree: "${shortDegree}",`, [{ t: "pl", v: "    " }, { t: "prop", v: "degree" }, { t: "pl", v: ": " }, { t: "str", v: `"${shortDegree}"` }, { t: "pl", v: "," }]);
    push(`    school: "${shortSchool}",`, [{ t: "pl", v: "    " }, { t: "prop", v: "school" }, { t: "pl", v: ": " }, { t: "str", v: `"${shortSchool}"` }, { t: "pl", v: "," }]);
    push(`    score: "${edu.score}",`, [{ t: "pl", v: "    " }, { t: "prop", v: "score" }, { t: "pl", v: ": " }, { t: "score", v: `"${edu.score}"` }, { t: "pl", v: "," }]);
    push(`    status: "${edu.status}",`, [{ t: "pl", v: "    " }, { t: "prop", v: "status" }, { t: "pl", v: ": " }, { t: edu.status === "ongoing" ? "green" : "purple", v: `"${edu.status}"` }, { t: "pl", v: "," }]);
    push(i < data.length - 1 ? `  },` : `  }`, [{ t: "pl", v: i < data.length - 1 ? "  }," : "  }" }]);
    // if (i < data.length - 1) push(``, []);
  });

  push(`];`, [{ t: "pl", v: "];" }]);
  // push(``, []);
  // push(`// render → <Education />`, [{ t: "comment", v: "// render → <Education />" }]);
  push(`export default Education;`, [{ t: "kw", v: "export default " }, { t: "score", v: "Education" }, { t: "pl", v: ";" }]);
  return lines;
}

const TOKEN_COLORS = {
  kw:      "#cba6f7",
  id:      "#89b4fa",
  prop:    "#89dceb",
  str:     "#a6e3a1",
  score:   "#f9e2af",
  pl:      "#cdd6f4",
  green:   "#22c55e",
  purple:  "#a78bfa",
  comment: "#6b7280",
};

const CODE_LINES = buildCodeLines(educationData);
const FULL_CODE  = CODE_LINES.map(l => l.raw).join("\n");

/* ════════════════════════════════
   Education Component
════════════════════════════════ */
const Education = () => {
  const cardRefs   = useRef([]);
  const sectionRef = useRef(null);

  const [typedChars, setTypedChars]   = useState(0);
  const [started,    setStarted]      = useState(false);
  const [showCursor, setShowCursor]   = useState(true);
  const [activeCard, setActiveCard]   = useState(null);
  const timerRef = useRef(null);

  /* ── Intersection observers ── */
  useEffect(() => {
    const cardObs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = "1";
          e.target.style.transform = "translateX(0)";
        }
      }),
      { threshold: 0.12 }
    );
    cardRefs.current.forEach(el => el && cardObs.observe(el));

    const secObs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) secObs.observe(sectionRef.current);

    return () => { cardObs.disconnect(); secObs.disconnect(); };
  }, [started]);

  /* ── Typing animation ── */
  useEffect(() => {
    if (!started) return;
    let char = 0;
    const type = () => {
      char++;
      setTypedChars(char);
      if (char < FULL_CODE.length) timerRef.current = setTimeout(type, 16);
    };
    timerRef.current = setTimeout(type, 400);
    return () => clearTimeout(timerRef.current);
  }, [started]);

  /* ── Blinking cursor ── */
  useEffect(() => {
    const id = setInterval(() => setShowCursor(v => !v), 520);
    return () => clearInterval(id);
  }, []);

  /* ── Render syntax-highlighted typed code ── */
  const renderCode = () => {
    let charsLeft = typedChars;
    return CODE_LINES.map((line, li) => {
      if (charsLeft <= 0) return null;
      const lineChars = Math.min(charsLeft, line.raw.length);
      charsLeft -= line.raw.length + 1;

      if (line.raw.length === 0) {
        return <div key={li} style={{ height: "1.9em" }} />;
      }

      let cursor = 0;
      const spans = line.tokens.map((tok, ti) => {
        if (cursor >= lineChars) return null;
        const visible = tok.v.slice(0, lineChars - cursor);
        cursor += tok.v.length;
        return (
          <span key={ti} style={{ color: TOKEN_COLORS[tok.t] || "#cdd6f4" }}>
            {visible}
          </span>
        );
      });

      const isCurrentLine = charsLeft >= -line.raw.length && charsLeft <= 0 && typedChars < FULL_CODE.length;

      return (
        <div
          key={li}
          style={{
            display: "flex",
            alignItems: "baseline",
            fontSize: 12,
            lineHeight: "1.9",
            whiteSpace: "pre",
            paddingLeft: 4,
            borderRadius: 3,
            background: isCurrentLine ? "rgba(139,92,246,0.07)" : "transparent",
          }}
        >
          <span style={{
            display: "inline-block",
            width: 28,
            textAlign: "right",
            marginRight: 18,
            color: isCurrentLine ? "#6d5fac" : "#313a45",
            userSelect: "none",
            flexShrink: 0,
            fontSize: 11,
            fontFamily: "'JetBrains Mono', 'Courier New', monospace",
          }}>
            {li + 1}
          </span>
          {spans}
          {isCurrentLine && (
            <span style={{
              display: "inline-block",
              width: 2,
              height: "0.95em",
              background: showCursor ? "#a78bfa" : "transparent",
              marginLeft: 1,
              verticalAlign: "text-bottom",
              transition: "background 0.08s",
              borderRadius: 1,
            }} />
          )}
        </div>
      );
    });
  };

  return (
    <section
      id="education"
      ref={sectionRef}
      style={{
        background: "#0d0d1a",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Global styles ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap');

        .edu-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        @media (max-width: 768px) {
          .edu-grid { grid-template-columns: 1fr; }
          .edu-code-panel { display: none !important; }
        }

        .edu-card {
          opacity: 0;
          transform: translateX(-24px);
          transition-property: opacity, transform, background, border-color, box-shadow;
          transition-duration: 0.55s, 0.55s, 0.22s, 0.22s, 0.22s;
          transition-timing-function: cubic-bezier(.22,.68,0,1.2);
        }
        .edu-card:hover {
          background: rgba(139,92,246,0.07) !important;
          border-color: rgba(139,92,246,0.38) !important;
          box-shadow: 0 8px 40px rgba(124,58,237,0.15), inset 0 0 0 1px rgba(139,92,246,0.12) !important;
        }
        .edu-card:hover .edu-card-dot {
          transform: scale(1.35);
          box-shadow: 0 0 0 6px rgba(139,92,246,0.12) !important;
        }

        .score-badge {
          transition: transform 0.2s, background 0.2s;
        }
        .edu-card:hover .score-badge {
          transform: translateY(-1px);
        }

        .code-line-hover:hover { background: rgba(139,92,246,0.06); }

        .timeline-line {
          position: absolute;
          left: 0;
          top: 24px;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, #7c3aed 0%, #4c1d95 60%, transparent 100%);
        }
        .timeline-fill {
          width: 100%;
          background: linear-gradient(to bottom, #a78bfa, #7c3aed);
          animation: fillDown 1.4s ease forwards;
          animation-delay: 0.3s;
          height: 0;
        }
        @keyframes fillDown { to { height: 100%; } }
      `}</style>

      {/* ── Ambient blobs ── */}
      <div style={{ position: "absolute", top: "8%",  left: "-8%",  width: 320, height: 320, background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "12%", right: "-6%", width: 260, height: 260, background: "radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)",  borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "55%", left: "50%",  width: 200, height: 200, background: "radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)",  borderRadius: "50%", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* ── Section heading ── */}
        <div style={{ marginBottom: "3.5rem" }}>
       

          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 5vw, 3.4rem)",
            fontWeight: 700,
            margin: 0,
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            background: "linear-gradient(135deg, #f5f0ff 0%, #c4b5fd 50%, #a78bfa 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Education
          </h2>

          {/* Gradient underline */}
          <div style={{
            marginTop: 14,
            width: 56,
            height: 2,
            borderRadius: 2,
            background: "linear-gradient(90deg, #7c3aed, #ec4899)",
          }} />
        </div>

        <div className="edu-grid">

          {/* ════════════════════
              LEFT — Timeline cards
          ════════════════════ */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {educationData.map((edu, i) => {
              const isOngoing   = edu.status === "ongoing";
              const accentColor = isOngoing ? "#22c55e" : "#fbbf24";
              const accentLight = isOngoing ? "rgba(34,197,94,0.12)"  : "rgba(139,92,246,0.10)";
              const accentBorder= isOngoing ? "rgba(34,197,94,0.28)"  : "rgba(139,92,246,0.22)";
              const delay       = `${i * 0.18}s`;

              return (
                <div
                  key={i}
                  style={{ display: "flex", gap: 0, position: "relative" }}
                >
                  {/* ── Vertical timeline strip ── */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 42, flexShrink: 0 }}>
                    {/* Dot */}
                    <div
                      className="edu-card-dot"
                      style={{
                        width: 14,
                        height: 14,
                        borderRadius: "50%",
                        background: accentColor,
                        boxShadow: `0 0 0 3px rgba(13,13,26,1), 0 0 0 5px ${accentColor}55`,
                        marginTop: 26,
                        flexShrink: 0,
                        zIndex: 2,
                        transition: "transform 0.25s, box-shadow 0.25s",
                      }}
                    />
                    {/* Connector line */}
                    {i < educationData.length - 1 && (
                      <div style={{
                        flex: 1,
                        width: 2,
                        background: `linear-gradient(to bottom, ${accentColor}66, rgba(139,92,246,0.15))`,
                        marginTop: 4,
                        marginBottom: -4,
                        borderRadius: 2,
                        minHeight: 32,
                      }} />
                    )}
                  </div>

                  {/* ── Card ── */}
                  <div
                    ref={el => { cardRefs.current[i] = el; }}
                    className="edu-card"
                    style={{
                      flex: 1,
                      marginLeft: 16,
                      marginBottom: i < educationData.length - 1 ? 20 : 0,
                      background: "rgba(19,19,42,0.85)",
                      border: "1px solid rgba(124,111,205,0.16)",
                      borderRadius: 16,
                      padding: "22px 24px",
                      cursor: "default",
                      transitionDelay: delay,
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {/* Top row: period pill + score badge */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14, flexWrap: "wrap", gap: 8 }}>

                      {/* Period pill */}
                      <span style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        fontWeight: 500,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: accentColor,
                        background: accentLight,
                        border: `1px solid ${accentBorder}`,
                        padding: "3px 10px",
                        borderRadius: 5,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                      }}>
                        {isOngoing && (
                          <span style={{
                            width: 5, height: 5, borderRadius: "50%",
                            background: "#22c55e",
                            boxShadow: "0 0 4px rgba(34,197,94,0.8)",
                            animation: "pulse 1.5s infinite",
                            display: "inline-block",
                          }} />
                        )}
                        {edu.period}
                      </span>

                      {/* Score badge */}
                      <div
                        className="score-badge"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          background: "rgba(251,191,36,0.08)",
                          border: "1px solid rgba(251,191,36,0.22)",
                          borderRadius: 8,
                          padding: "6px 14px",
                          minWidth: 72,
                        }}
                      >
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: "#9d8f50", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 1 }}>
                          {edu.scoreLabel}
                        </span>
                        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: "#fbbf24", lineHeight: 1 }}>
                          {edu.score}
                        </span>
                      </div>
                    </div>

                    {/* Degree */}
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 15,
                      fontWeight: 700,
                      color: "#f0ecff",
                      lineHeight: 1.35,
                      margin: "0 0 6px",
                      letterSpacing: "0.01em",
                    }}>
                      {edu.degree}
                    </p>

                    {/* School */}
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 12.5,
                      fontWeight: 400,
                      color: "#7c7299",
                      margin: "0 0 10px",
                      lineHeight: 1.4,
                    }}>
                      {edu.school}
                      <span style={{ color: "#4f4870", marginLeft: 6 }}>· {edu.location}</span>
                    </p>

                    {/* Detail / highlight */}
                    <div style={{
                      borderTop: "1px solid rgba(124,111,205,0.1)",
                      paddingTop: 10,
                      marginTop: 2,
                    }}>
                      <p style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10.5,
                        color: "#6b6490",
                        margin: 0,
                        letterSpacing: "0.03em",
                      }}>
                        <span style={{ color: "#2e2a40", marginRight: 6 }}>→</span>
                        {edu.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ════════════════════
              RIGHT — Code editor
          ════════════════════ */}
          <div className="edu-code-panel" style={{ position: "sticky", top: "2rem" }}>

            {/* Outer glow ring */}
            <div style={{
              borderRadius: 18,
              padding: 1,
              background: "linear-gradient(135deg, rgba(139,92,246,0.35), rgba(236,72,153,0.18), rgba(139,92,246,0.05))",
            }}>
              <div style={{
                background: "#161b22",
                borderRadius: 17,
                overflow: "hidden",
                boxShadow: "0 0 80px rgba(124,58,237,0.1), 0 24px 48px rgba(0,0,0,0.4)",
              }}>

                {/* Title bar */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 18px",
                  background: "#1c2128",
                  borderBottom: "1px solid rgba(255,255,255,0.055)",
                }}>
                  {/* Traffic lights */}
                  <div style={{ display: "flex", gap: 7, alignItems: "center" }}>
                    <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57", display: "inline-block", boxShadow: "0 0 4px rgba(255,95,87,0.5)" }} />
                    <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e", display: "inline-block", boxShadow: "0 0 4px rgba(254,188,46,0.4)" }} />
                    <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840", display: "inline-block", boxShadow: "0 0 4px rgba(40,200,64,0.4)"  }} />
                  </div>

                  <div style={{ marginLeft: 14, display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 12,
                      color: "#8b9096",
                    }}>
                      Education.jsx
                    </span>
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10,
                      color: "#30363d",
                      background: "#1c2128",
                      border: "1px solid #30363d",
                      borderRadius: 4,
                      padding: "1px 7px",
                    }}>
                      react
                    </span>
                  </div>

                  {/* Right — status indicator */}
                  <div style={{ marginLeft: "auto" }}>
                    {typedChars < FULL_CODE.length && typedChars > 0 && (
                      <span style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        color: "#22c55e",
                        letterSpacing: "0.06em",
                        display: "flex",
                        alignItems: "center",
                        gap: 5,
                      }}>
                        <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 4px rgba(34,197,94,0.7)", display: "inline-block", animation: "pulse 1.2s infinite" }} />
                        typing…
                      </span>
                    )}
                    {typedChars >= FULL_CODE.length && (
                      <span style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        color: "#a78bfa",
                        letterSpacing: "0.05em",
                        display: "flex",
                        alignItems: "center",
                        gap: 5,
                      }}>
                        <span style={{ color: "#22c55e" }}>✓</span> compiled
                      </span>
                    )}
                  </div>
                </div>

                {/* Tab bar */}
                <div style={{
                  display: "flex",
                  background: "#161b22",
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                  paddingLeft: 12,
                }}>
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    color: "#a78bfa",
                    padding: "7px 16px",
                    borderBottom: "2px solid #7c3aed",
                    cursor: "default",
                  }}>
                    Education.jsx
                  </div>
                  {/* <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    color: "#3d4451",
                    padding: "7px 16px",
                    cursor: "default",
                  }}>
                    constants.js
                  </div> */}
                </div>

                {/* Code body */}
                <div style={{
                  padding: "18px 16px 20px",
                  fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                  overflowX: "auto",
                  minHeight: 520,
                  background: "linear-gradient(180deg, #161b22 0%, #13182e 100%)",
                }}>
                  {started ? (
                    <div>{renderCode()}</div>
                  ) : (
                    <div style={{
                      color: "#3d4451",
                      fontSize: 12,
                      fontFamily: "'JetBrains Mono', monospace",
                      lineHeight: "1.9",
                    }}>
                      <span style={{ color: "#6d5fac" }}>// </span>scroll to load…
                    </div>
                  )}
                </div>

                {/* Status bar */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "6px 16px",
                  background: "#7c3aed",
                  fontSize: 10,
                  fontFamily: "'JetBrains Mono', monospace",
                }}>
                  <span style={{ color: "rgba(255,255,255,0.85)", letterSpacing: "0.05em" }}>
                    Ln {Math.min(CODE_LINES.length, Math.max(1, Math.ceil(typedChars / 28)))}, Col 1
                  </span>
                  <div style={{ display: "flex", gap: 16 }}>
                    <span style={{ color: "rgba(255,255,255,0.65)" }}>JSX</span>
                    <span style={{ color: "rgba(255,255,255,0.65)" }}>UTF-8</span>
                    <span style={{ color: "rgba(255,255,255,0.65)" }}>React 18</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Floating stats below editor */}
            {/* <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginTop: 14 }}>
              {[
                { label: "College CGPA",          value: "8.58",  accent: "#a78bfa" },
                { label: "Class XII",     value: "92.8%", accent: "#f472b6" },
                { label: "Class X",       value: "95.8%", accent: "#34d399" },
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(19,19,42,0.9)",
                    border: "1px solid rgba(124,111,205,0.16)",
                    borderTop: `2px solid ${stat.accent}`,
                    borderRadius: 10,
                    padding: "10px 14px",
                    textAlign: "center",
                  }}
                >
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: "#6b6490", letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 4px" }}>
                    {stat.label}
                  </p>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: stat.accent, margin: 0, lineHeight: 1 }}>
                    {stat.value}
                  </p>
                </div>
              ))}
            </div> */}
          </div>

        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.35; }
        }
      `}</style>
    </section>
  );
};

export default SectionWrapper(Education, "education");
