import React from 'react'
import Slider from 'react-slick';

//components
import PictureCarouselCard from '../PictureCarousel'
import { NextArrow,  PrevArrow } from '../CarouselArrow';


const DinningCarousel = () => {
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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
