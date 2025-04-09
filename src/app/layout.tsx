import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./CSS/global.css";
import "./CSS/TW@apply.css"

//Comps
import MusicPlayer from "./components/layout/MusicPlayer";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sahasawat Ruenkaew | Web Developer | BossBSynth",
  description: "BossBSynth is the personal website of Sahasawat Ruenkaew (Boss), a web developer based in Chiang Mai. Discover modern web applications, projects, development skills, and tech expertise.",
  keywords: "Sahasawat Ruenkaew, BossBSynth, Developer, Web Developer Chiang Mai, Next.js, React, Portfolio, Node.js, TypeScript",
  openGraph: {
    title: "Sahasawat Ruenkaew | Web Developer | BossBSynth",
    description: "Explore the portfolio of Sahasawat Ruenkaew (Boss), a web developer in Chiang Mai. Discover projects, skills, and innovative solutions.",
    url: "https://bossbsynth.com",
    siteName: "BossBSynth | Developer Portfolio",
    images: [
      {
        url: "https://boss-website-v2.vercel.app/preview.png",
        width: 1200,
        height: 630,
        alt: "Boss's Developer Portfolio Preview",
      },
    ],
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ SEO Meta Tags */}
        <meta name="author" content="Sahasawat Ruenkaew (Boss)" />
        <meta name="keywords" content="Sahasawat Ruenkaew, BossBSynth, Full-Stack Developer, Web Developer Chiang Mai, React, Next.js, Node.js, Portfolio" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* ✅ Open Graph for Social Media */}
        <meta property="og:title" content="Sahasawat Ruenkaew | Full-Stack Web Developer | BossBSynth" />
        <meta property="og:description" content="Explore modern web projects, skills, and tools from Boss – a full-stack developer based in Chiang Mai." />
        <meta property="og:url" content="https://bossbsynth.com" />
        <meta property="og:site_name" content="BossBSynth | Developer Portfolio" />
        <meta property="og:image" content="https://boss-website-v2.vercel.app/preview.png" />
        <meta property="og:type" content="website" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* ✅ Gray Grid Background */}
        <div className="grid-background"></div>

        {/* ✅ Main Content */}

        <MusicPlayer />
        <Nav />
        <div className="relative z-10">{children}</div>
        <Footer />
        <ScrollToTop/>
      </body>
    </html>
  );
}
