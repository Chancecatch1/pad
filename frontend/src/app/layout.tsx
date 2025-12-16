/* CHANGE NOTE
Why: Add i18n support with LanguageProvider
What changed: Added LanguageProvider, changed lang to "en", updated description
Behaviour/Assumptions: Client-side language switching via context
Rollback: Remove LanguageProvider import and wrapper
— mj
*/

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PAD",
  description: "PAD - Pine at Dawn",
  icons: {
    icon: "/favicon.png",
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
        className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}
        style={{ background: "#f5f5f7", color: "#1d1d1f" }}
      >
        <LanguageProvider>
          <Header />
          <main className="flex-1 pt-14">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}


