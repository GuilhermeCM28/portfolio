import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guilherme Mayer — Dev",
  description: "Portfólio de Guilherme Castro Mayer, desenvolvedor web.",
  openGraph: {
    title: "Guilherme Mayer — Dev",
    description: "Portfólio de Guilherme Castro Mayer, desenvolvedor web focado em aplicações modernas.",
    url: "https://seu-dominio.com", // Substitua pelo seu domínio real
    siteName: "Portfólio Guilherme Mayer",
    images: [
      {
        url: "https://seu-dominio.com/og-image.jpg", // Adicione uma imagem Open Graph (ex.: screenshot do portfólio)
        width: 1200,
        height: 630,
        alt: "Portfólio de Guilherme Mayer",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guilherme Mayer — Dev",
    description: "Portfólio de Guilherme Castro Mayer, desenvolvedor web.",
    images: ["https://seu-dominio.com/og-image.jpg"], // Mesma imagem
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/fonts/Geist-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className={`${geist.className} bg-white text-slate-900 dark:bg-[#0a0a0f] dark:text-slate-200`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}