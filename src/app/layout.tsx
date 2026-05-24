import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Smart Home Vergleich 2025 – Beste Geräte im Test",
    template: "%s | Smart Home Vergleich",
  },
  description:
    "Finden Sie die besten Smart Home Geräte und Haushaltsgeräte im unabhängigen Vergleich. Saugroboter, Luftreiniger, Thermostate und mehr – alle Testsieger 2025.",
  keywords: ["Smart Home", "Saugroboter Test", "Luftreiniger Vergleich", "Smart Thermostat", "Haushaltsgeräte"],
  authors: [{ name: "Smart Home Vergleich" }],
  creator: "Smart Home Vergleich",
  metadataBase: new URL("https://smart-home-vergleich.de"),
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://smart-home-vergleich.de",
    siteName: "Smart Home Vergleich",
    title: "Smart Home Vergleich 2025 – Beste Geräte im Test",
    description:
      "Unabhängige Tests und Vergleiche für Smart Home Geräte. Finden Sie den besten Saugroboter, Luftreiniger oder Smart Thermostat.",
  },
  other: {
    "google-adsense-account": "ca-pub-7676593353613357",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-green-50 text-green-900 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7676593353613357"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
