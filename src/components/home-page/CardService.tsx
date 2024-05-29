import Image from "next/image";

type Props = {
  imageFeature: string;
  title: string;
  description: string;
};

export default function CardService({
  imageFeature,
  title,
  description,
}: Props) {
  return (
    <div className="bg-white shadow-box px-5 py-10 md:px-12 md:py-20 flex flex-col items-center rounded">
      <Image src={imageFeature} alt="Image Service" width={90} height={80} />
      <h1 className="text-lg md:text-xl font-black mt-11 hover:text-primary hover:cursor-pointer">{title.toUpperCase()}</h1>
      <p className="text-center mt-5 text-secondary text-sm md:text-base">{description}</p>
      <button className="text-black hover:text-primary text-sm font-bold mt-10">Discovery more</button>
    </div>
  );
}
