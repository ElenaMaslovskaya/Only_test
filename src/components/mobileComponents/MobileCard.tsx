import React from 'react';
import styled from 'styled-components';
import { CardProps } from '../../utils/data';

const CardItem = styled.div`
    min-width: 160px;
    max-width: 200px
    height: 114px;
    background-color: transparent;
    color: #42567A;
`;

const CardTitle = styled.h2`
    height: 30%;
    font-size: 16px;
    line-height: 19px;
    color: #3877EE;
`;

const CardDescription = styled.p`
    height: 70%;
    font-size: 14px;
    line-height: 20px;
    color: #42567A;
`;

const MobileCard: React.FC<CardProps> = ({ title, description }) => {
    return (
        <CardItem>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
        </CardItem>
    );
}

export default MobileCard;