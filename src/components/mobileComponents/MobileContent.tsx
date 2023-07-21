import React from 'react';
import styled from 'styled-components';
import MobileCustomSlider from './MobileCustomSlider';

const BlockContent = styled.div`
    min-width: 320px;
    width: 90%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 50px 0px 20px;
    margin: 0 auto;


    &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #42567A;
    opacity: 0.2;
    transform: translateY(-50%);
    }
`;

const ContentTitle = styled.h1`
    height: 50px;
    margin: 0px;
    color: #42567A;
    line-height: 26px;
    font-size: 20px;
    font-family: 'PT Sans', sans-serif;
    font-weight: 700;

    @media (min-width: 480px) {
        font-size: 24px; 
    }
`;

const DatesBlock = styled.div`
    width: 50%;
    min-width: 273px;
    height: 73px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    font-size: 56px;
    line-height: 72px;
    letter-spacing: -2%;
    font-weight: 700;

    @media (min-width: 480px) {
        width: 70%;
        font-size: 68px;
    }
`;

const FirstDate = styled.div`
    color: #5D5FEF;
`;

const LastDate = styled.div`
    color: #EF5DA8;
`;


const MobileContent: React.FC = () => {

    return (
        <BlockContent>
            <ContentTitle>
                Исторические
                <br />
                даты
            </ContentTitle>
            <DatesBlock>
                <FirstDate>2015</FirstDate>
                <LastDate>2022</LastDate>
            </DatesBlock>
                <MobileCustomSlider />
        </BlockContent>
    )
};

export default MobileContent;