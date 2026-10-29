import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IWAN ASSOCIATES | Advocates & Legal Consultants",
  description:
    "Discover IWAN ASSOCIATES, a legal practice focused on criminal litigation, white-collar crime, family and matrimonial law, appellate matters, and specialized tribunal proceedings.",
  keywords: [
    "IWAN ASSOCIATES",
    "Advocates Supreme Court of India",
    "Criminal Defense Lawyers New Delhi",
    "White-Collar Crime Advocate",
    "CBI ED PMLA Litigation Lawyer",
    "Family and Matrimonial Dispute Advocate",
    "Tribunal Litigation NCLT NGT DRT",
    "Advocate Mr. Rizwan Pathan",
    "Advocate Mrs. Ibtesam Bano",
  ],
  authors: [{ name: "IWAN ASSOCIATES" }],
  creator: "IWAN ASSOCIATES",
  publisher: "IWAN ASSOCIATES",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: "IWAN ASSOCIATES | Advocates & Legal Consultants",
    description:
      "Strategic Legal Representation. Rigorous Research. Dedicated Advocacy from Trial Courts up to the Supreme Court of India.",
    url: "https://iwanassociates.com",
    siteName: "IWAN ASSOCIATES",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IWAN ASSOCIATES | Advocates & Legal Consultants",
    description:
      "Strategic Legal Representation. Rigorous Research. Dedicated Advocacy.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for Indian Legal Practice
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "IWAN ASSOCIATES",
    alternateName: "Iwan Associates Advocates & Legal Consultants",
    description:
      "Legal practice focused on criminal defense, appellate litigation, white-collar crime, family and matrimonial disputes, and specialized tribunal matters.",
    url: "https://iwanassociates.com",
    telephone: ["+91-87440904546", "+91-9547964009"],
    openingHours: "Mo-Sa 10:00-20:00",
    priceRange: "$$",
    founder: [
      {
        "@type": "Person",
        name: "Advocate Mr. Rizwan Pathan",
        jobTitle: "Founder | Advocate, Supreme Court of India",
        alumniOf: [
          {
            "@type": "CollegeOrUniversity",
            name: "Rajdhani College, University of Delhi",
          },
          {
            "@type": "CollegeOrUniversity",
            name: "Lloyd Law College",
          },
        ],
      },
      {
        "@type": "Person",
        name: "Advocate Mrs. Ibtesam Bano",
        jobTitle: "Co-Founder / Partner | Advocate, Supreme Court of India",
        alumniOf: [
          {
            "@type": "CollegeOrUniversity",
            name: "North Bengal University",
          },
        ],
      },
    ],
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans bg-ivory text-charcoal min-h-screen flex flex-col antialiased selection:bg-gold selection:text-navy-deep">
        {children}
      </body>
    </html>
  );
}
