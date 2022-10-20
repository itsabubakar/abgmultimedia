import { MdSlowMotionVideo } from 'react-icons/md'
import Button from './Button'


const Hero = ({ title, header, about, btnText }) => {
    return (
        <div className="flex items-center bg-black text-white px-5 md:px-24 py-20 ">
            <div className='lg-w-2/3'>
                <p className='text-gray-200 text-lg md:text-2xl mb-4'>{title}</p>
                <h1 className='text-3xl md:text-6xl mb-4'>{header}</h1>
                <p className='text-lg mb-6'>{about}</p>
                {btnText && <Button btnText={btnText} />}
            </div>
            <div className='hidden md:w-1/3 lg:flex justify-end'>
                <MdSlowMotionVideo size={250} />
            </div>
        </div>
    )
}

export default Hero