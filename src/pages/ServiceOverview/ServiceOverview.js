import React from 'react'
import './Services.css'
import { Link } from 'react-router-dom'
import Pagination from '../../Components/Pagination/Pagination';
import CallToActionSection from '../AboutSection/CallToActionSection/CallToActionSection';
import Dynamic from '../../Components/DynamicBanner/Dynamic';

const services = [
    {
        id: 1,
        title: 'Licensing Compliance',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        imageUrl: '/assets/property/featured-grid3.jpg',
    },
    {
        id: 1,
        title: 'Transaction Advisory Solution',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        imageUrl: '/assets/property/featured-grid2.jpg',
    },
    {
        id: 1,
        title: 'Facility Management',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        imageUrl: '/assets/property/featured-grid3.jpg',
    },
    {
        id: 1,
        title: 'Parking Facility Management',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        imageUrl: '/assets/property/featured-grid2.jpg',
    },
    {
        id: 1,
        title: 'Ambience Management',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        imageUrl: '/assets/property/featured-grid3.jpg',
    },
    {
        id: 1,
        title: 'Business Support Solutions ',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        imageUrl: '/assets/property/featured-grid2.jpg',
    },


];
const ServiceOverview = () => {
    return (
        <>
            <Dynamic
                backgroundImage="/assets/building-view-from-field%201.jpg"
                heading="Our Services"
                subheading="Learn more about our company and values."
            />
            <section className="articles pt-5 mb-30">
                {services.map(service => (
                    <article key={service.id}
                        data-aos="fade-up"
                        data-aos-duration={1200}
                        data-aos-delay={100}
                        style={{ marginBottom: '54px' }}>
                        <div className="article-wrapper">
                            <figure>
                                <img src={service.imageUrl} alt={service.title} />
                            </figure>
                            <div className="article-body">
                                <h2>{service.title}</h2>
                                <p>{service.description}</p>
                                <Link to={`/SingleServiceView/${service.id}`} className="read-more">
                                    Read More
                                    <span className="sr-only"> about {service.title}</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </article>
                ))}
            </section>
            <Pagination />
            <section style={{ backgroundColor: "rgba(227, 227, 227, 1)" }} className='mb-30'>
                <CallToActionSection />
            </section>


        </>


    )
}

export default ServiceOverview