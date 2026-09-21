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
    <html lang="en" data-theme="light">
      {/* <body> ট্যাগ যুক্ত করা আবশ্যক */}
      <body className="">
        
        <Navbar />

        <BookProvider>
          <main>{children}</main>
        </BookProvider>
        

      </body>
    </html>
  );
}