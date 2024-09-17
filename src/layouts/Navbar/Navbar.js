import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className=" bg-primary1 header-bar">
            <div className="container">
                <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
                    <div className="col-lg-12 d-block">
                        <div className="row d-flex p-2 fw-normal">
                            <div className="col-md pr-4 d-flex topper align-items-center">
                                <div className="icon-container mr-2 d-flex justify-content-center align-items-center">
                                    <i className="bi bi-telephone-fill" style={{fontSize:"20px",marginTop:'-9px'}}></i>
                                </div>
                                <span className="text">9311254752</span>
                            </div>
                            <div className="col-md pr-4 d-flex topper justify-content-center ">
                                <div className="icon-container mr-2 d-flex align-items-center">
                                    <i className="bi bi-envelope-fill" style={{fontSize:"20px",marginTop:'-18px'}}></i>
                                </div>
                                <span className="text">info@wpmindia.com</span>
                            </div>
                            <div className="col-md-5 pr-4 d-flex social-links justify-content-end mt-2 ">
                                <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-facebook mr-3" style={{fontSize:"20px"}}></i>
                                </Link>
                                <Link to="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-twitter mr-3" style={{fontSize:"20px"}}></i>
                                </Link>
                                <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-instagram" style={{fontSize:"20px"}}></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar