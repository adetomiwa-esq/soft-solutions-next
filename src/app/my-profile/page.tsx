import Aside from "@/components/Aside";
import Navbar from "@/components/Navbar";
import Top from "../my-profile/Top";
import PersonalInfo from "./PersonalInfo";

export default function page() {
  return (
    <main className="pt-[71px]">
        <Navbar />

        <div className="flex">
            <Aside />
            <div className="w-[calc(100%-100px)] pt-20 pr-20 pb-6">
                <Top />
                <PersonalInfo />
            </div>
        </div>
    </main>
  )
}
