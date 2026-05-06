export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5 text-center text-sm text-slate-600">
      © {new Date().getFullYear()} Guilherme Castro Mayer — Feito com Next.js
    </footer>
  );
}