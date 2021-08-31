import React from 'react';
import Slider from "react-slick";

//components
import { NextArrow,  PrevArrow } from '../CarouselArrow';


const Brand = (props) => {
    const logos = ["https://b.zmtcdn.com/data/brand_creatives/logos/32d7efa7114468686994cd52a1ff0775_1625163758.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/8e10f725d0d67a26c4b58e883cc99498_1551180403.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/979d427f19044ebe68404bd9429c8a3b_1629443003.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875219.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/08da44392a73e7e9db7be1e47863f07d_1605502636.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252640.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/fadbb0911635c6978cb189df1d505dfa_1611253761.png?output-format=webp",]
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
      };
    return (
        <div className="my-5">
      <Slider {...settings}>
            {logos.map((logo) =>(
                  <div className="w-24 h-24 mx-3 bg-white shadow">
                  <img src={logo} alt="brand" className="w-full h-full object-cover" />
              </div>
            ))}
      </Slider>
      </div>
    )
}

export default Brand
