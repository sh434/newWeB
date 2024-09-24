import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperSettings } from '../../utils/swiperConfig/SwiperSettings';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { Navigation } from 'swiper';

const HeroSlider = () => {
    return (
        <section className="listing__hero--section">
            <div className="listing__hero--section__inner position-relative">
                <div className="listing__hero--slider">
                    <div className="swiper hero__swiper--column1">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className=" listing__hero--slider__items position-relative">
                                    <img
                                        className="listing__hero--slider__media"
                                        src="/assets/hero/listing-details-hero.png"
                                        alt="img"
                                    />
                                    <div className="listing__hero--slider__container">
                                        <div className="container">
                                            {/* Hero Content */}
                                            <div className="listing__hero--slider__content">
                                                <div className="listing__hero--slider__content--top d-flex align-items-center justify-content-between">
                                                    <h3 className="listing__hero--slider__title">
                                                        Luxury Family Home
                                                    </h3>
                                                    <span className="listing__hero--slider__price">
                                                        $13000
                                                    </span>
                                                </div>
                                                <p className="listing__hero--slider__text">
                                                    <svg
                                                        width={11}
                                                        height={17}
                                                        viewBox="0 0 11 17"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M5.48287 0C2.45013 0 0 2.4501 0 5.48288C0 5.85982 0.0343013 6.21958 0.102785 6.57945C0.514031 9.69783 4.42055 11.9767 5.51712 16.4144C6.5966 12.0452 11 8.824 11 5.48288H10.9657C10.9657 2.45013 8.51548 0 5.48282 0H5.48287ZM5.48287 2.17592C7.21338 2.17592 8.61839 3.58097 8.61839 5.31144C8.61839 7.04191 7.21335 8.44696 5.48287 8.44696C3.7524 8.44696 2.34736 7.04191 2.34736 5.31144C2.34736 3.58097 3.75228 2.17592 5.48287 2.17592Z"
                                                            fill="#FA4B4A"
                                                        />
                                                    </svg>
                                                    1421 San Pedro St, Los Angeles, CA
                                                </p>
                                            </div>
                                            {/* Hero Content .\ */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className=" listing__hero--slider__items position-relative">
                                    <img
                                        className="listing__hero--slider__media"
                                        src="/assets/img/hero/listing-details-hero.png"
                                        alt="img"
                                    />
                                    <div className="listing__hero--slider__container">
                                        <div className="container">
                                            {/* Hero Content */}
                                            <div className="listing__hero--slider__content">
                                                <div className="listing__hero--slider__content--top d-flex align-items-center justify-content-between">
                                                    <h3 className="listing__hero--slider__title">
                                                        Luxury Family Home
                                                    </h3>
                                                    <span className="listing__hero--slider__price">
                                                        $13000
                                                    </span>
                                                </div>
                                                <p className="listing__hero--slider__text">
                                                    <svg
                                                        width={11}
                                                        height={17}
                                                        viewBox="0 0 11 17"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M5.48287 0C2.45013 0 0 2.4501 0 5.48288C0 5.85982 0.0343013 6.21958 0.102785 6.57945C0.514031 9.69783 4.42055 11.9767 5.51712 16.4144C6.5966 12.0452 11 8.824 11 5.48288H10.9657C10.9657 2.45013 8.51548 0 5.48282 0H5.48287ZM5.48287 2.17592C7.21338 2.17592 8.61839 3.58097 8.61839 5.31144C8.61839 7.04191 7.21335 8.44696 5.48287 8.44696C3.7524 8.44696 2.34736 7.04191 2.34736 5.31144C2.34736 3.58097 3.75228 2.17592 5.48287 2.17592Z"
                                                            fill="#FA4B4A"
                                                        />
                                                    </svg>
                                                    1421 San Pedro St, Los Angeles, CA
                                                </p>
                                            </div>
                                            {/* Hero Content .\ */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className=" listing__hero--slider__items position-relative">
                                    <img
                                        className="listing__hero--slider__media"
                                        src="assets/img/hero/listing-details-hero.png"
                                        alt="img"
                                    />
                                    <div className="listing__hero--slider__container">
                                        <div className="container">
                                            {/* Hero Content */}
                                            <div className="listing__hero--slider__content">
                                                <div className="listing__hero--slider__content--top d-flex align-items-center justify-content-between">
                                                    <h3 className="listing__hero--slider__title">
                                                        Luxury Family Home
                                                    </h3>
                                                    <span className="listing__hero--slider__price">
                                                        $13000
                                                    </span>
                                                </div>
                                                <p className="listing__hero--slider__text">
                                                    <svg
                                                        width={11}
                                                        height={17}
                                                        viewBox="0 0 11 17"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M5.48287 0C2.45013 0 0 2.4501 0 5.48288C0 5.85982 0.0343013 6.21958 0.102785 6.57945C0.514031 9.69783 4.42055 11.9767 5.51712 16.4144C6.5966 12.0452 11 8.824 11 5.48288H10.9657C10.9657 2.45013 8.51548 0 5.48282 0H5.48287ZM5.48287 2.17592C7.21338 2.17592 8.61839 3.58097 8.61839 5.31144C8.61839 7.04191 7.21335 8.44696 5.48287 8.44696C3.7524 8.44696 2.34736 7.04191 2.34736 5.31144C2.34736 3.58097 3.75228 2.17592 5.48287 2.17592Z"
                                                            fill="#FA4B4A"
                                                        />
                                                    </svg>
                                                    1421 San Pedro St, Los Angeles, CA
                                                </p>
                                            </div>
                                            {/* Hero Content .\ */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className=" listing__hero--slider__items position-relative">
                                    <img
                                        className="listing__hero--slider__media"
                                        src="assets/img/hero/listing-details-hero.png"
                                        alt="img"
                                    />
                                    <div className="listing__hero--slider__container">
                                        <div className="container">
                                            {/* Hero Content */}
                                            <div className="listing__hero--slider__content">
                                                <div className="listing__hero--slider__content--top d-flex align-items-center justify-content-between">
                                                    <h3 className="listing__hero--slider__title">
                                                        Luxury Family Home
                                                    </h3>
                                                    <span className="listing__hero--slider__price">
                                                        $13000
                                                    </span>
                                                </div>
                                                <p className="listing__hero--slider__text">
                                                    <svg
                                                        width={11}
                                                        height={17}
                                                        viewBox="0 0 11 17"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M5.48287 0C2.45013 0 0 2.4501 0 5.48288C0 5.85982 0.0343013 6.21958 0.102785 6.57945C0.514031 9.69783 4.42055 11.9767 5.51712 16.4144C6.5966 12.0452 11 8.824 11 5.48288H10.9657C10.9657 2.45013 8.51548 0 5.48282 0H5.48287ZM5.48287 2.17592C7.21338 2.17592 8.61839 3.58097 8.61839 5.31144C8.61839 7.04191 7.21335 8.44696 5.48287 8.44696C3.7524 8.44696 2.34736 7.04191 2.34736 5.31144C2.34736 3.58097 3.75228 2.17592 5.48287 2.17592Z"
                                                            fill="#FA4B4A"
                                                        />
                                                    </svg>
                                                    1421 San Pedro St, Los Angeles, CA
                                                </p>
                                            </div>
                                            {/* Hero Content .\ */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero swiper */}
                <div className="listing__small--hero__slider">
                    <div className="swiper hero__swiper--column3">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                {/* Hero swiper items */}
                                <div className="listing__small--hero__slider--items">
                                    <img src="/assets/hero/slider-small1.png" alt="img" />
                                </div>
                                {/* Hero swiper items .\ */}
                            </div>
                            <div className="swiper-slide">
                                {/* Hero swiper items */}
                                <div className="listing__small--hero__slider--items">
                                    <img src="/assets/hero/slider-small2.png" alt="img" />
                                </div>
                                {/* Hero swiper items .\ */}
                            </div>
                            <div className="swiper-slide">
                                {/* Hero swiper items */}
                                <div className="listing__small--hero__slider--items">
                                    <img src="/assets/hero/slider-small3.png" alt="img" />
                                </div>
                                {/* Hero swiper items .\ */}
                            </div>
                            <div className="swiper-slide">
                                {/* Hero swiper items */}
                                <div className="listing__small--hero__slider--items">
                                    <img src="/assets/hero/slider-small1.png" alt="img" />
                                </div>
                                {/* Hero swiper items .\ */}
                            </div>
                            <div className="swiper-slide">
                                {/* Hero swiper items */}
                                <div className="listing__small--hero__slider--items">
                                    <img src="/assets/hero/slider-small2.png" alt="img" />
                                </div>
                                {/* Hero swiper items .\ */}
                            </div>
                        </div>
                    </div>

                </div>
                {/* Hero swiper .\ */}
            </div>
        </section>

    );
};

export default HeroSlider;
