import Section from "../components/Section"
import Service from "../components/Service"
import Services from "../components/Services"
import Format from "../layout/Format"
import Hero from "../components/Hero"

// icons
import { HiLanguage } from 'react-icons/hi2'
import { TbFileDescription } from 'react-icons/tb'
import { HiOutlineRadio } from 'react-icons/hi2'
import { RiVoiceprintFill } from 'react-icons/ri'
import { RiUserVoiceLine } from 'react-icons/ri'


const audio = () => {
    return (
        <Format title={"Audio & Voiceover"}>
            <Hero
                title={"High quality audio production"}
                header={"audio & voiceover Production"}
                icon={<RiVoiceprintFill size={250} />}
                btn={true}
            />
            <Section
                title={"Audio specialists"}
                text={"We can help your idea come to life. from start to finish"}
            />
            <Services>
                <Service
                    number={<RiVoiceprintFill size={25} />}
                    borderColor={"border-purple-400"}
                    title={"Voice Over Talent"}
                    text={"We have a large stable of voice actors with various styles to fit your project perfectly."}
                />
                <Service
                    number={<TbFileDescription size={25} />}
                    borderColor={"border-yellow-400"}
                    title={"Scripting"}
                    text={"Our writers will take your ideas and transform them into a memorable script that will get results."}
                />
                <Service
                    number={<HiOutlineRadio size={25} />}
                    borderColor={"border-purple-400"}
                    title={"Radio Commercials"}
                    text={"From concept and scripting to the final product our award-winning team will get you noticed."}
                />
                <Service
                    number={<RiUserVoiceLine size={25} />}
                    borderColor={"border-blue-400"}
                    title={"Narrations"}
                    text={"Corporate, long form, training, and marketing.  We'll bring your project to life."}
                />
                <Service
                    number={<HiLanguage size={25} />}
                    borderColor={"border-green-400"}
                    title={"Language Translations"}
                    text={"Professional script translation and voice over in many languages and dialects"}
                />
            </Services>
        </Format>
    )
}

export default audio