import { people } from '@/components/MockData'
import Image, { StaticImageData } from 'next/image'

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
                    <div key={i} className='w-[48%] md:w-[32%] lg:w-[24%] xl:w-[19%]'>
                        <div className="relative h-20">
                            <Image src={user.backgroundImg} alt='bg img' height={80} className='w-full h-20' />
                            <Image src={user.profilePic} width={60} height={60} alt='' className='absolute left-1/2 -translate-x-1/2 bottom-[-30px]' />
                        </div>
                        <div className="px-3 bg-white text-[10px]">
                            <div className="flex justify-between items-center font-semibold mb-3">
                                <div className="">
                                    <p className="">{user.username}</p>
                                    <p className="">{user.location}</p>
                                </div>
                                <div className="">
                                    <p className="">{user.matchPercentage}% Match</p>
                                    <p className="">{user.verifiedAddress ? `${user.verifiedAddress}` : ""}</p>
                                </div>
                            </div>

                            <p className="">
                                {user.bio ? user.bio : 'No bio'}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}
