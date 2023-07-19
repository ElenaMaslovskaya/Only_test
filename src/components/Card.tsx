import React from 'react';
import styled from 'styled-components';
import { CardProps } from '../utils/data';

const CardItem = styled.div`
    width: 300px;
    height: 130px;
    background-color: transparent;
    color: #42567A;
    border: 3px solid blue;
`;

const CardTitle = styled.h2`
    font-size: 25px;
    line-height: 30px;
    color: #3877EE;
`;

const CardDescription = styled.p`
    font-size: 20px;
    line-height: 30px;
    color: #42567A;
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