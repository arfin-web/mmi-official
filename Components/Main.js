import React from 'react';
import Mainbanner from './Mainbanner';
import Offerbanner from './Offerbanner';
import Carousel from './Carousel';
import Description from './Description';
import Statistics from './Statistics';
import Zoom from 'react-reveal/Zoom';

const Main = () => {
    return (
        <>
            <Zoom>
                <Mainbanner />
            </Zoom>
            <Zoom>
                <Carousel />
            </Zoom>
            <Zoom>
                <Statistics />
            </Zoom>
            <Zoom>
                <Offerbanner />
            </Zoom>
            <Zoom>
                <Description />
            </Zoom>
        </>
    );
};

export default Main;