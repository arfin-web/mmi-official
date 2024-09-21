import React from 'react';

const Address = () => {
    return (
        <>
            <div className='container my-5'>
                <div className="card bg-light border-0 shadow-lg">
                    <div className="row g-0">
                        <div className="col-md-8">
                            <div className="card-body">
                                <div className="card border-0">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item border-0">
                                            <p className='fs-4 text-dark'><i className="fas fa-map-marker-alt text-success fs-3"></i> Road No - 1, House No - 13, Block - A, Dhaka Uddan, Mohammadpur, 1207
                                            </p>
                                        </li>
                                        <li className="list-group-item border-0">
                                            <p className='fs-4'><i className="fas fa-phone-alt text-success fs-3"></i> +8801816111162</p>
                                        </li>
                                        <li className="list-group-item border-0">
                                            <p className='fs-4'><i className="fas fa-envelope text-success fs-3"></i> mmiofficial15@gmail.com</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14606.07014452545!2d90.34947028543151!3d23.76457825856719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s%20Road%20No%20-%201%2C%20House%20No%20-%2013%2C%20Block%20-%20A%2C%20Dhaka%20Uddan%2C%20Mohammadpur%2C%201207!5e0!3m2!1sen!2sbd!4v1699429788306!5m2!1sen!2sbd"
                                width="350"
                                height="280"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Address;