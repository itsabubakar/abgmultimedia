import Contact from "../components/Contact"
import Hero from "../components/Hero"
import Format from "../layout/Format"

const contact = () => {
    return (
        <Format title={"Contact us"}>
            <Hero
                title={"Contact us"}
                header={"Innovative Solution For Your Business"}
                btnText={"Schedule a Free Consultation"}
            />
            <Contact />
        </Format>
    )
}

export default contact