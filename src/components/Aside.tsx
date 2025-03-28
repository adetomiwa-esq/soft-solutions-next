'use client'
import { FaBars } from "react-icons/fa";
import profileP from '@/assets/profile-pic.png';
import Image from "next/image";
import Link from "next/link";
import { TbGridDots } from "react-icons/tb";
import { LuCircleUserRound } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { BsFileEarmarkTextFill, BsHeart } from "react-icons/bs";
import { RiHeartsLine } from "react-icons/ri";
import { LiaUserFriendsSolid } from "react-icons/lia";

export default function Aside() {

  const pathname = usePathname()

  const [displayNav, setDisplayNav] = useState<boolean>(false)

  // const body = document.querySelector('body')

  // body?.addEventListener('click', () => {
  //   setDisplayNav(false)
  // })
  return (
    <aside className="w-[50px] sm:w-[100px] pl-12 pt-6">
        <i className="cursor-pointer fixed left-5 sm:left-12 top-28" onClick={() => {
          setDisplayNav(true)
        }}><FaBars /></i>

        <div className={`flex flex-col items-center bg-white pb-3 pt-8 w-[284px] fixed ${displayNav ? 'left-0' : 'left-[-284px]'} top-[71px] z-50 rounded-lg max-h-[calc(100svh-71px)] overflow-y-scroll transition-all delay-300 duration-300 ease-in-out`} onClick={(e) => e.stopPropagation()}>
          <i onClick={() => setDisplayNav(false)} className="cursor-pointer mb-2 text-2xl"><AiOutlineClose /></i>
          <div className="mb-5">
            <Image src={profileP} alt="profil-pic" width={75} height={75} />
            <p className="text-center font-semibold mt-4">Temiloluwa</p>
          </div>

          <ul className="flex flex-col gap-2 w-[177px] h-[calc(100vh-71px)]">
            <li className="w-full"><Link href="/" className={`hover:bg-[#EF2424] hover:text-white flex gap-3 h-9 rounded-md pl-4 items-center ${pathname === "/" ? 'bg-[#EF2424] text-white' : ''}`}><i><TbGridDots /></i> Dashboard</Link></li>
            <li className="w-full"><Link href="/my-profile" className={`hover:bg-[#EF2424] hover:text-white flex gap-3 h-9 rounded-md pl-4 items-center ${pathname === "/my-profile" ? 'bg-[#EF2424] text-white' : ''}`}><i><LuCircleUserRound /></i> <span>My Profile</span></Link></li>
            <li className="w-full"><Link href="/" className={`hover:bg-[#EF2424] hover:text-white flex gap-3 h-9 rounded-md pl-4 items-center`}><i><BsHeart /></i> <span>Favorites</span></Link></li>
            <li className="w-full"><Link href="/" className={`hover:bg-[#EF2424] hover:text-white flex gap-3 h-9 rounded-md pl-4 items-center`}><i><LiaUserFriendsSolid /></i> <span>My Mutuals</span></Link></li>
            <li className="w-full"><Link href="/" className={`hover:bg-[#EF2424] hover:text-white flex gap-3 h-9 rounded-md pl-4 items-center`}><i><BsFileEarmarkTextFill /></i> <span>My Subscribed</span></Link></li>
            <li className="w-full"><Link href="/" className={`hover:bg-[#EF2424] hover:text-white flex gap-3 h-9 rounded-md pl-4 items-center`}><i><RiHeartsLine /></i> <span>Interested in me</span></Link></li>
            <li className="w-full"><Link href="/" className={`hover:bg-[#EF2424] hover:text-white flex gap-3 h-9 rounded-md pl-4 items-center`}><i><IoSettingsOutline /></i> <span>Settings</span></Link></li>
            <li className="w-full"><Link href="/" className={`hover:bg-[#EF2424] hover:text-white flex gap-3 h-9 rounded-md pl-4 items-center`}><i><IoMdLogOut /></i> <span>Logout</span></Link></li>
          </ul>
        </div>
    </aside>
  )
}
