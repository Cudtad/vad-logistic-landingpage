/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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
import {
  BackpackIcon,
  CubeIcon,
  HomeIcon,
  RocketIcon,
  RowsIcon,
} from "@radix-ui/react-icons";
import Button from "@/components/common/button";
import Drawer from "@/components/common/drawer";
import Collapsible from "@/components/common/collapsible";
import ModalContact from "@/components/common/modal-contact";

const navigationLink = [
  {
    trigger: "Service",
    label: "Dịch vụ",
    content: [
      {
        title: "Vận chuyển 2 chiều Việt Nam & quốc tế",
        icon: <RocketIcon />,
        nav: "/service/delivery",
      },
      {
        title: "Giải pháp Fulfillment cho các doanh nghiệp",
        icon: <CubeIcon />,
        nav: "/service/fulfillment",
      },
      {
        title: "Cho thuê kho bãi, nhân sự tại 200 quốc gia",
        icon: <HomeIcon />,
        nav: "/service/warehouse",
      },
      {
        title: "Mua hàng hộ",
        icon: <BackpackIcon />,
        nav: "/service/order",
      },
    ],
  },
  {
    trigger: "About",
    label: "Về chúng tôi",
    nav: "/about",
  },
  {
    trigger: "Contact",
    label: "Liên hệ",
    nav: "/contact",
  },
];

type Props = {
  changeText: boolean;
};

export default function Navigation({ changeText }: Props) {
  const isMobile = useMobile();
  const [isDrawer, setIsDrawer] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);
  const [isModal, setIsModal] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClick = () => {
    setIsDrawer(true);
  };

  const handleCloseModal = () => {
    setIsModal(false);
  };

  const handleClose = () => {
    setIsDrawer(false);
  };

  const handleNavClick = (nav: string) => {
    if (nav === "/contact") {
      setIsModal(true);
    } else {
      router.push(nav);
    }
    setIsDrawer(false);
  };

  return (
    <div className="w-full flex items-center justify-between">
      <Link
        href={"/"}
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
        <span className="text-xl md:text-4xl font-medium font-titanOne text-primary bg-gradient-to-r from-[#9d6d16] to-[#603000] text-transparent bg-clip-text">
          AD LOGISTIC
        </span>
      </Link>
      {isMobile ? (
        <div className="pr-4">
          <Button size="xs" variant="chip" onClick={handleClick}>
            <RowsIcon />
          </Button>
        </div>
      ) : (
        isClient && (
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
                            {item.label}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            {item?.content.map((item) => (
                              <ListItem
                                nav={item.nav}
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
                          onClick={() => handleNavClick(item.nav || "/")}
                        >
                          {item.label}
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
        )
      )}
      <Drawer isOpen={isDrawer} onClose={handleClose}>
        <div className="flex items-start flex-col gap-y-5 text-base font-semibold">
          {navigationLink.map((item) => {
            if (item?.content) {
              return (
                <Collapsible key={item.trigger} title={item.label}>
                  {item.content.map((link) => (
                    <Link
                      className="text-xs font-medium hover:cursor-pointer hover:text-primary flex item-center gap-x-2"
                      key={link.nav}
                      href={link.nav}
                      onClick={() => {
                        setIsDrawer(false);
                      }}
                    >
                      {link.icon}
                      <span>{link.title}</span>
                    </Link>
                  ))}
                </Collapsible>
              );
            }
            if (item.nav === "/contact") {
              return (
                <button
                  key={item.trigger}
                  onClick={() => {
                    setIsModal(true);
                    setIsDrawer(false)
                  }}
                >
                  {item.label}
                </button>
              );
            }
            return (
              <Link
                key={item.trigger}
                onClick={() => {
                  setIsDrawer(false);
                }}
                href={item.nav || "/"}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </Drawer>
      <ModalContact isModal={isModal} handleCloseModal={handleCloseModal} />
    </div>
  );
}
