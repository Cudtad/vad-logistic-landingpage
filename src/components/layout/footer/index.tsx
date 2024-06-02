"use client"

import Button from "@/components/common/button";
import Input from "@/components/common/input";
import useMobile from "@/hooks/useMobile";
import Image from "next/image";
import Link from "next/link";

const QuickLink = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Service",
    link: "/service",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export default function Footer() {
  const isMobile = useMobile();
  return (
    <div className="bg-gray-footer pt-10 md:pt-20 pb-4 px-4 md:px-0 text-white">
      <div className="mx-auto md:max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-12">
          <div>
            <div className="flex items-center gap-x-2">
              <Image
                src="/assets/images/logo/logo_ad_logistic_removebg.png"
                alt="Logo"
                width={30}
                height={30}
              />
              <span className=" text-2xl font-medium font-titanOne text-primary bg-gradient-to-r from-[#9d6d16] to-[#603000] text-transparent bg-clip-text">
                AD LOGISTIC
              </span>
            </div>
            <p className="text-sm font-medium text-gray mt-2">
              With a search first mentality across digital marketing, our
              passionate consulting team is hands-on to help conquer anything
            </p>
          </div>
          <div className="md:pl-8">
            <h1 className=" text-lg font-bold">Quick Links</h1>
            <div className="flex flex-col mt-2 text-gray gap-y-1">
              {QuickLink.map((item) => (
                <Link
                  className="hover:text-primary"
                  key={item.link}
                  href={item.link}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h1 className=" text-lg font-bold">Contact</h1>
            <div className="mt-2 text-gray space-y-1">
              <p>Dai Mo Street, Nam Tu Liem District, Hanoi</p>
              <p className="underline">adlogisticglobal@gmail.com</p>
              <div>0984053166</div>
            </div>
          </div>
          <div>
            <h1 className=" text-lg font-bold">Newsletter</h1>
            <p className="text-base font-medium text-gray mt-2">
              We are not spammers.!
            </p>
            <div className="mt-8">
              <Input placeholder="Email Address" size={"lg"} />
              <p className="textsm md:text-base font-medium text-primary mt-4">
                Please complete this required field.
              </p>
              <Button className="font-bold mt-8" size={isMobile ? "sm" : "lg"}>
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-sm font-semibold text-center mt-20">
        © 2021 <span className="text-primary">AD Logistic</span> Made with by{" "}
        <span className="text-primary">Cudtad</span>
      </div>
    </div>
  );
}
