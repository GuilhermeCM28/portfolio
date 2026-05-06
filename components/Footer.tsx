export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-100 text-center text-sm text-gray-400">
      © {new Date().getFullYear()} Guilherme Castro Mayer — Feito com Next.js
    </footer>
  );
}