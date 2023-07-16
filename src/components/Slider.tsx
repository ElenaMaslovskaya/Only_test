import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SliderContainer = styled.div`
    width: 80%;
    height: 135px;
    border: 1px solid red;
    display: flex;
    margin : 0 auto;

    .swiper-button-prev,
    .swiper-button-next {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #ffffff;
    color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    }

`;

const Slider: React.FC = () => {

    const sliderSettings: SwiperOptions = {
        modules: [Navigation, Pagination],
        spaceBetween: 30,
        slidesPerView: 3,
        direction: 'horizontal',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    }

    return (
        <SliderContainer>
            <Swiper {...sliderSettings}>
                <div className="swiper-button-prev"></div>
                <SwiperSlide>
                    <Card title='title' description='description' />
                </SwiperSlide>
                <SwiperSlide>
                    <Card title='title' description='description' />
                </SwiperSlide>
                <SwiperSlide>
                    <Card title='title' description='description' />
                </SwiperSlide>
                <SwiperSlide>
                    <Card title='title' description='description' />
                </SwiperSlide>
                <SwiperSlide>
                    <Card title='title' description='description' />
                </SwiperSlide>
                <SwiperSlide>
                    <Card title='title' description='description' />
                </SwiperSlide>
                <div className="swiper-button-next"></div>
            </Swiper>
        </SliderContainer>
    );
}

export default Slider;