import React from 'react';
// import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import priorityImg from '../../assets/about/priority.png';
import './Priority.scss';

const Priority = () => {
    return (
        <section className='priority-section emergency-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="priority-img">
                            <img src={priorityImg} alt="Emergency" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="priority-text">
                            <SectionTitle 
                                subTitle="OUR PRIORITY" 
                                title="Our clients are our priority"
                                description="At Dr. Mayank Kumar’s Dental Clinic, we stand out for our commitment to excellence in every aspect of dental care:

Expert Team: Our clinic is led by Dr. Mayank Kumar and a team of highly experienced dental professionals. With years of expertise and dedication, we ensure that every patient receives top-tier care.
Cutting-Edge Technology: Equipped with state-of-the-art facilities, we utilize advanced tools and techniques to ensure accurate diagnoses and effective treatments.
Patient-Centered Care: We prioritize your comfort and well-being, delivering personalized and compassionate care that makes every visit stress-free.
Tailored Treatment Plans: Understanding that every patient is unique, we customize our treatment plans to suit individual needs, ensuring the best outcomes."
                            />

                            {/* <div className="theme-btn">
                                <Link to='/'>Book an appointment</Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Priority;