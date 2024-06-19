import Footer from "./footer";
import Header from "./header";
import ShakeIcon from "../common/shake-icon";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <main className="mx-auto relative">
      <div className="fixed bottom-[8%] right-[8%] z-50">
        <ShakeIcon imageSrc="/assets/images/icons/icon_messenger.png" href="https://m.me/300156339854766" />
      </div>
      <Header />
      <div>{children}</div>
      <Footer />
    </main>
  );
}
