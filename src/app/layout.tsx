import type { Metadata } from "next";
import Footer from "../components/Footer";
import "@/components/ui/globals.css";
import clsx from "clsx";
import { inter } from "@/components/fonts/fonts";

export const metadata: Metadata = {
  title: "हिंदी छात्रसंघ - दर्पण",
  description:
    "Hindi Club of NIT Durgapur, West Bengal. Engage in cultural activities, events, and discussions promoting Hindi language and literature.",
  keywords:
    "NIT Durgapur, Hindi Club, Darpan, Hindi Literature, Cultural Activities, West Bengal, College Club",
  robots: "index, follow",
};

// export const viewport = "width=device-width, initial-scale=1.0";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(`${inter.className} min-h-screen bg-black`)}>
        {/* <Navbar /> */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
