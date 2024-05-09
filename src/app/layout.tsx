import Sidepanel from "@/components/Sidepanel";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const Font_Sans = Noto_Sans_SC({
  subsets: ["cyrillic"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zhuxs.Blog",
  description: "a nobody the life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cn(Font_Sans.className)} h-dvh w-dvw`}>
        <div className="min-h-screen bg-white lg:flex">
          <Sidepanel />
          <div className="flex flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
