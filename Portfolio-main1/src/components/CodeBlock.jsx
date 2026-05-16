// import React, { useEffect, useRef } from "react";

// const lines = [
//   { ln: 1,  tokens: [{ c: "#546e7a", s: true, t: "// ayushi.jsx" }] },
//   { ln: 2,  tokens: [] },
//   { ln: 3,  tokens: [
//     { c: "#c792ea", t: "const " },
//     { c: "#FFD700", t: "Ayushi" },
//     { c: "#89ddff", t: " = () => ({" },
//   ]},
//   { ln: 4,  tokens: [
//     { c: "#f07178", t: "  name" },
//     { c: "#fff",    t: ":    " },
//     { c: "#c3e88d", t: '"Ayushi Kumari"' },
//     { c: "#89ddff", t: "," },
//   ]},
//   { ln: 5,  tokens: [
//     { c: "#f07178", t: "  role" },
//     { c: "#fff",    t: ":    " },
//     { c: "#c3e88d", t: '"MERN Stack Developer"' },
//     { c: "#89ddff", t: "," },
//   ]},
//   { ln: 6,  tokens: [
//     { c: "#f07178", t: "  college" },
//     { c: "#fff",    t: ": " },
//     { c: "#c3e88d", t: '"BIT Mesra"' },
//     { c: "#89ddff", t: "," },
//   ]},
//   { ln: 7,  tokens: [
//     { c: "#f07178", t: "  degree" },
//     { c: "#fff",    t: ":  " },
//     { c: "#c3e88d", t: '"B.Tech ECE"' },
//     { c: "#89ddff", t: "," },
//   ]},
//   { ln: 8,  tokens: [
//     { c: "#f07178", t: "  cgpa" },
//     { c: "#fff",    t: ":    " },
//     { c: "#f78c6c", t: "8.58" },
//     { c: "#89ddff", t: "," },
//   ]},
//   { ln: 9,  tokens: [
//     { c: "#f07178", t: "  graduation" },
//     { c: "#fff",    t: ": " },
//     { c: "#f78c6c", t: "2027" },
//     { c: "#89ddff", t: "," },
//   ]},
//   { ln: 10, tokens: [] },
//   { ln: 11, tokens: [
//     { c: "#f07178", t: "  skills" },
//     { c: "#fff",    t: ": " },
//     { c: "#89ddff", t: "[" },
//   ]},
//   { ln: 12, tokens: [
//     { c: "#c3e88d", t: '    "React"' },
//     { c: "#fff",    t: ", " },
//     { c: "#c3e88d", t: '"Node.js"' },
//     { c: "#fff",    t: ", " },
//     { c: "#c3e88d", t: '"MongoDB"' },
//     { c: "#89ddff", t: "," },
//   ]},
//   { ln: 13, tokens: [
//     { c: "#c3e88d", t: '    "Express"' },
//     { c: "#fff",    t: ", " },
//     { c: "#c3e88d", t: '"Redis"' },
//     { c: "#fff",    t: ", " },
//     { c: "#c3e88d", t: '"Three.js"' },
//     { c: "#89ddff", t: "," },
//   ]},
//   { ln: 14, tokens: [
//     { c: "#c3e88d", t: '    "Tailwind"' },
//     { c: "#fff",    t: ", " },
//     { c: "#c3e88d", t: '"REST APIs"' },
//   ]},
//   { ln: 15, tokens: [
//     { c: "#89ddff", t: "  ]," },
//   ]},
//   { ln: 16, tokens: [] },
//   { ln: 17, tokens: [
//     { c: "#f07178", t: "  projects" },
//     { c: "#fff",    t: ": " },
//     { c: "#89ddff", t: "[" },
//     { c: "#c3e88d", t: '"AlgoLeague"' },
//     { c: "#fff",    t: ", " },
//     { c: "#c3e88d", t: '"LogixAI"' },
//     { c: "#89ddff", t: "]," },
//   ]},
//   { ln: 18, tokens: [] },
//   { ln: 19, tokens: [
//     { c: "#f07178", t: "  achievements" },
//     { c: "#fff",    t: ": " },
//     { c: "#89ddff", t: "[" },
//   ]},
//   { ln: 20, tokens: [
//     { c: "#c3e88d", t: '    "400+ DSA Problems"' },
//     { c: "#fff",    t: ", " },
//     { c: "#c3e88d", t: '"GSSoC Contributor"' },
//     { c: "#89ddff", t: "," },
//   ]},
//   { ln: 21, tokens: [
//     { c: "#c3e88d", t: '    "GFG Rank 160"' },
//     { c: "#fff",    t: ", " },
//     { c: "#c3e88d", t: '"JEE Advanced Qualified"' },
//   ]},
//   { ln: 22, tokens: [{ c: "#89ddff", t: "  ]," }] },
//   { ln: 23, tokens: [] },
//   { ln: 24, tokens: [
//     { c: "#f07178", t: "  status" },
//     { c: "#fff",    t: ":  " },
//     { c: "#c3e88d", t: '"Open to Internships"' },
//     { c: "#89ddff", t: "," },
//   ]},
//   { ln: 25, tokens: [{ c: "#89ddff", t: "})" }] },
// ];

// const CodeBlock = () => {
//   const containerRef = useRef(null);

//   // Scroll to bottom on mount so last lines are visible, optional
//   useEffect(() => {
//     if (containerRef.current) {
//       containerRef.current.scrollTop = 0;
//     }
//   }, []);

//   return (
//     <div
//       className="
//         w-full max-w-[480px]
//         rounded-xl overflow-hidden
//         border border-[#2a2a4a]
//         font-mono text-sm
//       "
//       style={{
//         background: "#1a1a2e",
//         boxShadow:
//           "0 0 0 1px #2a2a4a, 0 0 40px rgba(145,94,255,0.15), 0 0 80px rgba(145,94,255,0.05)",
//       }}
//     >
//       {/* ── Title Bar ── */}
//       <div
//         className="flex items-center gap-2 px-4 py-[10px] border-b border-[#2a2a4a] select-none"
//         style={{ background: "#111128" }}
//       >
//         <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
//         <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
//         <span className="w-3 h-3 rounded-full bg-[#28c840]" />
//         <span className="ml-3 text-[#75e110] text-xs tracking-wide">
//           Ayushi.jsx
//         </span>
//         <span className="text-[#75e110] text-xs ml-1">— react</span>
//       </div>

//       {/* ── Code Body ── */}
//       <div
//         ref={containerRef}
//         className="px-4 py-4 overflow-y-auto"
//         style={{ maxHeight: "420px" }}
//       >
//         {lines.map(({ ln, tokens }) => (
//           <div key={ln} className="flex gap-3 leading-[1.75]">
//             {/* Line number */}
//             <span
//               className="select-none text-right shrink-0 text-[11px] pt-[1px]"
//               style={{ color: "#3a3a5a", minWidth: "18px" }}
//             >
//               {ln}
//             </span>

//             {/* Tokens */}
//             <span className="text-[12.5px]">
//               {tokens.length === 0 ? (
//                 <span>&nbsp;</span>
//               ) : (
//                 tokens.map((tok, i) => (
//                   <span
//                     key={i}
//                     style={{
//                       color: tok.c,
//                       fontStyle: tok.s ? "italic" : "normal",
//                     }}
//                   >
//                     {tok.t}
//                   </span>
//                 ))
//               )}
//             </span>
//           </div>
//         ))}

//         {/* ── Output line ── */}
//         <div
//           className="flex gap-3 leading-[1.75] mt-1 pt-2"
//           style={{ borderTop: "1px solid #2a2a4a" }}
//         >
//           <span
//             className="select-none text-right shrink-0 text-[11px] pt-[1px]"
//             style={{ color: "#3a3a5a", minWidth: "18px" }}
//           >
//             26
//           </span>
//           <span className="text-[12.5px]">
//             <span style={{ color: "#c792ea" }}>export default </span>
//             <span style={{ color: "#FFD700" }}>Ayushi</span>
//             {/* Blinking cursor */}
//             <span
//               style={{
//                 display: "inline-block",
//                 width: "8px",
//                 height: "1em",
//                 background: "#FFD700",
//                 verticalAlign: "middle",
//                 marginLeft: "3px",
//                 animation: "blink 1s step-end infinite",
//               }}
//             />
//           </span>
//         </div>
//       </div>

//       {/* Scrollbar + blink styles */}
//       <style>{`
//         @keyframes blink {
//           0%, 100% { opacity: 1; }
//           50%       { opacity: 0; }
//         }
//         /* thin scrollbar */
//         div::-webkit-scrollbar { width: 4px; }
//         div::-webkit-scrollbar-track { background: transparent; }
//         div::-webkit-scrollbar-thumb { background: #2a2a4a; border-radius: 4px; }
//       `}</style>
//     </div>
//   );
// };

// export default CodeBlock;



import React, { useEffect, useRef, useState } from "react";

const lines = [
  { ln: 1,  tokens: [{ c: "#546e7a", s: true, t: "// ayushi.jsx" }] },
  { ln: 2,  tokens: [] },
  { ln: 3,  tokens: [
    { c: "#c792ea", t: "const " },
    { c: "#FFD700", t: "Ayushi" },
    { c: "#89ddff", t: " = () => ({" },
  ]},
  { ln: 4,  tokens: [
    { c: "#f07178", t: "  name" },
    { c: "#fff",    t: ":    " },
    { c: "#c3e88d", t: '"Ayushi Kumari"' },
    { c: "#89ddff", t: "," },
  ]},
  { ln: 5,  tokens: [
    { c: "#f07178", t: "  role" },
    { c: "#fff",    t: ":    " },
    { c: "#c3e88d", t: '"MERN Stack Developer"' },
    { c: "#89ddff", t: "," },
  ]},
  { ln: 6,  tokens: [
    { c: "#f07178", t: "  college" },
    { c: "#fff",    t: ": " },
    { c: "#c3e88d", t: '"BIT Mesra"' },
    { c: "#89ddff", t: "," },
  ]},
  { ln: 7,  tokens: [
    { c: "#f07178", t: "  degree" },
    { c: "#fff",    t: ":  " },
    { c: "#c3e88d", t: '"B.Tech ECE"' },
    { c: "#89ddff", t: "," },
  ]},
  { ln: 8,  tokens: [
    { c: "#f07178", t: "  cgpa" },
    { c: "#fff",    t: ":    " },
    { c: "#f78c6c", t: "8.58" },
    { c: "#89ddff", t: "," },
  ]},
  { ln: 9,  tokens: [
    { c: "#f07178", t: "  graduation" },
    { c: "#fff",    t: ": " },
    { c: "#f78c6c", t: "2027" },
    { c: "#89ddff", t: "," },
  ]},
  { ln: 10, tokens: [] },
  { ln: 11, tokens: [
    { c: "#f07178", t: "  skills" },
    { c: "#fff",    t: ": " },
    { c: "#89ddff", t: "[" },
  ]},
  { ln: 12, tokens: [
    { c: "#c3e88d", t: '    "React"' },
    { c: "#fff",    t: ", " },
    { c: "#c3e88d", t: '"Node.js"' },
    { c: "#fff",    t: ", " },
    { c: "#c3e88d", t: '"MongoDB"' },
    { c: "#89ddff", t: "," },
  ]},
  { ln: 13, tokens: [
    { c: "#c3e88d", t: '    "Express"' },
    { c: "#fff",    t: ", " },
    { c: "#c3e88d", t: '"Redis"' },
    { c: "#fff",    t: ", " },
    { c: "#c3e88d", t: '"Three.js"' },
    { c: "#89ddff", t: "," },
  ]},
  { ln: 14, tokens: [
    { c: "#c3e88d", t: '    "Tailwind"' },
    { c: "#fff",    t: ", " },
    { c: "#c3e88d", t: '"REST APIs"' },
  ]},
  { ln: 15, tokens: [{ c: "#89ddff", t: "  ]," }] },
  { ln: 16, tokens: [] },
  { ln: 17, tokens: [
    { c: "#f07178", t: "  projects" },
    { c: "#fff",    t: ": " },
    { c: "#89ddff", t: "[" },
    { c: "#c3e88d", t: '"AlgoLeague"' },
    { c: "#fff",    t: ", " },
     { c: "#c3e88d", t: '" SWA "' },
    { c: "#89ddff", t: "," },
    { c: "#c3e88d", t: '"LogixAI"' },
    { c: "#89ddff", t: "]," },
  ]},
  { ln: 18, tokens: [] },
  { ln: 19, tokens: [
    { c: "#f07178", t: "  achievements" },
    { c: "#fff",    t: ": " },
    { c: "#89ddff", t: "[" },
  ]},
  { ln: 20, tokens: [
    { c: "#c3e88d", t: '    "400+ DSA Problems"' },
    { c: "#fff",    t: ", " },
    { c: "#c3e88d", t: '"GSSoC Contributor"' },
    { c: "#89ddff", t: "," },
  ]},
  { ln: 21, tokens: [
    { c: "#c3e88d", t: '    "GFG Rank 160"' },
    { c: "#fff",    t: ", " },
    { c: "#c3e88d", t: '"JEE Advanced Qualified"' },
  ]},
  { ln: 22, tokens: [{ c: "#89ddff", t: "  ]," }] },
  { ln: 23, tokens: [] },
  { ln: 24, tokens: [
    { c: "#f07178", t: "  status" },
    { c: "#fff",    t: ":  " },
    { c: "#c3e88d", t: '"Open to Internships"' },
    { c: "#89ddff", t: "," },
  ]},
  { ln: 25, tokens: [{ c: "#89ddff", t: "})" }] },
  { ln: 26, tokens: [
    { c: "#c792ea", t: "export default " },
    { c: "#FFD700", t: "Ayushi" },
  ]},
];

const lineToString = (tokens) => tokens.map((t) => t.t).join("");

const renderPartialLine = (tokens, charsToShow) => {
  if (charsToShow <= 0) return null;
  let remaining = charsToShow;
  const result = [];
  for (let i = 0; i < tokens.length; i++) {
    const tok = tokens[i];
    if (remaining <= 0) break;
    const visible = tok.t.slice(0, remaining);
    result.push(
      <span key={i} style={{ color: tok.c, fontStyle: tok.s ? "italic" : "normal" }}>
        {visible}
      </span>
    );
    remaining -= tok.t.length;
  }
  return result;
};

const CHAR_SPEED = 18; // ms per character — lower = faster typing

const CodeBlock = () => {
  const containerRef = useRef(null);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;

    const line = lines[currentLine];
    const fullText = lineToString(line.tokens);

    // Blank lines: skip instantly with tiny pause
    if (fullText.length === 0) {
      const t = setTimeout(() => {
        if (currentLine + 1 < lines.length) {
          setCurrentLine((l) => l + 1);
          setCurrentChar(0);
        } else {
          setDone(true);
        }
      }, 60);
      return () => clearTimeout(t);
    }

    if (currentChar < fullText.length) {
      const t = setTimeout(() => {
        setCurrentChar((c) => c + 1);
      }, CHAR_SPEED);
      return () => clearTimeout(t);
    } else {
      // Line complete — move to next
      const t = setTimeout(() => {
        if (currentLine + 1 < lines.length) {
          setCurrentLine((l) => l + 1);
          setCurrentChar(0);
        } else {
          setDone(true);
        }
      }, 40);
      return () => clearTimeout(t);
    }
  }, [currentLine, currentChar, done]);

  // Auto-scroll to follow active line
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [currentLine]);

  return (
    <div
      className="w-full max-w-[480px] rounded-xl overflow-hidden border border-[#2a2a4a] font-mono text-sm"
      style={{
        background: "#1a1a2e",
        boxShadow:
          "0 0 0 1px #2a2a4a, 0 0 40px rgba(145,94,255,0.15), 0 0 80px rgba(145,94,255,0.05)",
      }}
    >
      {/* ── Title Bar ── */}
      <div
        className="flex items-center gap-2 px-4 py-[10px] border-b border-[#2a2a4a] select-none"
        style={{ background: "#111128" }}
      >
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-[#75e110] text-xs tracking-wide">Ayushi.jsx</span>
        <span className="text-[#75e110] text-xs ml-1">— react</span>
      </div>

      {/* ── Code Body ── */}
      <div
        ref={containerRef}
        className="px-4 py-4 overflow-y-auto"
        style={{ maxHeight: "420px" }}
      >
        {lines.map(({ ln, tokens }, idx) => {
          // Hide lines not yet reached
          if (idx > currentLine) return null;

          const fullText = lineToString(tokens);
          const isActiveLine = idx === currentLine && !done;
          const isBlank = fullText.length === 0;

          return (
            <div key={ln} className="flex gap-3 leading-[1.75]">
              {/* Line number */}
              <span
                className="select-none text-right shrink-0 text-[11px] pt-[1px]"
                style={{ color: "#3a3a5a", minWidth: "18px" }}
              >
                {ln}
              </span>

              {/* Code tokens */}
              <span className="text-[12.5px]">
                {isBlank ? (
                  <span>&nbsp;</span>
                ) : isActiveLine ? (
                  <>
                    {renderPartialLine(tokens, currentChar)}
                    {/* blinking cursor on the line being typed */}
                    <span
                      style={{
                        display: "inline-block",
                        width: "7px",
                        height: "1em",
                        background: "#FFD700",
                        verticalAlign: "middle",
                        marginLeft: "1px",
                        animation: "blink 0.7s step-end infinite",
                      }}
                    />
                  </>
                ) : (
                  tokens.map((tok, i) => (
                    <span
                      key={i}
                      style={{ color: tok.c, fontStyle: tok.s ? "italic" : "normal" }}
                    >
                      {tok.t}
                    </span>
                  ))
                )}
              </span>
            </div>
          );
        })}

        {/* Resting cursor after all done */}
        {done && (
          <div
            className="flex gap-3 leading-[1.75] mt-1 pt-2"
            style={{ borderTop: "1px solid #2a2a4a" }}
          >
            <span
              className="select-none shrink-0"
              style={{ minWidth: "18px" }}
            />
            <span className="text-[12.5px]">
              <span
                style={{
                  display: "inline-block",
                  width: "7px",
                  height: "1em",
                  background: "#FFD700",
                  verticalAlign: "middle",
                  animation: "blink 1s step-end infinite",
                }}
              />
            </span>
          </div>
        )}
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        div::-webkit-scrollbar { width: 4px; }
        div::-webkit-scrollbar-track { background: transparent; }
        div::-webkit-scrollbar-thumb { background: #2a2a4a; border-radius: 4px; }
      `}</style>
    </div>
  );
};

export default CodeBlock;
