import React from 'react';
import Link from 'next/link';
import Address from './Address';

const Footer = () => {
    const school = 'https://img.freepik.com/free-vector/gradient-book-logo-template_23-2148806934.jpg?w=740&t=st=1661698327~exp=1661698927~hmac=fca05e6a4e415dd4be63d2bea522eae9939a90a8215b9ed5d891b61d9388fb2d';
    return (
        <>
            <Address></Address>
            <div className="container-fluid bg-dark p-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="card bg-dark text-white">
                            <div className="card-header fs-3 text-success">
                                Follow Us
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item fs-5 text-muted p-3 bg-dark"><i className="fab fa-facebook-square fs-4 text-success"></i> /mmiofficial</li>
                                <li className="list-group-item fs-5 text-muted p-3 bg-dark"><i className="fab fa-twitter-square fs-4 text-success"></i> /mmiofficial</li>
                                <li className="list-group-item fs-5 text-muted p-3 bg-dark"><i className="fab fa-youtube-square fs-4 text-success"></i> /mmiofficial</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="card bg-dark">
                            <div className="card-header fs-3 text-success">
                                Explore
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item bg-dark">
                                    <Link href="/" className="text-muted text-decoration-none fs-5"><i className="fas fa-hand-point-right fs-4 text-success icon">Home</i></Link>
                                </li>
                                <li className="list-group-item bg-dark">
                                    <Link href="/about" className="text-muted text-decoration-none fs-5"><i className="fas fa-hand-point-right fs-4 text-success icon">About</i></Link>
                                </li>
                                <li className="list-group-item bg-dark">
                                    <Link href="/contact" className="text-muted text-decoration-none fs-5"><i className="fas fa-hand-point-right fs-4 text-success icon">Contact</i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="card">
                            <img src={school} className="img-fluid" alt="school" />
                        </div>
                    </div>
                </div>
                <p className="text-muted text-center mt-5 mb-0 fs-5">&#169; Created By <span className='text-light fw-bold'>Arfin Priom</span> || All Rights Resurved</p>
            </div>
        </>
    );
};

export default Footer;