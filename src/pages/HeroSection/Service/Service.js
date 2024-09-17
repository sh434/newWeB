import React from 'react';
import './Service.css';

const cardData = [
    { id: 1, title: 'Licensing Compliance', backgroundColor: '#f8d7da', iconClass: "bi bi-card-checklist" }, // Licensing
    { id: 2, title: 'Transaction Advisory Solutions', backgroundColor: '#d4edda', iconClass: 'bi bi-cash-coin' }, // Transaction/Finance
    { id: 3, title: 'Facility Management', backgroundColor: '#fff3cd', iconClass: 'bi bi-building' }, // Facilities/Buildings
    { id: 4, title: 'Parking Facility Management', backgroundColor: '#cce5ff', iconClass: 'bi bi-car-front' }, // Parking
    { id: 5, title: 'Asset Management', backgroundColor: '#f8d7da', iconClass: 'bi bi-graph-up' }, // Asset Management
    { id: 6, title: 'Ambience Management', backgroundColor: '#f8d7da', iconClass: "bi bi-cloud-sun" }, // Ambience/Environment
    { id: 7, title: 'Manpower Solutions', backgroundColor: '#d4edda', iconClass: 'bi bi-people-fill' }, // Workforce/People
    { id: 8, title: 'Business Support Solutions', backgroundColor: '#fff3cd', iconClass: 'bi bi-briefcase' }, // Business/Support
    { id: 9, title: 'Tenant Management Leasing', backgroundColor: '#cce5ff', iconClass: 'bi bi-building-check' }, // Tenant/Leasing
    { id: 10, title: 'Sale and Purchase', backgroundColor: '#f8d7da', iconClass: 'bi bi-cart-check' } // Sales/Purchase
];


const Service = () => {
    return (
        <div className="service-section pt-4">
            <div className="container">
                <div className="row"
                    data-aos="fade-up"
                    data-aos-duration={1200}
                    data-aos-delay={100}>
                    <div className="col-md-3" style={{ padding: '18px' }}>
                        <div className="card" style={{ width: '30rem', backgroundColor: 'black' }}>
                            <div className="card-body">
                                <h2 className="text-white text-center">Service Areas</h2>
                                <p className="text-white text-justify">
                                    Our aim is to relieve developers and
                                    investors from all the operational
                                    hurdles. We are not just a bunch
                                    of consultants, we are advisors to
                                    developers and investors. We ensure
                                    success along with
                                    profitability and better returns on
                                    investment rather than just outstanding
                                    investment.
                                </p>
                                <button className="solid__btn mb-30">
                                    Know More
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row d-flex justify-content-center">
                            {cardData.map((item, index) => (
                                <div
                                    key={index}
                                    className="custom-card col-md-2 col-lg-2 mt-4"
                                    style={{ backgroundColor: item.backgroundColor, marginLeft: "13px" }}
                                >
                                    <div className="card-content">
                                        <div className="kh text-center">
                                            <span>
                                                <i className={item.iconClass}></i>
                                            </span>
                                        </div>
                                        <h3 className="card-heading">{item.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Service;
