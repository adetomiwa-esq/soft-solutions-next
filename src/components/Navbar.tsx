import Image from "next/image";
import logo from '@/assets/logo.png';
import profile from '@/assets/profile-pic.png';
import { IoIosFunnel, IoIosSearch } from "react-icons/io";
import { BiSolidBellRing } from "react-icons/bi";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="">
        <nav className="fixed top-0 h-[71px] left-0 w-full border border-white shadow shadow-[#00000040] flex bg-[#F6F6F6] z-50">
            <Link href='/' className="flex gap-3 md:gap-6 items-center px-2 md:px-8 border-r border-r-white shadow shadow-[#00000040]">
                <Image src={logo} alt="logo image" width={60} height={60} />

                <p className="sm:text-xl">Chuly</p>
            </Link>

            <div className="flex items-center w-full justify-between px-8">
                <div className="flex gap-4">
                    <div className="relative text-[10px] text-[#00000099]">
                        <IoIosSearch className="absolute left-4 top-1/2 -translate-1/2" />
                        <input type="text" name="" id="" className="rounded-[50px] border-[1.5px] border-[#3E7BEA] w-[90px] sm:w-[150px] md:w-[202px] pl-7 h-8" placeholder="search" />
                    </div>

                    <div className="relative text-[10px] text-[#00000099]">
                        <IoIosFunnel className="absolute left-4 top-1/2 -translate-1/2" />
                        <input type="text" name="" id="" className="rounded-[50px] border-[1.5px] border-[#00000099] w-[85px] pl-7 h-8" placeholder="Filter" />
                    </div>
                </div>

                <div className="flex gap-4 items-center">
                <BiSolidBellRing className="text-[#EF2424] text-xl" />
                        <Image src={profile} width={50} height={50} className="hidden sm:inline" alt="profile-pic" />
                </div>
            </div>
        </nav>
    </header>
  )
}
