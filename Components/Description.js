import React from 'react';
import Link from 'next/link';

const Description = () => {
    const descriptioImg = 'https://img.freepik.com/free-vector/modern-hand-drawn-education-concept_23-2147906438.jpg?w=740&t=st=1699430257~exp=1699430857~hmac=a83e493cb60e55710da47a7a2e0bf4b5842188612b96bc71278771991c7cfb44';
    return (
        <>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 p-4">
                        <img src={descriptioImg} className="img-fluid shadow-lg" alt="desription" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 p-4">
                        <p className="fs-1 text-success fw-bold mb-5">আমাদের প্রতিষ্ঠান সম্পর্কে</p>
                        <p className="text-muted">
                            <span className='text-success fw-bold'>মাল্টিলেটারেল মডেল ইন্সটিটিউট </span> হল শিক্ষার্থী, পিতামাতা এবং কর্মী সহ শিক্ষার্থীদের একটি সম্প্রদায় যারা একাডেমিকভাবে কঠোর, সাংস্কৃতিকভাবে যত্নশীল এবং অন্তর্ভুক্তিমূলক শিক্ষার পরিবেশ তৈরিতে নিবেদিত। আমরা একাডেমিক এবং পরিবর্তনশীল ইতিহাসে শ্রেষ্ঠত্ব অর্জন করছি! একসাথে, আমরা জ্ঞান, আমাদের সম্প্রদায়, পরিবেশ এবং আমাদের ভবিষ্যতের চ্যাম্পিয়ন। এমএমআই অর্জনকারীরা লক্ষ্য-ভিত্তিক, সমালোচনামূলক চিন্তাবিদ এবং সম্প্রদায়ের নেতা যারা সর্বোচ্চ স্তরের সততা এবং একাডেমিক সাফল্য অর্জনের জন্য নিবেদিত।
                            এই লক্ষ্যে, আমরা আমাদের মূল স্কুলব্যাপী প্রত্যাশা এবং মূল্যবোধ (নিরাপদ হোন, শ্রদ্ধাশীল হোন, দায়িত্বশীল হোন এবং সচেতন হোন) ব্যবহার করে স্বাস্থ্য, সুস্থতা এবং চরিত্র বিকাশের উদাহরণ স্বরূপ সু-বৃত্তাকার শিক্ষার্থীদের বিকাশ করতে চাই।
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