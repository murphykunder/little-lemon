import './TestimonialCard.css';

export const TestimonialCard = ({testimonial}) => {

    const starArray = [];

    for(let i=0; i < testimonial.rating; i++){
        starArray.push(<i key={i} className="fa-solid fa-star"></i>)
    }

    return (
        <div className="testimonial-card">
            <p>
                {starArray}
            </p>
            <p className="testimonial-comment">"{testimonial.comment}"</p>
            <p className="testimonial-name">{testimonial.name}</p>
        </div>
    )
}