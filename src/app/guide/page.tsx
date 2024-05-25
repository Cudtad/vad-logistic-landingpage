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
    </main>
  );
}
