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
  title: "Boss' Website V2",
  description: "Boss' Website V2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* ✅ Gray Grid Background */}
        <div className="grid-background"></div>

        {/* ✅ Main Content */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
