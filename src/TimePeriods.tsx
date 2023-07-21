import React,  {useState, useEffect } from 'react';
import Content from './components/Content';
import MobileContent from './components/mobileComponents/MobileContent';
import styled from 'styled-components';

const BlockContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #F4F5F9;
  font-family: 'PT Sans', 'Bebas Neue', sans-serif;
`;

const TimePeriods: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const mobileBreakpoint = 768;

  return (
    <BlockContainer>
      {windowWidth <= mobileBreakpoint ? (
        <MobileContent />
      ) : (
        <Content />
      )}
    </BlockContainer>
  );
}

export default TimePeriods;
