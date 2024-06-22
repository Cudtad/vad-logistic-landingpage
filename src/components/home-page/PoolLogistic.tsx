import { ReactNode } from "react";
import CountNumber from "../common/count-number";

type Props = {
    icon: ReactNode;
    value: number;
    title: string;
    suffix?: ReactNode | string
}

export default function PoolLogistic({title, icon, value, suffix}:Props) {
  return (
    <div className="flex flex-col items-center gap-y-3 md:gap-y-10">
      <div className="flex items-center justify-center gap-x-2">
        {icon}
        <p className="text-xl md:text-2xl font-semibold">{title}</p>
      </div>
      <CountNumber value={value} suffix={suffix} />
    </div>
  );
}
