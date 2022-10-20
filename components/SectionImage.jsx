import Image from "next/image"
import img from '../public/Images/img-1.jpg'

const SectionImage = () => {
    return (
        <div className="flex flex-col md:flex-row gap-10 justify-between items-center px-5 py-20 sm:px-24 bg-slate-100">
            <div className="md:w-3/5">
                <p className="capitalize text-gray-600 mb-2 text-xl">Our number one priority is your success.</p>
                <h2 className="text-4xl sm:text-5xl font-semibold mb-2">We Value Partnerships and Long-Term Relationships.</h2>
                <p className="text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, molestias ratione, perspiciatis laboriosam odio quos dicta soluta ab sit neque unde nemo nihil? Fugit maxime officia suscipit iure similique modi!</p>
            </div>
            <div className="md:w-2/5 ">
                <Image src="https://images.unsplash.com/photo-1627389955646-6596047473d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGNvbm5lY3Rpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" width={500} height={400} />
            </div>
        </div>
    )
}

export default SectionImage