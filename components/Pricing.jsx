import React from 'react'
import Plan from './Plan'

const Pricing = () => {
    return (
        <div className='grid mx-5 md:mx-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 gap-y-14 gap-x-6 justify-items-center md:px-20 py-20'>
            <Plan
                title={"standard"}
                color={'border-t-gray-300'}
                textColor={'text-gray-400'}
                price={'₦120,000 / $170'}
                screen={'5'}
                delivery={'48'}
            />
            <Plan
                title={"deluxe"}
                color={'border-t-gray-600'}
                textColor={'text-gray-600'}
                price={'₦160,000 / $210'}
                screen={'10'}
                delivery={'48'}
                cms={true}
            />
            <Plan
                title={"premium"}
                color={'border-t-black'}
                textColor={'text-gray-900'}
                price={'₦240,000 / $350'}
                screen={'15'}
                delivery={'48'}
                hosting={true}
                cms={true}
            />
        </div>
    )
}

export default Pricing