// // import React from "react";
// // import Tilt from "react-parallax-tilt";
// // import { motion } from "framer-motion";

// // import { styles } from "../styles";
// // import { github } from "../assets";
// // import { SectionWrapper } from "../hoc";
// // import { projects } from "../constants";
// // import { fadeIn, textVariant } from "../utils/motion";
// // import Carousel from "./Carousel";
// // import { useRef } from "react";



// // // const ProjectCard = ({
// // //   items,
// // //   index,
// // //   name,
// // //   description,
// // //   tags,
// // //   source_code_link,
// // // }) => {
// // //   return (
// // //     <div className="bg-tertiary p-5 rounded-2xl w-[360px] h-auto flex flex-col justify-between min-h-[480px]">
// // //       <div>
// // //         <div className="relative w-full bg-black/25 flex justify-center rounded-3xl overflow-hidden">
// // //           <Carousel
// // //             items={items}
// // //             baseWidth={320}
// // //             autoplay={true}
// // //             autoplayDelay={3000}
// // //             pauseOnHover={true}
// // //             loop={true}
// // //             round={false}
// // //           />

// // //           <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
// // //             <div
// // //               onClick={() => window.open(source_code_link, "_blank")}
// // //               className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
// // //             >
// // //               <img
// // //                 src={github}
// // //                 alt="source code"
// // //                 className="w-1/2 h-1/2 object-contain"
// // //               />
// // //             </div>
// // //           </div>
// // //         </div>

// // //         <div className="mt-2">
// // //           <h3 className="text-yellow-400 text-shadow-gold  font-bold text-[24px] font-serif uppercase">{name}</h3>
// // //           <p className="mt-2 text-secondary text-[14px] font-serif">{description}</p>
// // //         </div>
// // //       </div>

// // //       {/* Tags section at the bottom */}
// // //       <div className="mt-4 flex flex-wrap gap-2 uppercase">
// // //         {tags.map((tag) => (
// // //           <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
// // //             #{tag.name}
// // //           </p>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };
// // const ProjectCard = ({
// //   link,
// //   status,
// //   items,
// //   index,
// //   name,
// //   description,
// //   tags,
// //   source_code_link,
// // }) => {
// //   return (
// //     <div className="bg-tertiary p-5 rounded-2xl w-[360px] min-h-[500px] flex flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300">

// //       {/* ===== TOP SECTION ===== */}
// //       <div className="flex flex-col gap-4">

// //         {/* Carousel */}
// //         <div className="relative w-full bg-black/30 rounded-3xl overflow-hidden flex justify-center">
// //           <Carousel
// //             items={items}
// //             baseWidth={320}
// //             autoplay
// //             autoplayDelay={3000}
// //             pauseOnHover
// //             loop
// //             round={false}
// //           />

// //           {/* GitHub Button */}
// //           <div className="absolute top-3 right-3 card-img_hover">
// //             <button
// //               onClick={() => window.open(source_code_link, "_blank")}
// //               className="black-gradient w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 transition-transform"
// //             >
// //               <img
// //                 src={github}
// //                 alt="source code"
// //                 className="w-5 h-5 object-contain"
// //               />
// //             </button>
// //           </div>
// //         </div>

// //         {/* Project Title */}
// //         <h3 className="text-yellow-400 text-shadow-gold font-bold text-[22px] font-serif uppercase tracking-wide">
// //           {name}
// //         </h3>

// //         {/* Status + Live */}
// //         <div className="flex items-center justify-between px-3 py-2 rounded-lg border border-white/10 bg-black/20">

// //           {/* Status Badge */}
// //           {status ? (
// //             <span className="text-green-400 text-xs font-semibold uppercase flex items-center gap-1">
// //               ● Completed Project
// //             </span>
// //           ) : (
// //             <span className="text-yellow-400 text-xs font-semibold uppercase flex items-center gap-1 animate-pulse">
// //               ● Ongoing
// //             </span>
// //           )}

// //           {/* Live Button */}
// //           <span
// //             onClick={() => window.open(link, "_blank")}
// //             className="text-cyan-400 text-xs font-bold cursor-pointer hover:underline"
// //           >
// //             LIVE ↗
// //           </span>
// //         </div>

// //         {/* Description */}
// //         <p className="text-secondary text-[14px] leading-relaxed font-serif text-justify">
// //           {description}
// //         </p>
// //       </div>

// //       {/* ===== TAGS (BOTTOM FIXED) ===== */}
// //       <div className="mt-auto pt-4 flex flex-wrap gap-2 uppercase">
// //         {tags.map((tag) => (
// //           <span
// //             key={`${name}-${tag.name}`}
// //             className={`text-[12px] px-2 py-1 rounded-md bg-black/40 tracking-wide ${tag.color}`}
// //           >
// //             #{tag.name}
// //           </span>
// //         ))}
// //       </div>

// //     </div>

// //   );
// // };
// // const Works = () => {

// //   const scrollRef = useRef(null);

// //   const scrollLeft = () => {
// //     scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
// //   };

// //   const scrollRight = () => {
// //     scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
// //   };

// //   return (
// //     <>
// //       <motion.div variants={textVariant()}>
// //         <p className={`${styles.sectionSubText} italic font-serif `}>My work,</p>
// //         <h2 className={`${styles.sectionHeadText} italic font-serif`}>
// //          From Logic to Life
// //         </h2>
// //       </motion.div>

// //       <div className="w-full flex">
// //         <motion.div
// //           variants={fadeIn("", "", 0.1, 1)}
// //           className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
// //         >
// //           <p className="text-lg leading-8 text-justify font-serif">
// //             I'm <span className="font-semibold text-yellow-300">Ayushi Kumari</span>,
// //             a third-year B.Tech student in Electronics and Communication Engineering
// //             at BIT Mesra, with a strong focus on building scalable and efficient
// //             web applications.
// //           </p>

// //           <p className="text-lg leading-8 mt-4 text-justify font-serif">
// //             My journey into <span className="font-semibold text-pink-300">full-stack development</span>
// //             is fueled by a passion for transforming logic into real-world solutions.
// //             I enjoy working across the stack — from crafting responsive and modern
// //             interfaces using{" "}
// //             <span className="font-semibold text-violet-300">
// //               HTML, CSS, Tailwind CSS, JavaScript, and React
// //             </span>{" "}
// //             to building reliable backend systems with{" "}
// //             <span className="font-semibold text-green-300">
// //               Node.js, Express.js, and MongoDB
// //             </span>.
// //           </p>

// //           <p className="text-lg leading-8 mt-4 text-justify font-serif">
// //             Alongside development, I consistently sharpen my problem-solving skills
// //             by practicing{" "}
// //             <span className="font-semibold text-blue-300">
// //               Data Structures and Algorithms
// //             </span>{" "}
// //             on platforms like{" "}
// //             <span className="font-semibold text-red-300">
// //               LeetCode and GeeksforGeeks
// //             </span>, which has strengthened my understanding of time and space
// //             complexity and helped me write optimized, efficient code.
// //           </p>

// //           <p className="text-lg leading-8 mt-4 text-justify font-serif">
// //             With a strong interest in{" "}
// //             <span className="font-semibold text-indigo-300">UI/UX fundamentals</span>,
// //             I focus on building clean, accessible, and user-friendly interfaces while
// //             maintaining performance, scalability, and code quality.
// //           </p>

// //         </motion.div>
// //       </div>

// //          <div className="mt-10 mb-2 text-center">
// //   <h1
// //     className="font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]
// //                italic font-serif uppercase
// //                bg-gradient-to-r from-purple-200 via-purple-300 to-pink-300
// //                bg-clip-text text-transparent"
// //   >
// //     My Projects
// //   </h1>

// //   {/* Gradient underline */}
// //   <div className="mx-auto mt-2 h-[2px] w-32 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full" />

// //   {/* Subtitle */}
// //   <p className="mt-3 text-[11px] tracking-[0.3em] text-purple-200/60 uppercase font-light font-sans">
// //     Things I've built along the way
// //   </p>
// // </div>
// //       <div className="flex items-center relative">
// //         {/* Left Arrow */}
// //         <button
// //           onClick={scrollLeft}
// //           className="text-white text-3xl px-3 py-1 rounded-full bg-black/40 hover:bg-black/70 transition z-10"
// //         >
// //           &#8249;
// //         </button>

// //         {/* Scrollable Project Cards */}
// //         <div
// //           ref={scrollRef}
// //           className="relative mt-20 flex overflow-x-auto scrollbar-none gap-7 px-2"
// //         >
// //           {projects.map((project, index) => (
// //             <ProjectCard
// //               key={`project-${index}`}
// //               index={index}
// //               items={project.item}
// //               {...project}
// //             />
// //           ))}
// //         </div>

// //         {/* Right Arrow */}
// //         <button
// //           onClick={scrollRight}
// //           className="text-white text-3xl px-3 py-1 rounded-full bg-black/40 hover:bg-black/70 transition z-10"
// //         >
// //           &#8250;
// //         </button>
// //       </div>
// //     </>
// //   );
// // };

// // export default SectionWrapper(Works, "work");
// //////////////////////////////today ///////////////////
// import React from "react";
// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { github } from "../assets";
// import { SectionWrapper } from "../hoc";
// import { projects } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";
// import Carousel from "./Carousel";

// const ProjectCard = ({
//   link,
//   status,
//   items,
//   index,
//   name,
//   description,
//   tags,
//   source_code_link,
// }) => {
//   return (
//     <motion.div
//       variants={fadeIn("up", "spring", index * 0.15, 0.6)}
//       className="bg-tertiary rounded-2xl overflow-hidden flex flex-col shadow-lg
//                  hover:shadow-[0_8px_40px_rgba(139,92,246,0.25)] hover:-translate-y-1
//                  transition-all duration-300 border border-white/5"
//     >
//       {/* Carousel */}
//       <div className="relative w-full bg-black/30 flex justify-center">
//         <Carousel
//           items={items}
//           baseWidth={360}
//           autoplay={true}
//           autoplayDelay={3000}
//           pauseOnHover={true}
//           loop={true}
//           round={false}
//         />

//         {/* GitHub Button */}
//         <div className="absolute top-3 right-3 z-10">
//           <button
//             onClick={() => window.open(source_code_link, "_blank")}
//             className="black-gradient w-9 h-9 rounded-full flex items-center justify-center
//                        hover:scale-110 transition-transform shadow-md"
//             aria-label="View source code"
//           >
//             <img
//               src={github}
//               alt="source code"
//               className="w-[18px] h-[18px] object-contain"
//             />
//           </button>
//         </div>
//       </div>

//       {/* Body */}
//       <div className="p-5 flex flex-col flex-1 gap-3">

//         {/* Title */}
//         <h3
//           className="text-yellow-400 font-black text-[18px] font-serif uppercase tracking-wider leading-tight"
//           style={{ textShadow: "0 0 12px rgba(250,204,21,0.35)" }}
//         >
//           {name}
//         </h3>

//         {/* Status + Live */}
//         <div className="flex items-center justify-between px-3 py-1.5 rounded-lg
//                         border border-white/10 bg-black/25 text-[11px] font-semibold uppercase tracking-widest">
//           {status ? (
//             <span className="text-emerald-400 flex items-center gap-1">
//               ● Completed
//             </span>
//           ) : (
//             <span className="text-yellow-400 animate-pulse flex items-center gap-1">
//               ● Ongoing
//             </span>
//           )}
//           <span
//             onClick={() => window.open(link, "_blank")}
//             className="text-cyan-400 cursor-pointer hover:text-cyan-300 hover:underline transition-colors"
//           >
//             LIVE ↗
//           </span>
//         </div>

//         {/* Description */}
//         <p className="text-secondary text-[13px] leading-[1.65] font-serif text-justify flex-1">
//           {description}
//         </p>

//         {/* Tags */}
//         <div className="flex flex-wrap gap-2 pt-1">
//           {tags.map((tag) => (
//             <span
//               key={`${name}-${tag.name}`}
//               className={`text-[11px] px-2 py-0.5 rounded bg-black/40 tracking-wide uppercase font-mono ${tag.color}`}
//             >
//               #{tag.name}
//             </span>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const Works = () => {
//   return (
//     <>
//       {/* Section Header */}
//       <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText} italic font-serif`}>My work,</p>
//         <h2 className={`${styles.sectionHeadText} italic font-serif`}>
//           From Logic to Life
//         </h2>
//       </motion.div>

//       {/* Bio */}
//       <div className="w-full flex">
//         <motion.div
//           variants={fadeIn("", "", 0.1, 1)}
//           className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
//         >
//           <p className="text-lg leading-8 text-justify font-serif">
//             I'm <span className="font-semibold text-yellow-300">Ayushi Kumari</span>,
//             a third-year B.Tech student in Electronics and Communication Engineering
//             at BIT Mesra, with a strong focus on building scalable and efficient
//             web applications.
//           </p>

//           <p className="text-lg leading-8 mt-4 text-justify font-serif">
//             My journey into{" "}
//             <span className="font-semibold text-pink-300">full-stack development</span>{" "}
//             is fueled by a passion for transforming logic into real-world solutions.
//             I enjoy working across the stack — from crafting responsive and modern
//             interfaces using{" "}
//             <span className="font-semibold text-violet-300">
//               HTML, CSS, Tailwind CSS, JavaScript, and React
//             </span>{" "}
//             to building reliable backend systems with{" "}
//             <span className="font-semibold text-green-300">
//               Node.js, Express.js, and MongoDB
//             </span>.
//           </p>

//           <p className="text-lg leading-8 mt-4 text-justify font-serif">
//             Alongside development, I consistently sharpen my problem-solving skills
//             by practicing{" "}
//             <span className="font-semibold text-blue-300">
//               Data Structures and Algorithms
//             </span>{" "}
//             on platforms like{" "}
//             <span className="font-semibold text-red-300">
//               LeetCode and GeeksforGeeks
//             </span>, which has strengthened my understanding of time and space
//             complexity and helped me write optimized, efficient code.
//           </p>

//           <p className="text-lg leading-8 mt-4 text-justify font-serif">
//             With a strong interest in{" "}
//             <span className="font-semibold text-indigo-300">UI/UX fundamentals</span>,
//             I focus on building clean, accessible, and user-friendly interfaces while
//             maintaining performance, scalability, and code quality.
//           </p>
//         </motion.div>
//       </div>

//       {/* My Projects Heading */}
//       <div className="mt-14 mb-8 text-center">
//         <h1
//           className="font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]
//                      italic font-serif uppercase
//                      bg-gradient-to-r from-purple-200 via-purple-300 to-pink-300
//                      bg-clip-text text-transparent"
//         >
//           My Projects
//         </h1>
//         <div className="mx-auto mt-2 h-[2px] w-32 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full" />
//         <p className="mt-3 text-[11px] tracking-[0.3em] text-purple-200/60 uppercase font-light font-sans">
//           Things I've built along the way
//         </p>
//       </div>

//       {/* 3-Column Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
//         {projects.map((project, index) => (
//           <ProjectCard
//             key={`project-${index}`}
//             index={index}
//             items={project.item}
//             {...project}
//           />
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Works, "work");
///////////////////////// updated2



import React, { useRef } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Carousel from "./Carousel";

/* ─── Category label per project index ─── */
const categoryLabels = [
  "AI PLATFORM",
  "FULL STACK",
  "E-COMMERCE",
  "PORTFOLIO",
  "WEB APP",
];

const ProjectCard = ({
  link,
  status,
  items,
  index,
  name,
  description,
  tags,
  source_code_link,
}) => {
  const num = String(index + 1).padStart(2, "0");
  const category = categoryLabels[index] || "PROJECT";

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.12, 0.55)}
      className="group relative flex flex-col rounded-[20px] overflow-hidden
                 border border-[rgba(124,111,205,0.18)]
                 bg-[#13132a]
                 transition-all duration-300
                 hover:-translate-y-[6px]
                 hover:border-[rgba(124,111,205,0.42)]
                 hover:shadow-[0_20px_60px_rgba(124,58,237,0.22),0_0_0_1px_rgba(124,111,205,0.35)]"
      style={{ cursor: "default" }}
    >
      {/* ── Top accent line (visible on hover) ── */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(90deg, #7c3aed, #ec4899, #f97316)",
        }}
      />

      {/* ── Image / Carousel ── */}
      <div className="relative w-full h-[186px] bg-[#0a0a18] overflow-hidden">
        <div className="w-full h-full transition-transform duration-400 group-hover:scale-[1.03]">
          <Carousel
            items={items}
            baseWidth={380}
            autoplay={true}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
        </div>

        {/* Index + Category badge */}
        <div
          className="absolute top-3 left-3 z-10 flex items-center gap-1.5
                     px-2.5 py-1 rounded-md
                     backdrop-blur-sm
                     border border-[rgba(124,111,205,0.28)]
                     bg-[rgba(13,13,26,0.82)]"
        >
          <span
            className="font-mono text-[9px] font-medium tracking-[0.12em] uppercase"
            style={{ color: "#c4b5fd" }}
          >
            {num}
          </span>
          <span style={{ color: "rgba(124,111,205,0.45)", fontSize: 9 }}>│</span>
          <span
            className="font-mono text-[9px] font-medium tracking-[0.12em] uppercase"
            style={{ color: "#9d8fd4" }}
          >
            {category}
          </span>
        </div>

        {/* GitHub button */}
     <button
  onClick={() => window.open(source_code_link, "_blank")}
  className="absolute top-3 right-3 z-10
             w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center
             backdrop-blur-sm border border-[rgba(124,111,205,0.28)]
             bg-[rgba(13,13,26,0.82)]
             hover:bg-[rgba(124,58,237,0.35)]
             hover:border-[rgba(124,111,205,0.65)]
             transition-all duration-200"
  aria-label="GitHub source"
>
          
          <img
  src={github}
  alt="GitHub"
  className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] object-contain"
/>
        </button>
      </div>

      {/* ── Status bar ── */}
      <div
        className="flex items-center justify-between px-4 py-2.5
                   bg-[rgba(0,0,0,0.28)]
                   border-b border-[rgba(124,111,205,0.1)]"
      >
        {status ? (
          <div className="flex items-center gap-1.5">
            <span
              className="w-[6px] h-[6px] rounded-full"
              style={{
                background: "#34d399",
                boxShadow: "0 0 6px rgba(52,211,153,0.65)",
              }}
            />
            <span
              className="font-mono text-[9.5px] font-medium tracking-[0.1em] uppercase"
              style={{ color: "#34d399" }}
            >
              Completed
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-1.5">
            <span
              className="w-[6px] h-[6px] rounded-full animate-pulse"
              style={{
                background: "#fbbf24",
                boxShadow: "0 0 6px rgba(251,191,36,0.65)",
              }}
            />
            <span
              className="font-mono text-[9.5px] font-medium tracking-[0.1em] uppercase"
              style={{ color: "#fbbf24" }}
            >
              Ongoing
            </span>
          </div>
        )}

        <button
          onClick={() => window.open(link, "_blank")}
          className="font-mono text-[9.5px] font-medium tracking-[0.1em] uppercase
                     px-2.5 py-1 rounded-[5px]
                     border border-[rgba(34,211,238,0.28)]
                     transition-all duration-200
                     hover:bg-[rgba(34,211,238,0.1)]
                     hover:border-[rgba(34,211,238,0.55)]"
          style={{ color: "#22d3ee" }}
        >
          LIVE ↗
        </button>
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col flex-1 gap-3 p-5">

        {/* Title */}
        <h3
          className="font-serif font-bold text-[17px] uppercase tracking-[0.06em] leading-tight"
          style={{
            color: "#f5d87a",
            textShadow: "0 0 14px rgba(245,216,122,0.3)",
          }}
        >
          {name}
        </h3>

        {/* Description */}
        <p
          className="text-[12.5px] leading-[1.75] flex-1 text-justify font-light"
          style={{ color: "#a29ec0" }}
        >
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-[6px] pt-1">
          {tags.map((tag) => {
            const colorMap = {
              "blue-text-gradient":   { color: "#60a5fa", bg: "rgba(96,165,250,0.09)",  border: "rgba(96,165,250,0.22)"  },
              "green-text-gradient":  { color: "#34d399", bg: "rgba(52,211,153,0.09)",  border: "rgba(52,211,153,0.22)"  },
              "pink-text-gradient":   { color: "#f472b6", bg: "rgba(244,114,182,0.09)", border: "rgba(244,114,182,0.22)" },
              "yellow-text-gradient": { color: "#fbbf24", bg: "rgba(251,191,36,0.09)",  border: "rgba(251,191,36,0.22)"  },
              "orange-text-gradient": { color: "#fb923c", bg: "rgba(249,115,22,0.09)",  border: "rgba(249,115,22,0.22)"  },
            };
            const c = colorMap[tag.color] || colorMap["blue-text-gradient"];
            return (
              <span
                key={`${name}-${tag.name}`}
                className="font-mono text-[9px] font-medium tracking-[0.1em] uppercase px-2.5 py-[3px] rounded-[5px]"
                style={{
                  color: c.color,
                  background: c.bg,
                  border: `1px solid ${c.border}`,
                }}
              >
                #{tag.name}
              </span>
            );
          })}
        </div>
      </div>

      {/* ── Bottom accent bar ── */}
      <div
        className="h-[3px] opacity-40 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(90deg, #7c3aed 0%, #ec4899 50%, #f97316 100%)",
        }}
      />
    </motion.div>
  );
};

/* ═══════════════════════════════
   Works Section
═══════════════════════════════ */
const Works = () => {
  return (
    <>
      {/* ── Section header ── */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} italic font-serif`}>My work,</p>
        <h2 className={`${styles.sectionHeadText} italic font-serif`}>
          From Logic to Life
        </h2>
      </motion.div>

      {/* ── Bio ── */}
      <div className="w-full flex">
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          <p className="text-lg leading-8 text-justify font-serif">
            I'm <span className="font-semibold text-yellow-300">Ayushi Kumari</span>,
            a third-year B.Tech student in Electronics and Communication Engineering
            at BIT Mesra, with a strong focus on building scalable and efficient
            web applications.
          </p>

          <p className="text-lg leading-8 mt-4 text-justify font-serif">
            My journey into{" "}
            <span className="font-semibold text-pink-300">full-stack development</span>{" "}
            is fueled by a passion for transforming logic into real-world solutions.
            I enjoy working across the stack — from crafting responsive interfaces using{" "}
            <span className="font-semibold text-violet-300">
              HTML, CSS, Tailwind CSS, JavaScript, and React
            </span>{" "}
            to building reliable backend systems with{" "}
            <span className="font-semibold text-green-300">
              Node.js, Express.js, and MongoDB
            </span>.
          </p>

          <p className="text-lg leading-8 mt-4 text-justify font-serif">
            Alongside development, I consistently sharpen problem-solving skills
            by practicing{" "}
            <span className="font-semibold text-blue-300">
              Data Structures and Algorithms
            </span>{" "}
            on{" "}
            <span className="font-semibold text-red-300">
              LeetCode and GeeksforGeeks
            </span>, writing optimized, complexity-aware code every day.
          </p>

          <p className="text-lg leading-8 mt-4 text-justify font-serif">
            With a strong interest in{" "}
            <span className="font-semibold text-indigo-300">UI/UX fundamentals</span>,
            I focus on building clean, accessible, and user-friendly interfaces while
            maintaining performance, scalability, and code quality.
          </p>
        </motion.div>
      </div>

      {/* ── "My Projects" heading ── */}
      <div className="mt-16 mb-10 text-center">
        {/* Mono label */}
        {/* <p
          className="font-mono text-[11px] tracking-[0.35em] uppercase mb-3"
          style={{ color: "#7c6fcd" }}
        >
          // portfolio
        </p> */}

        <h1
          className="font-black md:text-[58px] sm:text-[48px] xs:text-[38px] text-[28px]
                     italic font-serif uppercase"
          style={{
            background: "linear-gradient(135deg, #e2d9f3 0%, #c084fc 40%, #f472b6 75%, #fb923c 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          My Projects
        </h1>

        {/* Gradient underline */}
        <div
          className="mx-auto mt-3 h-[2px] w-28 rounded-full"
          style={{
            background: "linear-gradient(90deg, #7c3aed, #ec4899, #f97316)",
          }}
        />

        <p
          className="mt-3 font-mono text-[10px] tracking-[0.3em] uppercase font-light"
          style={{ color: "rgba(196,181,253,0.45)" }}
        >
          Things I've built along the way
        </p>
      </div>

      {/* ── 3-column grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            items={project.item}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
