import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kyp.io"),
  title: {
    default: "KYP | AI-Powered Enterprise Risk Intelligence & Compliance Monitoring",
    template: "%s | KYP",
  },
  description:
    "KYP empowers regulated firms, payment providers, and iGaming operators to proactively detect financial, regulatory, and reputational risks across their entire third-party ecosystem.",
  keywords: [
    "KYP",
    "Know Your Portfolio",
    "Know Your Partner",
    "risk intelligence",
    "continuous monitoring",
    "third party risk management",
    "KYB onboarding",
    "anti-money laundering",
    "AML monitoring",
    "WebCompli",
    "transaction monitoring",
    "compliance automation",
    "graph intelligence",
  ],
  authors: [{ name: "KYP (Know Your Partner)" }],
  creator: "KYP",
  publisher: "Cinnte Solutions trading as Know Your Partner",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://kyp.io",
    title: "KYP | Know Your Portfolio. Uncover Hidden Risks.",
    description:
      "Empowering regulated firms to proactively detect financial, regulatory and reputational risks across their entire partner network.",
    siteName: "KYP",
    images: [
      {
        url: "/images/screenshots/kyp-ui-display.webp",
        width: 1200,
        height: 630,
        alt: "KYP Enterprise Risk Intelligence Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KYP | Enterprise Risk & Compliance Platform",
    description: "Proactive risk intelligence and continuous monitoring for regulated businesses.",
    images: ["/images/screenshots/kyp-ui-display.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-white text-slate-900 antialiased selection:bg-emerald-100 selection:text-emerald-900">
        <Header />
        <main className="min-h-screen pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
