import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/nav";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BlogZone",
  description: "Share your blogs with the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-black"}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
