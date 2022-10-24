import Image from "next/image"
import Link from "next/link"
import { BsArrowRight } from 'react-icons/bs'

const Project = ({ imgSrc, name, link }) => {
    return (
        <div className="">
            <div className="mb-2 border max-w-[300px]">
                <Image src={imgSrc} width={300} height={200} alt="img" unoptimized={true} />
            </div>
            <div className="">
                <p className="text-gray-400 mb-4 ">Static website with custom CMS</p>
                <h3 className="capitalize text-xl mb-2">{name}</h3>
                <Link href={link}><a className="flex items-center gap-x-4 uppercase text-lg hover:text-gray-400">Visit site <BsArrowRight /></a></Link>
            </div>
        </div>
    )
}

export default Project