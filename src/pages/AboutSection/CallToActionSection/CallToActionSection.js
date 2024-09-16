import React from 'react'
import './CallToActionSection.css'
import { Link } from 'react-router-dom'

const CallToActionSection = () => {
    return (
        <div>
            <section
                className="call__action--section section--padding"
                data-aos="fade-up"
                data-aos-duration={1200}
                data-aos-delay={100}
                style={{ marginBottom: '54px' }}
            >
                <div className="container">
                    <div className="call__action--container mt-5">
                        <div className="call__action--inner ">
                            <div className='row '>
                                <div className='col-md-8'>
                                    <h2 className="call__action--title">WE CAN HELP BUILD YOUR PROJECT!</h2>
                                    <p className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever</p>
                                </div>
                                <div className='col-md-4 d-flex justify-content-end'>
                                    <div className="call__action--right d-flex align-items-center">
                                        <Link className="call__action--btn solid__btn" to="#">
                                            Click Here
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CallToActionSection