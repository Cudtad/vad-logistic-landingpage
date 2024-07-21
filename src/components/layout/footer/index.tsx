"use client";

import Button from "@/components/common/button";
import Input from "@/components/common/input";
import ModalContact from "@/components/common/modal-contact";
import useMobile from "@/hooks/useMobile";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const QuickLink = [
  {
    name: "Trang chủ",
    link: "/",
  },
  {
    name: "Dịch vụ",
    link: "/service/fulfillment",
  },
  {
    name: "Về chúng tôi",
    link: "/about",
  },
  {
    name: "Liên hệ",
    link: "/contact",
  },
];

export default function Footer() {
  const isMobile = useMobile();

  const [isModal, setIsModal] = useState<boolean>(false);

  const handleCloseModal = () => {
    setIsModal(false);
  };

  const handleShowModal = () => {
    setIsModal(true);
  };

  return (
    <div className="bg-gray-footer pt-10 md:pt-20 pb-4 px-4 md:px-0 text-white">
      <div className="mx-auto md:max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-12">
          <div>
            <div className="flex items-center gap-x-2">
              <Image
                src="/assets/images/logo/logo_vadlogistic.png"
                alt="Logo"
                width={30}
                height={30}
              />
              <span className=" text-xl font-medium font-titanOne text-primary bg-gradient-to-r from-[#9d6d16] to-[#603000] text-transparent bg-clip-text">
                VAD LOGISTIC GLOBAL
              </span>
            </div>
            <p className="text-sm font-medium text-gray mt-2">
              {`Với slogan "VAD: Visionary - Assurance - Development", chúng tôi tự hào mang đến cho
              quý khách hàng dịch vụ vận tải đáng tin cậy, an toàn và hiệu quả,
              khẳng định cam kết luôn đảm bảo chất lượng trong từng chặng đường.`}
            </p>
          </div>
          <div className="md:pl-8">
            <h1 className=" text-lg font-bold">Truy cập nhanh</h1>
            <div className="flex flex-col items-start mt-2 text-gray gap-y-1">
              {QuickLink.map((item) => {
                if (item.link === "/contact") {
                  return (
                    <button
                      className="hover:text-primary"
                      key={item.link}
                      onClick={handleShowModal}
                    >
                      {item.name}
                    </button>
                  );
                }
                return (
                  <Link
                    className="hover:text-primary"
                    key={item.link}
                    href={item.link}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div>
            <h1 className=" text-lg font-bold">Liên hệ</h1>
            <div className="mt-2 text-gray space-y-1">
              <p>
                Số 9 Duy Tân, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nội,
                Hanoi, Vietnam
              </p>
              <p>Email: vadlogisticglobal@gmail.com</p>
              <div className=" no-underline">Điện thoại: 0984053166</div>
            </div>
          </div>
          <div>
            <h1 className=" text-lg font-bold">Bản tin</h1>
            <p className="text-base font-medium text-gray mt-2">
              Chúng tôi không phải là người gửi thư rác.!
            </p>
            <div className="mt-8">
              <Input placeholder="Địa chỉ email" size={"lg"} />
              {/* <p className="textsm md:text-base font-medium text-primary mt-4">
                Please complete this required field.
              </p> */}
              <Button className="font-bold mt-8" size={isMobile ? "sm" : "lg"}>
                Đăng ký
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-sm font-semibold text-center mt-20">
        © 2024 <span className="text-primary">VAD Logistic</span> Made with by{" "}
        <span className="text-primary">Cudtad</span>
      </div>
      <ModalContact isModal={isModal} handleCloseModal={handleCloseModal} />
    </div>
  );
}
