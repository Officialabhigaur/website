import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {Header} from "@/components/Header"
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
  title: "AVR  Services",
  description: "AVR offers online & offline tech courses in Data Analytics, AI Data Science, Full-Stack Development, DSA, UI/UX 100% placement support with hands-on projects and expert guidance",
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
        <Header/>
        {children}
      </body>
    </html>
  );
}
