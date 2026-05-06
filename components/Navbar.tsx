"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const currentTheme = mounted ? theme : "dark";

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur border-b border-slate-200/20 shadow-lg dark:bg-[#0a0a0f]/90 dark:border-white/5" : "bg-transparent"}`}>
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-bold text-slate-900 tracking-tight dark:text-white">GM<span className="text-violet-500">.</span></span>
        <div className="flex items-center gap-8">
          <div className="flex gap-8 text-sm text-slate-600 dark:text-slate-400">
            {["Sobre", "Projetos", "Habilidades", "Contato"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-violet-500 transition-colors dark:hover:text-violet-400">
                {item}
              </a>
            ))}
          </div>
          <button
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg bg-slate-100 border border-slate-200 hover:border-violet-500/50 transition-colors text-slate-900 dark:bg-white/5 dark:border-white/10 dark:text-slate-200 dark:hover:border-violet-500/50"
            aria-label="Alternar tema claro/escuro"
          >
            {currentTheme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}