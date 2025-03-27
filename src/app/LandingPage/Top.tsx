import profile from '@/assets/profile-pic.png';
import Image from 'next/image';
export default function Top() {
  return (
    <section className="flex md:items-center flex-col md:flex-row gap-y-5 md:gap-12 mb-6">
        <div className="flex items-center gap-4">
            <Image src={profile} alt='profile-pic w-[50px] h-[50px] md:w-[100px] md:h-[100px]' width={100} height={100} />

            <div className="flex flex-col gap-1">
                <h5 className="text-sm font-semibold">Welcome, Temiloluwa</h5>
                <h6 className="font-medium text-xs">My Profile Completeness</h6>

                <div className="flex gap-2 items-center">
                    <div className="w-44 bg-[#D9D9D9] h-2 rounded-[50px]">
                        <div className="w-3/5 rounded-[50px] bg-[#EF2424] h-full"></div>
                    </div>
                    <p className="text-[10px]">60%</p>
                </div>
            </div>

            
        </div>

        <div className="flex gap-3 items-center md:ml-12">
                <h3 className="font-semibold text-sm">Relationship Type:</h3>
                <select name="" id="" className="bg-white rounded-md text-[10px] h-6 w-28">
                    <option value="">Dating</option>
                </select>
            </div>
    </section>
  )
}
