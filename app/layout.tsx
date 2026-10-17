import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Amrita Kumari — Full Stack & AI Engineer",
  description:
    "Portfolio of Amrita Kumari — Software & AI Engineer specializing in React Native, React.js, Python, Flask, REST APIs, and Generative AI.",
  keywords: ["Amrita Kumari", "Full Stack Developer", "AI Engineer", "React Native", "React.js", "Python", "Flask", "Portfolio"],
  authors: [{ name: "Amrita Kumari" }],
  openGraph: {
    title: "Amrita Kumari — Full Stack & AI Engineer",
    description: "Software & AI Engineer with hands-on experience in React Native, React.js, Python, Flask, REST APIs, and modern AI/ML.",
    type: "website",
    url: "/",
    images: [{ url: "/profile.jpg", alt: "Amrita Kumari" }],
  },
  alternates: { canonical: "/" },
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
