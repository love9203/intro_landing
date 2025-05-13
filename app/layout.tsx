import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MainNavigation } from "../components/sections/main-navigation";
import Footer from "../components/ui/footer";
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
  title: "Your Company | Modern Solutions",
  description: "Your company's modern solutions for today's challenges",
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
        <MainNavigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
