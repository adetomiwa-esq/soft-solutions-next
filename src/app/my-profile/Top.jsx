import Image from 'next/image'
import React from 'react'
import flower from '@/assets/flower.png'
import box from '@/assets/box.png'
import { FaRegEdit } from 'react-icons/fa'
import { MdOutlineEdit } from 'react-icons/md'

export default function Top() {
  return (
    <section>
        <div className="relative h-[198px] px-7 py-5">
            <Image src={flower} alt='bg img' className='h-full w-full absolute left-0 top-0 z-[-1]' />

            <div className="flex items-center justify-between">
                <button className="bg-[#00000099] text-white rounded-md px-3 py-1 text-xs">Back</button>
                <button className="bg-[#00000099] text-white rounded-md px-3 py-1 text-xs">Update Cover</button>
            </div>

            <div className="flex absolute bottom-[-60px] gap-5">
                <div className='relative'>
                    <Image src={box} alt='profile-pic' className='w-44 h-44' />
                </div>
                <div className="font-semibold mt-4">
                    <p className="">Temiloluwa, 27</p>
                    <p className="">Lagos</p>
                </div>

                <i className="mt-4 text-zinc-700"><FaRegEdit /></i>
            </div>
        </div>
        <div className="flex items-center gap-3 justify-end py-3 px-2 text-xs">
            <button className="bg-[#EF2424] text-white p-2 rounded-[50px]">Edit Profile</button>
            <button className="bg-[#EF2424] text-white p-2 rounded-[50px]">Edit Match Setup</button>
        </div>

        <div className="relative w-fit mt-8">
            <textarea name="" placeholder={`A few words about myself`} id="" className="resize-none w-[486px] h-20 border border-[#D9D9D9] outline-none rounded-md px-8 py-3.5"></textarea>
            {<MdOutlineEdit className='absolute top-[16px] left-56' />}
        </div>
    </section>
  )
}
