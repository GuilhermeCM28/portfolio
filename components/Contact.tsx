"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" className="py-24 px-6">
      <div className="max-w-5xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-violet-600 font-medium text-sm tracking-widest uppercase mb-3">Contato</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Vamos conversar?</h2>
          <p className="text-gray-500 max-w-md mx-auto mb-4">
            Estou em busca de oportunidades como desenvolvedor júnior. Se tiver uma vaga ou quiser trocar uma ideia, me chama!
          </p>
          <p className="text-gray-400 text-sm mb-10">cm.guilherme28@gmail.com</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="mailto:cm.guilherme28@gmail.com" className="px-6 py-3 bg-violet-600 text-white rounded-xl font-medium hover:bg-violet-700 transition-colors">
              Enviar e-mail
            </a>
            <a href="https://www.linkedin.com/in/guilherme-mayer-5101762a7" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-gray-200 text-gray-700 rounded-xl font-medium hover:border-violet-300 hover:text-violet-600 transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/GuilhermeCM28" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-gray-200 text-gray-700 rounded-xl font-medium hover:border-violet-300 hover:text-violet-600 transition-colors">
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}