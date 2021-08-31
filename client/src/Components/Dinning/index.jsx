import React from 'react'

//components
import DinningCarousel from './DinningCarousel';

const Dinning = () => {
    return (
        <div>
            <DinningCarousel/>
            <h1 className="text-xl my-4 md:my-8 md:text-3xl md:font-semibold">Dine-Out Restaurants in Saidapet</h1>
        </div>
    )
}

export default Dinning;
