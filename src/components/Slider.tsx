import React, { useEffect, useState, useMemo } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const SliderContainer = styled.div`
    width: 100%;
    height: 135px;
    border: 1px solid red;
    position: relative;
`;

const SliderContent = styled.div`
    width: 85%;
    margin: 0 auto;
`;

const PrevButton = styled.div`

    &.swiper-button-prev {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    left: 5px;
    z-index: 1;
    font-size: 24px;
    border: 2px solid rgba(56, 119, 238, 0.1);
    background-color: #ffffff;
    color: #3877EE;

    }

    &.swiper-button-prev::after {
        display: none;
        
    }
`;

const NextButton = styled.div`

    &.swiper-button-next {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        z-index: 1;
        position: absolute;
        right: 5px;
        border: 2px solid rgba(56, 119, 238, 0.1);
        background-color: #ffffff;
        color: #3877EE;

    }

    &.swiper-button-next::after {
        display: none;       
    }
`;

const breakpoints = {
    320: {
        slidesPerView: 1,
    },
    980: {
        slidesPerView: 2,
    },
    1440: {
        slidesPerView: 3,
    },
};

const Slider: React.FC = () => {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const sliderSettings: SwiperOptions = useMemo(() => {
        const breakpoint = Object.keys(breakpoints)
            .map(Number)
            .reverse()
            .find((bp) => windowWidth >= bp);

        return {
            modules: [Navigation],
            spaceBetween: 30,
            slidesPerView: breakpoints[breakpoint as keyof typeof breakpoints]?.slidesPerView || 3,
            direction: 'horizontal',
            slidesPerGroup: 1,
            slidesPerGroupSkip: 1,
            nested: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        };
    }, [windowWidth]);

    return (
        <SliderContainer>
            <PrevButton className="swiper-button-prev">&#8249;</PrevButton>
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
            <NextButton className="swiper-button-next">&#8250;</NextButton>
        </SliderContainer>
    );
};

export default Slider;
