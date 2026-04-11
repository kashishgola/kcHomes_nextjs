import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Key Homes KC | Kansas City Real Estate Experts for Buyers & Sellers",
  description: "Looking to buy or sell a home in Kansas City? Key Homes KC offers expert guidance, neighborhood insights, and a seamless real estate experience. Contact us today!",
  keywords: [
    "Kansas City real estate",            
    "Kansas City homes for sale",        
    "KC real estate agent",              
    "buy a home in Kansas City",         
    "sell my home Kansas City",          
    "Kansas City neighborhoods",          
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}