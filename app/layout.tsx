import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import "./globals.css";
import BookProvider from "./context/bookContext";

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

        <BookProvider>
          <main>{children}</main>
        </BookProvider>
        

      </body>
    </html>
  );
}