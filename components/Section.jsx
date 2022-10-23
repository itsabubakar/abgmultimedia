
const Section = ({ title, text, bg }) => {
    return (
        <div className={`text-center px-5 md:px-20 py-20 ${bg}`}>
            <h2 className="text-2xl font-semibold mb-6 md:mb-4 capitalize">{title}</h2>
            <p>{text}</p>
        </div>
    )
}

export default Section