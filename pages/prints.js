import Format from "../layout/Format"
import Hero from "../components/Hero"
import SectionText from "../components/SectionText"
import Services from "../components/Services"
import Service from "../components/Service"

// icons
import { ImNewspaper } from 'react-icons/im'

const prints = () => {
    return (
        <Format title={"Prints"}>
            <Hero
                title={"Business Cards | Business Cards | Banners And Signage"}
                header={"GRAPHIC AND PRINT SERVICES"}
                icon={<ImNewspaper size={200} />}
                btn={true}
            />
            <SectionText
                text={'We offer a wide variety of graphic design and printing services. Our graphic designers can help with the entire process from layout and design to printing.'}
            />
            <Services>
                <Service
                    number={"1"}
                    borderColor={"border-purple-400"}
                    title={"Business Cards"}
                    text={"Work with ABGMultimedia to get outstanding creative Single-sided Business Cards Design and Printing Service. Share with your successful customers."}
                    btn={true}

                />
                <Service
                    number={"2"}
                    borderColor={"border-purple-400"}
                    title={"Flyers"}
                    text={"ABGMultimedia provides desings and print custom Flyers. Request the Flyer Designer services and design The Perfect Flyer, Under Budget!"}
                />
                <Service
                    number={"3"}
                    borderColor={"border-purple-400"}
                    title={"Magazines"}
                    text={"ABGMultimedia provides a magazine design, production and print solutions for a variety of independent publishers and event organisations. Our Magazines printing service is very affordable and cost effective, we can create top quality Magazines printing at low cost budget."}
                />
                <Service
                    number={"4"}
                    borderColor={"border-purple-400"}
                    title={"Banners"}
                    text={"ABGMultimedia provides expert advice on all multimedia business issues: how to improve sales, how to streamline management, improving network security or defining corporate strategy. Integrity is essential our field."}
                />
                <Service
                    number={"5"}
                    borderColor={"border-purple-400"}
                    title={"Posters"}
                    text={"ABGMultimedia has a range of poster sizes, paper stock and finishes, you are sure to get the look you want—and the price you need. With a minimum order of one, you can order as many (or as few!) posters as you need."}
                />
                <Service
                    number={"6"}
                    borderColor={"border-purple-400"}
                    title={"Brochures"}
                    text={"Do you need a brochure to boost your latest promotional offers? Are you a new business introducing your lineup of services? Or are you simply pushing for more awareness about your company? Our corporate brochure designs fit any niche or industry and are fully customizable for your unique purpose."}
                />
            </Services>
        </Format>
    )
}

export default prints