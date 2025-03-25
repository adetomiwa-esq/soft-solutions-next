import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { MdOutlineEdit } from 'react-icons/md'


interface dataType {
    img: StaticImageData
    title: string
}

interface Props {
    data: dataType[],
    header: string
}
    

export default function IconsMap({data, header} : Props) {
  return (
    <div className=" w-[323px] bg-white py-4 px-3 rounded-md">
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-[12px] font-semibold">{header}</h3>
            <MdOutlineEdit />
        </div>
            <div className="flex flex-wrap gap-y-3 gap-x-[2%]">
            {
                data.map((x: dataType, i: number) => (
                    <div className="w-[23%]" key={i}>
                        <Image src={x.img} alt={x.title} className='w-full' />
                        <p className='font-medium text-[8px] text-center'>{x.title}</p>
                    </div>
                ))
            }
            </div>
        </div>
  )
}
