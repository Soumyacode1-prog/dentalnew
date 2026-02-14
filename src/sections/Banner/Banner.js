import React from 'react';
import './Banner.scss';
import {Link} from 'react-router-dom';
import icon from '../../assets/banner/icons/Calling.png';
// import bannerImg from '../../assets/banner/6.png';
// import doctorImg from '../../assets/banner/doctor.png';
// import doctorImg from '../../assets/banner/dr.jpg';
import bannerPattern from '../../assets/banner/pattern_02.png';
import shapeOne from '../../assets/banner/vector_01.png';
import shapeTwo from '../../assets/banner/vector_02.png';
import shapeThree from '../../assets/banner/vector_03.png';
import shapeFour from '../../assets/banner/pattern.png';
import BackgroundI from '../../assets/banner/ooo.PNG';

const Banner = () => {

    return (
        <section className='section-bg section-common banner-section'
        style={{
            backgroundImage: `url(${BackgroundI})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}
    >
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="banner-text" data-aos="fade-up" data-aos-duration="4000">
                                    <h1>Max Clinic & Hospital</h1>
                                    <p> "Offering 24/7 emergency dental care to address urgent oral health needs anytime, day or night. Your smile's safety is our top priority!"</p>

                                    <div className="banner-bottom">
                                        <div className="theme-btn">
                                            <Link to="/contact">Book an appointment</Link>
                                        </div>

                                        <div className="banner-call">
                                            <div className='icon'>
                                                <img src={icon} alt="icon" />
                                            </div>
                                            <div className='call-text'>
                                                <p>Dental 24H Emergency</p>
                                                <h6> +91 7781893306</h6>
                                                <h6> +91 8271025122</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="banner-img-area" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
                                    {/* <div className="banner-img">
                                        <img src={bannerImg} alt="banner model" />
                                    </div> */}
                                    <div className='info-box'>
                                        {/* <div className="info-img">
                                            <img src={doctorImg} alt="doctor" />
                                        </div>
                                        <div className='info-text'>
                                            <p>Dr. Mayank</p>
                                            <p><small>Consultant</small></p>
                                        </div> */}
                                    </div>  

                                    {/* Vector Shapes */}
                                    <div className="shapes">
                                        <img src={shapeOne} alt="shape" />
                                        <img src={shapeTwo} alt="shape" />
                                        <img src={shapeThree} alt="shape" />
                                        <img src={shapeFour} alt="shape" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Banner Pattern Vector*/}
            <img className='banner-pattern' src={bannerPattern} alt="banner pattern" />
        </section>
    );
};

export default Banner;