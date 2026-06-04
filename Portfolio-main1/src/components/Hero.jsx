

// import React from "react";
// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import Typed from "typed.js";
// import workspaceImg from "../assets/aaa.png";
// import CodeBlock from "./CodeBlock";

// const Hero = () => {
//   const el = React.useRef(null);

//   React.useEffect(() => {
//     const typed = new Typed(el.current, {
//       strings: [
//         "Crafting Elegant & Scalable Web Solutions",
//         "Full-Stack Developer Turning Ideas into Reality",
//         "Building Modern, High-Performance Web Experiences",
//         "Code-Driven Solutions with Impact & Purpose",
//       ],
//       typeSpeed: 60,
//       backSpeed: 35,
//       backDelay: 1200,
//       loop: true,
//       showCursor: false,
//     });

//     return () => typed.destroy();
//   }, []);

//   return (
//     <section className="relative w-full min-h-screen mx-auto overflow-hidden">

//       {/* ─────────────────────────────────────────────
//           MOBILE LAYOUT  (flex-col, visible only on < lg)
//       ───────────────────────────────────────────── */}
//       <div className="flex flex-col items-center px-4 pt-6 pb-24 lg:hidden">

//         {/* 1 ▸ Profile picture */}
//         <div className="relative mt-4 flex-shrink-0">
//           <div className="w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] rounded-full overflow-hidden border-2 border-[#915EFF] shadow-[0_0_18px_rgba(145,94,255,0.5)]">
//             <img
//               src={workspaceImg}
//               alt="Ayushi"
//               className="w-full h-full object-cover object-top"
//             />
//           </div>
//           {/* Online dot */}
//           <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-black" />
//         </div>

//         {/* 2 ▸ "Hi I'm Ayushi" heading + subtitle + typed */}
//         <div className="flex gap-3 items-start w-full justify-center mt-5">
//           {/* Accent line */}
//           <div className="flex flex-col items-center mt-2 flex-shrink-0">
//             <div className="w-3 h-3 rounded-full bg-[#915EFF]" />
//             <div className="w-[2px] h-28 violet-gradient" />
//           </div>

//           {/* Text */}
//           <div className="text-left">
//             <h1 className={`${styles.heroHeadText} font-serif text-yellow-100 leading-tight`}>
//               Hi, I&apos;m{" "}
//               <span className="relative inline-block">
//                 <span className="text-yellow-400 uppercase italic">ayushi</span>
//                 <span className="absolute -inset-2 bg-yellow-400/20 blur-xl rounded-lg -z-10" />
//               </span>
//             </h1>

//             <p className={`${styles.heroSubText} font-serif mt-2 text-white-100`}>
//               Welcome to my digital space, where I craft meaningful web experiences.
//             </p>

//             {/* Typed text — mobile gets its own ref */}
//             <p
//               ref={el}
//               className="
//                 mt-2
//                 text-[10px] sm:text-[12px]
//                 tracking-widest uppercase
//                 text-violet-400 font-mono
//                 min-h-[20px] block
//               "
//             />
//           </div>
//         </div>

//         {/* 3 ▸ Code editor */}
//         <div className="w-full mt-8 flex justify-center">
//           <CodeBlock />
//         </div>
//       </div>


//       {/* ─────────────────────────────────────────────
//           DESKTOP LAYOUT  (side-by-side, visible only on lg+)
//       ───────────────────────────────────────────── */}
//       <div className="hidden lg:flex flex-row items-start justify-between">

//         {/* LEFT: text + photo */}
//         <div
//           className="
//             relative top-[100px]
//             ml-10 w-[55%]
//             px-6 z-10
//           "
//         >
//           <div className="flex gap-6 items-start justify-start">
//             {/* Left accent */}
//             <div className="flex flex-col items-center mt-2">
//               <div className="w-4 h-4 rounded-full bg-[#915EFF]" />
//               <div className="w-[2px] h-80 violet-gradient" />
//             </div>

//             {/* Text content */}
//             <div className="max-w-2xl text-left">
//               {/* NAME ROW: photo + heading */}
//               <div className="flex items-center gap-4 mb-2">
//                 {/* Circular photo */}
//                 <div className="relative flex-shrink-0">
//                   <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-2 border-[#915EFF] shadow-[0_0_18px_rgba(145,94,255,0.5)]">
//                     <img
//                       src={workspaceImg}
//                       alt="Ayushi"
//                       className="w-full h-full object-cover object-top"
//                     />
//                   </div>
//                   <span className="absolute bottom-3 right-3 w-4 h-4 bg-green-400 rounded-full border-2 border-black" />
//                 </div>

//                 {/* Name heading */}
//                 <h1 className={`${styles.heroHeadText} font-serif text-yellow-100 leading-tight`}>
//                   Hi, I&apos;m{" "}
//                   <span className="relative inline-block">
//                     <span className="text-yellow-400 uppercase italic">ayushi</span>
//                     <span className="absolute -inset-2 bg-yellow-400/20 blur-xl rounded-lg -z-10" />
//                   </span>
//                 </h1>
//               </div>

//               {/* Subtitle */}
//               <p className={`${styles.heroSubText} font-serif mt-3 text-white-100`}>
//                 Welcome to my digital space, where I craft meaningful web experiences.
//               </p>

//               {/* Typed text */}
//               <p
//                 ref={el}
//                 className="
//                   mt-3
//                   text-[14px] md:text-[18px]
//                   tracking-widest uppercase
//                   text-violet-400 font-mono
//                   min-h-[24px]
//                 "
//               />
//             </div>
//           </div>
//         </div>

//         {/* RIGHT: code block */}
//         <div
//           className="
//             w-[42%]
//             flex justify-start items-start
//             mt-[110px] pr-10 pb-20
//             z-10
//           "
//         >
//           <CodeBlock />
//         </div>
//       </div>


//       {/* ─────────────────────────────────────────────
//           SCROLL INDICATOR  (shared)
//       ───────────────────────────────────────────── */}
//       <div className="absolute bottom-6 w-full flex justify-center items-center">
//         <a href="#about">
//           <div className="w-[35px] h-[64px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
//             <motion.div
//               animate={{ y: [0, 24, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity }}
//               className="w-3 h-3 rounded-full bg-secondary mb-1"
//             />
//           </div>
//         </a>
//       </div>

//       {/* Cursor blink keyframe */}
//       <style>{`
//         @keyframes blink {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0; }
//         }
//       `}</style>

//     </section>
//   );
// };

// export default Hero;










import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import Typed from "typed.js";
import workspaceImg from "../assets/aaa.png";
import CodeBlock from "./CodeBlock";

/* ══════════════════════════════════════════
   Section Config
══════════════════════════════════════════ */
const SECTIONS = [
  {
    id: "about",
    label: "ABOUT",
    action: "THINKING",
    emoji: "🧠",
    color: "#a78bfa",
    tip: "Who am I?",
    techStack: null,
  },
  {
    id: "education",
    label: "EDUCATION",
    action: "READING",
    emoji: "📚",
    color: "#60a5fa",
    tip: "My academic journey",
    techStack: null,
  },
  {
    id: "experience",
    label: "EXPERIENCE",
    action: "WORKING",
    emoji: "💼",
    color: "#34d399",
    tip: "Where I've worked",
    techStack: null,
  },
  {
    id: "tech",
    label: "SKILLS",
    action: "CHARGING",
    emoji: "⚡",
    color: "#fbbf24",
    tip: "MERN · Tailwind · ThreeJS · C++ · Python",
    techStack: ["MongoDB", "Express", "React", "Node.js", "Tailwind", "ThreeJS", "Redux", "C++", "Python", "Git"],
  },
  {
    id: "work",
    label: "PROJECTS",
    action: "LAUNCHING",
    emoji: "🚀",
    color: "#f472b6",
    tip: "Things I've built",
    techStack: null,
  },
  {
    id: "certifications",
    label: "CERTS",
    action: "LEVELING",
    emoji: "🏆",
    color: "#fb923c",
    tip: "Achievements unlocked",
    techStack: null,
  },
  {
    id: "coding",
    label: "PRO CODER",
    action: "HACKING",
    emoji: "💻",
    color: "#22d3ee",
    tip: "Solved 500+ problems!",
    techStack: ["LeetCode", "CodeChef", "HackerRank", "DSA", "CP", "500+", "Problems", "Solved"],
  },
];

const MARGIN  = 44;
const TOTAL   = 680;
const GAP     = (TOTAL - MARGIN * 2) / (SECTIONS.length - 1);
const CX      = SECTIONS.map((_, i) => Math.round(MARGIN + i * GAP));

const CIRCLE_R       = 26;
const GROUND_Y       = 190;
const ROAD_TOP       = GROUND_Y - 7;
const ROAD_BOT       = GROUND_Y + 7;
const ROAD_MID       = GROUND_Y;
const ROAD_H         = ROAD_BOT - ROAD_TOP;
const ROBOT_HALF_SVG = 70;
const BOX_GAP_SVG    = 14;
const BOX_W_SVG      = 158;

/* ══════════════════════════════════════════
   Mini Car
══════════════════════════════════════════ */
const MiniCar = ({ x, y, color, flipped, scale = 1 }) => {
  const f = flipped ? -1 : 1;
  return (
    <g transform={`translate(${x}, ${y}) scale(${f * scale}, ${scale})`}>
      <rect x={-14} y={-5}  width={28} height={10} rx={4} fill={color} opacity={0.85} />
      <rect x={-8}  y={-10} width={16} height={7}  rx={3} fill={color} opacity={0.7} />
      <rect x={5}   y={-9}  width={5}  height={5}  rx={1} fill="rgba(200,230,255,0.5)" />
      <rect x={-10} y={-9}  width={5}  height={5}  rx={1} fill="rgba(200,230,255,0.4)" />
      <circle cx={-9} cy={5}  r={3.5} fill="#1a1a2e" stroke="rgba(255,255,255,0.2)" strokeWidth={0.8} />
      <circle cx={ 9} cy={5}  r={3.5} fill="#1a1a2e" stroke="rgba(255,255,255,0.2)" strokeWidth={0.8} />
      <circle cx={13}  cy={0} r={2}   fill="rgba(255,255,200,0.85)" />
      <circle cx={-13} cy={0} r={1.5} fill="rgba(255,80,80,0.8)" />
    </g>
  );
};

/* ══════════════════════════════════════════
   RobotPanel
══════════════════════════════════════════ */
const RobotPanel = () => {
  /* ── animation state ── */
  const [robotX,        setRobotX]        = React.useState(CX[0]);
  const [robotOffsetY,  setRobotOffsetY]  = React.useState(0);
  const [armLAngle,     setArmLAngle]     = React.useState(0);
  const [armRAngle,     setArmRAngle]     = React.useState(0);
  const [legLAngle,     setLegLAngle]     = React.useState(0);
  const [legRAngle,     setLegRAngle]     = React.useState(0);
  const [shadowRx,      setShadowRx]      = React.useState(16);
  const [shadowOp,      setShadowOp]      = React.useState(0.28);
  const [eyeRy,         setEyeRy]         = React.useState(4);
  const [antennaOp,     setAntennaOp]     = React.useState(0.85);
  const [antennaGlowR,  setAntennaGlowR]  = React.useState(9);
  const [antennaGlowOp, setAntennaGlowOp] = React.useState(0.3);
  const [dotOpacity,    setDotOpacity]    = React.useState([0.5, 0.5, 0.5]);
  const [particles,     setParticles]     = React.useState([]);
  const [activeColor,   setActiveColor]   = React.useState(SECTIONS[0].color);
  const [statusText,    setStatusText]    = React.useState(SECTIONS[0].action);
  const [activeGlow,    setActiveGlow]    = React.useState(0);
  const [currentIdx,    setCurrentIdx]    = React.useState(0);
  const [hoveredIdx,    setHoveredIdx]    = React.useState(null);
  const [isJumping,     setIsJumping]     = React.useState(false);
  const [cars,          setCars]          = React.useState([
    { id: 0, x: 80,  speed: 1.1, color: "#f472b6", flipped: false, lane: -2.5 },
    { id: 1, x: 420, speed: 0.7, color: "#60a5fa", flipped: true,  lane:  2.5 },
    { id: 2, x: 240, speed: 1.4, color: "#34d399", flipped: false, lane: -2.5 },
  ]);

  /* ── speech box state ── */
  const [speechVisible, setSpeechVisible] = React.useState(true);
  const [speechSide,    setSpeechSide]    = React.useState("right");
  const [speechEmoji,   setSpeechEmoji]   = React.useState(SECTIONS[0].emoji);
  const [speechAction,  setSpeechAction]  = React.useState(SECTIONS[0].action);
  const [speechTip,     setSpeechTip]     = React.useState(SECTIONS[0].tip);
  const [speechColor,   setSpeechColor]   = React.useState(SECTIONS[0].color);
  const [speechTech,    setSpeechTech]    = React.useState(null);
  const [boxEdgeSvg,    setBoxEdgeSvg]    = React.useState(CX[0] + ROBOT_HALF_SVG + BOX_GAP_SVG);

  /* ── refs ── */
  const idleRef       = React.useRef(null);
  const walkRef       = React.useRef(null);
  const jumpRef       = React.useRef(null);
  const carRef        = React.useRef(null);
  const speechTimer   = React.useRef(null);
  const seqTimer      = React.useRef(null);
  const idleT         = React.useRef(0);
  const walkT         = React.useRef(0);
  const currentIdxRef = React.useRef(0);
  const isMovingRef   = React.useRef(false);
  const goingForward  = React.useRef(true);

  /* ══ helpers ══ */
  const stopIdle = () => { clearInterval(idleRef.current); idleRef.current = null; };
  const stopWalk = () => {
    cancelAnimationFrame(walkRef.current); walkRef.current = null;
    setArmLAngle(0); setArmRAngle(0); setLegLAngle(0); setLegRAngle(0);
    setRobotOffsetY(0); setShadowRx(16); walkT.current = 0;
  };
  const stopJump = () => { cancelAnimationFrame(jumpRef.current); jumpRef.current = null; };

  const startIdle = () => {
    stopIdle();
    idleRef.current = setInterval(() => {
      idleT.current += 0.08;
      const t = idleT.current;
      setRobotOffsetY(Math.sin(t) * 2.5);
      setAntennaOp(0.5 + Math.sin(t * 2) * 0.4);
      setAntennaGlowR(9 + Math.sin(t * 2) * 4);
      setAntennaGlowOp(0.2 + Math.sin(t * 2) * 0.3);
      setEyeRy(Math.floor(t * 5) % 50 > 47 ? 0.5 : 4);
      setDotOpacity([0, 1, 2].map(i => Math.abs(Math.sin(t * 3 - i)) > 0.5 ? 1 : 0.3));
    }, 40);
  };

  const spawnParticles = (cx, color) => {
    const burst = [30, 70, 110, 150, 210, 250, 290, 330].map((ang, i) => ({
      id: Date.now() + i, cx, cy: GROUND_Y - CIRCLE_R - 8, color,
      dx: Math.cos((ang * Math.PI) / 180) * 32,
      dy: Math.sin((ang * Math.PI) / 180) * 18,
    }));
    setParticles(burst);
    setTimeout(() => setParticles([]), 900);
  };

  /* ── tech tag renderer for speech box ── */
  const renderTechTags = (techs, color) => {
    const rows = [];
    for (let i = 0; i < techs.length; i += 3) rows.push(techs.slice(i, i + 3));
    return rows.map((row, ri) => (
      <div key={ri} style={{ display: "flex", gap: 3, marginTop: 3, flexWrap: "wrap" }}>
        {row.map((tech, ti) => (
          <span key={ti} style={{
            fontSize: 7,
            fontFamily: "monospace",
            background: color + "22",
            border: `1px solid ${color}55`,
            borderRadius: 3,
            padding: "1px 4px",
            color: color,
            fontWeight: 700,
            letterSpacing: "0.04em",
            whiteSpace: "nowrap",
          }}>{tech}</span>
        ))}
      </div>
    ));
  };

  /* ── circle content renderer ── */
  const renderCircleContent = (s, cx, cy, isActive, isHover) => {
    const col = isActive || isHover ? s.color : "rgba(196,181,253,0.8)";
    const subCol = isActive || isHover ? s.color : "rgba(196,181,253,0.5)";

    /* SKILLS circle — show top 3 techs stacked */
    if (s.id === "tech") {
      const tops = ["MongoDB", "React", "Node.js"];
      return (
        <>
          <text x={cx} y={cy - 9} textAnchor="middle" dominantBaseline="middle"
            fontSize={10} fontFamily="monospace" fill={col}
            style={{ transition: "all 0.25s" }}>{s.emoji}</text>
          {tops.map((t, ti) => (
            <text key={ti} x={cx} y={cy + 3 + ti * 7}
              textAnchor="middle" dominantBaseline="middle"
              fontSize={4.8} fontFamily="monospace" fontWeight={700}
              letterSpacing="0.04em"
              fill={isActive || isHover ? s.color : "rgba(196,181,253,0.55)"}
              style={{ transition: "all 0.25s" }}>{t}</text>
          ))}
        </>
      );
    }

    /* PRO CODER circle */
    if (s.id === "coding") {
      return (
        <>
          <text x={cx} y={cy - 10} textAnchor="middle" dominantBaseline="middle"
            fontSize={isHover ? 11 : 9} fontFamily="monospace" fill={col}
            style={{ transition: "all 0.25s" }}>{s.emoji}</text>
          <text x={cx} y={cy + 1} textAnchor="middle" dominantBaseline="middle"
            fontSize={5} fontFamily="monospace" fontWeight={700} letterSpacing="0.05em"
            fill={isActive || isHover ? s.color : "rgba(196,181,253,0.7)"}
            style={{ transition: "all 0.25s" }}>PRO</text>
          <text x={cx} y={cy + 8} textAnchor="middle" dominantBaseline="middle"
            fontSize={5} fontFamily="monospace" fontWeight={700} letterSpacing="0.05em"
            fill={isActive || isHover ? s.color : "rgba(196,181,253,0.7)"}
            style={{ transition: "all 0.25s" }}>CODER</text>
          <text x={cx} y={cy + 17} textAnchor="middle" dominantBaseline="middle"
            fontSize={4.2} fontFamily="monospace"
            fill={isActive || isHover ? s.color : "rgba(196,181,253,0.45)"}
            style={{ transition: "all 0.25s" }}>500+ solved</text>
        </>
      );
    }

    /* Default circles */
    return (
      <>
        <text x={cx} y={cy - 5} textAnchor="middle" dominantBaseline="middle"
          fontSize={isHover ? 13 : 11} fontFamily="monospace" fill={col}
          style={{ transition: "all 0.25s" }}>{s.emoji}</text>
        <text x={cx} y={cy + 11} textAnchor="middle" dominantBaseline="middle"
          fontSize={s.label.length > 7 ? 5.2 : 6.4} fontFamily="monospace"
          fontWeight={700} letterSpacing="0.05em" fill={subCol}
          style={{ transition: "all 0.25s" }}>{s.label}</text>
      </>
    );
  };

  /* ── show speech box ── */
  const showSpeech = React.useCallback((s, sIdx, atX) => {
    const useRight = sIdx <= 1;
    setSpeechEmoji(s.emoji);
    setSpeechAction(s.action);
    setSpeechTip(s.tip);
    setSpeechColor(s.color);
    setSpeechTech(s.techStack || null);
    setSpeechSide(useRight ? "right" : "left");
    if (useRight) {
      setBoxEdgeSvg(atX + ROBOT_HALF_SVG + BOX_GAP_SVG);
    } else {
      setBoxEdgeSvg(TOTAL - (atX - ROBOT_HALF_SVG - BOX_GAP_SVG));
    }
    setSpeechVisible(false);
    clearTimeout(speechTimer.current);
    speechTimer.current = setTimeout(() => {
      setSpeechVisible(true);
      speechTimer.current = setTimeout(() => setSpeechVisible(false), 2800);
    }, 60);
  }, []);

  /* ── auto-loop ── */
  const scheduleNext = React.useCallback(() => {
    seqTimer.current = setTimeout(() => {
      if (isMovingRef.current) return;
      const fromIdx = currentIdxRef.current;
      const fromX   = CX[fromIdx];
      if (goingForward.current) {
        const nextIdx = fromIdx + 1;
        if (nextIdx >= SECTIONS.length) {
          goingForward.current = false;
          doWalk(fromX, CX[0], 0);
        } else {
          doJump(fromX, CX[nextIdx], nextIdx);
        }
      } else {
        goingForward.current = true;
        scheduleNext();
      }
    }, 800);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ── jump animation ── */
  const doJump = React.useCallback((fromX, toX, idx) => {
    if (isMovingRef.current) return;
    isMovingRef.current = true;
    setIsJumping(true);
    stopIdle();
    const s     = SECTIONS[idx];
    const color = s.color;
    const dur   = 480;
    setActiveColor(color);
    setStatusText(s.action);
    setActiveGlow(idx);
    const startTime = performance.now();
    const animate = (now) => {
      const t    = Math.min((now - startTime) / dur, 1);
      const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      const curX = fromX + (toX - fromX) * ease;
      setRobotX(curX);
      setRobotOffsetY(-Math.sin(t * Math.PI) * 52);
      setArmLAngle(-28 * Math.sin(t * Math.PI));
      setArmRAngle( 28 * Math.sin(t * Math.PI));
      setShadowRx(16 - Math.sin(t * Math.PI) * 9);
      setShadowOp(0.28 + Math.sin(t * Math.PI) * 0.14);
      if (t < 1) {
        jumpRef.current = requestAnimationFrame(animate);
      } else {
        setRobotX(toX); setRobotOffsetY(0);
        setArmLAngle(0); setArmRAngle(0);
        setShadowRx(16); setShadowOp(0.28);
        spawnParticles(toX, color);
        currentIdxRef.current = idx;
        setCurrentIdx(idx);
        isMovingRef.current = false;
        setIsJumping(false);
        showSpeech(s, idx, toX);
        startIdle();
        scheduleNext();
      }
    };
    jumpRef.current = requestAnimationFrame(animate);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showSpeech, scheduleNext]);

  /* ── walk animation ── */
  const doWalk = React.useCallback((fromX, toX, idx) => {
    if (isMovingRef.current) return;
    isMovingRef.current = true;
    setIsJumping(true);
    stopJump(); stopIdle();
    const s     = SECTIONS[idx];
    const color = s.color;
    const dur   = Math.abs(toX - fromX) * 2.6;
    setActiveColor(color);
    setStatusText(s.action);
    setActiveGlow(idx);
    const startTime = performance.now();
    const animate = (now) => {
      const t = Math.min((now - startTime) / dur, 1);
      walkT.current += 0.18;
      const a    = Math.sin(walkT.current) * 15;
      const curX = fromX + (toX - fromX) * t;
      setRobotX(curX);
      setArmLAngle(a);  setArmRAngle(-a);
      setLegLAngle(a);  setLegRAngle(-a);
      setRobotOffsetY(Math.abs(Math.sin(walkT.current)) * -3);
      setShadowRx(16 - Math.abs(Math.sin(walkT.current)) * 4);
      if (t < 1) {
        walkRef.current = requestAnimationFrame(animate);
      } else {
        stopWalk();
        setRobotX(toX);
        spawnParticles(toX, color);
        currentIdxRef.current = idx;
        setCurrentIdx(idx);
        isMovingRef.current = false;
        setIsJumping(false);
        showSpeech(s, idx, toX);
        startIdle();
        scheduleNext();
      }
    };
    walkRef.current = requestAnimationFrame(animate);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showSpeech, scheduleNext]);

  /* ── manual click ── */
  const handleClick = (idx) => {
    if (isMovingRef.current || idx === currentIdxRef.current) return;
    clearTimeout(seqTimer.current);
    const fromX = CX[currentIdxRef.current];
    const toX   = CX[idx];
    if (Math.abs(idx - currentIdxRef.current) <= 2) {
      doJump(fromX, toX, idx);
    } else {
      doWalk(fromX, toX, idx);
    }
  };

  /* ── car loop ── */
  React.useEffect(() => {
    carRef.current = setInterval(() => {
      setCars(prev => prev.map(car => {
        let nx = car.flipped ? car.x - car.speed : car.x + car.speed;
        if (!car.flipped && nx > TOTAL + 30) nx = -30;
        if ( car.flipped && nx < -30)        nx = TOTAL + 30;
        return { ...car, x: nx };
      }));
    }, 16);
    return () => clearInterval(carRef.current);
  }, []);

  /* ── boot ── */
  React.useEffect(() => {
    startIdle();
    showSpeech(SECTIONS[0], 0, CX[0]);
    scheduleNext();

    const onScroll = () => {
      if (isMovingRef.current) return;
      const offsets = SECTIONS.map(({ id }) => {
        const el = document.getElementById(id);
        return el ? Math.abs(el.getBoundingClientRect().top - 120) : Infinity;
      });
      const closest = offsets.indexOf(Math.min(...offsets));
      if (closest >= 0 && closest !== currentIdxRef.current) {
        clearTimeout(seqTimer.current);
        const fromX = CX[currentIdxRef.current];
        doWalk(fromX, CX[closest], closest);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      stopIdle(); stopWalk(); stopJump();
      clearTimeout(seqTimer.current);
      clearTimeout(speechTimer.current);
      window.removeEventListener("scroll", onScroll);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ── derived layout ── */
  const roadSegments  = SECTIONS.slice(0, -1).map((_, i) => ({
    x1: CX[i] + CIRCLE_R,
    x2: CX[i + 1] - CIRCLE_R,
  }));
  const robotTranslateX = robotX - 43;
  const ROBOT_BASE_Y    = GROUND_Y - CIRCLE_R;

  const hasTech    = speechTech && speechTech.length > 0;
  const boxH       = hasTech ? 130 : 90;
  const speechBoxX = speechSide === "right"
    ? boxEdgeSvg
    : TOTAL - boxEdgeSvg - BOX_W_SVG;

  return (
    <div style={{ width: "100%", userSelect: "none", position: "relative" }}>
      <svg
        width="100%"
        viewBox="0 0 680 175"
        style={{ overflow: "visible", display: "block" }}
      >
        <defs>
          <pattern id="roadTex" patternUnits="userSpaceOnUse" width="20" height={ROAD_H}>
            <rect width="20" height={ROAD_H} fill="rgba(16,14,50,0.92)" />
            <line x1="0" y1={ROAD_H * 0.3} x2="20" y2={ROAD_H * 0.3}
              stroke="rgba(80,70,120,0.13)" strokeWidth="0.5" />
            <line x1="0" y1={ROAD_H * 0.7} x2="20" y2={ROAD_H * 0.7}
              stroke="rgba(80,70,120,0.09)" strokeWidth="0.5" />
          </pattern>
          <clipPath id="roadClip">
            {roadSegments.map((seg, i) => (
              <rect key={i} x={seg.x1} y={ROAD_TOP} width={seg.x2 - seg.x1} height={ROAD_H} />
            ))}
          </clipPath>
        </defs>

        {/* ══ ROAD ══ */}
        {roadSegments.map((seg, i) => (
          <rect key={`rf-${i}`} x={seg.x1} y={ROAD_TOP} width={seg.x2 - seg.x1} height={ROAD_H} fill="url(#roadTex)" />
        ))}
        {roadSegments.map((seg, i) => (
          <g key={`re-${i}`}>
            <line x1={seg.x1} y1={ROAD_TOP} x2={seg.x2} y2={ROAD_TOP} stroke="rgba(124,111,205,0.55)" strokeWidth="1.2" />
            <line x1={seg.x1} y1={ROAD_BOT} x2={seg.x2} y2={ROAD_BOT} stroke="rgba(124,111,205,0.55)" strokeWidth="1.2" />
          </g>
        ))}
        {roadSegments.map((seg, i) => (
          <g key={`lm-${i}`}>
            <line x1={seg.x1 + 6} y1={ROAD_TOP + 2} x2={seg.x2 - 6} y2={ROAD_TOP + 2} stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="12 8" />
            <line x1={seg.x1 + 6} y1={ROAD_BOT - 2} x2={seg.x2 - 6} y2={ROAD_BOT - 2} stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="12 8" />
            <line x1={seg.x1 + 8} y1={ROAD_MID}     x2={seg.x2 - 8} y2={ROAD_MID}     stroke="rgba(251,191,36,0.38)" strokeWidth="1.2" strokeDasharray="10 8" />
          </g>
        ))}

        {/* ══ CARS ══ */}
        <g clipPath="url(#roadClip)">
          {cars.map(car => (
            <MiniCar key={car.id} x={car.x} y={ROAD_MID + car.lane} color={car.color} flipped={car.flipped} scale={0.8} />
          ))}
        </g>

        {/* ══ SECTION CIRCLES ══ */}
        {SECTIONS.map((s, i) => {
          const cx       = CX[i];
          const isActive = activeGlow === i;
          const isHover  = hoveredIdx === i;
          const cy       = isHover ? GROUND_Y - 3 : GROUND_Y;
          return (
            <g
              key={s.id}
              style={{ cursor: isJumping ? "default" : "pointer" }}
              onClick={() => handleClick(i)}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {isActive && (
                <circle cx={cx} cy={GROUND_Y} r={CIRCLE_R + 10} fill="none" stroke={s.color} strokeWidth="1" opacity="0.2" />
              )}
              {isHover && !isActive && (
                <ellipse cx={cx} cy={GROUND_Y + CIRCLE_R + 3} rx={18} ry={4} fill="rgba(0,0,0,0.22)" />
              )}
              <circle
                cx={cx} cy={cy} r={CIRCLE_R}
                fill={isActive ? `${s.color}22` : isHover ? `${s.color}15` : "rgba(19,19,42,0.95)"}
                stroke={isActive || isHover ? s.color : "rgba(124,111,205,0.4)"}
                strokeWidth={isActive ? 2 : isHover ? 1.8 : 1.4}
                style={{ transition: "all 0.25s ease" }}
              />

              {renderCircleContent(s, cx, cy, isActive, isHover)}

              {/* Hover tooltip */}
              {isHover && (
                <g>
                  <rect x={cx - 58} y={GROUND_Y - CIRCLE_R - 38} width={116} height={22} rx={6}
                    fill="rgba(13,11,40,0.97)" stroke={s.color} strokeWidth="1" />
                  <polygon
                    points={`${cx - 5},${GROUND_Y - CIRCLE_R - 16} ${cx + 5},${GROUND_Y - CIRCLE_R - 16} ${cx},${GROUND_Y - CIRCLE_R - 10}`}
                    fill="rgba(13,11,40,0.97)" stroke={s.color} strokeWidth="1" strokeLinejoin="round"
                  />
                  <line x1={cx - 6} y1={GROUND_Y - CIRCLE_R - 16} x2={cx + 6} y2={GROUND_Y - CIRCLE_R - 16}
                    stroke="rgba(13,11,40,0.97)" strokeWidth="2" />
                  <text x={cx} y={GROUND_Y - CIRCLE_R - 25} textAnchor="middle" dominantBaseline="middle"
                    fontSize={7.5} fontFamily="monospace" fontWeight="600" fill={s.color} letterSpacing="0.06em"
                  >{s.tip}</text>
                </g>
              )}
            </g>
          );
        })}

        {/* ══ SPEECH BOX (foreignObject) ══ */}
        <foreignObject
          x={speechBoxX}
          y={ROBOT_BASE_Y - (hasTech ? 145 : 105)}
          width={BOX_W_SVG}
          height={boxH + 10}
          style={{
            opacity: speechVisible ? 1 : 0,
            transform: speechVisible
              ? "scale(1)"
              : speechSide === "right" ? "translateX(10px) scale(0.92)" : "translateX(-10px) scale(0.92)",
            transformOrigin: speechSide === "right" ? "left center" : "right center",
            transition: "opacity 0.35s cubic-bezier(.22,1,.36,1), transform 0.4s cubic-bezier(.22,1,.36,1)",
            overflow: "visible",
          }}
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              width: "100%",
              padding: "7px 11px",
              borderRadius: "12px",
              border: `2px solid ${speechColor}`,
              background: "rgba(13,11,40,0.97)",
              color: speechColor,
              fontFamily: "monospace",
              boxSizing: "border-box",
              position: "relative",
            }}
          >
            {/* Tail — points toward robot */}
            {speechSide === "right" && (
              <div style={{
                position: "absolute", left: -11, top: "50%", transform: "translateY(-50%)",
                width: 0, height: 0,
                borderTop: "7px solid transparent",
                borderBottom: "7px solid transparent",
                borderRight: `11px solid ${speechColor}`,
              }} />
            )}
            {speechSide === "left" && (
              <div style={{
                position: "absolute", right: -11, top: "50%", transform: "translateY(-50%)",
                width: 0, height: 0,
                borderTop: "7px solid transparent",
                borderBottom: "7px solid transparent",
                borderLeft: `11px solid ${speechColor}`,
              }} />
            )}

            <div style={{ fontSize: 14, marginBottom: 2 }}>{speechEmoji}</div>
            <div style={{ fontSize: 8, opacity: 0.5, fontWeight: 400, letterSpacing: "0.04em", marginBottom: 2 }}>
              {speechAction}
            </div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.06em", wordBreak: "break-word", marginBottom: hasTech ? 4 : 0 }}>
              {speechTip}
            </div>

            {/* Tech tags */}
            {hasTech && (
              <div style={{ marginTop: 2 }}>
                {(() => {
                  const rows = [];
                  for (let i = 0; i < speechTech.length; i += 3) rows.push(speechTech.slice(i, i + 3));
                  return rows.map((row, ri) => (
                    <div key={ri} style={{ display: "flex", gap: 3, marginTop: 3, flexWrap: "wrap" }}>
                      {row.map((tech, ti) => (
                        <span key={ti} style={{
                          fontSize: 7,
                          fontFamily: "monospace",
                          background: speechColor + "22",
                          border: `1px solid ${speechColor}55`,
                          borderRadius: 3,
                          padding: "1px 4px",
                          color: speechColor,
                          fontWeight: 700,
                          letterSpacing: "0.04em",
                          whiteSpace: "nowrap",
                        }}>{tech}</span>
                      ))}
                    </div>
                  ));
                })()}
              </div>
            )}
          </div>
        </foreignObject>

        {/* ══ ROBOT ══ */}
        <g transform={`translate(${robotTranslateX}, 0)`}>
          <g style={{ transform: `translateY(${robotOffsetY}px)` }}>
            <ellipse cx={43} cy={ROBOT_BASE_Y + 2} rx={shadowRx} ry={3} fill="rgba(0,0,0,0.3)" opacity={shadowOp} />

            {/* Legs */}
            <g style={{ transformOrigin: "37px 80px", transform: `rotate(${legLAngle}deg)` }}>
              <rect x={32} y={ROBOT_BASE_Y - 22} width={9}  height={16} rx={4.5} fill="#1e1b4b" />
              <rect x={29} y={ROBOT_BASE_Y - 8}  width={15} height={6}  rx={3}   fill={activeColor} style={{ transition: "fill 0.4s" }} />
            </g>
            <g style={{ transformOrigin: "49px 80px", transform: `rotate(${legRAngle}deg)` }}>
              <rect x={44} y={ROBOT_BASE_Y - 22} width={9}  height={16} rx={4.5} fill="#1e1b4b" />
              <rect x={41} y={ROBOT_BASE_Y - 8}  width={15} height={6}  rx={3}   fill={activeColor} style={{ transition: "fill 0.4s" }} />
            </g>

            {/* Body */}
            <rect x={27} y={ROBOT_BASE_Y - 55} width={30} height={33} rx={7}
              fill="#13132a" stroke={activeColor} strokeWidth={1.5} style={{ transition: "stroke 0.4s" }} />
            <rect x={32} y={ROBOT_BASE_Y - 49} width={20} height={12} rx={4}
              fill={`${activeColor}18`} stroke={`${activeColor}55`} strokeWidth={0.8} />
            {[0, 1, 2].map(i => (
              <circle key={i} cx={37 + i * 5.5} cy={ROBOT_BASE_Y - 43} r={2.2}
                fill={activeColor} opacity={dotOpacity[i]} style={{ transition: "fill 0.4s" }} />
            ))}
            <rect x={27} y={ROBOT_BASE_Y - 26} width={30} height={4.5} rx={2}
              fill={`${activeColor}25`} stroke={`${activeColor}40`} strokeWidth={0.7} />

            {/* Arms */}
            <g style={{ transformOrigin: "27px 60px", transform: `rotate(${armLAngle}deg)` }}>
              <rect x={13} y={ROBOT_BASE_Y - 53} width={14} height={20} rx={6} fill="#1e1b4b" stroke={activeColor} strokeWidth={1} />
              <circle cx={20} cy={ROBOT_BASE_Y - 31} r={4.5} fill={activeColor} opacity={0.85} style={{ transition: "fill 0.4s" }} />
            </g>
            <g style={{ transformOrigin: "57px 60px", transform: `rotate(${armRAngle}deg)` }}>
              <rect x={57} y={ROBOT_BASE_Y - 53} width={14} height={20} rx={6} fill="#1e1b4b" stroke={activeColor} strokeWidth={1} />
              <circle cx={64} cy={ROBOT_BASE_Y - 31} r={4.5} fill={activeColor} opacity={0.85} style={{ transition: "fill 0.4s" }} />
            </g>

            {/* Neck */}
            <rect x={37} y={ROBOT_BASE_Y - 62} width={11} height={8} rx={3}
              fill="#1e1b4b" stroke={`${activeColor}70`} strokeWidth={1} />

            {/* Head */}
            <rect x={23} y={ROBOT_BASE_Y - 97} width={38} height={36} rx={9}
              fill="#13132a" stroke={activeColor} strokeWidth={1.8} style={{ transition: "stroke 0.4s" }} />
            <rect x={29} y={ROBOT_BASE_Y - 90} width={26} height={13} rx={5}
              fill={`${activeColor}20`} stroke={`${activeColor}60`} strokeWidth={1} />

            {/* Eyes */}
            <ellipse cx={36} cy={ROBOT_BASE_Y - 84} rx={4.5} ry={eyeRy} fill={activeColor} opacity={0.95} style={{ transition: "fill 0.4s" }} />
            <ellipse cx={50} cy={ROBOT_BASE_Y - 84} rx={4.5} ry={eyeRy} fill={activeColor} opacity={0.95} style={{ transition: "fill 0.4s" }} />
            <circle cx={37.5} cy={ROBOT_BASE_Y - 85.5} r={1.4} fill="white" opacity={0.65} />
            <circle cx={51.5} cy={ROBOT_BASE_Y - 85.5} r={1.4} fill="white" opacity={0.65} />

            {/* Mouth */}
            <rect x={34} y={ROBOT_BASE_Y - 73} width={18} height={3.5} rx={1.75} fill={`${activeColor}40`} />
            <rect x={36} y={ROBOT_BASE_Y - 72} width={14} height={1.8} rx={0.9} fill={activeColor} opacity={0.55} />

            {/* Ear bolts */}
            <circle cx={23} cy={ROBOT_BASE_Y - 79} r={3} fill="#1e1b4b" stroke={activeColor} strokeWidth={1.1} />
            <circle cx={61} cy={ROBOT_BASE_Y - 79} r={3} fill="#1e1b4b" stroke={activeColor} strokeWidth={1.1} />

            {/* Antenna */}
            <line x1={42} y1={ROBOT_BASE_Y - 97} x2={42} y2={ROBOT_BASE_Y - 109}
              stroke={`${activeColor}99`} strokeWidth={1.8} strokeLinecap="round" />
            <circle cx={42} cy={ROBOT_BASE_Y - 113} r={4.5} fill={activeColor} opacity={antennaOp} style={{ transition: "fill 0.4s" }} />
            <circle cx={42} cy={ROBOT_BASE_Y - 113} r={antennaGlowR} fill="none" stroke={activeColor} strokeWidth={0.8} opacity={antennaGlowOp} />
          </g>
        </g>

        {/* ══ PARTICLES ══ */}
        {particles.map(p => (
          <circle key={p.id} cx={p.cx} cy={p.cy} r={3.2} fill={p.color} opacity={0}
            style={{ animation: "rpFade 0.85s ease-out forwards", "--dx": `${p.dx}px`, "--dy": `${p.dy}px` }}
          />
        ))}

        {/* ══ STATUS LABEL ══ */}
        <circle cx={robotX - 20} cy={ROBOT_BASE_Y - 122} r={3} fill={activeColor}
          style={{ transition: "fill 0.4s", animation: "rpPulse 1s infinite" }} />
        <text x={robotX + 2} y={ROBOT_BASE_Y - 118} textAnchor="middle"
          fontSize={7.5} fontFamily="monospace" fontWeight="700" letterSpacing="0.12em" fill={activeColor}
          style={{ transition: "fill 0.4s" }}
        >{statusText}</text>
      </svg>

      <style>{`
        @keyframes rpFade {
          0%   { transform: translate(0, 0);                 opacity: 0.88; }
          100% { transform: translate(var(--dx), var(--dy)); opacity: 0;    }
        }
        @keyframes rpPulse {
          0%, 100% { opacity: 1;   }
          50%       { opacity: 0.2; }
        }
      `}</style>
    </div>
  );
};


/* ══════════════════════════════════════════
   Hero Component
══════════════════════════════════════════ */
const Hero = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Crafting Elegant & Scalable Web Solutions",
        "Full-Stack Developer Turning Ideas into Reality",
        "Building Modern, High-Performance Web Experiences",
        "Code-Driven Solutions with Impact & Purpose",
      ],
      typeSpeed: 60,
      backSpeed: 35,
      backDelay: 1200,
      loop: true,
      showCursor: false,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section className="relative w-full min-h-screen mx-auto overflow-hidden">

      {/* ─────────────────────────────────────────────
          MOBILE LAYOUT
      ───────────────────────────────────────────── */}
      <div className="flex flex-col items-center px-4 pt-6 pb-28 lg:hidden">
        <div className="relative mt-4 flex-shrink-0">
          <div className="w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] rounded-full overflow-hidden border-2 border-[#915EFF] shadow-[0_0_18px_rgba(145,94,255,0.5)]">
            <img src={workspaceImg} alt="Ayushi" className="w-full h-full object-cover object-top" />
          </div>
          <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-black" />
        </div>

        <div className="flex gap-3 items-start w-full justify-center mt-5">
          <div className="flex flex-col items-center mt-2 flex-shrink-0">
            <div className="w-3 h-3 rounded-full bg-[#915EFF]" />
            <div className="w-[2px] h-28 violet-gradient" />
          </div>
          <div className="text-left">
            <h1 className={`${styles.heroHeadText} font-serif text-yellow-100 leading-tight`}>
              Hi, I&apos;m{" "}
              <span className="relative inline-block">
                <span className="text-yellow-400 uppercase italic">ayushi</span>
                <span className="absolute -inset-2 bg-yellow-400/20 blur-xl rounded-lg -z-10" />
              </span>
            </h1>
            <p className={`${styles.heroSubText} font-serif mt-2 text-white-100`}>
              Welcome to my digital space, where I craft meaningful web experiences.
            </p>
            <p ref={el} className="mt-2 text-[10px] sm:text-[12px] tracking-widest uppercase text-violet-400 font-mono min-h-[20px] block" />
          </div>
        </div>

        <div className="w-full mt-10 mb-4">
          <RobotPanel />
        </div>
        <div className="w-full mt-4 flex justify-center">
          <CodeBlock />
        </div>
      </div>

      {/* ─────────────────────────────────────────────
          DESKTOP LAYOUT
      ───────────────────────────────────────────── */}
      <div className="hidden lg:flex flex-row items-start justify-between">
        <div className="relative top-[80px] ml-10 w-[55%] px-6 z-10">
          <div className="flex gap-6 items-start justify-start">
            <div className="flex flex-col items-center mt-2">
              <div className="w-4 h-4 rounded-full bg-[#915EFF]" />
              <div className="w-[2px] h-80 violet-gradient" />
            </div>
            <div className="max-w-2xl text-left w-full">
              <div className="flex items-center gap-4 mb-2">
                <div className="relative flex-shrink-0">
                  <div className="w-[180px] h-[180px] rounded-full overflow-hidden border-2 border-[#915EFF] shadow-[0_0_18px_rgba(145,94,255,0.5)]">
                    <img src={workspaceImg} alt="Ayushi" className="w-full h-full object-cover object-top" />
                  </div>
                  <span className="absolute bottom-3 right-3 w-4 h-4 bg-green-400 rounded-full border-2 border-black" />
                </div>
                <h1 className={`${styles.heroHeadText} font-serif text-yellow-100 leading-tight`}>
                  Hi, I&apos;m{" "}
                  <span className="relative inline-block">
                    <span className="text-yellow-400 uppercase italic">ayushi</span>
                    <span className="absolute -inset-2 bg-yellow-400/20 blur-xl rounded-lg -z-10" />
                  </span>
                </h1>
              </div>
              <p className={`${styles.heroSubText} font-serif mt-2 text-white-100`}>
                Welcome to my digital space, where I craft meaningful web experiences.
              </p>
              <p ref={el} className="mt-2 text-[13px] md:text-[16px] tracking-widest uppercase text-violet-400 font-mono min-h-[22px]" />
              <div className="mt-4 w-full">
                <RobotPanel />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[42%] flex justify-start items-start mt-[90px] pr-10 pb-20 z-10">
          <CodeBlock />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

