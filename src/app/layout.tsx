import type { Metadata } from "next";
import { Space_Grotesk, Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "InnoHack 2026 | Engineered by Professionals",
  description:
    "Join 500+ innovators for 36 hours of coding, creativity, and collaboration—backed by professional hackathon teams.",
  keywords: ["hackathon", "coding", "innovation", "students", "tech", "InnoHack", "2026"],
  authors: [{ name: "InnoHack Team" }],
  openGraph: {
    title: "InnoHack 2026 | Engineered by Professionals",
    description:
      "Join 500+ innovators for 36 hours of coding, creativity, and collaboration—backed by professional hackathon teams.",
    url: "https://innohack.dev",
    siteName: "InnoHack 2026",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "InnoHack 2026",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InnoHack 2026 | Engineered by Professionals",
    description:
      "Join 500+ innovators for 36 hours of coding, creativity, and collaboration—backed by professional hackathon teams.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${firaCode.variable} font-body antialiased bg-neutral-950 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
