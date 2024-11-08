import React from 'react';
import Mainbanner from './Mainbanner';
import Banner from './Banner'
import DescriptionTwo from './DescriptionTwo'
import Statistics from './Statistics';
import Zoom from 'react-reveal/Zoom';
import OthersFacilities from './OthersFacilities';
import Characteristics from './Characteristics';

const Main = () => {
    return (
        <>
            <Zoom>
                <Mainbanner />
            </Zoom>
            <Zoom>
                <Characteristics />
            </Zoom>
            <Zoom>
                <Banner />
            </Zoom>
            <Zoom>
                <Statistics />
            </Zoom>
            <Zoom>
                <OthersFacilities />
            </Zoom>
            <Zoom>
                <DescriptionTwo />
            </Zoom>
        </>
    );
};

export default Main;