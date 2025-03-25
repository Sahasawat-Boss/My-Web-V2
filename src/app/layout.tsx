import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./CSS/global.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boss's Website | Developer",
  description: "Welcome to Boss's Website. Explore my projects, skills, and portfolio.",
  keywords: "Full-Stack Developer, Web Developer, Next.js, React, Boss, bossbsynth",
  openGraph: {
    title: "Boss's Website | Developer",
    description: "Explore my projects, skills, and portfolio.",
    url: "https://bossbsynth.com",
    siteName: "Boss's Portfolio",
    images: [
      {
        url: "https://boss-website-v2.vercel.app/preview.png",
        width: 1200,
        height: 630,
        alt: "Boss Portfolio",
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
        <meta name="author" content="Boss Sahasawat" />
        <meta name="keywords" content="Full-Stack Developer, Web Developer, Next.js, React, Boss, bossbsynth" />
        <meta name="robots" content="index, follow" />

        {/* ✅ Open Graph for Social Media */}
        <meta property="og:title" content="Boss's Website | Developer" />
        <meta property="og:description" content="Explore my projects, skills, and portfolio." />
        <meta property="og:url" content="https://bossbsynth.com" />
        <meta property="og:site_name" content="Boss's Portfolio" />
        <meta property="og:image" content="https://boss-website-v2.vercel.app/preview.png" />
        <meta property="og:type" content="website" />

      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* ✅ Gray Grid Background */}
        <div className="grid-background"></div>

        {/* ✅ Main Content */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
