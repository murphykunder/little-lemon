
import './TestimonialCard.css';

export const TestimonialCard = ({name, comment, rating}) => {

    const starArray = [];

    for(let i=0; i < rating; i++){
        starArray.push(<i key={i} className="fa-solid fa-star"></i>)
    }


    return (
        <div className="testimonial-card">
            <div className="testimonial-rating">
                {starArray}
            </div>
            <div className="testimonial-comment">
                <p>"{comment}"</p>
            </div>
            <div className="testimonial-name">
                {name}
            </div>
        </div>
    )
}