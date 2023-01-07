import { Navbar, Header, Advertisement } from "~/components";

export default function Index() {
  return (
    <>
      <Advertisement />
      <Navbar />
      <Header />
      <section className="pb-20 -mt-52 h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2]"></section>
    </>
  );
}
