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
  return (
    <div className="bg-gray-footer py-20 text-white">
      <div className="mx-auto md:max-w-screen-xl">
        <div className="grid grid-cols-4 gap-x-10">
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
          <div>
            <h1 className=" text-lg font-bold">Quick Links</h1>
            <div className="flex flex-col mt-2 text-gray gap-y-1">
              {QuickLink.map((item) => (
                <Link key={item.link} href={item.link}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h1 className=" text-lg font-bold">Contact</h1>
            <div className="mt-2 text-gray space-y-1">
              <p >Dai Mo Street, Nam Tu Liem District, Hanoi</p>
              <p className="underline">adlogisticglobal@gmail.com</p>
              <p>0984053166</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
