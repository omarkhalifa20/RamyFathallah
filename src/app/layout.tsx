import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarComp from "@/Components/NavBar/NavbarComp";
import Footer from "@/Components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ramy Fathallah",
  description: "Ramy Fathallah's Personal Website - Accountant, Financial Advisor, and Business Consultant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Aref+Ruqaa:wght@400;700&family=Badeen+Display&family=Bebas+Neue&family=Commissioner:wght@100..900&family=Lalezar&family=Rakkas&display=swap" rel="stylesheet">

      </link>
      <link rel="icon" href="/RFLogo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarComp/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
