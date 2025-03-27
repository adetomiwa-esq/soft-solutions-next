import { people } from '@/components/MockData'
import Image, { StaticImageData } from 'next/image'
import { CiHeart } from 'react-icons/ci'
import { MdVerified } from 'react-icons/md'

type People = {
    username: string
    age: number
    location: string
    backgroundImg: StaticImageData,
    profilePic: StaticImageData,
    matchPercentage: number,
    verifiedAddress: boolean,
    bio?: string,
    like: boolean
}[]
export default function Cards() {

    const users:People = people
  return (
    <section className="">
        <div className="flex flex-wrap gap-y-3 justify-between pr-3">
            {
                users.map((user, i) => (
                    <div key={i} className='w-[48%] md:w-[32%] lg:w-[24%] xl:w-[19%] bg-white rounded-md overflow-hidden min-h-fit'>
                        <div className="relative h-20">
                            <Image src={user.backgroundImg} alt='bg img' height={80} className='w-full h-20' />
                            <Image src={user.profilePic} width={60} height={60} alt='' className='absolute left-1/2 -translate-x-1/2 bottom-[-30px]' />
                        </div>
                        <div className="px-2 text-[8px] pb-3 flex flex-col justify-between">
                            <div className="flex justify-between items-center font-semibold mb-3">
                                <div className="">
                                    <p className="">{user.username}</p>
                                    <p className="">{user.location}</p>
                                </div>
                                <div className="">
                                    <p className="">{user.matchPercentage}% Match</p>
                                    <div className="">{user.verifiedAddress ? <p className='flex items-center gap-1'><span className='text-[#3E7BEA]'><MdVerified /></span><span>Verified address</span></p> : ""}</div>
                                </div>
                            </div>

                            <p className="">
                                {user.bio ? user.bio : 'No bio'}
                            </p>

                            <div className="flex justify-between items-center mt-1">
                                <button className="bg-[#EF2424] text-white rounded-[50px] p-[10px]">More info</button>

                                <CiHeart className='text-base' />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}
