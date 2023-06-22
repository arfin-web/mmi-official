import React from 'react';

const Offerbanner = () => {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row gx-0">
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="card p-4 bg-light border-0">
                            <i className="fas fa-school fs-1 ms-3 mb-3 mt-2 text-success"></i>
                            <div className="card-body">
                                <h4 className="card-title text-success">মানসম্মত শিক্ষা</h4>
                                <p className="card-text text-muted">আমরা আমাদের প্রিয় শিক্ষার্থীদের জন্য মানসম্মত শিক্ষা নিশ্চিত করি।</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="card p-4 bg-success">
                            <i className="fas fa-chalkboard-teacher fs-1 ms-3 mb-3 mt-2 text-light"></i>
                            <div className="card-body">
                                <h4 className="card-title text-light">বিশেষজ্ঞ প্রশিক্ষক</h4>
                                <p className="card-text text-white-50">আপনার সন্তানের সর্বোত্তম শিক্ষা প্রদানের জন্য আমাদের অভিজ্ঞ শিক্ষক রয়েছে।</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="card p-4 bg-light border-0">
                            <i className="fas fa-heartbeat fs-1 ms-3 mb-3 mt-2 text-success"></i>
                            <div className="card-body">
                                <h4 className="card-title text-success">বিশেষ যত্ন</h4>
                                <p className="card-text text-muted">আমরা দুর্বল শিক্ষার্থীদের জন্য অতিরিক্ত ক্লাস প্রদান করি যাতে তারা পরীক্ষায় আরও ভাল ফলাফল করতে পারে।</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Offerbanner;