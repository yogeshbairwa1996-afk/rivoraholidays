import type { Metadata } from "next";
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
  metadataBase: new URL("https://rivoraholidays.vercel.app"),

  title: {
    default: "Rivora Holidays | Holidays • Events • Weddings",
    template: "%s | Rivora Holidays",
  },

  description:
    "Rivora Holidays is your trusted travel partner for Domestic Tours, International Tours, Group Tours, FIT Packages, Corporate Travel, Visa Assistance, Events and Destination Weddings.",

  keywords: [
    "Rivora Holidays",
    "Travel Agency Jaipur",
    "Holiday Packages",
    "Domestic Tours",
    "International Tours",
    "Group Tours",
    "FIT Packages",
    "Visa Assistance",
    "Corporate Travel",
    "Destination Weddings",
    "Events",
    "Travel Company India",
    "Rajasthan Travel Agency",
  ],

  authors: [
    {
      name: "Rivora Holidays",
    },
  ],

  creator: "Rivora Holidays",

  publisher: "Rivora Holidays",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Rivora Holidays",
    description:
      "Explore unforgettable holidays with Rivora Holidays. Domestic Tours, International Tours, Group Tours, FIT Packages, Visa Assistance, Corporate Travel, Events & Weddings.",
    url: "https://rivoraholidays.vercel.app",
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
      "Premium Holidays, Tours, Events & Weddings by Rivora Holidays.",
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
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-white text-black">
        {children}
      </body>
    </html>
  );
}