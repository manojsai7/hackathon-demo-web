import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "InnoHack 2026 | Build the Future, One Line at a Time",
  description: "Join 500+ innovators for 36 hours of coding, creativity, and collaboration. The biggest student hackathon of the year with ₹5 Lakhs+ in prizes!",
  keywords: ["hackathon", "coding", "innovation", "students", "tech", "InnoHack", "2026"],
  authors: [{ name: "InnoHack Team" }],
  openGraph: {
    title: "InnoHack 2026 | Build the Future",
    description: "Join 500+ innovators for 36 hours of coding, creativity, and collaboration.",
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
    title: "InnoHack 2026 | Build the Future",
    description: "Join 500+ innovators for 36 hours of coding, creativity, and collaboration.",
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
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
