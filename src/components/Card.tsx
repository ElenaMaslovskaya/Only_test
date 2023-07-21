import React from 'react';
import styled from 'styled-components';
import { CardProps } from '../utils/data';

const CardItem = styled.div`
    width: 350px;
    height: 100%;
    background-color: transparent;
    color: #42567A;
    display: flex;
    flex-direction: column;
`;

const CardTitle = styled.h2`
    height: 20%;
    font-size: 25px;
    line-height: 30px;
    color: #3877EE;
    margin: 0;
`;

const CardDescription = styled.p`
    height: 80%
    font-size: 20px;
    line-height: 30px;
    color: #42567A;
    margin: 0;
`;

const Card: React.FC<CardProps> = ({ title, description }) => {
    return (
        <CardItem>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
        </CardItem>
    );
}

export default Card;