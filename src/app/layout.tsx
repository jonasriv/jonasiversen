import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jonas Iversen — Fullstack-utvikler",
  description:
    "Fullstack-utvikler med erfaring innen Next.js, Node, Supabase og KI. Leverer komplett: webdev, design, hosting og drift.",
  openGraph: {
    title: "Jonas Iversen — Fullstack-utvikler",
    description:
      "Fullstack-utvikler med erfaring innen Next.js, Node, Supabase og KI.",
    url: "https://jonasiversen.no",
    siteName: "jonasiversen.no",
    locale: "nb_NO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nb"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-950 text-zinc-100">{children}</body>
    </html>
  );
}
