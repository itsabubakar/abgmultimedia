import Format from "../layout/Format"
import Hero from "../components/Hero"
import SectionText from "../components/SectionText"

// icons
import { ImNewspaper } from 'react-icons/im'

const prints = () => {
    return (
        <Format title={"Prints"}>
            <Hero
                title={"Business Cards | Business Cards | Banners And Signage"}
                header={"GRAPHIC AND PRINT SERVICES"}
                icon={<ImNewspaper size={200} />}
            />
            <SectionText
                text={'We offer a wide variety of graphic design and printing services. Our graphic designers can help with the entire process from layout and design to printing.'}
            />
        </Format>
    )
}

export default prints