import React from 'react'

//components
import  RestaurantNavbar from '../Components/Navbar/restaurantNavbar';

const RestaurantLayout = () => {
    return (
        <div className="w-full h-48 md:hidden">
            < RestaurantNavbar/>
            <div>
                 <img src="https://b.zmtcdn.com/data/pictures/chains/5/19704985/6f198239eb7ed6745899639bd3b8cbcd.jpg?fit=around|771.75:416.25" alt="Restaurant Image" className="w-full h-full" />
            </div>
            <div className="hidden w-full md:flex gap-3">
                <div className="w-7/12 h-full">
                 <img src="https://b.zmtcdn.com/data/pictures/chains/5/19704985/6f198239eb7ed6745899639bd3b8cbcd.jpg?fit=around|771.75:416.25" alt="Restaurant Image" className="w-full h-full" />
                </div>
                      <div className="w-1/6 h-full flex flex-col gap-2">
                 <img src="https://b.zmtcdn.com/data/pictures/chains/5/19704985/6f198239eb7ed6745899639bd3b8cbcd.jpg?fit=around|771.75:416.25" alt="Restaurant Image" className="w-full h-full" />
                    <img src="https://b.zmtcdn.com/data/pictures/chains/5/19704985/6f198239eb7ed6745899639bd3b8cbcd.jpg?fit=around|771.75:416.25" alt="Restaurant Image" className="w-full h-full" />
                </div>
                          <div className="w-1/6 h-full flex flex-col gap-2">
                 <img src="https://b.zmtcdn.com/data/pictures/chains/5/19704985/6f198239eb7ed6745899639bd3b8cbcd.jpg?fit=around|771.75:416.25" alt="Restaurant Image" className="w-full h-full" />
                    <img src="https://b.zmtcdn.com/data/pictures/chains/5/19704985/6f198239eb7ed6745899639bd3b8cbcd.jpg?fit=around|771.75:416.25" alt="Restaurant Image" className="w-full h-full" />
                </div>
                </div>

            </div>

    )
};

export default RestaurantLayout;
