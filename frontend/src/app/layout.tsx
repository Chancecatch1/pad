/* CHANGE NOTE
Why: TeamVoid style redesign with sidebar layout
What changed: Simplified layout without Notion fetch (sidebar uses static data)
Behaviour/Assumptions: SidebarLayout uses getTeamProjects() for project list
Rollback: Revert to previous version
— mj
*/

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SidebarLayout from "@/components/layout/SidebarLayout";
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
        className={`${inter.variable} font-sans antialiased`}
        style={{ background: "#fff", color: "#000", margin: 0 }}
      >
        <LanguageProvider>
          <SidebarLayout>
            {children}
          </SidebarLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
