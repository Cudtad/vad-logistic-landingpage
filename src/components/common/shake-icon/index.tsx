"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  imageSrc: string;
  href: string;
};

export default function ShakeIcon({ imageSrc, href }: Props) {
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShake(true);
      setTimeout(() => {
        setShake(false);
      }, 500); // Shake duration
    }, 5000); // 5 seconds interval

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <Link target="_blank" href={href}>
      <Image
        width={50}
        height={50}
        src={imageSrc}
        alt="Icon Shake"
        className={shake ? "animate-shake" : ""}
      />
    </Link>
  );
}
