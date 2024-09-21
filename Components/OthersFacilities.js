import React from 'react';

const OthersFacilities = () => {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row gx-0">
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="card p-4 bg-light border-0">
                            <i className="fas fa-school fs-1 ms-3 mb-3 mt-2 text-success"></i>
                            <div className="card-body">
                                <p className="card-text text-muted">সকল শ্রেণিতে নূরানী
                                    প্রশিক্ষনপ্রাপ্ত শিক্ষক
                                    দ্বারা কুরআন ক্লাস
                                    পরিচালনা</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="card p-4 bg-success">
                            <i className="fas fa-chalkboard-teacher fs-1 ms-3 mb-3 mt-2 text-light"></i>
                            <div className="card-body">
                                <p className="card-text text-white-50">মানসম্মত কম্পিউটার
                                    ল্যাবের মাধ্যমে কম্পি উটার প্রশিক্ষনের সু-ব্যবস্থা</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="card p-4 bg-light border-0">
                            <i className="fas fa-heartbeat fs-1 ms-3 mb-3 mt-2 text-success"></i>
                            <div className="card-body">
                                <p className="card-text text-muted">প্রতি শ্রেণিতে সর্বোচ্চ
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