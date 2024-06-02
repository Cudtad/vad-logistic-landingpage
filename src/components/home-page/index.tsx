/* eslint-disable @next/next/no-img-element */
"use client"

import { ListTab } from "@/types";
import Button from "../common/button";
import TelegramIcon from "../common/svg-icons/TelegramIcon";
import CardService from "./CardService";
import ProcessTabs from "./ProcessTabs";
import CustomSlider from "../common/slider";
import SliderOurMeetTeam from "../common/slider-our-meet-team";
import Brand from "./Brand";
import useMobile from "@/hooks/useMobile";

const listService = [
  {
    imageFeature: "/assets/images/icons/icon_ship.webp",
    title: "Cargo ship",
    description:
      "Nullam varius porttitor augue id rutrum. Duis vehicula magna at magnaAenean convallis",
  },
  {
    imageFeature: "/assets/images/icons/icon_airplane.webp",
    title: "Ship by air",
    description:
      "Nullam varius porttitor augue id rutrum. Duis vehicula magna at magnaAenean convallis",
  },
  {
    imageFeature: "/assets/images/icons/icon_shipcar.webp",
    title: "Express delivery",
    description:
      "Nullam varius porttitor augue id rutrum. Duis vehicula magna at magnaAenean convallis",
  },
  {
    imageFeature: "/assets/images/icons/icon_protect_package.webp",
    title: "Package protection",
    description:
      "Nullam varius porttitor augue id rutrum. Duis vehicula magna at magnaAenean convallis",
  },
  {
    imageFeature: "/assets/images/icons/icon_order.webp",
    title: "Order service",
    description:
      "Nullam varius porttitor augue id rutrum. Duis vehicula magna at magnaAenean convallis",
  },
  {
    imageFeature: "/assets/images/icons/icon_ship_van.webp",
    title: "Shipping van",
    description:
      "Nullam varius porttitor augue id rutrum. Duis vehicula magna at magnaAenean convallis",
  },
];

const ListTabs: ListTab[] = [
  {
    title: "1. Call-Center",
    value: "contact",
  },
  {
    title: "2. Warehouse",
    value: "warehouse",
  },
  {
    title: "3. Weighing",
    value: "weighing",
  },
  {
    title: "4. Delivery",
    value: "delivery",
  },
];

const ListContents = [
  {
    value: "contact",
    title:
      "1 I've tried every analytics product on the market and when I came across.",
    description: (
      <div className="space-y-5">
        <p>
          Search engine optimization professional’s research keywords, which
          they use to achieve better rankings in search engines. Our consultants
          will start by getting to know you and your business. We’ll make every
          effort to get an understanding of your objectives, products and
          production.
        </p>
        <p>
          Search engine optimization professional’s research keywords, which
          they use to achieve better rankings in search engines. Our consultants
          will start by getting to know you and your business. We’ll make every
          effort to get an understanding of your objectives, products and
          production.
        </p>
      </div>
    ),
    imageFeature: "/assets/images/home/tabs_contact.webp",
  },
  {
    value: "warehouse",
    title:
      "2 I've tried every analytics product on the market and Optimization",
    description: (
      <div className="space-y-5">
        <p>
          Search engine optimization professional’s research keywords, which
          they use to achieve better rankings in search engines. Our consultants
          will start by getting to know you and your business. We’ll make every
          effort to get an understanding of your objectives, products and
          production.
        </p>
        <p>
          Search engine optimization professional’s research keywords, which
          they use to achieve better rankings in search engines. Our consultants
          will start by getting to know you and your business. We’ll make every
          effort to get an understanding of your objectives, products and
          production.
        </p>
      </div>
    ),
    imageFeature: "/assets/images/home/tabs_warehouse.webp",
  },
  {
    value: "weighing",
    title:
      "3 I've tried every analytics product on the market and when I came across.",
    description: (
      <div className="space-y-5">
        <p>
          Search engine optimization professional’s research keywords, which
          they use to achieve better rankings in search engines. Our consultants
          will start by getting to know you and your business. We’ll make every
          effort to get an understanding of your objectives, products and
          production.
        </p>
        <p>
          Search engine optimization professional’s research keywords, which
          they use to achieve better rankings in search engines. Our consultants
          will start by getting to know you and your business. We’ll make every
          effort to get an understanding of your objectives, products and
          production.
        </p>
      </div>
    ),
    imageFeature: "/assets/images/home/tabs_weighing.webp",
  },
  {
    value: "delivery",
    title:
      "4 I've tried every analytics product on the market and when I came across.",
    description: (
      <div className="space-y-5">
        <p>
          Search engine optimization professional’s research keywords, which
          they use to achieve better rankings in search engines. Our consultants
          will start by getting to know you and your business. We’ll make every
          effort to get an understanding of your objectives, products and
          production.
        </p>
        <p>
          Search engine optimization professional’s research keywords, which
          they use to achieve better rankings in search engines. Our consultants
          will start by getting to know you and your business. We’ll make every
          effort to get an understanding of your objectives, products and
          production.
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
        "A company that delivers results from the moment you start. We had been managing our own accounts and our SEO had only been a small part of our efforts. With Higher Visibility a weight was lifted off our shoulders on the campaigns they now manage and our SEO ranking is growing daily.",
      name: "NA",
      role: "CEO",
      imageAvatar: "/assets/images/home/avatar.webp",
    },
  },
  {
    id: 2,
    content: {
      comment:
        "A company that delivers results from the moment you start. We had been managing our own accounts and our SEO had only been a small part of our efforts. With Higher Visibility a weight was lifted off our shoulders on the campaigns they now manage and our SEO ranking is growing daily.",
      name: "DD",
      role: "CEO",
      imageAvatar: "/assets/images/home/avatar.webp",
    },
  },
  {
    id: 3,
    content: {
      comment:
        "A company that delivers results from the moment you start. We had been managing our own accounts and our SEO had only been a small part of our efforts. With Higher Visibility a weight was lifted off our shoulders on the campaigns they now manage and our SEO ranking is growing daily.",
      name: "AD",
      role: "CEO",
      imageAvatar: "/assets/images/home/avatar.webp",
    },
  },
  // {
  //   id: 2,
  //   content: (
  //     <div className="bg-blue-500 h-48 flex items-center justify-center">
  //       Slide 2
  //     </div>
  //   ),
  // },
  // {
  //   id: 3,
  //   content: (
  //     <div className="bg-green-500 h-48 flex items-center justify-center">
  //       Slide 3
  //     </div>
  //   ),
  // },
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
  return (
    <div>
      <div className="w-full h-screen relative overflow-hidden">
        <img className="aspect-[10/22]" src={isMobile ? "/assets/images/banner_ad_logistic_mobile.jpg" : "/assets/images/banner_ad_logistic.webp"} alt="Banner" />
        {/* overlay */}
        <div className=" absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10"></div>
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 space-y-6">
          <h1 className="text-center text-white text-2xl md:text-6xl font-poppins font-black leading-10 md:leading-[80px] w-max">
            Booking Our Passage <br /> To The Future
          </h1>
          <div className="flex item-center justify-center">
            <Button variant="primary" size={isMobile ? "sm" : "lg"}>
              Booking now
            </Button>
            <Button prevIcon={<TelegramIcon />} variant="chip" size={isMobile ? "sm" : "lg"}>
              Join us on Telegram
            </Button>
          </div>
        </div>
      </div>
      <div className="py-10 md:pt-32 md:pb-16 px-4 md:px-0">
        <div className="mx-auto md:max-w-screen-xl grid grid-cols-1 md:grid-cols-3 md:gap-x-10 gap-y-16">
          {listService.map((item) => {
            return (
              <CardService
                key={item.imageFeature}
                title={item.title}
                imageFeature={item.imageFeature}
                description={item.description}
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
              AD Logistic is a logistics vehicula magna at magna is honcu.quis
              lobortis elit necyer augue.
            </h1>
            <p className="text-secondary text-sm md:text-base font-medium mt-4 md:mt-8">
              Having worked with hundreds of companies from small nice other
              businesses to Fortune 1000’s, we understand your pain points. We
              also understand we aren’t the right agency for every business. We
              want to work with businesses that want a partner, not a doer tech
              and bus.
            </p>
            <Button
              className="mt-8 md:mt-14 text-sm font-semibold"
              variant="primary"
              size={isMobile ? "sm" : "lg"}
            >
              MORE ABOUT US
            </Button>
          </div>
        </div>
      </div>
      <div className="py-10 md:pt-32 px-4 md:px-0 mx-auto md:max-w-screen-xl">
        <div>
          <p className="text-sm md:text-base font-medium text-primary text-center">
            HOW IT WORKS
          </p>
          <h1 className="text-2xl md:text-[44px] font-black text-center mt-2">
            Our Process
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
            <p className="text-sm md:text-base font-medium text-primary">TESTIMONIALS</p>
            <h1 className="text-2xl md:text-[44px] font-black mt-2 md:mt-4">Trusted From My Clients</h1>
          </div>
          <div className="mt-5 md:mt-20">
            <CustomSlider slides={slides} />
          </div>
        </div>
      </div>
      <div className="py-10 md:pt-32 px-4 md:px-0 mx-auto md:max-w-screen-xl">
        <p className="text-sm md:text-base font-medium text-primary">TRUSTED EXPERTS</p>
        <h1 className="text-2xl md:text-[44px] font-black mt-2 md:mt-4 md:mb-8">Meet Our Team</h1>

        <SliderOurMeetTeam slides={SlideOurMeetTeam} />
      </div>
      <div className="pt-5 md:pt-10">
        <div className="bg-[#f8f8f8]">
          <Brand />
        </div>
      </div>
    </div>
  );
}
