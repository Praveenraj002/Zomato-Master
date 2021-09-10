import React from 'react'
import Slider from 'react-slick';

//components
import PictureCarouselCard from '../PictureCarousel'
import { NextArrow,  PrevArrow } from '../CarouselArrow';


const DinningCarousel = () => {
    const settings = {
       dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
      };
    return (
        <div className="w-full">
            <Slider {...settings}>
            <PictureCarouselCard />
            <PictureCarouselCard />
            <PictureCarouselCard />
            <PictureCarouselCard />
            <PictureCarouselCard />


            </Slider>
        </div>
    )
}

export default DinningCarousel
