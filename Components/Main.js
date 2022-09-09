import React from 'react';
import Mainbanner from './Mainbanner';
import Offerbanner from './Offerbanner';
import Carousel from './Carousel';
import Description from './Description';
import Statistics from './Statistics';

const Main = () => {
    return (
        <>
            <Mainbanner />
            <Carousel />
            <Statistics />
            <Offerbanner />
            <Description />
        </>
    );
};

export default Main;