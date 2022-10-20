import { AiOutlineVideoCameraAdd } from 'react-icons/ai';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-black text-white px-20 py-20 flex justify-between items-center flex-wrap gap-y-10">
            <div>
                <div className="mb-8 text-white flex items-center">
                    <AiOutlineVideoCameraAdd size={40} />
                    <h2 className="pl-2 text-xl font-bold">ABGMULTIMEDIA</h2>
                </div>
                <div className="flex flex-wrap justify-between gap-x-28 gap-y-10">
                    <div>
                        <h2 className='text-xl font-semibold mb-4'>Useful links</h2>
                        <ol className="gap-y-4 flex flex-col  text-white link-hover text-sm">
                            <li className=""><Link href={'/web'}><a>Web Development</a></Link></li>
                            <li><Link href={'/video'}><a>Video Production</a></Link></li>
                            <li><Link href={'/prints'}><a>Prints</a></Link></li>
                            <li><Link href={'/audio'}><a>Audio Voiceover</a></Link></li>
                            <li><Link href={'/contact'}><a>Contact</a></Link></li>

                        </ol>
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold mb-4'>Office</h2>
                        <p className='tracking-widest mb-2'>7 Rabah Road</p>
                        <p className='tracking-widest mb-2'>Malali, Kaduna</p>
                        <p className='tracking-widest'>Nigeria</p>
                    </div>
                </div>
            </div>

            <div>
                <p className='text-lg mb-2'>Get in Touch. Let's build something incredible together!</p>
                <p className='hover:text-gray-200'>hello@abgmultimedia.com</p>
            </div>
        </footer>
    )
}

export default Footer