import React from 'react'
import './AboutView.css'
import DynamicBanner from '../../Components/DynamicBanner/Dynamic'
import Approachs from './Approachs/Approachs'
import CallToActionSection from './CallToActionSection/CallToActionSection'
import "../HeroSection/Service/Service.css"
import "../ContactSection/ContactUs.css"

const AboutView = () => {
    return (
        <>
            <DynamicBanner
                backgroundImage="/assets/About.jpg"
                heading="About Us"
                subheading="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
            <Approachs />
            <CallToActionSection />


        </>


    )
}

export default AboutView