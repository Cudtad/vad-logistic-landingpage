import Image from "next/image";
import Link from "next/link";

type Props = {
  imageFeature: string;
  title: string;
  description: string;
  link: string
};

export default function CardService({
  imageFeature,
  title,
  description,
  link
}: Props) {
  return (
    <div className="bg-white shadow-box px-5 pt-10 pb-20 md:px-12 md:pt-20 md:pb-36 flex flex-col items-center rounded relative">
      <Image src={imageFeature} alt="Image Service" width={90} height={80} />
      <h1 className="text-lg text-center md:text-xl font-black mt-11 hover:text-primary hover:cursor-pointer">{title.toUpperCase()}</h1>
      <p className="text-center mt-5 text-secondary text-sm md:text-base">{description}</p>
      <Link href={link} className="text-black hover:text-primary text-sm font-bold absolute bottom-8 md:bottom-14 left-1/2 -translate-x-1/2">Xem thêm</Link>
    </div>
  );
}
