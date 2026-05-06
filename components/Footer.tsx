export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-slate-200/50 text-center text-sm text-slate-600 dark:border-white/5 dark:text-slate-400">
      © {new Date().getFullYear()} Guilherme Castro Mayer Feito com Next.js
    </footer>
  );
}