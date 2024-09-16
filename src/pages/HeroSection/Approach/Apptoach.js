import React from 'react'
import './Apptoach.css'
import TestimonialSlider from './Tesmonials'
import "../../ContactSection/ContactUs.css"

const Apptoach = () => {
    return (
        <>
        <section className="about__section about__page--section section--padding">
            <div className="container">
                <div className="row pt-4">
                    <div className="col-md-6 pt-5">
                        <h2>Approach</h2>
                        <p>
                            We believe in simplicity and thus address the complex challenges
                            of propeties operations through simplistic.
                            <br />
                            Our aim is to relieve developers and investors from all the operational
                            hurdles. We are not just a bunch of consultants, we are advisors to
                            developers and investor. We create ensures its success along with
                            profitability’s and better return on investment rather really outstanding
                            investment. We are new but a group of enthusiastic people from
                            whom ethics and integrity in service delivery are a top priority.
                            <br />    Our aim is to relieve developers and investors from all the operational
                            hurdles. We are not just a bunch of consultants, we are advisors to
                            developers and investor. We create ensures its success along with
                            profitability’s and better return on investment rather really outstanding
                            investment. We are new but a group of enthusiastic people from
                            whom ethics and integrity in service delivery are a top priority.
                        </p>
                        <button className="contact__form--btn solid__btn">
                            Know More
                        </button>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <img
                                className='aprroaches'
                                src="assets/download 1.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <TestimonialSlider/> */}
        
        </>
    )
}

export default Apptoach