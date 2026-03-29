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
    "Money Wise Foundation helps you take control of your money through budgeting, smart investing, and debt elimination strategies. Start building real financial freedom today.",
  keywords: ["financial literacy", "budgeting", "investing", "debt management", "personal finance"],
  openGraph: {
    title: "Money Wise Foundation — Master Your Personal Finance",
    description:
      "Take control of your money with budgeting, investing, and debt management tools built for everyone.",
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
