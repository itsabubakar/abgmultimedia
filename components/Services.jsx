import Service from "./Service"

const Services = () => {
    return (
        <div className="px-5 md:px-20 py-20">
            <h2 className="sec-head">Our Services</h2>
            <div className="grid md:mx-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-2 gap-y-14 gap-x-6 justify-items-center">
                <Service
                    number={"1"}
                    borderColor={"border-yellow-400"}
                    title={"Web Development"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, veniam vero? Quidem nisi officiis quam at possimus quas, cupiditate harum dolor laborum, nihil non animi maxime consectetur nam eius dolorum?"}
                />
                <Service
                    number={"2"}
                    borderColor={"border-blue-400"}
                    title={"Web Development"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, veniam vero? Quidem nisi officiis quam at possimus quas, cupiditate harum dolor laborum, nihil non animi maxime consectetur nam eius dolorum?"}
                />
                <Service
                    number={"3"}
                    borderColor={"border-green-400"}
                    title={"Web Development"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, veniam vero? Quidem nisi officiis quam at possimus quas, cupiditate harum dolor laborum, nihil non animi maxime consectetur nam eius dolorum?"}
                />
                <Service
                    number={"4"}
                    borderColor={"border-purple-400"}
                    title={"Web Development"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, veniam vero? Quidem nisi officiis quam at possimus quas, cupiditate harum dolor laborum, nihil non animi maxime consectetur nam eius dolorum?"}
                />
                <Service
                    number={"5"}
                    borderColor={"border-red-400"}
                    title={"Web Development"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, veniam vero? Quidem nisi officiis quam at possimus quas, cupiditate harum dolor laborum, nihil non animi maxime consectetur nam eius dolorum?"}
                />
            </div>
        </div>
    )
}

export default Services