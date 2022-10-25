import Format from "../layout/Format"
import Hero from "../components/Hero"
import Section from "../components/Section"
import SectionImage from "../components/SectionImage"
import Projects from "../components/Projects"

// icons
import { FaConnectdevelop } from 'react-icons/fa'
import Pricing from "../components/Pricing"

const web = () => {
    return (
        <Format title={"Web Development"}>
            <Hero
                title={"Fully responsive full stack website"}
                header={"Building innovative and creative website"}
                icon={<FaConnectdevelop size={250} />}
                btn={true}
            />
            <Section
                title={"Tailored Solutions to Help Meet Your Needs"}
                text={"Need help mapping out your next idea or resources to help build it? Schedule a call with one of our dedicated team of professionals and we would be happy to discuss your needs in further detail. "}
            />
            <SectionImage
                direction={"md:flex-row"}
                bg={"bg-slate-100"}
                title={"Custom content management."}
                text={"Our main objective is to create a content management that works with your organization's workflow, not one your organization has to work around. Whether you need to manage your content, products and inventory or just post an event, we will work with your team to design a content management system tailored to your organization."}
                img={"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcGVyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"}
            />
            <SectionImage
                direction={"md:flex-row-reverse"}
                bg={"bg-white"}
                title={"mobile friendly website design."}
                text={" We pride ourselves on designing creative user experiences for a mobile customer base. Our team of web designers & developers specialize in responsive, mobile friendly websites."}
                img={"https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYiUyMGRldmVsb3BlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"}
            />
            <Pricing />
            <Projects />
        </Format>
    )
}

export default web