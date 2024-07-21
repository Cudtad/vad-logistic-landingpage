import ServicePage from "@/components/service-page";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    description:
      "Tại VAD Logistic Global, chúng tôi cung cấp một loạt các dịch vụ logistics chuyên nghiệp nhằm đáp ứng mọi nhu cầu của khách hàng. Chúng tôi chuyên về vận chuyển hàng hóa từ Việt Nam ra quốc tế và ngược lại, đảm bảo quá trình vận chuyển nhanh chóng và an toàn. Dịch vụ Fulfillment của chúng tôi giúp tối ưu hóa quản lý kho hàng và giao hàng, đảm bảo hàng hóa đến tay khách hàng một cách hiệu quả nhất. Bên cạnh đó, chúng tôi cung cấp dịch vụ mua hàng hộ, hỗ trợ khách hàng mua sắm quốc tế dễ dàng và thuận tiện. Với mạng lưới kho bãi và nhân sự tại hơn 200 quốc gia, VAD Logistic Global cam kết mang lại giải pháp kho bãi và logistic toàn diện, đáp ứng mọi yêu cầu của doanh nghiệp. Hãy để chúng tôi trở thành đối tác tin cậy của bạn trong việc quản lý và vận chuyển hàng hóa trên toàn cầu.",
  };
};

export default function index({
  params,
}: {
  params: {
    slug: "delivery" | "fulfillment" | "warehouse" | "order";
  };
}) {
  return <ServicePage slug={params.slug} />;
}
