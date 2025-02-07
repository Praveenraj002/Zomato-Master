import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {IoMdArrowDropright} from "react-icons/io";
import {AiOutlineCopy} from "react-icons/ai";
import {BiSubdirectoryRight} from "react-icons/bi";
import Slider  from 'react-slick';
import ReactStars from "react-rating-stars-component";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


//conponents
import MenuCollection from '../../Components/restaurant/MenuCollection';
import MenuSimilarRestaurantcard from './MenuSimilarRestaurantcard';
import { NextArrow ,PrevArrow} from '../../Components/CarouselArrow';
import ReviewCard from './Reviews/reviewCard';
import MapView from './MapView';

const Overview = () => {
    const {id} = useParams();
          const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
      const ratingChanged = (newRating) => {
  console.log(newRating);
};
    return (
        <>
            <div className="flex flex-col md:flex-row ">
                <div className="w-full md:w-8/12 ">
                    <h2 className="font-semibold text-lg md:text-xl my-4" >About this Place</h2>
                    <div className="flex justify-between items-center">
                        <h4 className="text-lg font-medium my-4">Menu</h4>
                        <Link to={`/restaurant/${id}/menu`}>
                        <span className="flex items-center gap-2 text-zomato-400">see all menu  <IoMdArrowDropright/></span>
                        </Link>
                    </div>
                     <div className="flex flex-wrap gap-3">
                            <MenuCollection menutitle="Menu" pages="3" image={["https://b.zmtcdn.com/data/menus/985/19704985/15188bd33f510662418399c9613148cc.jpg",
                            "https://b.zmtcdn.com/data/menus/985/19704985/15188bd33f510662418399c9613148cc.jpg"]}/>
                        </div>
                        <h4 className="text-lg font-medium my-4">Cuisines</h4>
                        <div className="flex flex-wrap gap-2">
                            <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full ">
                                Biryani
                            </span>
                             <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full ">
                                Sea Food
                            </span>
                             <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full ">
                                North Indian
                            </span>
                        </div>
                        <div className="my-4">
                        <h4 className="text-lg font-medium ">Average Cost</h4>
                        <h6 className="">₹650 for two people (approx.)</h6>
                        <small className="text-gray-500">Exclusive of applicable taxes and charges, if any</small>
                        </div>
                        <div className="my-4">
                        <h4 className="text-lg font-medium ">Similar Restaurants</h4>
                        <Slider {...settings}>
                            <MenuSimilarRestaurantcard image="https://b.zmtcdn.com/data/pictures/8/19820418/6541acdbb03d09fb57f2b51446a8ffed_featured_v2.jpg?output-format=webp" title="tea"/>
                               <MenuSimilarRestaurantcard image="https://b.zmtcdn.com/data/pictures/8/19820418/6541acdbb03d09fb57f2b51446a8ffed_featured_v2.jpg?output-format=webp" title="tea"/>
                                  <MenuSimilarRestaurantcard image="https://b.zmtcdn.com/data/pictures/8/19820418/6541acdbb03d09fb57f2b51446a8ffed_featured_v2.jpg?output-format=webp" title="tea"/>   <MenuSimilarRestaurantcard image="https://b.zmtcdn.com/data/pictures/8/19820418/6541acdbb03d09fb57f2b51446a8ffed_featured_v2.jpg?output-format=webp" title="tea"/>

                        </Slider>
                        </div>
                    <div className="my-4">
                         <h4 className="text-lg font-medium ">Rate Your Delivery Experience</h4>
                           <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  /></div>
  <div className="my-4 w-full  md:hidden flex flex-col gap-4">
       <MapView title="Junior Kuppanna" phno="+91123456789" maplocation={[13.059744218537944, 80.2457760599076]} address="35/OLD 17, Kodambakkam High Road, Nungambakkam, Chennai"/>
  </div>
            <div className="my-4 flex flex-col gap-4">
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>

            
                    </div>
                </div>
                <aside style={{height: "fit-content"}} className="hidden md:flex md:w-4/12 sticky rounded-xl top-2 bg-white p-3 shadow-md flex flex-col gap-4">
              <MapView title="Junior Kuppanna" phno="+91123456789" maplocation={[13.059744218537944, 80.2457760599076]} address="35/OLD 17, Kodambakkam High Road, Nungambakkam, Chennai"/>
                </aside>

            </div>
        </>
    )
}

export default Overview;
