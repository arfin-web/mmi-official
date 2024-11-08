import React from 'react';
import 'animate.css';
import Image from 'next/image';

const Banner = () => {
    return (
        <>
            <div className="container">
                <div className='row'>
                    <div className="col-md-12">
                        <figure className='w-full'>
                            <Image
                                src="/poster.png"
                                width={1200}
                                height={1400}
                                alt='poster'
                                className="object-cover object-center h-full w-full"
                            />
                        </figure>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;