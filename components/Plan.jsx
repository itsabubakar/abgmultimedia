import Button from "./Button"

const Plan = ({
    title,
    color, textColor, screen, delivery, hosting, price, cms
}) => {
    return (
        <div className={`border-2 border-gray-400 border-t-4 ${color} py-5 px-5 text-center capitalize min-w-[300px] max-w-[300px]`}>
            <h2 className={`text-4xl mb-4 ${textColor}`}>{title}</h2>
            <p className="text-2xl mb-6 text-[#011326]">{price}</p>
            <p className="text-lg text-gray-800 border-b pb-2 mb-2">{screen} page/screens</p>
            <p className="text-lg text-gray-800 border-b pb-2 mb-2">Full content upload</p>
            <p className="text-lg text-gray-800 border-b pb-2 mb-2">free updates for a year</p>
            <p className="text-lg text-gray-800 border-b pb-2 mb-2">responsive design</p>
            <p className="text-lg text-gray-800 border-b pb-2 mb-2">{delivery} hour delivery</p>
            {cms && <p className="text-lg text-gray-800 border-b pb-2 mb-2">custom CMS</p>}
            {hosting && <p className="text-lg text-gray-800 border-b pb-2 ">free domain name and hosting for one year</p>}
            <Button btn={"Contact Us"} bg={'bg-gray-500 text-white mt-10'} />
        </div>
    )
}

export default Plan