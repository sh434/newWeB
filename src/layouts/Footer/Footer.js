import React from 'react';
import { Link } from 'react-router-dom';
import FooterCopyright from '../FooterCopyright/FooterCopyright';
import './Footer.css';

function Footer() {
    return (
        <>
            <footer className="ltn__footer-area">
                <div className="footer-top-area section-bg-2 plr--5">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                                <div className="footer-widget footer-about-widget">
                                    <div className="footer-logo">
                                        <div className="site-logo">
                                            <img src="./../assets/wpm-1 1.jpg" alt="Logo" style={{ borderRadius: "7px" }} />
                                        </div>
                                    </div>
                                    <p className='text-white'>
                                        Lorem Ipsum is simply dummy text of the and typesetting industry.
                                        Lorem Ipsum is dummy text of the printing.
                                    </p>
                                    <form className="form-subscribe" action="#">
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control input-lg"
                                                placeholder="Your eamil address"
                                                style={{ fontSize: "16px" }}
                                            />
                                            <span className="input-group-btn">
                                                <button className="btn btn-success btn-lg" type="submit">
                                                    Sends
                                                </button>
                                            </span>
                                        </div>
                                    </form>

                                </div>
                            </div>
                            <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                                <div className="footer-widget footer-menu-widget clearfix">
                                    <h4 className="footer-title">Company</h4>
                                    <div className="footer-menu">
                                        <ul>
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="/about-us">About</Link></li>
                                            <li><Link to="/blog">Blog</Link></li>
                                            <li><Link to="/property-card">All Products</Link></li>
                                            <li><Link to="/contact-us">Contact us</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                                <div className="footer-widget footer-menu-widget clearfix">
                                    <h4 className="footer-title">Services</h4>
                                    <div className="footer-menu">
                                        <ul>
                                            <li><Link to="/order-tracking">Terms & Conditions</Link></li>
                                            <li><Link to="/wishlist">Testimonials</Link></li>
                                            <li><Link to="/login">Safety Guide</Link></li>
                                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                                <div className="footer-widget footer-menu-widget clearfix">
                                    <h4 className="footer-title">Featured Properties</h4>
                                    <div className="footer-menu">
                                        <ul>
                                            <li><Link to="/sell">Sell</Link></li>
                                            <li><Link to="/buy">Buy</Link></li>
                                            <li><Link to="/rent">Rent</Link></li>
                                            <li><Link to="/lease">Lease</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 col-sm-12 col-12">
                                <div className="footer-widget footer-newsletter-widget">
                                    <h4 className="footer-title">Contact Us</h4>

                                    <div className="footer-address">
                                        <ul>
                                            <li>
                                                <div className="footer-address-icon">
                                                    <i className="bi bi-geo-alt" style={{ fontSize: '14px' }} />
                                                </div>
                                                <div className="footer-address-info">
                                                    <p className='text-white'>
                                                        C-70A, 7th Floor, Supermart-1</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="footer-address-icon">
                                                    <i className="bi bi-telephone" style={{ fontSize: '14px' }} />
                                                </div>
                                                <div className="footer-address-info">
                                                    <p className='text-white'>
                                                        <a href="tel:+0123-456789">
                                                            9311254752</a>
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="footer-address-icon">
                                                    <i className="bi bi-envelope" style={{ fontSize: '14px' }} />
                                                </div>
                                                <div className="footer-address-info">
                                                    <p className='text-white'>
                                                        <a href="mailto:example@example.com">
                                                            info@wpmindia.com
                                                        </a>
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="ltn__social-media mt-20">
                                        <ul>
                                            <li>
                                                <a href="#" title="Facebook">
                                                    <i className="bi bi-facebook" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" title="Twitter">
                                                    <i className="bi bi-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" title="Linkedin">
                                                    <i className="bi bi-linkedin" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" title="Youtube">
                                                    <i className="bi bi-youtube" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FooterCopyright />
                </div>
            </footer>
        </>
    );
}

export default Footer;
