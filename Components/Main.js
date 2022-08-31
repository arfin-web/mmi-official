import React from 'react';
import Offerbanner from './Offerbanner';
import Carousel from './Carousel';
import Description from './Description';
import Statistics from './Statistics';

const Main = () => {
    return (
        <>
            <Carousel />
            <Statistics />
            <Offerbanner />
            <Description />
        </>
    );
};

export default Main;