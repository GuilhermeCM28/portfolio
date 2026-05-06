"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "StudySnap",
    description: "Aplicação que gera flashcards de estudo automaticamente usando IA. O usuário cola um texto e recebe perguntas e respostas para revisar o conteúdo.",
    tags: ["Next.js", "TypeScript", "Claude AI", "Supabase"],
    link: "https://study-snap-weld.vercel.app",
    github: "https://github.com/GuilhermeCM28/StudySnap",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projetos" className="py-24 px-6 bg-white dark:bg-[#0a0a0f]">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-violet-400 font-medium text-sm tracking-widest uppercase mb-3">Portfólio</p>
          <h2 className="text-3xl font-bold text-slate-900 mb-12 dark:text-white">Projetos</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
              className="group bg-slate-100 border border-slate-200 rounded-2xl p-6 hover:border-violet-500/40 hover:bg-slate-50 transition-all dark:bg-white/5 dark:border-white/10 dark:hover:border-violet-500/40 dark:hover:bg-white/[0.07]"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-slate-900 group-hover:text-violet-500 transition-colors dark:text-white dark:group-hover:text-violet-400">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900 transition-colors text-sm dark:text-slate-500 dark:hover:text-slate-300">
                    GitHub
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 transition-colors text-sm font-medium dark:text-violet-400 dark:hover:text-violet-300">
                    Demo →
                  </a>
                </div>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed mb-4 dark:text-slate-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="border border-dashed border-slate-200 rounded-2xl p-6 flex items-center justify-center text-slate-700 text-sm dark:border-white/10 dark:text-slate-400"
          >
            Mais projetos em breve...
          </motion.div>
        </div>
      </div>
    </section>
  );
}