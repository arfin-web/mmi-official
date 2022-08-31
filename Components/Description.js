import React from 'react';
import Link from 'next/link';

const Description = () => {
    const descriptioImg = 'https://img.freepik.com/free-vector/school-knowledge-concept_23-2147503320.jpg?w=2000';
    return (
        <>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 p-4">
                        <img src={descriptioImg} className="img-fluid shadow-lg" alt="desription" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 p-4">
                        <p className="fs-1 text-success fw-bold mb-5">About Our Institution</p>
                        <p className="text-muted">
                            <span className='text-success fw-bold'>Multilateral model Institute</span> is a community of learners including students, parents and staff who are dedicated to creating an academically rigorous, culturally caring and inclusive learning environment.We are Reaching Excellence in Academics and Changing History!Together, we are champions of knowledge, our communities, the environment and of our futures.<span className='text-success fw-bold'>MMI</span>  Achievers are goal-oriented, critical thinkers and community leaders who are dedicated to achieving the highest level of integrity and academic success.<br />
                            To this end, we seek to develop well-rounded students who exemplify health, wellness and character development using our core schoolwide expectations and values (Be Safe, Be Respectful, Be Responsible and Be Mindful).
                        </p>
                        <Link href="/about">
                            <button type="button" className="btn btn-success rounded-pill text-light fw-bold mt-4">Know More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Description;