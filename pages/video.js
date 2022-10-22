import Format from "../layout/Format"
import Hero from "../components/Hero"
import SectionImage from "../components/SectionImage"
import SectionText from "../components/SectionText"

import { BiVideoRecording } from 'react-icons/bi'

const video = () => {
    return (
        <Format title={"Video Production"}>
            <Hero
                title={"Tell your stories in the most compelling way"}
                header={"Videography & Video Production"}
                icon={<BiVideoRecording size={250} />}
            />
            <SectionImage
                direction={"flex-row-reverse"}
                title={"The power of video."}
                text={"One of the most effective methods to share your story is through video. The power of video is unrivaled, from drawing new consumers to turning viewers into customers. Why? Because people enjoy watching videos. Your clients would prefer to watch a movie rather than read a wall of text. ABGMultimedia specialize in high-quality manufacturing."}
            />
            <SectionImage
                direction={"flex-row"}
                bg={"bg-gray-400 text-black"}
                title={"Decades of experience"}
                text={"Our video editors and filmmakers have decades of expertise creating high-quality, targeted content such as TV commercials, corporate films, product videos, training videos, safety videos, and motion graphics animations. From scripting to post-production to optimizing for multi-channel delivery, our skilled team will assist you through the whole process."}
            />
            <SectionText text={"We have the equipment to shoot aerial footage of your facilities, highlight a new product, film a testimonial, or highlight a new product. When it comes to delivery, we have you covered with everything from site optimization to broadcast transmission."} />
        </Format>
    )
}

export default video