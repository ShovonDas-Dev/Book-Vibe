import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Book Vibe",
  description: "My Next.js Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body> ট্যাগ যুক্ত করা আবশ্যক */}
      <body className="bg-white text-gray-900 min-h-screen">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}