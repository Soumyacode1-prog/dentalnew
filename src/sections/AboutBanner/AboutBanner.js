import React from 'react';
// import { Link } from 'react-router-dom';
import './AboutBanner.scss';
import bannerOne from '../../assets/about/banner/banner3.png'
// import bannerTwo from '../../assets/about/banner/banner_1.png'
// import pattern from '../../assets/banner/pattern.png'
// import pattern from '../../assets/banner/l.jpg'

const AboutBanner = () => {
    return (
        <section className='about-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="about-banner-text">
                                    <h2>About Us</h2>
                                    <p>Welcome to Dr. Mayank Kumar’s Dental Clinic, where exceptional dental care meets compassion and expertise. Our clinic is dedicated to providing top-quality treatment with a patient-first approach, ensuring comfort and satisfaction at every step of your journey to optimal oral health.

At Dr. Mayank Kumar’s clinic, we offer a wide range of services, including advanced oral and maxillofacial surgical procedures, dental braces fixing, and comprehensive orthodontic treatments. Whether it’s traditional braces or modern aligners, our customized treatment plans are tailored to address your unique needs, delivering beautiful, healthy smiles.
Whether you need routine dental care, complex oral surgery, or orthodontic treatment, Dr. Mayank Kumar and his dedicated team are committed to delivering exceptional care and outstanding results.

Book your appointment today and experience the difference in comprehensive dental care!</p>

                                    {/* <div className="theme-btn">
                                        <Link to='/'>Contact Us</Link>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="about-banner-img">
                                    <img src={bannerOne} alt="about banner"/>
                                    {/* <img src={bannerTwo} alt="about banner two"/> */}
                                    {/* <img className='pattern' src={pattern} alt="about banner two"/> */}
                                    <h5> 𝐃𝐢𝐫𝐞𝐜𝐭𝐨𝐫</h5>
                                    <h6>Dr.Mayank Kumar</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutBanner;