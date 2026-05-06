"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0a0f]/90 backdrop-blur border-b border-white/5 shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-bold text-white tracking-tight">GM<span className="text-violet-500">.</span></span>
        <div className="flex gap-8 text-sm text-slate-400">
          {["Sobre", "Projetos", "Habilidades", "Contato"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-violet-400 transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}