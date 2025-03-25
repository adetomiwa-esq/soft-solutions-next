import profile from '@/assets/profile-pic.png';
import Image from 'next/image';
export default function Top() {
  return (
    <section className="flex items-center gap-12 mb-6">
        <div className="flex items-center gap-4">
            <Image src={profile} alt='profile-pic' width={100} height={100} />

            <div className="flex flex-col gap-1">
                <h5 className="text-sm font-semibold">Welcome, Temiloluwa</h5>
                <h6 className="font-medium text-xs">My Profile Completeness</h6>

                <div className="flex gap-2">
                    <div className="w-44 bg-[#D9D9D9] h-2 rounded-[50px]">
                        <div className="w-3/5 rounded-[50px] bg-[#EF2424] h-full"></div>
                    </div>
                    <p className=""></p>
                </div>
            </div>
        </div>
    </section>
  )
}
