/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import styles from "./styles/brand.module.scss";

const ListBrand = [
  {
    id: 1,
    imageBrand: "/assets/images/home/brand/aupost.jpeg",
  },
  {
    id: 2,
    imageBrand: "/assets/images/home/brand/deutshe_post.png",
  },
  {
    id: 3,
    imageBrand: "/assets/images/home/brand/dhl.jpeg",
  },
  {
    id: 4,
    imageBrand: "/assets/images/home/brand/dpex.png",
  },
  {
    id: 5,
    imageBrand: "/assets/images/home/brand/fedex.png",
  },
  {
    id: 6,
    imageBrand: "/assets/images/home/brand/nzpost.png",
  },
  {
    id: 7,
    imageBrand: "/assets/images/home/brand/ups.png",
  },
  {
    id: 8,
    imageBrand: "/assets/images/home/brand/usps.jpeg",
  },
  {
    id: 9,
    imageBrand: "/assets/images/home/brand/vina_dowell.png",
  },
  {
    id: 10,
    imageBrand: "/assets/images/home/brand/aupost.jpeg",
  },
  {
    id: 11,
    imageBrand: "/assets/images/home/brand/deutshe_post.png",
  },
  {
    id: 12,
    imageBrand: "/assets/images/home/brand/dhl.jpeg",
  },
  {
    id: 13,
    imageBrand: "/assets/images/home/brand/dpex.png",
  },
  {
    id: 14,
    imageBrand: "/assets/images/home/brand/fedex.png",
  },
  {
    id: 15,
    imageBrand: "/assets/images/home/brand/nzpost.png",
  },
  {
    id: 16,
    imageBrand: "/assets/images/home/brand/ups.png",
  },
  {
    id: 17,
    imageBrand: "/assets/images/home/brand/usps.jpeg",
  },
  {
    id: 18,
    imageBrand: "/assets/images/home/brand/vina_dowell.png",
  },
  
];

export default function Brand() {
  return (
    <div className="py-8 md:py-20">
      {ListBrand.length > 0 ? (
        <div className="w-full overflow-hidden" key={"bear"}>
          <div className={styles["loop-looper-ltr"]}>
            <div className="flex items-center gap-x-20">
            
              {ListBrand.map((brand) => (
                <div key={brand.id} className="hover:cursor-pointer">
                  <img className="w-20 h-20 md:w-40 md:h-40" src={brand.imageBrand} alt="Image Brand" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
