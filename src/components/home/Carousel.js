import { useState } from 'react';
import './Carousel.css';
import testimonials from '../../data/json/testimonials.json';
import { TestimonialCard } from './TestimonialCard';

export const Carousel = ({testimonials}) => {

    const [current, setCurrent] = useState(0);

    const slideLeft = () => {
        if(current==0){
            setCurrent(testimonials.testimonials.length-1)
        }
        else{
            setCurrent(current-1)
        }
    }

    const slideRight = () => {
        if(current == testimonials.testimonials.length-1){
            setCurrent(0);
        }
        else {
            setCurrent(current + 1);
        }
    }


    return (
            <div className="carousel" id='carousel'>
                <div className='carousel-wrapper'>
                    {
                        testimonials.testimonials.map((testimonial, index) => {
                            return (
                                <div key={index} className={index == current ? "carousel-card carousel-card-active" : "carousel-card"}>
                                    <TestimonialCard key={index} testimonial={testimonial}/>
                                </div>
                            )
                        })
                    }
                    <div className="carousel-arrow-left" onClick={slideLeft}>&lsaquo;</div>
                    <div className="carousel-arrow-right" onClick={slideRight}>&rsaquo;</div>
                </div>
            </div>
    )
}