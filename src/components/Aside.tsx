'use client'
import { FaBars } from "react-icons/fa";
import profileP from '@/assets/profile-pic.png';
import Image from "next/image";
import Link from "next/link";
import { TbGridDots } from "react-icons/tb";
import { LuCircleUserRound } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Aside() {

  const pathname = usePathname()

  const [displayNav, setDisplayNav] = useState<boolean>(false)

  // const body = document.querySelector('body')

  // body?.addEventListener('click', () => {
  //   setDisplayNav(false)
  // })
  return (
    <aside className="w-[100px] pl-12 pt-10">
        <i className="cursor-pointer fixed left-12 top-28" onClick={() => {
          setDisplayNav(true)
        }}><FaBars /></i>

        <div className={`flex flex-col items-center bg-white pb-3 pt-8 w-[284px] fixed ${displayNav ? 'left-0' : 'left-[-284px]'} top-[71px] z-50 rounded-lg max-h-[calc(100svh-71px)] overflow-y-scroll transition-all delay-300 duration-300 ease-in-out`} onClick={(e) => e.stopPropagation()}>
          <div className="mb-5">
            <Image src={profileP} alt="profil-pic" width={75} height={75} />
            <p className="text-center font-semibold mt-4">Temiloluwa</p>
          </div>

          <ul className="flex flex-col gap-2 w-[177px]">
            <li className="w-full"><Link href="/" className={`hover:bg-[#EF2424] hover:text-white flex gap-3 h-9 rounded-md pl-4 items-center ${pathname === "/" ? 'bg-[#EF2424] text-white' : ''}`}><i><TbGridDots /></i> Dashboard</Link></li>
            <li className="w-full"><Link href="/" className={`hover:bg-[#EF2424] hover:text-white flex gap-3 h-9 rounded-md pl-4 items-center`}><i><LuCircleUserRound /></i> <span>My Profile</span></Link></li>
            <li className="w-full"><Link href="/" className={`hover:bg-[#EF2424] hover:text-white flex gap-3 h-9 rounded-md pl-4 items-center`}><i></i> <span>Favorites</span></Link></li>
            <li className="w-full"><Link href="/" className={`hover:bg-[#EF2424] hover:text-white flex gap-3 h-9 rounded-md pl-4 items-center`}><i></i> <span>My Mutuals</span></Link></li>
            <li className="w-full"><Link href="/" className={`hover:bg-[#EF2424] hover:text-white flex gap-3 h-9 rounded-md pl-4 items-center`}><i></i> <span>My Subscribed</span></Link></li>
            <li className="w-full"><Link href="/" className={`hover:bg-[#EF2424] hover:text-white flex gap-3 h-9 rounded-md pl-4 items-center`}><i></i> <span>Interested in me</span></Link></li>
            <li className="w-full"><Link href="/" className={`hover:bg-[#EF2424] hover:text-white flex gap-3 h-9 rounded-md pl-4 items-center`}><i></i> <span>Settings</span></Link></li>
            <li className="w-full"><Link href="/" className={`hover:bg-[#EF2424] hover:text-white flex gap-3 h-9 rounded-md pl-4 items-center`}><i></i> <span>Logout</span></Link></li>
          </ul>
        </div>
    </aside>
  )
}
