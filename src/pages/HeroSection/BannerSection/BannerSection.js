import React from 'react'
import './Banner.css'
import "../Service/Service.css"

const amenitiesData = [
  {
    text: "19+ Years of Experience",
    iconClass: "bi bi-award", 
  },
  {
    text: "10+ Cities",
    iconClass: "bi bi-geo-alt",
  },
  {
    text: "200+ Projects",
    iconClass: "bi bi-building", 
  },
  {
    text: "5000+ Clients",
    iconClass: "bi bi-people", 
  },
  {
    text: "100+ Awards",
    iconClass: "bi bi-trophy", 
  },
  {
    text: "24/7 Support",
    iconClass: "bi bi-headset", 
  }
];
const BannerSection = () => {
  return (
    <div className="hero__section hero__section--bg">
      <div className="container-fluid">
        <div className="hero__section--inner">
          <div className="hero__section--wrapper">
            <div className="hero__content text-center">
              <h1
                className="hero__content--title h1"
                data-aos="fade-up"
                data-aos-duration={1200}
                data-aos-delay={100}
              >
                Ability to Manage  <span className="color-hover">  Investments
                  From Inception</span> to Maturity
              </h1>
              <p
                className="hero__content--desc"
                data-aos="fade-up"
                data-aos-duration={1200}
                data-aos-delay={50}
              >
                Our presence currently is in 10 cities , have experience from over 20+ cities in last 15 years ,
                WPM takes pride in being involved in over 35 millions Sqft space, managing 1400+ retailers
                and worked with 90+ developer and investor clients
              </p>

            </div>
          </div>
          <div className='container'>
            <div className='row d-flex justify-content-center'>
              {amenitiesData.map((amenity, index) => (
                <div key={index} className='col-md-2'
                data-aos="fade-up"
                data-aos-duration={1200}
                data-aos-delay={100}>
                  <div className="amenities__icone text-center">
                    <span>
                      <i className={amenity.iconClass}></i> {/* Icon using Bootstrap Icons */}
                    </span>
                    <p className='text-white text-center'>{amenity.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default BannerSection