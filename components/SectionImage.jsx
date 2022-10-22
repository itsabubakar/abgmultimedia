import Image from "next/image"
import img from '../public/Images/img-1.jpg'

const SectionImage = ({ header, title, text, direction, bg }) => {
    return (
        <div className={`md:${direction} ${bg ? bg : ''} flex flex-col  gap-10 justify-between items-center px-5 py-20 sm:px-24 bg-slate-100`}>
            <div className="md:w-3/5">
                <p className="capitalize text-gray-600 mb-2 text-xl">{header}</p>
                <h2 className="capitalize text-4xl sm:text-5xl font-semibold mb-4">{title}</h2>
                <p className="text-lg">{text}</p>
            </div>
            <div className="md:w-2/5 ">
                <Image src="https://images.unsplash.com/photo-1627389955646-6596047473d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGNvbm5lY3Rpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" width={500} height={400} alt="Img" />
            </div>
        </div>
    )
}

export default SectionImage