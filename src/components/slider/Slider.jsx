import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SliderProducts } from '../../data/products';
import './Slider.css';

const Slider = () => {
  return (

    <div className="s-container">
        <Swiper 

        breakpoints={{
            640:{
            slidesPerView:3,},
            0:{
                slidesPerView:1
            }}
        }   


        modules={[Pagination, Navigation]}
        className = "mySwiper"
        navigation = {true}
        spaceBetween = {40} 
        slidesPerGroup = {1}
        slidesPerView={3}
        centeredSlides={true}
        loop = {true}> 
            {SliderProducts.map((slide,i) =>(
                <SwiperSlide key={i}>
                    <div className="left-s">
                        <div className="name">
                            <span>{slide.name}</span>
                            <span>{slide.detail}</span>
                        </div>
                        <span>{slide.price}$</span>
                    </div>
                    <img src={slide.img} alt="products" className="img-p" />
                    
                </SwiperSlide>
))}

       </Swiper>
    </div>
    );
};

export default Slider;



