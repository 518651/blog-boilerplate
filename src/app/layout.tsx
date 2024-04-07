import Sidepanel from "@/components/Sidepanel";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vesper's blog",
  description: "Vesper's articles about programming and life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <main className="min-h-screen bg-white lg:flex">
          <Sidepanel></Sidepanel>
          <div className="flex flex-1">{children}</div>
        </main>
      </body>
    </html>
  );
}
