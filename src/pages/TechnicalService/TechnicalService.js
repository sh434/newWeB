import React from 'react'
import Dynamic from '../../Components/DynamicBanner/Dynamic'
import './TechnicalService.css'

const TechnicalService = () => {
    return (

        <>
            <Dynamic
                backgroundImage="/assets/building-view-from-field%201.jpg"
                heading="Technical Services"
                subheading="Learn more about our company and values." />

            <div className="ltn__about-us-area">
                <div className="container">
                    <div className="row pt-5 pb-5" >
                        <div className="col-lg-5 d-flex justify-content-center">
                            <div className="about-us-img-wrap ltn__img-shape-left  about-img-left ">
                                <img src="assets/analog-landscape-city-with-buildings 1.jpg" alt="Image" />
                            </div>
                        </div>
                        <div className="col-lg-6 pt-4">
                            <div className="about-us-info-wrap">
                                <div className="section-title-area ltn__section-title-2--- mb-20">

                                    <h2 className="section-title">
                                        Technical Services
                                    </h2>
                                    <p>
                                        Take your business beyond its existing limits.
                                        Implement tools, processes, and strategies that
                                        improve the value and performance of your real
                                        estate.
                                        Take your business beyond its existing limits.
                                        Implement tools, processes, and strategies that
                                        improve the value and performance of your real
                                        estate.
                                        Take your business beyond its existing limits.
                                        Implement tools, processes, and strategies that
                                        improve the value and performance of your real
                                        estate.
                                        Take your business beyond its existing limits.
                                        Implement tools, processes, and strategies that
                                        improve the value and performance of your real
                                        estate.

                                    </p>
                                    <p>
                                        Take your business beyond its existing limits.
                                        Implement tools, processes, and strategies that
                                        improve the value and performance of your real
                                        estate.
                                        Take your business beyond its existing limits.
                                        Implement tools, processes, and strategies that
                                        improve the value and performance of your real
                                        estate.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="section-title text-center">Our Core Services</h2>

                    </div>
                </div>
                <div className="row  justify-content-center">
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                            <div className="ltn__feature-icon">
                                <span>
                                    <i className="flaticon-house" />
                                </span>
                                {/* <img src="img/icons/icon-img/21.png" alt="#"> */}
                            </div>
                            <div className="ltn__feature-info">
                                <h3>
                                    <a href="service-details.html">Property Management</a>
                                </h3>
                                <p>
                                    over 1 million+ homes for sale available on the website, we can
                                    match you with a house you will want to call home.
                                </p>
                                {/* <a class="ltn__service-btn" href="service-details.html">Find A Home <i class="flaticon-right-arrow"></i></a> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default TechnicalService