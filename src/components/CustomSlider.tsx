import React from 'react';
import styled from 'styled-components';
import Slider from './Slider';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CustomSliderContainer = styled.div`
  width: 100%;
  border: 1px solid black;
  position: relative;
`;

const SliderContent = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const PrevButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid rgba(56, 119, 238, 0.1);
  background-color: #ffffff;
  color: #3877EE;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1;
  position: absolute;
  left: 5px;
`;

const NextButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid rgba(56, 119, 238, 0.1);
  background-color: #ffffff;
  color: #3877EE;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1;
  position: absolute;
  right: 5px;
`;

const CustomSlider: React.FC = () => {
    const sliderSettings: SwiperOptions = {
        modules: [Navigation, Pagination],
        spaceBetween: 10,
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        slidesPerGroupSkip: 1,
        direction: 'horizontal',
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index: number, className: string) {
                return `<span class="${className}">${index + 1}</span>`;
                },
        }
    }

    return (
        <CustomSliderContainer>
            <PrevButton className="swiper-button-prev" />
            <SliderContent>
                <Swiper {...sliderSettings}>
                    {[...Array(6)].map((_, index) => (
                        <SwiperSlide key={index}>
                            <Slider />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </SliderContent>
            <NextButton className="swiper-button-next" />
        </CustomSliderContainer>
    );
};

export default CustomSlider;

