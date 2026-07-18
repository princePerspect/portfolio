import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const siteUrl = "https://princeperspect.in";
const siteTitle = "Prince Kumar | Strategy, Product & Engineering";
const siteDescription =
  "Portfolio of Prince Kumar, showcasing strategy, product, and engineering work across market research, startup execution, systems thinking, and AI-enabled product building.";
const previewImage = "/images/hero/hero-head.png";

const personJsonLd = {
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Prince Kumar",
  url: siteUrl,
  image: `${siteUrl}${previewImage}`,
  jobTitle: "Strategy, Product & Engineering Practitioner",
  description: siteDescription,
  sameAs: ["https://www.linkedin.com/in/princeperspect"],
  knowsAbout: [
    "Strategy",
    "Product management",
    "Software engineering",
    "Systems design",
    "Market research",
    "Startup execution",
    "AI-enabled product building",
  ],
};

const websiteJsonLd = {
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Prince Kumar",
  description: siteDescription,
  inLanguage: "en-US",
  author: {
    "@id": `${siteUrl}/#person`,
  },
};

const globalJsonLd = {
  "@context": "https://schema.org",
  "@graph": [personJsonLd, websiteJsonLd],
};

function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Prince Kumar",
  },
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "Prince Kumar",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: previewImage,
        width: 2880,
        height: 1258,
        alt: "Prince Kumar portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [previewImage],
  },
  icons: {
    icon: "/images/logo/logo.png",
    apple: "/images/logo/logo.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(globalJsonLd) }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-B7LD6TJKNE`}
          strategy="afterInteractive"
        />

        <Script id="ga-init" strategy="afterInteractive">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-B7LD6TJKNE');
    `}
        </Script>

        {children}
      </body>
    </html>
  );
}
