import React from 'react';
import Link from 'next/link';

const DescriptionTwo = () => {
    const descriptioImg = 'https://img.freepik.com/free-photo/books-with-brain-digital-art-style-education-day_23-2151164350.jpg?t=st=1726891496~exp=1726895096~hmac=3bdceb91d79e5c37ae6a4404b588e541957ad2c01e32153827d72caddb76c373&w=900';
    return (
        <>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 p-4">
                        <p className="text-muted">
                            <span className='text-success fw-bold'>As-salamu Alaikum. </span> Right now, I am presenting a school which is situated in Dhaka Uddan and the name is Multilateral Model Institute. This organization is founded by Dr. Mofizur Rahman and Mostafizur Rahman.A great educational opportunity is given by this institution.More than 160 students are taken their moral education by this school.Some couple of teachers are giving knowledge to their heart connected students.I wish if this organization can get their perfect support it can play a role model to build an Islamic education system and Islamic society.
                        </p>
                        <Link href="/about">
                            <button type="button" className="btn btn-success rounded-pill text-light fw-bold mt-4">Know More</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 p-4">
                        <img src={descriptioImg} className="img-fluid shadow-lg" alt="desription" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default DescriptionTwo;