import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { AiOutlineMenu, AiOutlineClose, AiOutlineVideoCameraAdd } from 'react-icons/ai';



const Navbar = () => {
    const router = useRouter();
    const [nav, setNav] = useState(false)

    return (
        <div className={nav ? "pt-5 relative left-0 top-0 w-full z-10 ease-in-out duration-100" : "bg-black py-5 relative left-0 top-0 w-full z-10 ease-in-out duration-100"}>
            <div className="px-5 md:px-24 flex items-center justify-between">
                <Link href={'/'}><a>
                    <div className="text-white flex items-center">
                        <AiOutlineVideoCameraAdd size={40} />
                        <h2 className="pl-2 text-xl font-bold">ABGMULTIMEDIA</h2>
                    </div>
                </a></Link>


                <ol className="hidden xl:flex pl-10 gap-x-10 items-center  text-white link-hover text-sm">
                    <li className=""><Link href={'/web'}><a className={router.pathname == "/web" ? "border-b-2 border-b-white pb-2" : ""}>Web Design</a></Link></li>
                    <li><Link href={'/video'}><a className={router.pathname == "/video" ? "border-b-2 border-b-white pb-2" : ""}>Video Production</a></Link></li>
                    <li><Link href={'/prints'}><a className={router.pathname == "/prints" ? "border-b-2 border-b-white pb-2" : ""}>Prints</a></Link></li>
                    <li><Link href={'/audio'}><a className={router.pathname == "/audio" ? "border-b-2 border-b-white pb-2" : ""}>Audio Voiceover</a></Link></li>
                    <li><Link href={'/contact'}><a className={router.pathname == "/contact" ? "border-b-2 border-b-white pb-2" : ""}>Contact</a></Link></li>

                </ol>

                <div className='z-30 xl:hidden' onClick={() => setNav(!nav)}>
                    {nav ? '' : <AiOutlineMenu size={30} className="text-white text-Moody-blue border-2 rounded p-1" />}
                </div>

                {/* Mobile Menu */}

                <div className={nav ? "fixed top-0 left-0 right-0 bottom-0 flex flex-col items-center w-full h-screen bg-black text-white  pt-[50px] ease-in-out duration-100" : 'hidden top-0 left-[100%] right-0 bottom-0 flex-col items-center w-full h-screen bg-black text-white  pt-[50px] ease-in-out duration-100'}>
                    <div className='mb-4 ml-auto mr-[30px]' onClick={() => setNav(!nav)}>
                        <AiOutlineClose size={40} className="text-white border-2 rounded p-1" />
                    </div>

                    <ol className="flex flex-col gap-y-5 items-center uppercase text-white link-hover">
                        <li className="" onClick={() => setNav(!nav)}><Link href={'/'}><a className={router.pathname == "/" ? "border-b-2 border-b-white pb-2" : ""}>Home</a></Link></li>
                        <li className="" onClick={() => setNav(!nav)}><Link href={'/web'}><a className={router.pathname == "/web" ? "border-b-2 border-b-white pb-2" : ""}>Web Design</a></Link></li>
                        <li onClick={() => setNav(!nav)}><Link href={'/video'}><a className={router.pathname == "/video" ? "border-b-2 border-b-white pb-2" : ""}>Video Production</a></Link></li>
                        <li onClick={() => setNav(!nav)}><Link href={'/prints'}><a className={router.pathname == "/prints" ? "border-b-2 border-b-white pb-2" : ""}>Prints</a></Link></li>
                        <li onClick={() => setNav(!nav)}><Link href={'/audio'}><a className={router.pathname == "/audio" ? "border-b-2 border-b-white pb-2" : ""}>Audio Voiceover</a></Link></li>
                        <li onClick={() => setNav(!nav)}><Link href={'/contact'}><a className={router.pathname == "/contact" ? "border-b-2 border-b-white pb-2" : ""}>Contact</a></Link></li>
                    </ol>
                </div>

            </div>

        </div>


    )
}

export default Navbar