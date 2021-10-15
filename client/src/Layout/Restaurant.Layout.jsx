import React from 'react'
import {TiStarFullOutline} from "react-icons/ti";
import {RiDirectionLine} from "react-icons/ri";
import {AiOutlineBook} from "react-icons/ai";
import {BiShare} from "react-icons/bi";



//components
import  RestaurantNavbar from '../Components/Navbar/restaurantNavbar';
import ImageGrid from '../Components/restaurant/ImageGrid';
import Restaurantinfo from '../Components/restaurant/Restaurantinfo';
import InfoButtons from '../Components/restaurant/InfoButtons';
import TabContainer from '../Components/restaurant/Tabs';
import CartContainer from '../Components/Cart/CartContainer';

const RestaurantLayout = (props) => {
    return (
        <>
            < RestaurantNavbar/>
        <div className="container mx-auto px-4 lg:px-20">
            <ImageGrid images={[
                "https://b.zmtcdn.com/data/pictures/chains/5/19704985/6f198239eb7ed6745899639bd3b8cbcd.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/5/19704985/6f198239eb7ed6745899639bd3b8cbcd.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/5/19704985/6f198239eb7ed6745899639bd3b8cbcd.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/5/19704985/6f198239eb7ed6745899639bd3b8cbcd.jpg",]}/>
        <Restaurantinfo
        name="Junior Kuppanna" 
        Restaurantrating="3.8" 
        deliveryRating="4" 
        cusine="Biryani, South Indian, North Indian, Tamil, Chinese, Seafood" address="Nungambakkam, Chennai" />
        <div className="my-4 flex flex-wrap gap-3">
           <InfoButtons isActive>
               <TiStarFullOutline/> Add Review
           </InfoButtons>
           <InfoButtons>
               <RiDirectionLine/> Direction
           </InfoButtons>
           <InfoButtons >
               <AiOutlineBook/> Bookmark
           </InfoButtons>
              <InfoButtons>
               <BiShare/> Share
           </InfoButtons>

        </div>
        <div className="my-8">
            <TabContainer>
            </TabContainer>
        </div>
                <div className="relative">{props.children}</div>
            </div>
            <CartContainer/>

            </>

    )
};

export default RestaurantLayout;
