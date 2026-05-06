"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-white/[0.02] -z-10" />
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-violet-400 font-medium text-sm tracking-widest uppercase mb-3">Sobre mim</p>
          <h2 className="text-3xl font-bold text-white mb-6">Quem sou eu</h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            Sou desenvolvedor web em início de carreira, focado em criar soluções que resolvem problemas reais. Tenho experiência com JavaScript, TypeScript, React e Next.js, e estou sempre aprendendo novas tecnologias.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Construo aplicações do zero — desde o design até o deploy — e me interesso tanto pelo frontend quanto pelo backend. Procuro uma oportunidade onde possa crescer, contribuir e aprender com uma equipe experiente.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { label: "Foco", value: "Web Development" },
            { label: "Nível", value: "Júnior" },
            { label: "Stack", value: "JS / TS / React" },
            { label: "Status", value: "Disponível ✓" },
          ].map((item) => (
            <div key={item.label} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-violet-500/30 transition-colors">
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">{item.label}</p>
              <p className="font-semibold text-white">{item.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}