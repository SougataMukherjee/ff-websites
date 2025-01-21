import type { Metadata } from "next";
import "./globals.scss";
import "./global.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "FireFlink website",
  description: "FireFlink is a testing app",
};

const poppins = Poppins({
  weight: [
    "300", // Light
    "400", // Regular
    "500", // Medium
    "600", // Semi-bold
    "700", // Bold
  ],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <link rel="icon" href="/images/fireflink-logo.svg" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
