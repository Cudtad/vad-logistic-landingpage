import type { Metadata } from "next";
import { Poppins, Open_Sans, Titan_One } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Layout from "@/components/layout/inex";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "800"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-openSan",
  weight: ["400", "500", "600", "700", "800"],
});

const titanOne = Titan_One({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-titanOne",
  weight: "400",
});

export const metadata: Metadata = {
  title: "AD Logistic",
  description: "AD Logistic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"en"} className={poppins.variable}>
      <body
        className={clsx(
          poppins.variable,
          openSans.variable,
          titanOne.variable,
          "text-black font-openSan bg-white"
        )}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
