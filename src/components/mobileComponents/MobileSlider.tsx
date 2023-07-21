import React, {useState, useEffect, useMemo} from 'react';
import styled from 'styled-components';
import MobileCard from './MobileCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types/swiper-options';
import 'swiper/css';
import { SliderProps } from '../../utils/data';

const SliderContainer = styled.div`
    width: 100%;
    min-height: 270px;
    position: relative;
    `

const breakpoints = {
    320: {
        slidesPerView: 1,
    },
    480: {
        slidesPerView: 2,
    },
};

const MobileSlider: React.FC<SliderProps> = ({ cards }) => {
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
                <Swiper {...sliderSettings}>
                    {cards.map((card, index) => (
                        <SwiperSlide key={index}>
                            <MobileCard {...card} />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </SliderContainer>
    );
};

export default MobileSlider;
