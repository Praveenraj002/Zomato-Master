import React from 'react'

//components
import  RestaurantNavbar from '../Components/Navbar/restaurantNavbar';
import ImageGrid from '../Components/restaurant/ImageGrid';

const RestaurantLayout = () => {
    return (
        <>
            < RestaurantNavbar/>
        <div className="container mx-auto px-4 lg:px-20">
            <ImageGrid images={[
                "https://b.zmtcdn.com/data/pictures/chains/5/19704985/6f198239eb7ed6745899639bd3b8cbcd.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/5/19704985/6f198239eb7ed6745899639bd3b8cbcd.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/5/19704985/6f198239eb7ed6745899639bd3b8cbcd.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/5/19704985/6f198239eb7ed6745899639bd3b8cbcd.jpg"]}/>
            </div>
            </>

    )
};

export default RestaurantLayout;
