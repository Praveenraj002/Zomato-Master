import React from 'react'
import Slider from "react-slick";

//components
import DeliveryCategory from './DeliveryCategory'
import { NextArrow,  PrevArrow } from '../CarouselArrow';

const Deliverycarousel = () => {
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
      };

    const categories = [{
       image:"https://b.zmtcdn.com/data/dish_images/5f1305ff860aeebffbca92ea1d8d1cf31612436209.png",
       title: "Idli"
    },
    {
        image:"https://b.zmtcdn.com/data/dish_images/9c179e4b2beb3b5e026346f946e502931613232962.png",
        title:"Vada"
    },
    {
        image:"https://b.zmtcdn.com/data/dish_images/bde0673f17edb0c73560894b3f12605d1613233093.png",
        title:"Pongal",
    },
    {
        image:"https://b.zmtcdn.com/data/homepage_dish_data/2/a088e152c3e73c663158206c5e622981.png",
        title:"Coffee",
    },
    {
        image:"https://b.zmtcdn.com/data/dish_images/900b79898e840645e67723c25193cc1d1612438080.png",
        title:"Uttapam",
    },
    {
        image:"https://b.zmtcdn.com/data/dish_images/96a0bbcddcbd347dce0a52993516f58b1612767049.png",
        title:"Parotta",
    },
    {
        image:"https://b.zmtcdn.com/data/homepage_dish_data/4/4a04890400b5d7bac101baace5d7e994.png",
        title:"Sandwich",
    },
    {
        image:"https://b.zmtcdn.com/data/homepage_dish_data/4/90cc74d5256f614fc6658cf7942dadd9.png",
        title:"Noodles",
    },
    {
        image:"https://b.zmtcdn.com/data/homepage_dish_data/2/1be4127a9dfd23d89aec9ec57a8e71f7.png",
        title:"Fries",
    },
]

    return (
        <>
           <h1 className="text-xl mb-4 font-semibold">Inspiration for your first order</h1> 
        <div className="lg:hidden flex flex-wrap gap-3 lg: gap-0 justify-between">

            {
            categories.map((food) => (
            <DeliveryCategory {...food}/>
            ))
            }

        </div>
        <div className="hidden lg:block">
            <Slider {...settings}>
            {
            categories.map((food) => (
            <DeliveryCategory {...food}/>
            ))
            }
            </Slider>

        </div>

        </>
    )
}

export default Deliverycarousel
