/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import useMobile from "@/hooks/useMobile";
import Image from "next/image";
import {
  ListItem,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/common/navigation-menu";
import { CubeIcon, HomeIcon, RocketIcon } from "@radix-ui/react-icons";

const navigation = [
  {
    title: "couple",
    // href: "/story",
    target: "couple", // Thêm target tương ứng với ID của phần cần scroll đến
  },
  {
    title: "stories",
    // href: "/gallery",
    target: "story",
  },
  {
    title: "memories",
    // href: "/event",
    target: "sweetMemory",
  },
  {
    title: "wedding",
    // href: "/attending",
    target: "ourWedding",
  },
];

const navigationLink = [
  {
    trigger: "Service",
    content: [
      {
        title: "Vận chuyển 2 chiều Việt Nam & quốc tế",
        icon: <RocketIcon />,
      },
      {
        title: "Giải pháp Fullfillment cho các doanh nghiệp",
        icon: <CubeIcon />,
      },
      {
        title: "Cho thuê kho bãi, nhân sự tại 200 quốc gia",
        icon: <HomeIcon />,
      },
    ],
  },
  {
    trigger: "About",
  },
  {
    trigger: "Contact",
  },
];

type Props = {
  changeText: boolean;
};

export default function Navigation({ changeText }: Props) {
  const [isActive, setIsActive] = useState<string>("");
  const isMobile = useMobile();

  const handleNavLinkClick = (key: string) => {
    setIsActive(key);
    if (key === "couple") {
      window.scrollTo({
        top: isMobile ? 620 : 700,
        behavior: "smooth",
      });
    }
    if (key === "story") {
      window.scrollTo({
        top: isMobile ? 2250 : 1900,
        behavior: "smooth",
      });
    }
    if (key === "sweetMemory") {
      window.scrollTo({
        top: isMobile ? 5000 : 4300,
        behavior: "smooth",
      });
    }
    if (key === "ourWedding") {
      window.scrollTo({
        top: isMobile ? 6800 : 5900,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full flex items-center justify-between">
      <button
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className="flex items-center justify-center gap-x-1"
      >
        <Image
          src="/assets/images/logo/logo_ad_logistic_removebg.png"
          alt="Logo"
          width={50}
          height={50}
        />
        <span className=" text-4xl font-medium font-titanOne text-primary bg-gradient-to-r from-[#9d6d16] to-[#603000] text-transparent bg-clip-text">
          AD LOGISTIC
        </span>
      </button>
      <div>
        <NavigationMenuRoot>
          <NavigationMenuList className=" gap-x-20">
            {navigationLink.map((item) => {
              return (
                <NavigationMenuItem key={item.trigger}>
                  {item?.content ? (
                    <>
                      <NavigationMenuTrigger
                        className={clsx("text-lg font-bold0", {
                          "text-white": !changeText,
                          "text-black": changeText,
                        })}
                      >
                        {item.trigger}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        {item?.content.map((item) => (
                          <ListItem
                            key={item.title}
                            title={item.title}
                            icon={item.icon}
                          />
                        ))}
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink
                      className={clsx("text-lg font-bold0", {
                        "text-white": !changeText,
                        "text-black": changeText,
                      })}
                    >
                      {item.trigger}
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
          <div className="absolute top-full left-0 flex w-full justify-center">
            <NavigationMenuViewport />
          </div>
        </NavigationMenuRoot>
      </div>
    </div>
  );
}
