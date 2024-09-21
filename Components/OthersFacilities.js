import React from 'react';

const OthersFacilities = () => {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row gx-4">
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="card p-4 h-100 bg-secondary">
                            <div className="card-body">
                                <hr className='bg-light' />
                                <p className="card-text text-light fs-2">সকল শ্রেণিতে নূরানী
                                    প্রশিক্ষনপ্রাপ্ত শিক্ষক
                                    দ্বারা কুরআন ক্লাস
                                    পরিচালনা</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="card p-4 h-100 bg-warning">
                            <div className="card-body">
                                <hr />
                                <p className="card-text fs-2">মানসম্মত কম্পিউটার
                                    ল্যাবের মাধ্যমে কম্পি উটার প্রশিক্ষনের সু-ব্যবস্থা</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="card p-4 h-100 bg-success">
                            <div className="card-body">
                                <hr className='bg-light' />
                                <p className="card-text text-light fs-2">প্রতি শ্রেণিতে সর্বোচ্চ
                                    ২০ জন ছাত্র নিয়ে ক্লাস পরিচালনা করা
                                    হয়</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OthersFacilities;