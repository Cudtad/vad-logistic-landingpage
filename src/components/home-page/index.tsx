/* eslint-disable @next/next/no-img-element */

import Button from "../common/button";
import TelegramIcon from "../common/svg-icons/TelegramIcon";

export default function HomePage() {
  return (
    <div>
      <div className="w-full h-screen relative overflow-hidden">
        <img src="/assets/images/banner_ad_logistic.webp" alt="Banner" />
        {/* overlay */}
        <div className=" absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10"></div>
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-white text-6xl font-poppins font-black leading-[80px] space-y-6">
          <h1 className="text-center">Booking Our Passage <br /> To The Future</h1>
          <div className="flex item-center justify-center">
            <Button variant="primary" size="lg">Booking now</Button>
            <Button prevIcon={<TelegramIcon />} variant="chip" size="lg">Join us on Telegram</Button>
          </div>
        </div>
      </div>
      <div className="h-96">Service</div>
    </div>
  );
}
