"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0a0f]/90 backdrop-blur border-b border-white/5 shadow-lg dark:bg-[#0a0a0f]/90 dark:border-white/5" : "bg-transparent dark:bg-transparent"}`}>
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-bold text-white tracking-tight dark:text-white">GM<span className="text-violet-500">.</span></span>
        <div className="flex items-center gap-8">
          <div className="flex gap-8 text-sm text-slate-400 dark:text-slate-400">
            {["Sobre", "Projetos", "Habilidades", "Contato"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-violet-400 transition-colors dark:hover:text-violet-400">
                {item}
              </a>
            ))}
          </div>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-violet-500/50 transition-colors dark:bg-white/5 dark:border-white/10 dark:hover:border-violet-500/50"
            aria-label="Alternar tema claro/escuro"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}