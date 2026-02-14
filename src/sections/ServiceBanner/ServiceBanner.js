                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                // import React from 'react';
// import { Link } from 'react-router-dom';
// import './ServiceBanner.scss';
// import serviceBanner from '../../assets/servicePage/1.png';

// const ServiceBanner = () => {
//     return (
//         <section className='service-banner-section section-common section-bg'>
//             <div className="d-table">
//                 <div className="d-table-cell">
//                     <div className="container">
//                         <div className="row align-items-center">
//                             <div className="col-lg-5 col-md-6">
//                                 <div className="service-banner-text" data-aos="fade-up" data-aos-duration="2000">
//                                     <h2>Root Canals</h2>
//                                     <p>Root canals have gotten a bad reputation, but us dentists don’t know why! These are the types of treatments that actually make you feel better!</p>
//                                     <div className="theme-btn">
//                                         <Link to="/">Book an appointment</Link>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-lg-7 col-md-6">
//                                 <div className="service-banner-img" data-aos="fade-up" data-aos-duration="2000">
//                                     <img src={serviceBanner} alt="service" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ServiceBanner;
/////////////////////////////////////////////////////////
import React from 'react';
// import SectionTitle from '../../components/SectionTitle/SectionTitle';
// import './Services.scss';
// import ServicesData from './ServiceData';
import Service from '../../components/Service/Service';
import { Link } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
// import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ServicesData from '../Services/ServiceData';
import './ServiceBanner.scss'



const ServicesBanner = () => {
    return (
        <section className='service-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                     {/* <div className="col-lg-6 col-sm-6">
                        <SectionTitle title="Services" subTitle="Services"/>
                    </div>  */}
                    <div className="col-lg-6 col-sm-6">
                        <p className='service-title-text'>      </p>
                    </div>   
                </div>

                <div className="row">
                    {
                        ServicesData.map(singleService => <Service serviceList={singleService}/>)
                    }
                </div>
            </div>

            <div className="services-link text-center">
                <Link to='/'>
                    View all service list
                    <BsFillArrowRightCircleFill/>
                </Link>
            </div>
        </section>
    );
};

export default ServicesBanner;