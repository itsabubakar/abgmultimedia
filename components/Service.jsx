
const Service = ({ number, borderColor, title, text }) => {
    return (
        <div className="max-w-[300px] bg-gray-100 p-5 hover:bg-gray-200 transition">
            <p className={`text-xl bg-black inline-block text-white px-5 py-[10px] rounded-full mb-2 border-2 ${borderColor}`}>{number}</p>
            <h2 className="text-xl font-medium mb-2">{title}</h2>
            <p>{text}</p>
        </div>
    )
}

export default Service