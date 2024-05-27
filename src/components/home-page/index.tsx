/* eslint-disable @next/next/no-img-element */

import { ListTab } from "@/types";
import Button from "../common/button";
import TelegramIcon from "../common/svg-icons/TelegramIcon";
import CardService from "./CardService";
import ProcessTabs from "./ProcessTabs";
import CustomSlider from "../common/slider";

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

export default function HomePage() {
  return (
    <div>
      <div className="w-full h-screen relative overflow-hidden">
        <img src="/assets/images/banner_ad_logistic.webp" alt="Banner" />
        {/* overlay */}
        <div className=" absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10"></div>
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-white text-6xl font-poppins font-black leading-[80px] space-y-6">
          <h1 className="text-center">
            Booking Our Passage <br /> To The Future
          </h1>
          <div className="flex item-center justify-center">
            <Button variant="primary" size="lg">
              Booking now
            </Button>
            <Button prevIcon={<TelegramIcon />} variant="chip" size="lg">
              Join us on Telegram
            </Button>
          </div>
        </div>
      </div>
      <div className="pt-32 pb-16">
        <div className="mx-auto md:max-w-screen-xl grid grid-cols-3 gap-x-10 gap-y-16">
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
      <div className="pt-32 pb-16 mx-auto md:max-w-screen-xl">
        <div className="grid grid-cols-2">
          <div>
            <img
              src="/assets/images/about_us_ad_logistic.webp"
              alt="About us"
            />
          </div>
          <div>
            <p className="text-primary text-base font-medium">
              INTERNATIONAL LOGISTICS
            </p>
            <h1 className=" text-4xl font-black mt-2">
              AD Logistic is a logistics vehicula magna at magna is honcu.quis
              lobortis elit necyer augue.
            </h1>
            <p className="text-secondary text-base font-medium mt-8">
              Having worked with hundreds of companies from small nice other
              businesses to Fortune 1000’s, we understand your pain points. We
              also understand we aren’t the right agency for every business. We
              want to work with businesses that want a partner, not a doer tech
              and bus.
            </p>
            <Button
              className="mt-14 text-sm font-semibold"
              variant="primary"
              size="lg"
            >
              MORE ABOUT US
            </Button>
          </div>
        </div>
      </div>
      <div className="pt-32 mx-auto md:max-w-screen-xl">
        <div>
          <p className="text-base font-medium text-primary text-center">
            HOW IT WORKS
          </p>
          <h1 className=" text-[44px] font-black text-center mt-2">
            Our Process
          </h1>
        </div>
        <div className="mt-10">
          <ProcessTabs listTab={ListTabs} listContent={ListContents} />
        </div>
      </div>
      <div className="relative h-[728px] overflow-hidden mt-10 mb-16 ">
        <img
          className="absolute -top-1/3 -z-10"
          src="/assets/images/home/bg-testimonials.png"
          alt="Background Testimonials"
        />
        <div className="mx-auto md:max-w-screen-xl pt-32">
          <div>
            <p className="text-base font-medium text-primary">TESTIMONIALS</p>
            <h1 className=" text-[44px] font-black">Trusted From My Clients</h1>
          </div>
          <div className="mt-20">
            <CustomSlider slides={slides} />
          </div>
        </div>
      </div>
      <div className="pt-32 pb-16 mx-auto md:max-w-screen-xl">
        <p className="text-base font-medium text-primary">TRUSTED EXPERTS</p>
        <h1 className="text-[44px] font-black">Meet Our Team</h1>
      </div>
    </div>
  );
}
