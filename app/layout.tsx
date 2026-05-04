import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.samipabroka.com.np"),
  title: {
    default: "Samipab Roka Magar | Portfolio",
    template: "%s | Samipab Roka Magar",
  },
  description:
    "Samipab Roka Magar is a web developer based in Pokhara, Nepal, building modern, fast, and accessible websites and apps.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Samipab Roka Magar | Portfolio",
    description:
      "Samipab Roka Magar is a web developer based in Pokhara, Nepal, building modern, fast, and accessible web applications.",
    siteName: "Samipab Roka Magar",
    images: [
      {
        url: "/images/me.webp",
        width: 1200,
        height: 630,
        alt: "Samipab Roka Magar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samipab Roka Magar | Portfolio",
    description:
      "Samipab Roka Magar is a web developer based in Pokhara, Nepal, building modern, fast, and accessible web applications.",
    images: ["/images/me.webp"],
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
      className={`${outfit.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
