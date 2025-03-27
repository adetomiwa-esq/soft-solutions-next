'use client'
import Image from 'next/image'
import React from 'react'
import flower from '@/assets/flower.png'
import box from '@/assets/box.png'
import addImg from '@/assets/addImage.png'
import { FaRegEdit } from 'react-icons/fa'
import { MdOutlineEdit } from 'react-icons/md'
import { AiFillPlusCircle } from 'react-icons/ai'
import { useRouter } from 'next/navigation'

export default function Top() {
    const router = useRouter();
  return (
    <section>
        <div className="relative h-[198px] px-7 py-5">
            <Image src={flower} alt='bg img' className='h-full w-full absolute left-0 top-0 z-[-1]' />

            <div className="flex items-center justify-between">
                <button className="bg-[#00000099] text-white rounded-md px-3 py-1 text-xs" onClick={() => router.back()}>Back</button>
                <button className="bg-[#00000099] text-white rounded-md px-3 py-1 text-xs">Update Cover</button>
            </div>

            <div className="flex absolute bottom-[-35px] sm:bottom-[-60px] gap-5 left-3 sm:left-auto">
                <div className='relative w-fit'>
                    <AiFillPlusCircle className='absolute bottom-[-12px] right-[-12px] text-4xl text-[#3E7BEA]'/>
                    <Image src={box} alt='profile-pic' className='w-28 h-28 rounded-full sm:rounded-none sm:w-44 sm:h-44' />
                </div>
                <div className="font-semibold mt-4">
                    <p className="">Temiloluwa, 27</p>
                    <p className="">Lagos</p>
                </div>

                <i className="mt-4 text-zinc-700"><FaRegEdit /></i>
            </div>
        </div>
        <div className="flex items-center gap-1 sm:gap-3 justify-end py-3 px-1 sm:px-2 text-xs">
            <button className="bg-[#EF2424] text-white p-2 rounded-[50px]">Edit Profile</button>
            <button className="bg-[#EF2424] text-white p-2 rounded-[50px]">Edit Match Setup</button>
        </div>

        <div className="relative mt-8">
            <textarea name="" placeholder={`A few words about myself`} id="" className="resize-none w-full max-w-[486px] bg-white h-20 border border-[#D9D9D9] outline-none rounded-md px-8 py-3.5"></textarea>
            {<MdOutlineEdit className='absolute top-[16px] left-56' />}
        </div>

        <div className="flex flex-wrap gap-6 w-full max-w-[486px] bg-white p-2 rounded-md">
            <Image src={box} alt='profile-pic' className='w-[70px] h-[70px]' />
            <div>
                <input type="file" accept='image/*' name="" className='hidden' id="img2" />
                <label htmlFor="img2" className='flex border border-[#D9D9D9] text-[10px] justify-center items-center flex-col gap-y-1 rounded-lg w-[70px] h-[70px]'>
                    <span>Add Photo</span>
                    <Image src={addImg} alt='' />
                </label>
            </div>

            <div>
                <input type="file" accept='image/*' name="" className='hidden' id="img2" />
                <label htmlFor="img2" className='flex border border-[#D9D9D9] text-[10px] justify-center items-center flex-col gap-y-1 rounded-lg w-[70px] h-[70px]'>
                    <span>Add Photo</span>
                    <Image src={addImg} alt='' />
                </label>
            </div>

            <div>
                <input type="file" accept='image/*' name="" className='hidden' id="img2" />
                <label htmlFor="img2" className='flex border border-[#D9D9D9] text-[10px] justify-center items-center flex-col gap-y-1 rounded-lg w-[70px] h-[70px]'>
                    <span>Add Photo</span>
                    <Image src={addImg} alt='' />
                </label>
            </div>

            <div>
                <input type="file" accept='image/*' name="" className='hidden' id="img2" />
                <label htmlFor="img2" className='flex border border-[#D9D9D9] text-[10px] justify-center items-center flex-col gap-y-1 rounded-lg w-[70px] h-[70px]'>
                    <span>Add Photo</span>
                    <Image src={addImg} alt='' />
                </label>
            </div>
        </div>
    </section>
  )
}
