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
    width: 100%;
    border: 1px solid red;
    position: relative;
`;

const SliderContent = styled.div`
  width: 85%;
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
  left: 5px
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
  right: 5px
  }
`;

const Slider: React.FC = () => {
    const sliderSettings: SwiperOptions = {
        modules: [Navigation, Pagination],
        spaceBetween: 30,
        slidesPerView: 3,
        slidesPerGroup: 3,
        slidesPerGroupSkip: 3,
        direction: 'horizontal',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    };

    

    return (
        <SliderContainer>
            <PrevButton className="swiper-button-prev">
            </PrevButton>
            <SliderContent>
                <Swiper {...sliderSettings}>
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
                </Swiper>
            </SliderContent>
            <NextButton className="swiper-button-next"></NextButton>
        </SliderContainer>
    );
}

export default Slider;