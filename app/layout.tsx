import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Amrita Kumari — Full Stack & AI Engineer",
  description:
    "Portfolio of Amrita Kumari — Software & AI Engineer specializing in React Native, React.js, Python, Flask, REST APIs, and Generative AI.",
  keywords: ["Amrita Kumari", "Full Stack Developer", "AI Engineer", "React Native", "React.js", "Python", "Flask", "Portfolio"],
  authors: [{ name: "Amrita Kumari" }],
  openGraph: {
    title: "Amrita Kumari — Full Stack & AI Engineer",
    description: "Software & AI Engineer with hands-on experience in React Native, React.js, Python, Flask, REST APIs, and modern AI/ML.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
