import Header from "./header";


type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <main className="mx-auto relative">
      <Header />
      <div>{children}</div>
      {/* <Footer /> */}
    </main>
  );
}
