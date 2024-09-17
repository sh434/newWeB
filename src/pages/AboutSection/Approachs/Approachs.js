import React, { useEffect } from 'react'
import { ReactComponent as VideoIcon } from "../../../icons/video.svg"
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';
import './Approachs.css'

const amenitiesData = [
    {
        amount: "$170+",
        description: "Owned from Properties transactions",
        iconClass: "bi bi-house" // Example icon
    },
    {
        amount: "20k+",
        description: "Properties for Buy & sell Successfully",
        iconClass: "bi bi-shop" // Example icon
    },
    {
        amount: "400",
        description: "Daily completed transactions",
        iconClass: "bi bi-calendar-check" // Example icon
    },
    {
        amount: "$200+",
        description: "Regular Clients",
        iconClass: "bi bi-person-check" // Example icon
    }
]

const Approachs = () => {
    useEffect(() => {
        const lightbox = GLightbox({
            selector: '.glightbox'
        });
    }, []);



    return (
        <>
            <section>
                <div className="container">
                    <div className='row' style={{ marginBottom: "20px" }}>
                        <div className='col-md-6'>
                            <div
                                data-aos="fade-up"
                                data-aos-duration={1200}
                                data-aos-delay={150}
                            >
                                <h2 className="section__heading--title">
                                    Approach
                                </h2>
                                <p className="section__heading--desc">
                                    We believe in simplicity and thus address the complex challenges
                                    of propeties operations through simplistic.

                                </p>
                                <p className="section__heading--desc"> Our aim is to relieve developers and investors from all the operational
                                    hurdles. We are not just a bunch of consultants, we are advisors to
                                    developers and investor. We create ensures its success along with
                                    profitability’s and better return on investment rather really outstanding
                                    investment. We are new but a group of enthusiastic people from
                                    whom ethics and integrity in service delivery are a top priority.
                                    Our aim is to relieve developers and investors from all the operational
                                    hurdles.</p>
                                <p className="section__heading--desc">We are not just a bunch of consultants, we are advisors to
                                    developers and investor. We create ensures its success along with
                                    profitability’s and better return on investment rather really outstanding
                                    investment. We are new but a group of enthusiastic people from
                                    whom ethics and integrity in service delivery are a top priority.</p>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div
                                className="about__thumbnail position-relative"
                                data-aos="fade-up"
                                data-aos-duration={1200}
                                data-aos-delay={100}
                            >
                                <div className="about__thumbnail--list one position-relative">
                                    <img src="/assets/day-view-royal-palace 1.png" alt="about-thumb" className='aboutOne' />

                                </div>
                                <div className="about__thumbnail--list two">
                                    <img src="/assets/analog-landscape-city-with-buildings 1.jpg" alt="about-thumb" className='aboutTwo' />
                                    <div className="bideo__play" style={{ marginLeft: "249px" }}>
                                        <a
                                            className="bideo__play--icon glightbox"
                                            href="https://vimeo.com/115041822"
                                            data-gallery="video"
                                        >
                                            <VideoIcon />
                                            <span className="visually-hidden">Video Play</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section style={{ backgroundColor: "rgba(251, 244, 244, 1)", marginTop: "38px" }} >
                <div className='container'>
                    <div className='row ' style={{ marginTop: "20px" }}>
                        <div className='col-md-4'>
                            <img src="/assets/_https___freepicdownloader-removebg-preview_1-removebg-preview.png" />

                        </div>
                        <div className='col-md-8'>
                            <h2 className="section__heading--title">
                                The Journey So For
                            </h2>
                            <p>At WPM we've come a long way towards creating "one platform"
                                for all your real estate needs. With LiveEasy, we're taking another
                                giant leap in that direction.</p>

                            <div className='row pt-2'>
                                {amenitiesData.map((item, index) => (
                                    <div key={index} className='col-md-3'>
                                        <div className="amenities__icone text-center">
                                            <span>
                                                <i className={item.iconClass}></i>
                                            </span>
                                        </div>
                                        <h2 className='text-dark text-center'>{item.amount}</h2>
                                        <p className='text-dark text-center'>{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            </section>




        </>


    )
}

export default Approachs
