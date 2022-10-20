import Image from "next/image"
import Link from "next/link"
import img from '../public/Images/img-1.jpg'
import { BsArrowRight } from 'react-icons/bs'

const Project = () => {
    return (
        <div>
            <div className="mb-2">
                <Image src={img} width={350} height={300} />
            </div>
            <div>
                <p className="text-gray-400 mb-4">Static Website</p>
                <h3 className="text-2xl mb-2">Women Mentors & Models Foundation</h3>
                <Link href="/"><a className="flex items-center gap-x-4 uppercase text-lg hover:text-gray-400">Visit site <BsArrowRight /></a></Link>
            </div>
        </div>
    )
}

export default Project