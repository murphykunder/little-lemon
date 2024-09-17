import './Testimonials.css';
import testimonials from '../../data/json/testimonials.json';
import { Carousel } from './Carousel';

export const Testimonials = () => {
    return (
        <section className='m-5'>
            <Carousel testimonials={testimonials} />
        </section>
    );
}