import { Hero } from '../home/Hero';
import { Specials } from '../home/Specials';
import { Testimonials } from '../home/Testimonials';
import './Home.css';

export const Home = () => {
    return (
        <div className="home-container">
            <Hero />
            <Specials />
            <Testimonials />
        </div>
    );
}