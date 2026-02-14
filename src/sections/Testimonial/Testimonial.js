import React from 'react';
import './Testimonial.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import imgOne from '../../assets/testimonial/1.png';
import imgTwo from '../../assets/testimonial/2.png';
import imgThree from '../../assets/testimonial/3.png';
import TestimoniCard from '../../components/TestimoniCard/TestimoniCard';
import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";

const Testimonial = () => {

    const testimonails = [
        {
            'img': imgOne,
            'name': 'Shyam Jaiswal',
            'description' :'Very good experience Dr. Mayank Singh was very calm and supportive. Overall rating 10 out of 10. Must visit to Max Dental Clinic if anyone having any dental problem without any hesitation.',
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        },
        {
            'img': imgTwo,
            'name': 'Akash Dhanuka',
            'description' : 'One stop solution for all your dental & oral problems. Dr. Mayank Sir is not only a great Doctor but he is also a great human being. He treat his patient with utmost care & diligence. ',
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        },
        {
            'img': imgThree,
            'name': 'Rishant Kumar Raman',
            'description' : 'I recently visited MAX DENTAL CLINIC for a dental appointment regarding my third molar teeth problem, and I must say, the experience was excellent from start to finish.',
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        },
        // {
        //     'img': imgThree,
        //     'name': 'Rishant Kumar Raman',
        //     'description' : 'I recently visited MAX DENTAL CLINIC for a dental appointment regarding my third molar teeth problem, and I must say, the experience was excellent from start to finish.I was deeply impressed by the humble nature of Dr. MAYANK KUMAR SINGH.',
        //     'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        // },
        // {
        //     'img': imgThree,
        //     'name': 'Rishant Kumar Raman',
        //     'description' : 'I recently visited MAX DENTAL CLINIC for a dental appointment regarding my third molar teeth problem, and I must say, the experience was excellent from start to finish.I was deeply impressed by the humble nature of Dr. MAYANK KUMAR SINGH.',
        //     'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        // },
        // {
        //     'img': imgThree,
        //     'name': 'Rishant Kumar Raman',
        //     'description' : 'I recently visited MAX DENTAL CLINIC for a dental appointment regarding my third molar teeth problem, and I must say, the experience was excellent from start to finish.I was deeply impressed by the humble nature of Dr. MAYANK KUMAR SINGH.',
        //     'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        // },
        // {
        //     'img': imgOne,
        //     'name': 'Bessie Cooper',
        //     'description' : 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts',
        //     'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        // }
    ]

    // slider
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };

    return (
        <section className='testimonail-section section-bg section-common pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <SectionTitle 
                        subTitle="TESTIMONIAL"
                        title="What people have said about us"
                        />
                    </div>
                    <div className="col-lg-6">
                        <p className="pt-5">The team at Max Dental is incredibly professional and caring. They made me feel comfortable during my treatment, and the results were fantastic!" – Priya S </p>
                    </div>
                </div>

                <Slider {...settings} className="testimoni-slider">
                    {
                        testimonails.map(testimonail => <TestimoniCard testimonail={testimonail} />)
                    }
                </Slider>
               
            </div>
        </section>
    );
};

export default Testimonial;