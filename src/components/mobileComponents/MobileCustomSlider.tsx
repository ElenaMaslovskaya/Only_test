import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { slidersData } from '../../utils/data';
import MobileSlider from './MobileSlider';

const SliderContainer = styled.div`
    width: 100%;
    min-height: 270px;
    padding: 0px;
    position: relative;
`;

const PrevSliderButton = styled.div`

    &.swiper-button-prev {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 1;
    font-size: 24px;
    border: 2px solid rgba(56, 119, 238, 0.1);
    background-color: #ffffff;
    color: #3877EE;
    position: absolute;
    right: 10px;
    top: 210px;

    }

    &.swiper-button-prev::after {
        display: none;
        
    }
`;

const NextSliderButton = styled.div`

    &.swiper-button-next {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        z-index: 1;
        border: 2px solid rgba(56, 119, 238, 0.1);
        background-color: #ffffff;
        color: #3877EE;
        position: absolute;
        left: 70px;
        top: 210px;;
    }

    &.swiper-button-next::after {
        display: none;       
    }
`;


const PaginationSlider = styled.div`
  
    }
`


const MobileCustomSlider: React.FC = () => {
    const sliderSettings: SwiperOptions = {
        modules: [Navigation, Pagination],
        spaceBetween: 30,
        slidesPerView: 1,
        slidesPerGroupSkip: 1,
        direction: 'horizontal',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',
        }
    };

    return (
        <SliderContainer>
            
            <Swiper {...sliderSettings}>
                {slidersData.map((slider, index) => (
                    <SwiperSlide key={index}>
                        <MobileSlider {...slider} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <PrevSliderButton className="swiper-button-prev">
                &#8249;
            </PrevSliderButton>
            <NextSliderButton className="swiper-button-next">
                &#8250;
            </NextSliderButton>
            <PaginationSlider className='swiper-pagination' />
        </SliderContainer>
    );
}

export default MobileCustomSlider;