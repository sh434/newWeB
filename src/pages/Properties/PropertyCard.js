import React from 'react'
import './propert.css'
import Dynamic from '../../Components/DynamicBanner/Dynamic'
import { ReactComponent as BedIcon } from '../../icons/camera.svg';
import { ReactComponent as BathormIcon } from '../../icons/Bathorm.svg';
import Form from '../../Components/Form/Form';
const properties = [
    {
        id: 1,
        title: 'Luxury Apartment',
        price: '₹ 3-7 Lac',
        location: '1234 Mumbai Rd, Mumbai, India',
        image: 'assets/property/properties1.png',
        badge1: 'Featured',
        badge2: 'For sale',
        bedrooms: 3,
        bathrooms: 2,
    },
    {
        id: 2,
        title: 'Cozy Studio',
        price: '₹ 1-2 Lac',
        location: '5678 Bangalore St, Bangalore, India',
        image: 'assets/property/properties1.png',
        badge1: 'New',
        badge2: 'For rent',
        bedrooms: 1,
        bathrooms: 1,
    },
    {
        id: 3,
        title: 'Modern Flat',
        price: '₹ 5-8 Lac',
        location: '9101 Delhi Ave, Delhi, India',
        image: 'assets/property/properties1.png',
        badge1: 'Hot',
        badge2: 'For sale',
        bedrooms: 2,
        bathrooms: 2,
    },
    {
        id: 4,
        title: 'Spacious Villa',
        price: '₹ 8-12 Lac',
        location: '1213 Chennai Ln, Chennai, India',
        image: 'assets/property/properties1.png',
        badge1: 'Exclusive',
        badge2: 'For sale',
        bedrooms: 4,
        bathrooms: 3,
    },
    {
        id: 5,
        title: 'Elegant Duplex',
        price: '₹ 4-6 Lac',
        location: '1415 Hyderabad Blvd, Hyderabad, India',
        image: 'assets/property/properties1.png',
        badge1: 'Premium',
        badge2: 'For rent',
        bedrooms: 3,
        bathrooms: 2,
    },
    // Add more properties as needed
];
const PropertyCard = () => {
    return (
        <>
            <Dynamic
                backgroundImage="/assets/About.jpg"
                heading="All Property List"
                subheading="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
            <section
                className="featured__section section--padding"
                data-aos="fade-up"
                data-aos-duration={1200}
                data-aos-delay={100}
            >
                <div className="container-fluid">
                    <div className="section__heading">
                        <h2 className="section__heading--title text-center">New Property Acquisitions</h2>
                    </div>
                    <div className='row mt-3'>
                        {properties.map((property) => (
                            <div className='col-md-3 mb-30' key={property.id}>
                                <article className="featured__card">
                                    <div className="featured__thumbnail position-relative">
                                        <div className="media">
                                            <a className="featured__thumbnail--link" href="listing-details.html">
                                                <img className="featured__thumbnail--img" src={property.image} alt="featured-img" />
                                            </a>
                                        </div>
                                        {/* <div className="featured__badge">
                                            <span className="badge__field">{property.badge1}</span>
                                            <span className="badge__field style2">{property.badge2}</span>
                                        </div> */}
                                        <ul className="featured__action">
                                            <li className="featured__action--items">
                                                <a className="featured__action--btn glightbox" data-gallery="properties-view" href={property.image}>
                                                    <i className="bi bi-camera " style={{ fontSize: "22px" }}></i>
                                                </a>
                                            </li>
                                            <li className="featured__action--items">
                                                <a className="featured__action--btn" href="javascript:void(0)">
                                                    <i className="bi bi-heart" style={{ fontSize: "22px" }}></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="featured__content">
                                        <div className="featured__content--top d-flex align-items-center justify-content-between">
                                            <h3 className="featured__card--title">
                                                <a href="listing-details.html">{property.title}</a>
                                            </h3>
                                            <span className="featured__card--price">{property.price}</span>
                                        </div>
                                        <p className="featured__content--desc">
                                            <i className="bi bi-geo-alt-fill" style={{ fontSize: "14px" }}></i>
                                            {property.location}
                                        </p>
                                        <ul className="featured__info d-flex">
                                            <li className="featured__info--items">
                                                <span className="featured__info--icon">
                                                    {property.bedrooms}
                                                    <BedIcon />
                                                </span>
                                                <span className="featured__info--text">Bedrooms</span>
                                            </li>
                                            <li className="featured__info--items">
                                                <span className="featured__info--icon">
                                                    {property.bathrooms}
                                                    <BathormIcon />
                                                </span>
                                                <span className="featured__info--text">Bathrooms</span>
                                            </li>
                                            <li className="featured__info--items">
                                                <button>View More</button>
                                            </li>
                                        </ul>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}

export default PropertyCard