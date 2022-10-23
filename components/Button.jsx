import Link from "next/link"

const Button = ({ bg }) => {
    return (
        <Link href={'/contact'}><button className={`capitalize md:w-auto ${bg ? bg : 'bg-white'} px-5 py-2 text-black text-lg font-medium border hover:border hover:border-white hover:bg-black hover:text-white transition ease-in-out`}>contact us for a free qoute</button></Link>

    )
}

export default Button