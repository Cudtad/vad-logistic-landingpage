import AboutPage from "@/components/about-page";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    description:
      "Tại AD Logistic Global, chúng tôi hiểu rằng logistics hiệu quả là yếu tố then chốt cho sự thành công của doanh nghiệp. Chúng tôi cung cấp các dịch vụ vận tải, kho bãi và phân phối với cam kết về chất lượng và sự an toàn. Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ và đưa ra những giải pháp tốt nhất cho khách hàng.",
  };
};

export default function index() {
  return <AboutPage />;
}
