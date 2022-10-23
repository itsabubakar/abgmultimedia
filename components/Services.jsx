// import Service from "./Service"

const Services = ({ children }) => {
    return (
        <div className="px-5 md:px-20 py-20">
            <h2 className="sec-head">Our Services</h2>
            <div className="grid md:mx-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 gap-y-14 gap-x-6 justify-items-center">
                {children}
            </div>
        </div>
    )
}

export default Services