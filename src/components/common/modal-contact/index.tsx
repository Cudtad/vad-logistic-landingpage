import { EnvelopeClosedIcon, MobileIcon, PersonIcon, SewingPinIcon } from "@radix-ui/react-icons";
import Modal from "../modal";
import Link from "next/link";
import FacebookIcon from "../svg-icons/facebook";
import ZaloIcon from "../svg-icons/zalo";
import TelegramIcon from "../svg-icons/TelegramIcon";

type Props = {
    isModal: boolean;
    handleCloseModal: () => void
}

export default function ModalContact({isModal, handleCloseModal}: Props) {
  return (
    <Modal
      isOpen={isModal}
      onClose={handleCloseModal}
      title={"Thông tin liên hệ"}
    >
      <div className="flex flex-col justify-center items-center w-full text-black">
        <div className="space-y-2">
          <div className="flex items-center gap-x-3">
            <PersonIcon width={20} height={20} />
            <div className="flex flex-col md:flex-row items-center space-x-2">
              <h2 className=" text-base md:text-lg font-semibold">Phạm Ngọc Ánh</h2>
              <p className="text-sm md:text-base text-secondary">
                (CEO AD Logistic Global)
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-3">
            <MobileIcon />
            <p>0984053166</p>
          </div>
          <div className="flex items-center gap-x-3">
            <SewingPinIcon />
            <p>Đại Mỗ, Nam Từ Liêm, Hà Nội</p>
          </div>
          <div className="flex items-center gap-x-3">
            <EnvelopeClosedIcon />
            <p>adlogisticglobal@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center gap-x-20 mt-5">
          <Link
            target="_blank"
            className="hover:text-primary"
            href={"https://www.facebook.com/profile.php?id=61559645144546"}
          >
            <FacebookIcon width={24} height={24} />
          </Link>
          <Link
            target="_blank"
            className="hover:text-primary"
            href={"https://zalo.me/0984053166"}
          >
            <ZaloIcon width={24} height={24} />
          </Link>
          <Link
            target="_blank"
            className="hover:text-primary"
            href={"https://t.me/ngocanhlogistic"}
          >
            <TelegramIcon size={30} />
          </Link>
        </div>
        <p className="text-sm md:text-base mt-8">
          Liên hệ ngay với chúng tôi để nhận được tư vấn và báo giá chi tiết
        </p>
        <p className="text-sm md:text-base mt-1">
          AD Logistic - Đồng hành cùng thành công của bạn!
        </p>
      </div>
    </Modal>
  );
}
