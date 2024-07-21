/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import useMobile from "@/hooks/useMobile";

export default function AboutPage() {
  const isMobile = useMobile();
  return (
    <div>
      <img
        src={`/assets/images/about/${
          isMobile ? "banner_about_mobile.jpg" : "banner_about_desktop.jpg"
        }`}
        alt="Banner About"
      />
      <div className="py-10 px-4 md:px-0 md:max-w-screen-xl mx-auto">
        <h1 className="text-center text-xl md:text-3xl font-black">
          Giới thiệu về công ty VAD Logistic Global - Dịch vụ vận tải đa quốc
          gia
        </h1>
        <p className="text-sm md:text-base mt-5">
          Chào mừng quý khách đến với VAD Logistic Global - Công ty hàng đầu
          cung cấp dịch vụ vận tải đa quốc gia. Với slogan "VAD: Visionary -
          Assurance - Development", chúng tôi tự hào mang đến cho quý khách hàng
          dịch vụ vận tải đáng tin cậy, an toàn và hiệu quả, khẳng định cam kết
          luôn đảm bảo chất lượng trong từng chặng đường.
        </p>
        <h2 className="text-lg md:text-xl font-bold mt-4">Về chúng tôi</h2>
        <p className="text-sm md:text-base mt-1">
          VAD Logistic là một trong những công ty logistics hàng đầu, chuyên
          cung cấp các giải pháp vận tải toàn diện cho doanh nghiệp trên toàn
          thế giới. Với nhiều năm kinh nghiệm trong ngành và đội ngũ chuyên gia
          giàu kinh nghiệm, chúng tôi cam kết mang lại cho quý khách hàng dịch
          vụ vận tải đa quốc gia với tiêu chuẩn cao nhất.
        </p>
        <h2 className="text-lg md:text-xl font-bold mt-4">
          Tại sao chọn VAD Logistic?
        </h2>
        <h3 className="text-base md:text-lg font-semibold mt-2">
          1. Mạng lưới toàn cầu rộng khắp
        </h3>
        <p className="text-sm md:text-base mt-1">
          Chúng tôi có mạng lưới đối tác chiến lược tại hơn 200 quốc gia, giúp
          việc vận chuyển hàng hóa trở nên dễ dàng và nhanh chóng. Dù hàng hóa
          của bạn cần đến bất kỳ đâu, VAD Logistic luôn đảm bảo giao hàng đúng
          hẹn và an toàn.
        </p>
        <h3 className="text-base md:text-lg font-semibold mt-2">
          2. Đội ngũ chuyên gia giàu kinh nghiệm
        </h3>
        <p className="text-sm md:text-base mt-1">
          Đội ngũ nhân viên của chúng tôi được đào tạo bài bản, giàu kinh nghiệm
          trong lĩnh vực logistics và vận tải quốc tế. Chúng tôi luôn sẵn sàng
          tư vấn và hỗ trợ quý khách hàng trong mọi khâu của quá trình vận
          chuyển.
        </p>
        <h3 className="text-base md:text-lg font-semibold mt-2">
          3. Giải pháp vận tải toàn diện
        </h3>
        <p className="text-sm md:text-base mt-1">
          VAD Logistic cung cấp đa dạng các giải pháp vận tải, từ đường bộ,
          đường biển, đường hàng không đến vận tải đa phương thức. Chúng tôi
          luôn tìm kiếm giải pháp tối ưu nhất để đáp ứng nhu cầu vận chuyển của
          quý khách hàng.
        </p>
        <h3 className="text-base md:text-lg font-semibold mt-2">
          4. Công nghệ hiện đại
        </h3>
        <p className="text-sm md:text-base mt-1">
          Chúng tôi áp dụng các công nghệ tiên tiến trong quản lý và theo dõi lô
          hàng, giúp quý khách dễ dàng giám sát hành trình của hàng hóa mọi lúc,
          mọi nơi qua hệ thống tracking trực tuyến.
        </p>
        <h3 className="text-base md:text-lg font-semibold mt-2">
          5. Cam kết chất lượng
        </h3>
        <p className="text-sm md:text-base mt-1">
          Với phương châm "Assurance Delivery", chúng tôi cam kết mang đến dịch
          vụ vận tải chất lượng, đáng tin cậy và an toàn. Mỗi lô hàng được xử lý
          với sự tỉ mỉ và chuyên nghiệp cao nhất, đảm bảo an toàn tuyệt đối cho
          hàng hóa của bạn.
        </p>
        <h2 className="text-lg md:text-xl font-bold mt-6">
          Cam kết của chúng tôi
        </h2>
        <p className="text-sm md:text-base mt-1">
          VAD Logistic cam kết mang đến cho quý khách hàng dịch vụ vận tải đa
          quốc gia với chất lượng vượt trội, giá cả cạnh tranh và sự hài lòng
          tối đa. Với slogan "Visionary - Assurance - Development", chúng tôi
          luôn đảm bảo chất lượng và uy tín trong từng chặng đường vận chuyển.
          Hãy để VAD Logistic trở thành đối tác tin cậy trong hành trình mở rộng
          kinh doanh và chinh phục thị trường toàn cầu của bạn.
        </p>
        <p className="text-sm md:text-base mt-10">
          Liên hệ ngay với chúng tôi để được tư vấn và nhận báo giá chi tiết.
          VAD Logistic - Assurance Delivery, Đảm Bảo Giao Hàng An Toàn và Hiệu
          Quả!
        </p>
      </div>
    </div>
  );
}
