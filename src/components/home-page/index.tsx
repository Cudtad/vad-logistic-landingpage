/* eslint-disable @next/next/no-img-element */
"use client";

import { ListTab } from "@/types";
import Button from "../common/button";
import TelegramIcon from "../common/svg-icons/TelegramIcon";
import CardService from "./CardService";
import ProcessTabs from "./ProcessTabs";
import CustomSlider from "../common/slider";
import Brand from "./Brand";
import useMobile from "@/hooks/useMobile";
import Link from "next/link";
import { useState } from "react";
import ModalContact from "../common/modal-contact";
import BoxCheckIcon from "../common/svg-icons/BoxCheckIcon";
import CustomerIcon from "../common/svg-icons/CustomerIcon";
import ChartArrowGrowIcon from "../common/svg-icons/ChartArrowGrowIcon";
import CountNumber from "../common/count-number";
import PoolLogistic from "./PoolLogistic";

const listService = [
  {
    imageFeature: "/assets/images/icons/icon_airplane.webp",
    title: "Vận chuyển 2 chiều Việt Nam - Quốc tế",
    description:
      "Với nhiều năm kinh nghiệm trong lĩnh vực logistics, AD Logistic tự hào mang đến cho quý khách hàng dịch vụ vận chuyển hai chiều Việt Nam - Quốc Tế an toàn, nhanh chóng và hiệu quả.",
    link: "/service/delivery",
  },
  {
    imageFeature: "/assets/images/icons/icon_shipcar.webp",
    title: "Giải pháp Fulfillment cho doanh nghiệp",
    description:
      "Đối tác tin cậy hàng đầu trong lĩnh vực logistics và fulfillment tại Việt Nam. Với mục tiêu hỗ trợ các doanh nghiệp tối ưu hóa quy trình kinh doanh, chúng tôi mang đến dịch vụ fulfillment toàn diện và chuyên nghiệp",
    link: "/service/fulfillment",
  },
  {
    imageFeature: "/assets/images/icons/icon_protect_package.webp",
    title: "Cho thuê kho bãi, nhân sự",
    description:
      "Đối tác toàn cầu tin cậy trong lĩnh vực logistics. Chúng tôi tự hào giới thiệu dịch vụ cho thuê kho bãi và nhân sự chuyên nghiệp tại hơn 200 quốc gia, giúp quý khách hàng tối ưu hóa chuỗi cung ứng và nâng cao hiệu quả kinh doanh trên toàn thế giới.",
    link: "/service/warehouse",
  },
  {
    imageFeature: "/assets/images/icons/icon_order.webp",
    title: "Mua hàng hộ",
    description:
      "Chào mừng quý khách đến với AD Logistic, chuyên gia hàng đầu trong lĩnh vực logistics và mua hàng hộ. Với sứ mệnh giúp quý khách tiếp cận và sở hữu những sản phẩm yêu thích từ khắp nơi trên thế giới, chúng tôi tự hào mang đến dịch vụ mua hàng hộ nhanh chóng, an toàn và tiện lợi.",
    link: "/service/order",
  },
];

const ListTabs: ListTab[] = [
  {
    title: "1. Nhập kho",
    value: "contact",
  },
  {
    title: "2. Xử lý đơn hàng",
    value: "warehouse",
  },
  {
    title: "3. Giao hàng",
    value: "weighing",
  },
  {
    title: "4. Quản lý trả hàng",
    value: "delivery",
  },
];

const ListContents = [
  {
    value: "contact",
    title: "Nhập kho và lưu trữ hàng hóa:",
    description: (
      <div className="space-y-5">
        <p>
          <b>Nhận hàng</b>: Hàng hóa từ nhà sản xuất hoặc nhà cung cấp được vận
          chuyển đến kho của công ty logistics.
        </p>
        <p>
          <b>Kiểm tra và nhập kho</b>: Hàng hóa được kiểm tra về số lượng, chất
          lượng và sau đó được nhập vào hệ thống quản lý kho (WMS - Warehouse
          Management System).
        </p>
        <p>
          <b>Lưu trữ:</b>: Hàng hóa được sắp xếp và lưu trữ một cách hợp lý
          trong kho để dễ dàng quản lý và truy xuất.
        </p>
      </div>
    ),
    imageFeature: "/assets/images/home/tabs_contact.webp",
  },
  {
    value: "warehouse",
    title: "Xử lý đơn hàng",
    description: (
      <div className="space-y-5">
        <p>
          <b>Tiếp nhận đơn hàng</b>: Đơn hàng từ khách hàng hoặc từ các nền tảng
          thương mại điện tử được nhập vào hệ thống.
        </p>
        <p>
          <b>Chọn hàng (Picking)</b>: Nhân viên kho sẽ chọn hàng hóa từ các vị
          trí lưu trữ dựa trên thông tin đơn hàng.
        </p>
        <p>
          <b>Đóng gói (Packing)</b>:Hàng hóa sau khi được chọn sẽ được đóng gói
          cẩn thận, đảm bảo an toàn trong quá trình vận chuyển.
        </p>
      </div>
    ),
    imageFeature: "/assets/images/home/tabs_warehouse.webp",
  },
  {
    value: "weighing",
    title: "Giao hàng:",
    description: (
      <div className="space-y-5">
        <p>
          <b>Lên kế hoạch vận chuyển</b>: Đơn hàng được phân loại và lên kế
          hoạch giao hàng dựa trên địa chỉ và thời gian yêu cầu của khách hàng.
        </p>
        <p>
          <b>Vận chuyển</b>: Hàng hóa được chuyển đến khách hàng thông qua các
          phương tiện vận chuyển như xe tải, máy bay, hoặc tàu biển. Công ty có
          thể tự thực hiện hoặc hợp tác với các đơn vị vận chuyển khác.
        </p>
      </div>
    ),
    imageFeature: "/assets/images/home/tabs_weighing.webp",
  },
  {
    value: "delivery",
    title: "Quản lý trả hàng và chăm sóc khách hàng:",
    description: (
      <div className="space-y-5">
        <p>
          <b>Xử lý trả hàng</b>: Nếu khách hàng trả lại hàng, công ty sẽ tiếp
          nhận, kiểm tra và xử lý hàng trả về kho hoặc tiêu hủy nếu không thể
          tái sử dụng.
        </p>
        <p>
          <b>Chăm sóc khách hàng</b>: Công ty cung cấp dịch vụ hỗ trợ khách
          hàng, giải quyết các vấn đề liên quan đến đơn hàng, vận chuyển, và trả
          hàng nhằm đảm bảo sự hài lòng của khách hàng.
        </p>
      </div>
    ),
    imageFeature: "/assets/images/home/tabs_delivery.webp",
  },
];

const slides = [
  {
    id: 1,
    content: {
      comment:
        "Anh đã từng hợp tác với rất nhiều bên để vận chuyển hàng Fulfillment nhưng hiện tại anh đánh giá AD LOGISTIC khá cao. Tốc độ làm việc chuyên nghiệp, các bạn sale rất tận tâm",
      name: "Anh Phong",
      role: "Chủ shop quần áo",
      // imageAvatar: "/assets/images/home/avatar.webp",
    },
  },
  {
    id: 2,
    content: {
      comment:
        "Đối soát khá nhanh. Bộ phận nhân sự ở đầu nước ngoài và Việt Nam làm việc rất chuyên nghiệp. Rất vui được đồng hành cùng AD",
      name: "Chị Phương",
      role: "Chủ shop mỹ phẩm",
      // imageAvatar: "/assets/images/home/avatar.webp",
    },
  },
  {
    id: 3,
    content: {
      comment:
        "Anh đã đi khá nhiều bên nhưng lần đầu sử dụng dịch vụ bên em. Anh thấy được sự nhiệt tình, support anh mọi lúc. Thực sự anh cảm thấy rất hài lòng về dịch vụ của AD LOGSITIC",
      name: "Anh Tuấn",
      role: "CEO công ty dược phẩm",
      // imageAvatar: "/assets/images/home/avatar.webp",
    },
  },
  {
    id: 4,
    content: {
      comment:
        "Hàng hoá về nhanh, đúng timeline đề ra. Chi phí khá ổn so với các đơn vị vận chuyển ở thời điểm hiện tại. Cảm ơn AD nhiều",
      name: "Anh Phát",
      role: "Chủ shop Ryobi",
      // imageAvatar: "/assets/images/home/avatar.webp",
    },
  },
  {
    id: 5,
    content: {
      comment:
        "Anh đánh giá cao về dịch vụ Fulfillment bên em. Nhân sự cả đầu Việt Nam và đầu nước ngoài làm việc rất chuyên nghiệp và bài bản. Anh rất hài lòng",
      name: "Anh Tâm",
      role: "CEO công ty thực phẩm",
      // imageAvatar: "/assets/images/home/avatar.webp",
    },
  },
  {
    id: 6,
    content: {
      comment:
        "Anh đã từng hợp tác với rất nhiều bên để vận chuyển hàng Fulfillment nhưng hiện tại anh đánh giá AD LOGISTIC khá cao. Tốc độ làm việc chuyên nghiệp, các bạn sale rất tận tâm",
      name: "Anh Phong",
      role: "Chủ shop quần áo",
      // imageAvatar: "/assets/images/home/avatar.webp",
    },
  },
  {
    id: 7,
    content: {
      comment:
        "Đối soát khá nhanh. Bộ phận nhân sự ở đầu nước ngoài và Việt Nam làm việc rất chuyên nghiệp. Rất vui được đồng hành cùng AD",
      name: "Chị Phương",
      role: "Chủ shop mỹ phẩm",
      // imageAvatar: "/assets/images/home/avatar.webp",
    },
  },
  {
    id: 8,
    content: {
      comment:
        "Anh đã đi khá nhiều bên nhưng lần đầu sử dụng dịch vụ bên em. Anh thấy được sự nhiệt tình, support anh mọi lúc. Thực sự anh cảm thấy rất hài lòng về dịch vụ của AD LOGSITIC",
      name: "Anh Tuấn",
      role: "CEO công ty dược phẩm",
      // imageAvatar: "/assets/images/home/avatar.webp",
    },
  },
  {
    id: 9,
    content: {
      comment:
        "Hàng hoá về nhanh, đúng timeline đề ra. Chi phí khá ổn so với các đơn vị vận chuyển ở thời điểm hiện tại. Cảm ơn AD nhiều",
      name: "Anh Phát",
      role: "Chủ shop Ryobi",
      // imageAvatar: "/assets/images/home/avatar.webp",
    },
  },
  {
    id: 10,
    content: {
      comment:
        "Anh đánh giá cao về dịch vụ Fulfillment bên em. Nhân sự cả đầu Việt Nam và đầu nước ngoài làm việc rất chuyên nghiệp và bài bản. Anh rất hài lòng",
      name: "Anh Tâm",
      role: "CEO công ty thực phẩm",
      // imageAvatar: "/assets/images/home/avatar.webp",
    },
  },
];

const SlideOurMeetTeam = [
  {
    id: 1,
    content: {
      name: "Darian Cloward",
      role: "Assistant Manager",
      imageAvatar: "/assets/images/home/meet_our_team.webp",
    },
  },
  {
    id: 2,
    content: {
      name: "Nirob Khan",
      role: "HR Manager",
      imageAvatar: "/assets/images/home/meet_our_team.webp",
    },
  },
  {
    id: 3,
    content: {
      name: "Alifa Yeasmin",
      role: "CEO & Consultant",
      imageAvatar: "/assets/images/home/meet_our_team.webp",
    },
  },
  {
    id: 4,
    content: {
      name: "Sabrina Brooks",
      role: "CEO & Co-Founder",
      imageAvatar: "/assets/images/home/meet_our_team.webp",
    },
  },
];

export default function HomePage() {
  const isMobile = useMobile();
  const [isModal, setIsModal] = useState<boolean>(false);

  const handleCloseModal = () => {
    setIsModal(false);
  };
  return (
    <div>
      <div className="w-full h-screen relative overflow-hidden">
        <img
          className="aspect-[10/22] md:aspect-auto md:h-screen md:w-full"
          src={
            isMobile
              ? "/assets/images/banner_ad_logistic_mobile.jpg"
              : "/assets/images/banner_ad_logistic.webp"
          }
          alt="Banner"
        />
        {/* overlay */}
        <div className=" absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10"></div>
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 space-y-6 w-full md:w-max">
          <h1 className="text-center text-white text-2xl md:text-6xl font-openSan font-black leading-10 md:leading-[80px] md:w-max">
            ĐỒNG HÀNH CÙNG BẠN <br /> ĐẾN TƯƠNG LAI
          </h1>
          <div className="flex flex-col items-center md:flex-row md:justify-center">
            <Button
              onClick={() => setIsModal(true)}
              variant="primary"
              size={isMobile ? "sm" : "lg"}
            >
              Liên hệ ngay
            </Button>
            <Link target="_blank" href={"https://t.me/ngocanhlogistic"}>
              <Button
                prevIcon={<TelegramIcon />}
                variant="chip"
                size={isMobile ? "sm" : "lg"}
              >
                Tham gia cùng chúng tôi trên Telegram
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="py-10 md:py-16 px-4 md:px-0 bg-gray-300">
        <div className=" mx-auto md:max-w-screen-xl grid grid-cols-1 md:grid-cols-3 gap-y-5">
          <PoolLogistic
            icon={<BoxCheckIcon size={24} />}
            value={868}
            title="Đơn hàng giao thành công"
          />
          <PoolLogistic
            icon={<CustomerIcon size={24} />}
            value={342}
            title="Khách hàng và đối tác"
          />
          <PoolLogistic
            icon={<ChartArrowGrowIcon size={24} />}
            value={120}
            title="Tốc độ tăng trưởng theo năm"
            suffix="%"
          />
        </div>
      </div>

      <div className="py-10 md:pt-32 md:pb-16 px-4 md:px-0">
        <div className="mx-auto md:max-w-screen-xl grid grid-cols-1 md:grid-cols-2 md:gap-x-10 gap-y-16">
          {listService.map((item) => {
            return (
              <CardService
                key={item.imageFeature}
                title={item.title}
                imageFeature={item.imageFeature}
                description={item.description}
                link={item.link}
              />
            );
          })}
        </div>
      </div>
      <div className="py-10 md:pt-32 px-4 md:px-0 md:pb-16 mx-auto md:max-w-screen-xl">
        <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-y-0">
          <div>
            <img
              src="/assets/images/about_us_ad_logistic.webp"
              alt="About us"
            />
          </div>
          <div>
            <p className="text-primary text-sm md:text-base font-medium">
              INTERNATIONAL LOGISTICS
            </p>
            <h1 className="text-2xl md:text-4xl font-black mt-2">
              AD LOGISTIC - Công ty hàng đầu cung cấp dịch vụ vận tải đa quốc
              gia.
            </h1>
            <p className="text-secondary text-sm md:text-base font-medium mt-4 md:mt-8">
              {`Với slogan "AD: Assurance Delivery", chúng tôi tự hào mang đến cho
              quý khách hàng dịch vụ vận tải đáng tin cậy, an toàn và hiệu quả,
              khẳng định cam kết luôn đảm bảo chất lượng trong từng chặng đường.`}
            </p>
            <Link href={"/about"}>
              <Button
                className="mt-8 md:mt-14 text-sm font-semibold"
                variant="primary"
                size={isMobile ? "sm" : "lg"}
              >
                Về chúng tôi
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="py-10 md:pt-32 px-4 md:px-0 mx-auto md:max-w-screen-xl">
        <div>
          <p className="text-sm md:text-base font-medium text-primary text-center">
            HOW IT WORKS
          </p>
          <h1 className="text-2xl md:text-[44px] font-black text-center mt-2">
            Quy trình của chúng tôi
          </h1>
        </div>
        <div className="mt-8 md:mt-10">
          <ProcessTabs listTab={ListTabs} listContent={ListContents} />
        </div>
      </div>
      <div className="relative md:h-[728px] overflow-hidden px-4 md:px-0 mt-10 mb-16 ">
        {!isMobile && (
          <img
            className="absolute -top-1/3 -z-10"
            src="/assets/images/home/bg-testimonials.png"
            alt="Background Testimonials"
          />
        )}
        <div className="mx-auto md:max-w-screen-xl md:pt-32">
          <div>
            <h1 className="text-2xl md:text-[44px] font-black mt-2 md:mt-4">
              Feedback từ khách hàng
            </h1>
          </div>
          <div className="mt-5 md:mt-20">
            <CustomSlider slides={slides} />
          </div>
        </div>
      </div>
      {/* <div className="py-10 md:pt-32 px-4 md:px-0 mx-auto md:max-w-screen-xl">
        <p className="text-sm md:text-base font-medium text-primary">
          TRUSTED EXPERTS
        </p>
        <h1 className="text-2xl md:text-[44px] font-black mt-2 md:mt-4 md:mb-8">
          Meet Our Team
        </h1>

        <SliderOurMeetTeam slides={SlideOurMeetTeam} />
      </div> */}
      <div className="pt-5 md:pt-10">
        <div className="bg-[#f8f8f8]">
          <Brand />
        </div>
      </div>
      <ModalContact isModal={isModal} handleCloseModal={handleCloseModal} />
    </div>
  );
}
