import Aside from "@/components/Aside";
import Navbar from "@/components/Navbar";
import Top from "./LandingPage/Top";
import Cards from "./LandingPage/Cards";

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)] pt-[71px]">
      <Navbar />
      <div className="flex">
        <Aside />
        <main className="w-[calc(100%-50px)] sm:w-[calc(100%-100px)] pt-10">
          <Top />
          <Cards />
        </main>
      </div>
    </div>
  );
}
