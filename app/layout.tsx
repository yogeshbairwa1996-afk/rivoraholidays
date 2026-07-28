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
  title: "Rivora Holidays | Holidays • Events • Weddings",
  description:
    "Rivora Holidays is your trusted travel partner for Domestic Tours, International Tours, Group Tours, FIT Packages, Corporate Travel, Events and Destination Weddings.",
  keywords: [
    "Rivora Holidays",
    "Travel Agency Jaipur",
    "Domestic Tours",
    "International Tours",
    "Holiday Packages",
    "Visa Assistance",
    "Corporate Travel",
    "Destination Weddings",
    "Events",
  ],
  authors: [{ name: "Rivora Holidays" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white">
        {children}
      </body>
    </html>
  );
}