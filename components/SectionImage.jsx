import Image from "next/image"
import img from '../public/Images/img-1.jpg'

const SectionImage = ({ header, title, text, direction, bg, img }) => {
    return (
        <div className={`${bg ? bg : 'bg-slate-100'} flex flex-col gap-10 justify-between items-center px-5 py-20 sm:px-24 ${direction}`}>
            <div className="md:w-3/5">
                <p className="capitalize text-gray-600 mb-2 text-xl">{header}</p>
                <h2 className="capitalize text-4xl sm:text-5xl font-semibold mb-4">{title}</h2>
                <p className="text-lg">{text}</p>
            </div>
            <div className="md:w-2/5 ">
                <Image src={img} width={500} height={400} alt="Img" />
            </div>
        </div>
    )
}

export default SectionImage