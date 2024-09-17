import React from 'react'
import DynamicBanner from '../../Components/DynamicBanner/Dynamic'
import { ReactComponent as CircleIcons } from "../../icons/circle.svg"
const amenitiesData = [
    {
        amount: "HOSPITALS",
        description: "Owned from Properties transactions",
        iconClass: "bi bi-house" // Example icon
    },
    {
        amount: "RESIDENTAL BUILDINGS/ SOCITIES",
        description: "Properties for Buy & sell Successfully",
        iconClass: "bi bi-shop" // Example icon
    },
    {
        amount: "COLLEGE/UNIVERSITY CAMPUSES",

        description: "Daily completed transactions",
        iconClass: "bi bi-calendar-check" // Example icon
    },
    {
        amount: "MALLS & CORPORATE TOWER",
        description: "Regular Clients",
        iconClass: "bi bi-person-check" // Example icon
    }
]
const AdvisoryManagement = () => {
    return (
        <>
            <DynamicBanner
                backgroundImage="/assets/building-view-from-field%201.jpg"
                heading="Advisory Management"
                subheading="Learn more about our company and values." />

            <section className="about__section about__page--section section--padding">
                <div className="container">
                    <div className="row pt-4"   data-aos="fade-up"
                                data-aos-duration={1200}
                                data-aos-delay={100}>
                        <div className="col-md-6">
                            <h2 className='pt-5'>Introduction</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s,<br />
                                when an unknown printer took a galley of
                                type and scrambled it to make a type specimen book. It has survived
                                not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s
                                with the release of Letraset sheets containing Lorem Ipsum passag
                                and more recently.
                                <br />
                                when an unknown printer took a galley of
                                type and scrambled it to make a type specimen book. It has survived
                                not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s
                                with the release of Letraset sheets containing Lorem Ipsum passag
                                and more recently.

                            </p>
                        </div>
                        <div className="col-md-6">
                            <div className='position-relative overflow-hidden p-5 pe-0 approachimage'>
                                <img
                                    style={{ position: "relative", zIndex: "2", borderRadius: "12px" }}
                                    src="assets/office-buildings (1) 1.jpg" />

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about__section about__page--section section--padding">
                <div className="container">
                    <div className="row pt-4" data-aos="fade-up"
                        data-aos-duration={1200}
                        data-aos-delay={100}>
                        <div className="col-md-6">
                            <div className='position-relative overflow-hidden p-5 pe-0 approachimage'>
                                <img
                                    style={{ position: "relative", zIndex: "2", borderRadius: "12px" }}
                                    src="assets/managers-analyzing-sales-results 1.jpg" />

                            </div>
                        </div>
                        <div className="col-md-6 pt-5">
                            <h2>Understanding Advisory Management</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, <br />
                                when an unknown printer took a galley of
                                type and scrambled it to make a type specimen book. It has survived
                                not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s
                                with the release of Letraset sheets containing Lorem Ipsum passag
                                and more recently.

                            </p>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, <br />
                                when an unknown printer took a galley of
                                type and scrambled it to make a type specimen book. It has survived
                                not only five centuries .
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="about__section about__page--section section--padding">
                <div className="container">
                    <div className="row pt-4" data-aos="fade-up"
                        data-aos-duration={1200}
                        data-aos-delay={100}>
                        <div className='col-md-6'>
                            <div
                                className="about__thumbnail position-relative"

                            >
                                <div className="about__thumbnail--list one position-relative">
                                    <img src="/assets/https___freepicdownloader 3.jpg" alt="about-thumb"
                                        className='about-thumb' />

                                </div>
                                <div className="about__thumbnail--list two">
                                    <img src="/assets/delimitation-land-with-clear-sky 1.png" alt="about-thumb" style={{ borderRadius: "3px" }} />

                                </div>
                            </div>

                        </div>
                        <div className="col-md-6" style={{ marginTop: "34px", marginLeft: "-96px" }}>
                            <h2>Why Choose Us</h2>

                            <p class="living__details--content__list pt-2">
                                <CircleIcons />
                                Our Priority lies in customer experience and customer expectation.
                            </p>

                            <p class="living__details--content__list  pt-2">
                                <CircleIcons />
                                Diverse portfolio of services that provides complete turnkey solution
                                to the clients.
                            </p>
                            <p class="living__details--content__list  pt-2">
                                <CircleIcons />
                                Best international practices which helps in reducing operating costs
                                while improving services.
                            </p>

                            <p class="living__details--content__list  pt-2">
                                <CircleIcons />
                                High satisfaction and renewal rate with our clients.
                            </p>
                            <p class="living__details--content__list  pt-2">
                                <CircleIcons />
                                Our Priority lies in customer experience and customer expectation.
                            </p>
                            <p class="living__details--content__list  pt-2">
                                <CircleIcons />
                                Our clients bank on us for our ethics, expertise and excellence to increase
                                the long-term value of their properties.
                            </p>

                        </div>

                    </div>
                </div>
            </section>
            <section style={{ backgroundColor: "rgba(251, 244, 244, 1)", marginTop: "75px" }} className='pt-4'>
                <div className='container'>
                    <div className='row p-4'>
                        <div className='col-md-6'>
                            <h2>Properties We deals in</h2>
                            <div className='row pt-2'>
                                {amenitiesData.map((item, index) => (
                                    <div key={index} className='col-md-6'>
                                        <div className="amenities__icone text-center">
                                            <span>
                                                <i className={item.iconClass}></i>
                                            </span>
                                        </div>
                                        <h3 className='text-dark text-center mb-2'>{item.amount}</h3>
                                        {/* <p className='text-dark text-center'>{item.description}</p> */}
                                    </div>
                                ))}
                            </div>

                        </div>
                        <div className='col-md-6' >
                            <img
                                style={{ borderRadius: '8px' }}
                                src="assets/property/featured-grid1.jpg" />
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default AdvisoryManagement