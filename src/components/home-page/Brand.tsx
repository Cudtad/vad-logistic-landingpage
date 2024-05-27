/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import styles from "./styles/brand.module.scss";

const ListBrand = [
  {
    id: 1,
    imageBrand: "/assets/images/home/brand/brand-01.webp",
  },
  {
    id: 2,
    imageBrand: "/assets/images/home/brand/brand-02.webp",
  },
  {
    id: 3,
    imageBrand: "/assets/images/home/brand/brand-03.webp",
  },
  {
    id: 4,
    imageBrand: "/assets/images/home/brand/brand-04.webp",
  },
  {
    id: 6,
    imageBrand: "/assets/images/home/brand/brand-05.webp",
  },
  {
    id: 7,
    imageBrand: "/assets/images/home/brand/brand-01.webp",
  },
  {
    id: 8,
    imageBrand: "/assets/images/home/brand/brand-02.webp",
  },
  {
    id: 9,
    imageBrand: "/assets/images/home/brand/brand-03.webp",
  },
  {
    id: 10,
    imageBrand: "/assets/images/home/brand/brand-04.webp",
  },
  {
    id: 11,
    imageBrand: "/assets/images/home/brand/brand-05.webp",
  },
  {
    id: 12,
    imageBrand: "/assets/images/home/brand/brand-01.webp",
  },
  {
    id: 13,
    imageBrand: "/assets/images/home/brand/brand-02.webp",
  },
  {
    id: 14,
    imageBrand: "/assets/images/home/brand/brand-03.webp",
  },
];

export default function Brand() {
  return (
    <div>
      {ListBrand.length > 0 ? (
        <div className="w-full overflow-hidden" key={"bear"}>
          <div className={styles["loop-looper-ltr"]}>
            <div className="flex items-center gap-x-20">
              {ListBrand.map((brand) => (
                <div key={brand.id} className="hover:cursor-pointer">
                  <img src={brand.imageBrand} alt="Image Brand" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
