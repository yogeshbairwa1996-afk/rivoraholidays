
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
      "Rivora Holidays | Premium Travel Agency | Tour Packages, Flights & Visa",
    template: "%s | Rivora Holidays",
  },

  description:
    "Rivora Holidays is a premium travel agency offering personalised Domestic & International Tour Packages, Flight Bookings, Hotel Reservations, Visa Assistance, Honeymoon Holidays, Group Travel, FIT Packages, Corporate Travel, Events and Destination Weddings.",

  keywords: [
    "Rivora Holidays",
    "Premium Travel Agency",
    "Luxury Travel Agency",
    "Travel Agency",
    "Tour Operator",
    "Holiday Packages",
    "Domestic Tour Packages",
    "International Tour Packages",
    "Luxury Holidays",
    "Customised Holiday Packages",
    "International Travel Packages",
    "Domestic Holidays",
    "Dubai Tour Package",
    "Thailand Tour Package",
    "Bali Tour Package",
    "Singapore Tour Package",
    "Maldives Tour Package",
    "Vietnam Tour Package",
    "Flight Booking",
    "Hotel Booking",
    "Visa Assistance",
    "Honeymoon Packages",
    "Group Travel",
    "FIT Travel",
    "Corporate Travel",
    "MICE",
    "Destination Weddings",
  ],

  authors: [
    {
      name: "Rivora Holidays",
    },
  ],

  creator: "Rivora Holidays",
  publisher: "Rivora Holidays",

  applicationName: "Rivora Holidays",

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
    title: "Rivora Holidays | Premium Travel Agency",

    description:
      "Premium Domestic & International Travel Experiences, Tour Packages, Flights, Hotels, Visa Assistance, Group Travel, Corporate Travel, Events and Destination Weddings.",

    url: "https://www.rivoraholidays.com",

    siteName: "Rivora Holidays",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Rivora Holidays - Premium Travel Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Rivora Holidays | Premium Travel Agency",

    description:
      "Premium Domestic & International Travel Experiences, Tour Packages, Flights, Hotels, Visa Assistance and customised holidays.",

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

    alternateName: "Rivora",

    url: "https://www.rivoraholidays.com",

    logo: "https://www.rivoraholidays.com/logo.png",

    image: "https://www.rivoraholidays.com/hero.jpg",

    description:
      "Rivora Holidays is a premium travel agency offering Domestic & International Tour Packages, Flight Bookings, Hotels, Visa Assistance, Honeymoon Holidays, Group Travel, FIT Packages, Corporate Travel, Events and Destination Weddings.",

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

    serviceType: [
      "Domestic Tour Packages",
      "International Tour Packages",
      "Flight Booking",
      "Hotel Booking",
      "Visa Assistance",
      "Honeymoon Holidays",
      "Group Travel",
      "FIT Travel",
      "Corporate Travel",
      "MICE",
      "Events",
      "Destination Weddings",
    ],

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

        {children}

        {/* Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8KFXRS0Q1H"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

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
```
