import React from 'react'
import OurSpeech from './OurSpeech'

const Characteristics = () => {
    const descriptioImg = 'https://i.etsystatic.com/27977671/r/il/6a2ab5/3957982583/il_fullxfull.3957982583_211y.jpg';
    return (
        <>
            <h1 className='fs-3 fw-bold text-center text-success mt-4'>বিসমিল্লাহির রাহমানির রাহিম</h1>
            <h2 className='fs-5 fw-bold text-center mb-3'>স্কুল কোড - <span className='text-success'>৪২৪১৫৪</span></h2>
            <OurSpeech />
            <h2 className='fs-4 text-center text-success my-4'>মাল্টিলেটারেল মডেল ইনস্টিটিউট একটি ব্যতিক্রমি শিক্ষা প্রতিষ্ঠান, এর রয়েছে :</h2>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 p-4">
                        <p className="fs-2 text-success fw-bold mb-5">৪টি বৈশিষ্ট্য :</p>
                        <ul className="fs-5 list-unstyled">
                            <li><span className='text-success'>০১.</span> তিনটি ভাষা- বাংলা,ইংরেজী এবং আরবী অষ্টম শ্রেণীর মধ্যেই শুদ্ধভাবে পড়তে, বলতে এবং লিখতে পারবে।</li>
                            <li><span className='text-success'>০২.</span> কোন একটি কর্মকৌশল শিখবে যা তাকে স্বাবলম্বী করবে।</li>
                            <li><span className='text-success'>০৩.</span> ব্যক্তি, দেশ ও জাতির জন্য অতি প্রয়োজনীয় চরিত্র বৈশিষ্ট্যের অধিকারী হতে হবে।</li>
                            <li><span className='text-success'>০৪.</span> অল্প অল্প করে, বার বার করে পাঠ-অভ্যাস করিয়ে ছাত্র-ছাত্রীদেরকে শ্রেণী কক্ষেই
                                সকল বিষয় শেখানোর ব্যবস্থা থাকবে।</li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 p-4">
                        <img src={descriptioImg} className="img-fluid shadow-lg" alt="desription" />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 p-4">
                        <img src={descriptioImg} className="img-fluid shadow-lg" alt="desription" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 p-4">
                        <p className="fs-2 text-success fw-bold mb-5">৪টি লক্ষ্য :</p>
                        <ul className="fs-5 list-unstyled">
                            <li><span className='text-success'>০১.</span> শিক্ষা- যা শিখবো শুদ্ধ শিখব</li>
                            <li><span className='text-success'>০২.</span> দীক্ষা- যা শিখবো আমল করব</li>
                            <li><span className='text-success'>০৩.</span> কর্ম- নিজের কাজ নিজে করব, কাউকে দিয়ে করাবোনা।</li>
                            <li><span className='text-success'>০৪.</span> দেশপ্রেম- নিজের স্বার্থের জন্য দেশ-জাতির ক্ষতি করবোনা।</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 p-4">
                        <p className="fs-2 text-success fw-bold mb-5">৪টি শপথ বাক্য :</p>
                        <ul className="fs-5 list-unstyled">
                            <li><span className='text-success'>০১.</span> মিথ্যা বলবনা</li>
                            <li><span className='text-success'>০২.</span> আমানতের খেয়ানত করবনা</li>
                            <li><span className='text-success'>০৩.</span> ওয়াদা ভঙ্গ করবনা</li>
                            <li><span className='text-success'>০৪.</span> চাকরি করবনা, চাকরি দেবো ইনশাল্লাহ্।</li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 p-4">
                        <img src={descriptioImg} className="img-fluid shadow-lg" alt="desription" />
                    </div>
                </div>
            </div>

            {/* <div className="container my-3">
                <div className="row gx-4">
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="card p-4 h-100 bg-secondary">
                            <div className="card-body">
                                <p className="card-text text-light fs-2">৪টি বৈশিষ্ট্য :</p>
                                <hr className='bg-light' />
                                <ul className="card-text text-light fs-5 list-unstyled">
                                    <li>০১. তিনটি ভাষা- বাংলা,ইংরেজী এবং আরবী অষ্টম শ্রেণীর মধ্যেই শুদ্ধভাবে পড়তে, বলতে এবং লিখতে পারবে।</li>
                                    <li>০২. কোন একটি কর্মকৌশল শিখবে যা তাকে স্বাবলম্বী করবে।</li>
                                    <li>০৩. ব্যক্তি, দেশ ও জাতির জন্য অতি প্রয়োজনীয় চরিত্র বৈশিষ্ট্যের অধিকারী হতে হবে।</li>
                                    <li>০৪. অল্প অল্প করে, বার বার করে পাঠ-অভ্যাস করিয়ে ছাত্র-ছাত্রীদেরকে শ্রেণী কক্ষেই
                                        সকল বিষয় শেখানোর ব্যবস্থা থাকবে।</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="card p-4 h-100 bg-warning">
                            <div className="card-body">
                                <p className="card-text fs-2">৪টি লক্ষ্য :</p>
                                <hr />
                                <ul className="card-text fs-5 list-unstyled">
                                    <li>০১. শিক্ষা- যা শিখবো শুদ্ধ শিখব</li>
                                    <li>০২. দীক্ষা- যা শিখবো আমল করব</li>
                                    <li>০৩. কর্ম- নিজের কাজ নিজে করব করবোনা।</li>
                                    <li>০৪. দেশপ্রেম- নিজের স্বার্থের জন্য দেশ-জাতির ক্ষতি</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="card p-4 h-100 bg-success">
                            <div className="card-body">
                                <p className="card-text text-light fs-2">৪টি শপথ বাক্য :</p>
                                <hr className='bg-light' />
                                <ul className="card-text text-light fs-5 list-unstyled">
                                    <li>০১. মিথ্যা বলবনা</li>
                                    <li>০২. আমানতের খেয়ানত করবনা</li>
                                    <li>০৩. ওয়াদা ভঙ্গ করবনা</li>
                                    <li>০৪. চাকরি করবনা, চাকরি দেবো ইনশাল্লাহ্।</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Characteristics