import type { Metadata } from "next";
import { Poppins, Open_Sans, Titan_One } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Layout from "@/components/layout";

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

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_URL as string),
    title: "VAD Logistic Global | Dịch vụ logistics quốc tế tại Việt Nam",
    description:
      "VAD Logistic Global cung cấp giải pháp logistics từ kho bãi, phân phối đến vận tải quốc tế. Công nghệ tiên tiến và đối tác rộng khắp đảm bảo hiệu quả, tiết kiệm cho doanh nghiệp",
    themeColor: "dark",
    viewport: "width=device-width, initial-scale=1",
    colorScheme: "light dark",
    twitter: {
      site: "@vadlogisticglobal",
    },
    openGraph: {
      siteName: "VAD Logistic Global",
    },
  };
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"en"} className={poppins.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_URL} />
        <meta
          name="google-site-verification"
          content="dDRXy3mPun9gMUdoXBwRgKRX5Pm-M_hMDT0tytKXSck"
        />
      </head>
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
