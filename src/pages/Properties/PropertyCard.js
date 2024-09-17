import React from 'react'
import './propert.css'
import Dynamic from '../../Components/DynamicBanner/Dynamic'

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
                    <div className="section__heading ">
                        <h2 className="section__heading--title text-center">New Property Acquisitions</h2>
                    </div>
                    <div className='row'>
                        <div className='col-md-3 mb-30'>
                            <article className="featured__card">
                                <div className="featured__thumbnail position-relative">
                                    <div className="media">
                                        <a
                                            className="featured__thumbnail--link"
                                            href="listing-details.html"
                                        >
                                            <img
                                                className="featured__thumbnail--img"
                                                src="assets/property/properties1.png"
                                                alt="featured-img"
                                            />
                                        </a>
                                    </div>
                                    <div className="featured__badge">
                                        <span className="badge__field">Featured</span>
                                        <span className="badge__field style2">For sale</span>
                                    </div>
                                    <ul className="featured__action">
                                        <li className="featured__action--items">
                                            <a
                                                className="featured__action--btn glightbox"
                                                data-gallery="properties-view"
                                                href="assets/property/properties1.png"
                                            >
                                                <svg
                                                    width={19}
                                                    height={17}
                                                    viewBox="0 0 19 17"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M6.86602 0.959347L6.59306 2.05356C6.5221 2.33542 6.26879 2.53289 5.97872 2.53289H3.40635C1.82698 2.53289 0.488211 3.69753 0.270403 5.26159C0.269837 5.26413 0.269837 5.26668 0.269131 5.26922C-0.0911809 8.0949 -0.0911807 10.9147 0.278036 13.7304C0.278601 13.7322 0.278601 13.7342 0.278601 13.7355C0.497137 15.2952 1.83069 16.456 3.40564 16.456C6.56124 16.4649 12.4368 16.4649 15.5941 16.4649C17.1741 16.4649 18.5122 15.301 18.7306 13.7362C18.7306 13.7337 18.7312 13.7311 18.7312 13.7286C19.0909 10.908 19.0915 8.08816 18.7217 5.26813C18.7217 5.26629 18.7217 5.26502 18.7211 5.26304C18.5039 3.70332 17.1696 2.54252 15.5953 2.54183C15.1419 2.53293 14.6789 2.53293 14.2889 2.53293C13.9983 2.53293 13.745 2.33532 13.674 2.0536L13.4011 0.959383C13.2599 0.395811 12.7533 0 12.1719 0H8.09506C7.51368 0 7.00707 0.395811 6.86583 0.959383L6.86602 0.959347ZM10.1337 4.43284C7.33786 4.43284 5.06757 6.70312 5.06757 9.49898C5.06757 12.2948 7.33786 14.5651 10.1337 14.5651C12.9296 14.5651 15.1999 12.2948 15.1999 9.49898C15.1999 6.70312 12.9296 4.43284 10.1337 4.43284ZM10.1337 5.69938C12.2304 5.69938 13.9333 7.40229 13.9333 9.49898C13.9333 11.5957 12.2304 13.2986 10.1337 13.2986C8.03702 13.2986 6.33411 11.5957 6.33411 9.49898C6.33411 7.40229 8.03702 5.69938 10.1337 5.69938ZM10.1337 10.7655C9.43459 10.7655 8.86718 10.1981 8.86718 9.49898C8.86718 9.14941 8.58348 8.86572 8.23391 8.86572C7.88434 8.86572 7.60064 9.14941 7.60064 9.49898C7.60064 10.8973 8.73542 12.0321 10.1337 12.0321C10.4833 12.0321 10.767 11.7484 10.767 11.3988C10.767 11.0492 10.4833 10.7655 10.1337 10.7655ZM3.80104 6.33264H4.4343C4.78387 6.33264 5.06757 6.04895 5.06757 5.69938C5.06757 5.3498 4.78387 5.06611 4.4343 5.06611H3.80104C3.45146 5.06611 3.16777 5.3498 3.16777 5.69938C3.16777 6.04895 3.45146 6.33264 3.80104 6.33264Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="featured__action--items">
                                            <a
                                                className="featured__action--btn"
                                                href="javascript:void(0)"
                                            >
                                                <svg
                                                    width={18}
                                                    height={19}
                                                    viewBox="0 0 18 19"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M0.771737 5.50033H15.4117L12.7082 8.20377C12.4171 8.4949 12.4171 8.97316 12.7082 9.2643C12.8539 9.40993 13.041 9.49305 13.2489 9.49305C13.4569 9.49305 13.644 9.40993 13.7895 9.2643L17.7822 5.27158C18.0734 4.98046 18.0734 4.50219 17.7822 4.21106L13.7691 0.218346C13.478 -0.072782 12.9997 -0.072782 12.7086 0.218346C12.4174 0.509474 12.4174 0.987738 12.7086 1.27887L15.412 3.98231H0.772071C0.3562 3.98231 0.0234375 4.31507 0.0234375 4.73094C0.0234375 5.14682 0.356197 5.50033 0.772071 5.50033H0.771737Z"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M17.2184 13.0067H2.57841L5.28185 10.3033C5.57298 10.0122 5.57298 9.5339 5.28185 9.24276C4.99072 8.95163 4.51246 8.95163 4.22132 9.24276L0.22861 13.2355C0.186979 13.2771 0.166235 13.3186 0.124604 13.3602C0.124604 13.381 0.103861 13.381 0.103861 13.4019C0.0831175 13.4226 0.0622289 13.4642 0.0622289 13.485C0.0622289 13.5057 0.041486 13.5266 0.041486 13.5473C0.041486 13.5681 0.0207429 13.589 0.0207429 13.6097C0.0207429 13.6514 0 13.7137 0 13.7554C0 13.797 -1.43871e-07 13.8594 0.0207429 13.901C0.0207429 13.9217 0.041486 13.9426 0.041486 13.9634C0.062229 14.005 0.0622289 14.0257 0.0622289 14.0465C0.0829719 14.0672 0.082972 14.1089 0.103861 14.1296C0.103861 14.1504 0.124604 14.1504 0.124604 14.1712C0.145347 14.2129 0.186979 14.2544 0.22861 14.296L4.22132 18.2887C4.36696 18.4343 4.55408 18.5175 4.76196 18.5175C4.96998 18.5175 5.15711 18.4343 5.30261 18.2887C5.59374 17.9976 5.59374 17.5193 5.30261 17.2282L2.59917 14.5247H17.2391C17.655 14.5247 17.9877 14.192 17.9877 13.7761C17.9671 13.3601 17.6344 13.0066 17.2185 13.0066L17.2184 13.0067Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="featured__action--items">
                                            <a
                                                className="featured__action--btn"
                                                href="javascript:void(0)"
                                            >
                                                <svg
                                                    width={18}
                                                    height={16}
                                                    viewBox="0 0 18 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M16.5266 1.49287C15.2525 0.378116 13.9217 -0.114882 12.5718 0.0224527C10.7916 0.206002 9.49922 1.43636 9.00034 1.99052C8.50153 1.43636 7.20917 0.206005 5.42893 0.0224527C4.07666 -0.11477 2.74825 0.378116 1.47408 1.49287C0.17279 2.63133 -0.27894 4.29861 0.166748 6.31453C1.03241 10.2279 5.1234 14.6311 8.92141 15.7371C8.97276 15.7521 9.02724 15.7521 9.07859 15.7371C12.8769 14.6311 16.9677 10.2279 17.8332 6.31453C18.2789 4.29848 17.8272 2.63127 16.5259 1.49287H16.5266ZM4.98732 1.68709C4.20931 1.68709 3.40127 2.04905 2.58536 2.76314C1.76505 3.48077 1.50577 4.55296 1.81499 5.95029C1.84851 6.10195 1.75272 6.25198 1.60106 6.28551C1.5811 6.28991 1.56063 6.29217 1.54017 6.29217C1.40834 6.29204 1.29422 6.20039 1.26572 6.07158C0.908678 4.45866 1.22806 3.20307 2.21511 2.33946C3.13625 1.53345 4.06921 1.12453 4.98733 1.12453C5.14263 1.12453 5.26856 1.25046 5.26856 1.40576C5.26856 1.56106 5.14263 1.68698 4.98733 1.68698L4.98732 1.68709Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="featured__content">
                                    <div className="featured__content--top d-flex align-items-center justify-content-between">
                                        <h3 className="featured__card--title">
                                            <a href="listing-details.html">Apartement</a>
                                        </h3>
                                        <span className="featured__card--price">₹ 2-5 Lac</span>
                                    </div>
                                    <p className="featured__content--desc">
                                        <svg
                                            width={11}
                                            height={17}
                                            viewBox="0 0 11 17"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M5.48287 0C2.45013 0 0 2.4501 0 5.48288C0 5.85982 0.0343013 6.21958 0.102785 6.57945C0.514031 9.69783 4.42055 11.9767 5.51712 16.4144C6.5966 12.0452 11 8.824 11 5.48288H10.9657C10.9657 2.45013 8.51548 0 5.48282 0H5.48287ZM5.48287 2.17592C7.21338 2.17592 8.61839 3.58097 8.61839 5.31144C8.61839 7.04191 7.21335 8.44696 5.48287 8.44696C3.7524 8.44696 2.34736 7.04191 2.34736 5.31144C2.34736 3.58097 3.75228 2.17592 5.48287 2.17592Z"
                                                fill="#F23B3B"
                                            />
                                        </svg>
                                        1421 San Pedro St, Los Angeles, CA
                                    </p>
                                    <ul className="featured__info d-flex">
                                        <li className="featured__info--items">
                                            <span className="featured__info--icon">
                                                3
                                                <svg
                                                    width={25}
                                                    height={21}
                                                    viewBox="0 0 25 17"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M6.26832 3.08576H9.70875C10.1912 3.08576 10.6311 3.28308 10.9488 3.6009C11.2667 3.91871 11.464 4.35756 11.464 4.841V6.17302H13.5385V4.841C13.5385 4.35996 13.7358 3.92185 14.0536 3.6033L14.056 3.60091C14.3745 3.28402 14.8119 3.08672 15.293 3.08672H18.7334C19.2145 3.08672 19.6533 3.28404 19.9719 3.60185C20.2912 3.92113 20.4885 4.35941 20.4885 4.84195V6.17398H21.9693V1.9459C21.9693 1.62975 21.8395 1.34125 21.6302 1.13212C21.4211 0.923008 21.1325 0.792937 20.8164 0.792937H4.18422C3.86807 0.792937 3.57882 0.922824 3.36969 1.13212C3.16058 1.34123 3.03051 1.62975 3.03051 1.9459V6.17398H4.51139V4.84195C4.51139 4.36016 4.7087 3.92205 5.02652 3.6035C5.3458 3.28422 5.78408 3.08691 6.26662 3.08691L6.26832 3.08576ZM0.792967 11.167H24.2084V7.96014C24.2084 7.686 24.0967 7.43638 23.916 7.25654C23.7362 7.07672 23.4865 6.96415 23.2124 6.96415H1.78733C1.51319 6.96415 1.26357 7.0758 1.08373 7.25654C0.903913 7.43635 0.791345 7.686 0.791345 7.96014V11.167H0.792967ZM24.2084 11.9594H0.792967V12.5607C0.792967 12.8341 0.905536 13.0828 1.08535 13.2636C1.26443 13.4443 1.51407 13.556 1.7882 13.556H23.2132C23.4787 13.556 23.7212 13.4506 23.8995 13.2811L23.9161 13.2636C24.0969 13.0828 24.2085 12.8341 24.2085 12.5607V11.9594H24.2084ZM22.7615 6.1718H23.2124C23.7028 6.1718 24.1498 6.37298 24.4738 6.69632C24.7986 7.02204 25 7.46883 25 7.95943V12.56C25 13.0521 24.7988 13.4989 24.4755 13.8231L24.451 13.8462C24.1293 14.1561 23.6919 14.3477 23.2125 14.3477H22.1602V16.3936C22.1602 16.6123 21.9828 16.7897 21.7641 16.7897H20.1603C19.9867 16.7881 19.8283 16.674 19.78 16.499L19.1811 14.3477H5.81838L5.22014 16.499C5.17187 16.674 5.01251 16.789 4.83987 16.789L3.23608 16.7907C3.0174 16.7907 2.83998 16.6132 2.83998 16.3945V14.3486H1.78764C1.29722 14.3486 0.850239 14.1474 0.52617 13.8241C0.201361 13.5007 0 13.053 0 12.561V7.96037C0 7.46995 0.201186 7.02297 0.524519 6.6989C0.850248 6.37409 1.29703 6.17273 1.78764 6.17273H2.2392V1.94465C2.2392 1.40909 2.45789 0.922494 2.8098 0.570599C3.16169 0.218707 3.649 0 4.18456 0H20.8167C21.3523 0 21.8389 0.218689 22.1908 0.570599C22.5427 0.922509 22.7614 1.4098 22.7614 1.94465V6.17273L22.7615 6.1718ZM21.3685 14.3473H20.0017L20.4604 15.997H21.3686L21.3685 14.3473ZM4.99954 14.3473H3.63342V15.997H4.54058L4.99933 14.3473H4.99954ZM18.7339 3.87771H15.2935C15.028 3.87771 14.7872 3.98622 14.6144 4.15977C14.4394 4.3348 14.3316 4.57578 14.3316 4.84036V6.17239H19.6975V4.84036C19.6975 4.5758 19.589 4.3348 19.4155 4.16053C19.2412 3.98698 18.9994 3.87846 18.7349 3.87846L18.7339 3.87771ZM9.70847 3.87771H6.26804C6.00347 3.87771 5.76248 3.98622 5.5882 4.15977C5.41392 4.33406 5.30614 4.57505 5.30614 4.83961V6.17163H10.6721V4.83961C10.6721 4.57578 10.5635 4.3348 10.3893 4.16053C10.215 3.98624 9.97399 3.87772 9.71018 3.87772L9.70847 3.87771Z"
                                                        fill="black"
                                                    />
                                                </svg>
                                            </span>
                                            <span className="featured__info--text">Bedrooms</span>
                                        </li>
                                        <li className="featured__info--items">
                                            <span className="featured__info--icon">
                                                3
                                                <svg
                                                    width={21}
                                                    height={21}
                                                    viewBox="0 0 21 21"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M2.87033 9.45423V3.54819C2.87033 2.43102 3.73649 1.51634 4.83385 1.43913C4.87698 1.43607 5.08911 1.43607 5.12932 1.43913C6.14116 1.51271 6.93955 2.35728 6.93955 3.38837V3.93384C6.93955 4.11392 7.08583 4.2602 7.2659 4.2602C7.44583 4.2602 7.59225 4.11392 7.59225 3.93384V3.38837C7.59225 2.01288 6.52708 0.886385 5.17665 0.78818C5.12376 0.784247 4.84491 0.784101 4.78809 0.788035C3.35199 0.889144 2.21777 2.08632 2.21777 3.54834V9.45438C2.21777 9.63446 2.36405 9.78074 2.54413 9.78074C2.7242 9.78074 2.87048 9.63446 2.87048 9.45438L2.87033 9.45423Z"
                                                        fill="black"
                                                    />
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M5.30288 6.37703C6.11936 6.37703 8.41341 6.37703 9.2303 6.37397C9.40411 6.37397 9.5686 6.28918 9.67 6.1464C9.7714 6.00362 9.79748 5.82048 9.73978 5.65512C9.7392 5.65337 9.73847 5.65162 9.73789 5.64987C9.3215 4.51741 8.364 3.74219 7.26608 3.74219C6.16842 3.74219 5.21107 4.51697 4.79121 5.64786C4.79063 5.64975 4.78975 5.65194 4.78902 5.65398C4.73118 5.82036 4.75726 6.00451 4.85925 6.14832C4.96153 6.29197 5.12689 6.37691 5.30301 6.37691H5.30287L5.30288 6.37703ZM9.06358 5.72172L8.85815 5.72216C8.32726 5.72303 7.79618 5.72347 7.26529 5.7239L5.46409 5.72434C5.80719 4.9424 6.47944 4.39502 7.266 4.39502C8.05115 4.39502 8.72235 4.94065 9.06355 5.72169L9.06358 5.72172Z"
                                                        fill="black"
                                                    />
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M15.9459 16.6811L16.6041 19.2054C16.6295 19.3032 16.6081 19.4073 16.5464 19.4872C16.4846 19.5673 16.3893 19.6141 16.288 19.6141H15.9611C15.8393 19.6141 15.7274 19.5462 15.6713 19.4378L14.4251 17.0308C14.3422 16.8708 14.145 16.8082 13.9851 16.8911C13.8251 16.974 13.7625 17.1711 13.8454 17.3311L15.0916 19.738C15.26 20.0629 15.5953 20.2668 15.961 20.2668H16.2879C16.5912 20.2668 16.8772 20.1265 17.0627 19.8865C17.248 19.6466 17.3118 19.3343 17.2355 19.0408L16.5774 16.5165C16.5319 16.3422 16.3534 16.2376 16.1792 16.2831C16.0049 16.3285 15.9003 16.507 15.9458 16.6813L15.9459 16.6811ZM3.75081 17.8145L3.43101 19.0406C3.35467 19.3342 3.41834 19.6463 3.60381 19.8864C3.78913 20.1263 4.07528 20.2666 4.37858 20.2666H4.70552C5.07121 20.2666 5.4066 20.0628 5.57488 19.7379L6.82114 17.3309C6.90404 17.1709 6.84139 16.9738 6.68142 16.8909C6.52145 16.808 6.32433 16.8707 6.24142 17.0306L4.99517 19.4376C4.93907 19.546 4.82718 19.6139 4.70538 19.6139H4.37845C4.27734 19.6139 4.18206 19.5671 4.12014 19.487C4.05836 19.4072 4.03709 19.303 4.06244 19.2052L4.38224 17.9791C4.42769 17.8048 4.32309 17.6264 4.14884 17.5809C3.97459 17.5354 3.79611 17.64 3.75065 17.8143L3.75081 17.8145Z"
                                                        fill="black"
                                                    />
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M1.39897 12.6334C1.66763 15.3711 3.97615 17.51 6.78435 17.51H13.8888C16.8772 17.51 19.3002 15.0871 19.3002 12.0985V11.3C19.3002 11.1199 19.154 10.9736 18.9739 10.9736C18.7938 10.9736 18.6475 11.1199 18.6475 11.3V12.0985C18.6475 14.7265 16.5169 16.8573 13.8888 16.8573H6.78435C4.31515 16.8573 2.28516 14.9767 2.0487 12.5696C2.03107 12.3902 1.8711 12.2591 1.69189 12.2767C1.51255 12.2944 1.38142 12.4541 1.39905 12.6334L1.39897 12.6334Z"
                                                        fill="black"
                                                    />
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M11.9141 9.54315V13.757C11.9141 14.2977 12.3523 14.7361 12.8931 14.7361H15.9913C16.5319 14.7361 16.9703 14.2977 16.9703 13.757V9.54315C16.9703 9.36307 16.8239 9.2168 16.644 9.2168C16.4639 9.2168 16.3176 9.36307 16.3176 9.54315V13.757C16.3176 13.9371 16.1713 14.0834 15.9913 14.0834H12.8931C12.7128 14.0834 12.5668 13.9371 12.5668 13.757V9.54315C12.5668 9.36307 12.4203 9.2168 12.2404 9.2168C12.0603 9.2168 11.9141 9.36307 11.9141 9.54315Z"
                                                        fill="black"
                                                    />
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M16.6441 12.7197H12.2404C12.0603 12.7197 11.9141 12.866 11.9141 13.0461C11.9141 13.2262 12.0603 13.3724 12.2404 13.3724H16.6441C16.824 13.3724 16.9705 13.2262 16.9705 13.0461C16.9705 12.866 16.824 12.7197 16.6441 12.7197Z"
                                                        fill="black"
                                                    />
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M5.13137 7.14457L4.58925 8.12975C4.50242 8.28753 4.56011 8.48611 4.7179 8.57295C4.87568 8.65993 5.07426 8.60238 5.1611 8.4446L5.70352 7.45927C5.79035 7.30149 5.73266 7.10291 5.57487 7.01607C5.41694 6.92924 5.21822 6.98664 5.13152 7.14472L5.13137 7.14457Z"
                                                        fill="black"
                                                    />
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M8.83241 7.45932L9.37453 8.44464C9.46136 8.60243 9.65994 8.65998 9.81773 8.573C9.97552 8.48617 10.0331 8.28759 9.94638 8.12979L9.40426 7.14462C9.31743 6.98669 9.11885 6.92929 8.96091 7.01598C8.80312 7.10281 8.74557 7.30139 8.83255 7.45918L8.83241 7.45932Z"
                                                        fill="black"
                                                    />
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M6.93945 7.30194V8.28711C6.93945 8.46719 7.08573 8.61346 7.26581 8.61346C7.44574 8.61346 7.59216 8.46719 7.59216 8.28711V7.30194C7.59216 7.12186 7.44574 6.97559 7.26581 6.97559C7.08573 6.97559 6.93945 7.12186 6.93945 7.30194Z"
                                                        fill="black"
                                                    />
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M19.6243 4.06633V0.761705C19.6243 0.559628 19.5441 0.366017 19.4013 0.223206C19.2584 0.0802819 19.0647 0.000148467 18.8628 0.000148467H18.2895C18.0876 0.000148467 17.8938 0.0802782 17.751 0.223206C17.6082 0.365984 17.5279 0.559609 17.5279 0.761705V4.06633C17.5279 4.2464 17.6742 4.39268 17.8543 4.39268C18.0344 4.39268 18.1806 4.2464 18.1806 4.06633V0.761705C18.1806 0.732713 18.192 0.705177 18.2124 0.684634C18.2328 0.664237 18.2605 0.652873 18.2895 0.652873H18.8628C18.8918 0.652873 18.9193 0.664237 18.9395 0.684634C18.9599 0.705031 18.9716 0.732714 18.9716 0.761705V4.06633C18.9716 4.2464 19.1179 4.39268 19.2979 4.39268C19.478 4.39268 19.6243 4.2464 19.6243 4.06633H19.6243ZM17.061 4.06633V2.02881C17.061 1.60821 16.7201 1.26727 16.2995 1.26727H16.2951C16.2664 1.26727 16.2387 1.25576 16.2183 1.23522C16.1979 1.21482 16.1863 1.18714 16.1863 1.15844V0.761557C16.1863 0.55948 16.1061 0.365869 15.9632 0.223057C15.8204 0.0801335 15.6268 0 15.4247 0H14.8619C14.66 0 14.4662 0.0801297 14.3234 0.223057C14.1806 0.365835 14.1003 0.559461 14.1003 0.761557V1.15844C14.1003 1.18714 14.0888 1.21482 14.0683 1.23522C14.048 1.25562 14.0202 1.26727 13.9915 1.26727H13.9871C13.5665 1.26727 13.2256 1.60819 13.2256 2.02881V4.06633C13.2256 4.2464 13.3719 4.39268 13.5519 4.39268C13.732 4.39268 13.8783 4.2464 13.8783 4.06633V2.02881C13.8783 1.96849 13.9271 1.91998 13.9871 1.91998H13.9915C14.1934 1.91998 14.387 1.8397 14.53 1.69677C14.6728 1.554 14.7531 1.36037 14.7531 1.15842V0.761541C14.7531 0.732548 14.7646 0.705013 14.7848 0.68447C14.8052 0.664073 14.8329 0.652709 14.8619 0.652709H15.4247C15.4537 0.652709 15.4812 0.664073 15.5018 0.68447C15.5222 0.704867 15.5335 0.73255 15.5335 0.761541V1.15842C15.5335 1.36035 15.6138 1.55396 15.7567 1.69677C15.8995 1.8397 16.0931 1.91998 16.2951 1.91998H16.2995C16.3595 1.91998 16.4083 1.96849 16.4083 2.02852V4.06634C16.4083 4.24641 16.5546 4.39269 16.7346 4.39269C16.9147 4.39269 17.061 4.24641 17.061 4.06634L17.061 4.06633Z"
                                                        fill="black"
                                                    />
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M20.6706 4.50374C20.6706 4.30167 20.5904 4.10806 20.4476 3.96524C20.3046 3.82232 20.111 3.74219 19.9091 3.74219H12.8241C12.622 3.74219 12.4284 3.82232 12.2856 3.96524C12.1426 4.10802 12.0625 4.30165 12.0625 4.50374V5.07704C12.0625 5.27897 12.1426 5.47258 12.2856 5.61554C12.4283 5.75832 12.622 5.8386 12.8241 5.8386H19.9091C20.111 5.8386 20.3046 5.75832 20.4476 5.61554C20.5903 5.47262 20.6706 5.27899 20.6706 5.07704V4.50374ZM20.0179 4.50374V5.07704C20.0179 5.10574 20.0064 5.13357 19.9862 5.15382C19.9658 5.17422 19.9381 5.18588 19.9091 5.18588H12.8241C12.7951 5.18588 12.7675 5.17437 12.747 5.15382C12.7266 5.13357 12.7152 5.10574 12.7152 5.07704V4.50374C12.7152 4.47475 12.7266 4.44722 12.747 4.42667C12.7674 4.40628 12.7951 4.39491 12.8241 4.39491H19.9091C19.9381 4.39491 19.9656 4.40628 19.9862 4.42667C20.0064 4.44707 20.0179 4.47475 20.0179 4.50374Z"
                                                        fill="black"
                                                    />
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M17.7962 11.6283H19.69C19.9496 11.6283 20.1986 11.5251 20.3823 11.3415C20.5659 11.158 20.6691 10.9088 20.6691 10.6492V10.1958C20.6691 9.93607 20.5659 9.68691 20.3823 9.50352C20.1988 9.31995 19.9496 9.2168 19.69 9.2168H0.979038C0.719414 9.2168 0.470413 9.31995 0.286724 9.50352C0.10315 9.68695 0 9.9361 0 10.1958V10.6492C0 10.9088 0.10315 11.1578 0.286724 11.3415C0.470298 11.5251 0.719448 11.6283 0.979038 11.6283H11.0691C11.2492 11.6283 11.3955 11.482 11.3955 11.3019C11.3955 11.1218 11.2492 10.9756 11.0691 10.9756H0.979038C0.892497 10.9756 0.809596 10.9412 0.74826 10.8798C0.68707 10.8186 0.652686 10.7357 0.652686 10.6492V10.1958C0.652686 10.1093 0.687069 10.0261 0.74826 9.96504C0.809596 9.90385 0.892497 9.86946 0.979038 9.86946H19.69C19.7766 9.86946 19.8595 9.90385 19.9208 9.96504C19.982 10.0262 20.0164 10.1093 20.0164 10.1958V10.6492C20.0164 10.7357 19.982 10.8186 19.9208 10.8798C19.8595 10.9412 19.7766 10.9756 19.69 10.9756H17.7962C17.6161 10.9756 17.4698 11.1218 17.4698 11.3019C17.4698 11.482 17.6161 11.6283 17.7962 11.6283Z"
                                                        fill="black"
                                                    />
                                                </svg>
                                            </span>
                                            <span className="featured__info--text">Bathrooms</span>
                                        </li>
                                        <li className="featured__info--items">
                                            <button >
                                                View More
                                            </button>
                                        </li>
                                    </ul>

                                </div>

                            </article>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default PropertyCard