import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/"><p className="badge bg-success text-wrap fs-5 mt-2 mb-0 overflow-hidden logo">Multilateral Model Institute</p>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item m-1">
                                <Link className="nav-link active text-dark" aria-current="page" href="/">
                                    <button className="btn btn-light fw-bold rounded-pill">Home</button>
                                </Link>
                            </li>
                            <li className="nav-item m-1">
                                <Link className="nav-link text-dark" href="/about">
                                    <button className="btn btn-light fw-bold rounded-pill">About</button>
                                </Link>
                            </li>
                            <li className="nav-item m-1">
                                <Link className="nav-link text-dark" href="/gallary">
                                    <button className="btn btn-light fw-bold rounded-pill">Gallary</button>
                                </Link>
                            </li>
                            <li className="nav-item m-1">
                                <Link className="nav-link text-dark" href="/teachers">
                                    <button className="btn btn-light fw-bold rounded-pill">Teachers</button>
                                </Link>
                            </li>
                            <li className="nav-item m-1">
                                <Link className="nav-link text-dark" href="/contact">
                                    <button className="btn btn-success fw-bold rounded-pill">Contact</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;