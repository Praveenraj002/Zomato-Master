import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
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

//Redux Action
import {getSpecificRestaurant} from "../Redux/Reducer/restaurant/restaurant.action"
import {getImage} from "../Redux/Reducer/Image/Image.action"


const RestaurantLayout = (props) => {
    const [restaurant, setRestaurant] = useState({
        images: [], 
        name:"", 
        cusine:"", 
        address:""});
    const {id} = useParams();
    const dispatch = useDispatch();


    useEffect(() =>{
        dispatch(getSpecificRestaurant(id)).then (data => console.log(data.payload))
    }, []);

    return (
        <>
            < RestaurantNavbar/>
        <div className="container mx-auto px-4 lg:px-20">
            <ImageGrid images={restaurant.images}/>
        <Restaurantinfo
        name={restaurant?.name} 
        Restaurantrating={restaurant?.rating || 0}
        deliveryRating={restaurant?.rating || 0}
        cusine={restaurant?.cusine} 
        address={restaurant?.address}
        />
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
