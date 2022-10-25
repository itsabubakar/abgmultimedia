import Link from "next/link"

const Button = ({ bg, btn }) => {
    return (
        <Link href={'/contact'}><button className={`capitalize md:w-auto ${bg ? bg : 'bg-white'} px-5 py-2 text-black text-lg font-medium border hover:border hover:border-white hover:bg-black hover:text-white transition ease-in-out`}>{btn ? btn : 'Contact us for a free quote'}</button></Link>

    )
}

export default Button