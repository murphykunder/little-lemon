import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {

    const navLinks = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Menu',
            path: '/menu'
        },
        {
            name: 'Reserve table',
            path: '/reserve-table'
        },
        {
            name: 'About',
            path: '/about'
        },
        {
            name: 'Contact',
            path: '/contact'
        },
    ];

    return (
        <footer>
            <div>
                <a href="/"><img src='images/footer-image.jpg' alt='footer-image' /></a>
            </div>
            <div className='footer-links'>
                    {
                        navLinks.map((data, index) => {
                            const classValue = (window.location.pathname === data.path) ? "nav-link active" : "nav-link";
                            return (
                                <Link key={index} className={classValue} to={data.path}>{data.name}</Link>
                            )
                        })
                    }
            </div>
        </footer>
    );
}