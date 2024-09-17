import { Link } from 'react-router-dom';
import './Nav.css';

export const Nav = () => {

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

    const handleMenuClick = (e) => {
        const currentActiveElement = document.querySelector(".active");
        const targetElement = e.target;
        currentActiveElement.classList.remove("active");
        targetElement.classList.add("active");
    }

    return (
        <>
        <nav className="navbar navbar-expand-lg navigation-bar">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">
                <img src="images/little_lemon_logo.jpg"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    {
                        navLinks.map((data, index) => {
                            const classValue = (window.location.pathname === data.path) ? "nav-link active" : "nav-link";
                            return (
                                <Link key={index} className={classValue} onClick={handleMenuClick} to={data.path}>{data.name}</Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        </nav>
        </>
    );
}