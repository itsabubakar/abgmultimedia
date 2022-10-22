
const Button = ({ bg }) => {
    return (
        <button className={`capitalize md:w-auto ${bg ? bg : 'bg-white'} px-5 py-2 text-black text-lg font-medium border hover:border hover:border-white hover:bg-black hover:text-white transition ease-in-out`}>contact us for a free qoute</button>
    )
}

export default Button