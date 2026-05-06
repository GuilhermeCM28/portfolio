"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto relative overflow-hidden">
      {/* Gradiente de fundo */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_#ede9fe_0%,_#ffffff_60%)]" />

      <motion.div
        className="max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="text-violet-600 font-medium text-sm tracking-widest uppercase mb-4">
          Disponível para oportunidades
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Guilherme<br />
          <span className="text-violet-600">Mayer</span>
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed mb-10">
          Desenvolvedor web focado em construir aplicações modernas, funcionais e com boa experiência para o usuário. Buscando oportunidades como dev júnior — frontend, backend ou fullstack.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a href="#projetos" className="px-6 py-3 bg-violet-600 text-white rounded-xl font-medium hover:bg-violet-700 transition-colors">
            Ver projetos
          </a>
          <a href="#contato" className="px-6 py-3 border border-gray-200 text-gray-700 rounded-xl font-medium hover:border-violet-300 hover:text-violet-600 transition-colors">
            Entre em contato
          </a>
        </div>
      </motion.div>
    </section>
  );
}