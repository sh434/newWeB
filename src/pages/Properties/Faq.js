import React from 'react'
import './propert.css'

const Faq = () => {
    return (
        <section className="working-process my-5">
            <div className="container">
                <div className="row">
                    <div className="row d-flex flex-nowrap flex-row">
                        <div className="heading d-flex align-items-center">
                            <h2>Our Working Process </h2>
                            <p className="ps-4">
                                Step-by-Step Guide to Achieving Your Business Goals
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="accordion mt-5" id="accordionExample">
                        <div className="accordion-item mb-4">
                            <h2 className="accordion-header" id="headingOne">
                                <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >
                                    <span className="accordian-numbers">01</span> Consultation
                                </button>
                            </h2>
                            <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    During the initial consultation, we will discuss your business
                                    goals and objectives, target audience, and current marketing
                                    efforts. This will allow us to understand your needs and tailor
                                    our services to best fit your requirements.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-4">
                            <h2 className="accordion-header" id="headingTwo">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                >
                                    <span className="accordian-numbers">02</span> Research and
                                    Strategy Development
                                </button>
                            </h2>
                            <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    During the initial consultation, we will discuss your business
                                    goals and objectives, target audience, and current marketing
                                    efforts. This will allow us to understand your needs and tailor
                                    our services to best fit your requirements.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-4">
                            <h2 className="accordion-header" id="headingThree">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    <span className="accordian-numbers">03</span> Implementation
                                </button>
                            </h2>
                            <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    During the initial consultation, we will discuss your business
                                    goals and objectives, target audience, and current marketing
                                    efforts. This will allow us to understand your needs and tailor
                                    our services to best fit your requirements.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-4">
                            <h2 className="accordion-header" id="headingFour">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour"
                                    aria-expanded="false"
                                    aria-controls="collapseFour"
                                >
                                    <span className="accordian-numbers">04</span> Monitoring and
                                    Optimization
                                </button>
                            </h2>
                            <div
                                id="collapseFour"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingFour"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    During the initial consultation, we will discuss your business
                                    goals and objectives, target audience, and current marketing
                                    efforts. This will allow us to understand your needs and tailor
                                    our services to best fit your requirements.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-4">
                            <h2 className="accordion-header" id="headingFive">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFive"
                                    aria-expanded="false"
                                    aria-controls="collapseFive"
                                >
                                    <span className="accordian-numbers">05</span> Reporting and
                                    Communication
                                </button>
                            </h2>
                            <div
                                id="collapseFive"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingFive"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    During the initial consultation, we will discuss your business
                                    goals and objectives, target audience, and current marketing
                                    efforts. This will allow us to understand your needs and tailor
                                    our services to best fit your requirements.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-4">
                            <h2 className="accordion-header" id="headingSix">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseSix"
                                    aria-expanded="false"
                                    aria-controls="collapseSix"
                                >
                                    <span className="accordian-numbers">06</span> Continual
                                    Improvement
                                </button>
                            </h2>
                            <div
                                id="collapseSix"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingSix"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    During the initial consultation, we will discuss your business
                                    goals and objectives, target audience, and current marketing
                                    efforts. This will allow us to understand your needs and tailor
                                    our services to best fit your requirements.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Faq