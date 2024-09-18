import { useState } from "react"
import { Carousel, CarouselItem } from "react-bootstrap"
import './TestimonialCarousel.css'
import { TestimonialCard } from "./TestimonialCard";
import testimonials from '../../data/json/testimonials.json'

export const TestimonialCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    }

    return (
        <div className="testimonial-carousel">
            <Carousel activeIndex={index} onSelect={handleSelect} variant='dark'>
                {
                    Object.keys(testimonials.testimonials).map((index) => {
                        const testimonial = testimonials.testimonials[index];

                        return (
                            <CarouselItem key={index}>
                                <TestimonialCard comment={testimonial.comment} name={testimonial.name} rating={testimonial.rating}></TestimonialCard>
                            </CarouselItem>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}