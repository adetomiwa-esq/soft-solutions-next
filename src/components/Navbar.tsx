import Image from "next/image";
import logo from '@/assets/logo.png';

export default function Navbar() {
  return (
    <header className="">
        <nav className="">
            <div className="flex gap-2 items-center px-2">
                <Image src={logo} alt="logo image" width={300} height={300} />
            </div>
            fsfs
        </nav>
    </header>
  )
}
