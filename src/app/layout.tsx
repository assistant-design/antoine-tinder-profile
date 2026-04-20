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
  title: "Antoine | Handsome Finance 💎",
  description: "The only crypto bro channel your girlfriend likes to watch. Swipe right for gains.",
  openGraph: {
    title: "Antoine | Handsome Finance 💎",
    description: "Onchain market observer. Wallets, behavior, incentives. I explore new opportunities for you.",
    images: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=630&fit=crop"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
