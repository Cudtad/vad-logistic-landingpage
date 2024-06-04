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
  EnvelopeClosedIcon,
  HomeIcon,
  MobileIcon,
  PersonIcon,
  RocketIcon,
  RowsIcon,
  SewingPinIcon,
} from "@radix-ui/react-icons";
import Button from "@/components/common/button";
import Drawer from "@/components/common/drawer";
import Collapsible from "@/components/common/collapsible";
import Modal from "@/components/common/modal";
import TelegramIcon from "@/components/common/svg-icons/TelegramIcon";
import FacebookIcon from "@/components/common/svg-icons/facebook";
import ZaloIcon from "@/components/common/svg-icons/zalo";

const navigationLink = [
  {
    trigger: "Service",
    content: [
      {
        title: "Vận chuyển 2 chiều Việt Nam & quốc tế",
        icon: <RocketIcon />,
        nav: "/service/delivery",
      },
      {
        title: "Giải pháp Fullfillment cho các doanh nghiệp",
        icon: <CubeIcon />,
        nav: "/service/fullfillment",
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
    nav: "/about",
  },
  {
    trigger: "Contact",
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
                            {item.trigger}
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
        )
      )}
      <Drawer isOpen={isDrawer} onClose={handleClose}>
        <div className="flex flex-col gap-y-5 text-base font-semibold">
          {navigationLink.map((item) => {
            if (item?.content) {
              return (
                <Collapsible key={item.trigger} title={item.trigger}>
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
            return (
              <Link
                key={item.trigger}
                onClick={() => {
                  setIsDrawer(false);
                }}
                href={item.nav || "/"}
              >
                {item.trigger}
              </Link>
            );
          })}
        </div>
      </Drawer>
      <Modal
        isOpen={isModal}
        onClose={handleCloseModal}
        title={"Contact AD Logistic"}
      >
        <div className="flex flex-col justify-center items-center w-full">
          <div className="space-y-2">
            <div className="flex items-center gap-x-3">
              <PersonIcon width={20} height={20} />
              <div className="flex items-center space-x-2">
                <h2 className="text-lg font-semibold">Phạm Ngọc Ánh</h2>
                <p className="text-base text-secondary">(CEO AD Logistic)</p>
              </div>
            </div>
            <div className="flex items-center gap-x-3">
              <MobileIcon />
              <p>0984053166</p>
            </div>
            <div className="flex items-center gap-x-3">
              <SewingPinIcon />
              <p>Đại Mỗ, Nam Từ Liêm, Hà Nội</p>
            </div>
            <div className="flex items-center gap-x-3">
              <EnvelopeClosedIcon />
              <p>adlogisticglobal@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-x-20 mt-5">
            <Link
              target="_blank"
              className="hover:text-primary"
              href={"https://www.facebook.com/profile.php?id=61559645144546"}
            >
              <FacebookIcon width={24} height={24} />
            </Link>
            <Link
              target="_blank"
              className="hover:text-primary"
              href={"https://zalo.me/0984053166"}
            >
              <ZaloIcon width={24} height={24} />
            </Link>
            <Link
              target="_blank"
              className="hover:text-primary"
              href={"https://t.me/Cudtad"}
            >
              <TelegramIcon size={30} />
            </Link>
          </div>
          <p className="text-base mt-8">Liên hệ ngay với chúng tôi để nhận được tư vấn và báo giá chi tiết</p>
          <p className="text-base mt-1">AD Logistic - Đồng hành cùng thành công của bạn!</p>
        </div>
      </Modal>
    </div>
  );
}
