import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  imageSrc: string;
  href: string;
};

export default function ShakeIcon({ imageSrc, href }: Props) {
  const [shake, setShake] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const shakeInterval = setInterval(() => {
      setShake(true);
      setShowText(true);

      setTimeout(() => {
        setShake(false);
      }, 500); // Shake for 0.5 seconds

      setTimeout(() => {
        setShowText(false);
      }, 6000); // Show text for 6 seconds
    }, 10000); // Repeat every 10 seconds

    // Clean up interval on unmount
    return () => {
      clearInterval(shakeInterval);
    };
  }, []);

  return (
    <Link href={href} target="_blank">
      <div className="relative">
        {showText && (
          <p
            className={`absolute rounded-[4px] bg-white p-1 top-1/2 w-32 right-16 md:w-48 md:transform -translate-y-1/2 text-center text-xs md:text-sm text-black animate-fade-in`}
          >
            Liên hệ với tôi ngay
          </p>
        )}
        <Image
          width={50}
          height={50}
          src={imageSrc}
          alt="Icon Shake"
          className={shake ? "animate-shake" : ""}
        />
      </div>
    </Link>
  );
}
