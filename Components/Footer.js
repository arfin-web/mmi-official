import React from 'react';
import Address from './Address';

const Footer = () => {
    return (
        <>
            <Address></Address>
            <div className="container-fluid bg-dark py-2">
                <p className="text-muted text-center mt-5 mb-0 fs-5">&#169; Created By <a href='https://www.nextwebify.com' target='_blank' className='text-light fw-bold'>NextWebify</a> || All Rights Resurved</p>
            </div>
        </>
    );
};

export default Footer;