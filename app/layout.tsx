import type { Metadata } from "next";
import { Elsie, Abril_Fatface, Almendra_Display, Libre_Caslon_Display, Love_Light, Gloock } from "next/font/google";
import "./globals.css";

const elsie = Elsie({ weight: ['400', '900'], subsets: ['latin'], variable: '--font-elsie' });
const abril = Abril_Fatface({ weight: '400', subsets: ['latin'], variable: '--font-abril' });
const almendra = Almendra_Display({ weight: '400', subsets: ['latin'], variable: '--font-almendra' });
const libre = Libre_Caslon_Display({ weight: '400', subsets: ['latin'], variable: '--font-libre' });
const love = Love_Light({ weight: '400', subsets: ['latin'], variable: '--font-love' });
const gloock = Gloock({ weight: '400', subsets: ['latin'], variable: '--font-gloock' });

export const metadata: Metadata = {
  title: "AUDIOBITES | Where Food Meets Music",
  description: "Craving flavors that sing? Let your taste buds and soul harmonize here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${elsie.variable} ${abril.variable} ${almendra.variable} ${libre.variable} ${love.variable} ${gloock.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-black text-white">{children}</body>
    </html>
  );
}
