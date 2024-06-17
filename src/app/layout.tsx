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
    title: "AD Logistic Global | Giải Pháp Logistic Toàn Diện Cho Doanh Nghiệp",
    description:
      "AD Logistic Global cung cấp giải pháp logistics toàn diện, từ kho bãi, phân phối đến vận tải quốc tế. Chúng tôi sử dụng công nghệ tiên tiến và mạng lưới đối tác rộng khắp để đảm bảo hiệu quả và tiết kiệm cho doanh nghiệp của bạn.",
    themeColor: "dark",
    viewport: "width=device-width, initial-scale=1",
    colorScheme: "light dark",
    twitter: {
      site: "@adlogisticglobal",
    },
    openGraph: {
      siteName: "AD Logistic Global",
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
