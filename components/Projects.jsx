import Project from "./Project"
import Button from './Button'

const Projects = () => {
    return (
        <div className="px-5 md:px-24 py-20">
            <h2 className="sec-head">Projects</h2>
            <div className="grid gap-y-14 justify-center md:grid-cols-2 md:gap-x-10 lg:grid-cols-3">
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
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