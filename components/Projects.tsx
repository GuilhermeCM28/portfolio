"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
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
    <section id="projetos" className="py-24 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-violet-600 font-medium text-sm tracking-widest uppercase mb-3">Portfólio</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Projetos</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
              className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-violet-200 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-violet-600 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700 transition-colors text-sm">
                    GitHub
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-violet-500 hover:text-violet-700 transition-colors text-sm font-medium">
                    Demo →
                  </a>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-violet-50 text-violet-600 text-xs rounded-full font-medium">
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
            className="border border-dashed border-gray-200 rounded-2xl p-6 flex items-center justify-center text-gray-300 text-sm"
          >
            Mais projetos em breve...
          </motion.div>
        </div>
      </div>
    </section>
  );
}