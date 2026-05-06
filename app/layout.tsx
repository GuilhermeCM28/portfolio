import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guilherme Mayer — Dev",
  description: "Portfólio de Guilherme Castro Mayer, desenvolvedor web.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${geist.className} bg-[#0a0a0f] text-slate-200`}>{children}</body>
    </html>
  );
}