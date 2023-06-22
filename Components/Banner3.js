import React from 'react';
import Link from 'next/link';
import 'animate.css';

const Banner3 = () => {
    return (
        <>
            <div className="container-fluid banner3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 col-12">
                            <div className="p-5 bg-light mt-5 border-0 rounded-3 shadow-lg animate__animated animate__backInLeft">
                                <p className="fs-1 text-dark">&quot;বুদ্ধিমত্তা প্লাস <span className='text-success'>চরিত্র </span>সত্যিকারের শিক্ষার <span className='text-success'>লক্ষ্য</span>&quot;</p>
                                <p className="text-muted">-- Martin Luther King Jr.</p>
                                <Link href="/contact">
                                    <button type="button" className="btn btn-success text-light fw-bold">Contact With Us</button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 col-12">

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner3;