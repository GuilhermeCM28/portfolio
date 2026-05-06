"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="contato" className="py-24 px-6 relative overflow-hidden bg-white dark:bg-[#0a0a0f]">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl -z-10 dark:bg-violet-600/10" />
      <div className="max-w-5xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-violet-400 font-medium text-sm tracking-widest uppercase mb-3">Contato</p>
          <h2 className="text-3xl font-bold text-slate-900 mb-4 dark:text-white">Vamos conversar?</h2>
          <p className="text-slate-700 max-w-md mx-auto mb-4 dark:text-slate-400">
            Estou em busca de oportunidades como desenvolvedor júnior. Se tiver uma vaga ou quiser trocar uma ideia, me chama!
          </p>
          <p className="text-slate-500 text-sm mb-10 dark:text-slate-400">cm.guilherme28@gmail.com</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="mailto:cm.guilherme28@gmail.com" className="px-6 py-3 bg-violet-600 text-white rounded-xl font-medium hover:bg-violet-500 transition-colors shadow-lg shadow-violet-600/25">
              Enviar e-mail
            </a>
            <a href="https://www.linkedin.com/in/guilherme-mayer-5101762a7" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-white/10 text-slate-300 rounded-xl font-medium hover:border-violet-500/50 hover:text-violet-400 transition-colors dark:border-white/10 dark:text-slate-300 dark:hover:border-violet-500/50 dark:hover:text-violet-400" aria-label="Visitar perfil no LinkedIn">
              LinkedIn
            </a>
            <a href="https://github.com/GuilhermeCM28" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-white/10 text-slate-300 rounded-xl font-medium hover:border-violet-500/50 hover:text-violet-400 transition-colors dark:border-white/10 dark:text-slate-300 dark:hover:border-violet-500/50 dark:hover:text-violet-400" aria-label="Visitar perfil no GitHub">
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}