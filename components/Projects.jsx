import Project from "./Project"
import Button from './Button'

// images
import imgOne from '../public/Images/wmmf.png'
import imgTwo from '../public/Images/an.png'
import imgThree from '../public/Images/g20.png'
import imgFour from '../public/Images/ssg.png'
import imgFive from '../public/Images/anha.png'


const Projects = () => {
    return (
        <div className="px-5 md:px-24 py-20 bg-gray-50">
            <h2 className="sec-head">Projects</h2>
            <div className="grid gap-y-14 justify-center md:grid-cols-2 md:gap-x-10 lg:grid-cols-3">
                <Project
                    imgSrc={imgOne}
                    name={"Women mentors and models foundation"}
                    link={"https://womenmentorsfoundation.org"}
                />
                <Project
                    imgSrc={imgTwo}
                    name={"AGEDNetwork"}
                    link={"https://aged-network.org"}
                />
                <Project
                    imgSrc={imgFour}
                    name={"Silver Shield global"}
                    link={"https://silvershieldglobal.com"}
                />
                <Project
                    imgSrc={imgFive}
                    name={"African Noni and herbs association"}
                    link={"https://africannoniandherbs.org/.org"}
                />
                <Project
                    imgSrc={imgThree}
                    name={"G20 Business Consortium"}
                    link={"https://g20-consortium.com"}
                />

            </div>
            <div className="flex justify-center mt-10">
                <Button
                    btnText={"See more web projects"}
                    bg={"bg-gray-300"}
                />
            </div>
        </div>
    )
}

export default Projects