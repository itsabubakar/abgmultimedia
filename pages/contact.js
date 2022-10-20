import Contact from "../components/Contact"
import Hero from "../components/Hero"
import Format from "../layout/Format"

const contact = () => {
    return (
        <Format title={"Contact us"}>
            <Hero
                title={"Contact us"}
                header={"Innovative Solution For Your Business"}
            // about={"A multimedia agency specializing in website design, video production, mobile app development, graphic design, audio & voice over talent"}
            //   btnText={"Schedule a Free Consultation"}
            />
            <Contact />
        </Format>
    )
}

export default contact