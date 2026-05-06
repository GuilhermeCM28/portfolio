"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { category: "Frontend", items: ["HTML & CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "API REST", "Supabase", "PostgreSQL"] },
  { category: "Ferramentas", items: ["Git & GitHub", "Vercel", "VS Code"] },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="habilidades" className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-violet-600 font-medium text-sm tracking-widest uppercase mb-3">Tecnologias</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Habilidades</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 + 0.2 }}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
            >
              <h3 className="font-semibold text-gray-800 mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-50 border border-gray-100 text-gray-600 text-sm rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}