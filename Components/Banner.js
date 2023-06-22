import React from 'react';
import Link from 'next/link';
import 'animate.css';

const Banner = () => {
    return (
        <>
            <div className="container-fluid banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 col-12">
                            <div className="p-5 bg-light mt-5 border-0 rounded-3 shadow-lg animate__animated animate__backInLeft">
                                <p className="fs-1 text-dark">&quot;শেখা একটি <span className='text-success'>সম্পদ</span> যা সর্বত্র এর&apos;মালিককে অনুসরণ করবে&quot;</p>
                                <p className="text-muted"> -- Chinese Proverb</p>
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

export default Banner;