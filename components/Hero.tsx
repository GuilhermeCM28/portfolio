"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto relative overflow-hidden">
      {/* Glow de fundo */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl -z-10" />

      <motion.div
        className="max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-medium tracking-widest uppercase mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          Disponível para oportunidades
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6 dark:text-white">
          Guilherme<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
            Mayer
          </span>
        </h1>

        <p className="text-lg text-slate-700 leading-relaxed mb-10 max-w-lg dark:text-slate-400">
          Desenvolvedor web focado em construir aplicações modernas, funcionais e com boa experiência para o usuário. Buscando oportunidades como dev júnior frontend, backend ou fullstack.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a href="#projetos" className="px-6 py-3 bg-violet-600 text-white rounded-xl font-medium hover:bg-violet-500 transition-colors shadow-lg shadow-violet-600/25">
            Ver projetos
          </a>
          <a href="#contato" className="px-6 py-3 border border-white/10 text-slate-300 rounded-xl font-medium hover:border-violet-500/50 hover:text-violet-400 transition-colors dark:border-white/10 dark:text-slate-300 dark:hover:border-violet-500/50 dark:hover:text-violet-400">
            Entre em contato
          </a>
        </div>
      </motion.div>
    </section>
  );
}