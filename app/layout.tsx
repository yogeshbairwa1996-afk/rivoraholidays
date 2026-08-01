import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rivoraholidays.com"),

  title: {
    default:
      "Rivora Holidays | Best Travel Agency in Jaipur | Tour Packages, Flights & Visa",
    template: "%s | Rivora Holidays",
  },

  description:
    "Rivora Holidays is a trusted travel agency in Jaipur offering Domestic & International Tour Packages, Flight Bookings, Hotel Reservations, Visa Assistance, Honeymoon Packages, Group Tours, FIT Packages, Corporate Travel, MICE and Destination Weddings.",

  keywords: [
    "Rivora Holidays",
    "Best Travel Agency Jaipur",
    "Travel Agency Jaipur",
    "Tour Operator Jaipur",
    "Holiday Packages",
    "Domestic Tour Packages",
    "International Tour Packages",
    "Dubai Tour Package",
    "Thailand Tour Package",
    "Bali Tour Package",
    "Singapore Tour Package",
    "Maldives Tour Package",
    "Vietnam Tour Package",
    "Flight Booking Jaipur",
    "Hotel Booking Jaipur",
    "Visa Assistance",
    "Corporate Travel",
    "Destination Weddings",
    "MICE",
  ],

  authors: [
    {
      name: "Rivora Holidays",
    },
  ],

  creator: "Rivora Holidays",

  publisher: "Rivora Holidays",

  category: "Travel",

  alternates: {
    canonical: "https://www.rivoraholidays.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Rivora Holidays | Best Travel Agency in Jaipur",

    description:
      "Premium Domestic & International Tour Packages, Flights, Hotels, Visa Assistance, Corporate Travel, MICE and Destination Weddings.",

    url: "https://www.rivoraholidays.com",

    siteName: "Rivora Holidays",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Rivora Holidays",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rivora Holidays",
    description:
      "Premium Domestic & International Tour Packages.",
    images: ["/hero.jpg"],
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Rivora Holidays",
    url: "https://www.rivoraholidays.com",
    logo: "https://www.rivoraholidays.com/logo.png",
    image: "https://www.rivoraholidays.com/hero.jpg",
    description:
      "Premium Domestic & International Tour Packages, Flights, Hotels, Visa Assistance, Corporate Travel, MICE and Destination Weddings.",
    telephone: "+91-9828260533",
    email: "info@rivoraholidays.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "349, Vaishno Vihar",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      postalCode: "302029",
      addressCountry: "IN",
    },
    areaServed: "Worldwide",
    priceRange: "₹₹",
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="bg-[#05070d] text-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />

        {children}        {/* Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8KFXRS0Q1H"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-8KFXRS0Q1H', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </body>
    </html>
  );
}