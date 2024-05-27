import Button from "@/components/common/button";
import {
  ListItem,
  NavigationMenuContent,
  NavigationMenuRoot,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuViewport,
} from "@/components/common/navigation-menu";
import CustomSlider from "@/components/common/slider";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/common/tabs";
import ProcessTabs from "@/components/home-page/ProcessTabs";
import { ListTab } from "@/types";
import { CubeIcon, HomeIcon, RocketIcon } from "@radix-ui/react-icons";
// import NavigationMenuCustom from "@/components/common/navigation-menu";

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
    content: (
      <div className="bg-red-500 h-48 flex items-center justify-center">
        Slide 1
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="bg-blue-500 h-48 flex items-center justify-center">
        Slide 2
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className="bg-green-500 h-48 flex items-center justify-center">
        Slide 3
      </div>
    ),
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 h-[2000px]">
      <Button variant="primary" size="lg">
        Click me
      </Button>
      <NavigationMenuRoot>
        <NavigationMenuList>
          {navigationLink.map((item) => {
            return (
              <NavigationMenuItem key={item.trigger}>
                {item?.content ? (
                  <>
                    <NavigationMenuTrigger>
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
                  <NavigationMenuLink>{item.trigger}</NavigationMenuLink>
                )}
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
        <div className="absolute top-full left-0 flex w-full justify-center">
          <NavigationMenuViewport />
        </div>
      </NavigationMenuRoot>

      <ProcessTabs listTab={ListTabs} listContent={ListContents} />
      <CustomSlider slides={slides} />
    </main>
  );
}
