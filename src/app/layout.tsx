import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Money Wise Foundation — Master Your Personal Finance",
  description:
    "Money Wise Foundation is a non-profit organisation dedicated to financial literacy. We empower underserved communities with the knowledge and tools to build lasting financial freedom.",
  keywords: ["non-profit", "financial literacy", "ngo", "financial education", "budgeting", "investing"],
  openGraph: {
    title: "Money Wise Foundation — Master Your Personal Finance",
    description:
      "A non-profit foundation dedicated to empowering underserved communities through accessible financial education.",
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
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[--background] text-[--foreground]">
        {children}
      </body>
    </html>
  );
}
