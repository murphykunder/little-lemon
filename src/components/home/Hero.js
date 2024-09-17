import './Hero.css';

export const Hero = () => {

    return (
        <section>
            <div className="hero-container-sm">
                <div className="hero-image">
                    <img className="img-fluid" src="images/hero-image-1.jpg" alt="restaurant-image"/>
                </div>
                <div className="hero-text">
                    <hgroup style={{lineHeight: '1rem'}}>
                        <h1>Little Lemon</h1>
                        <h6>Chicago</h6>
                    </hgroup>
                    <p>A charming, family-owned Mediterranean restaurant that offers a delightful blend of traditional recipes with a modern twist.</p>
                    <button type="button">Reserve Table</button>
                </div>
            </div>
            <div className="hero-container">
                <div className="hero-text">
                    <hgroup style={{lineHeight: '1rem'}}>
                        <h1>Little Lemon</h1>
                        <h6>Chicago</h6>
                    </hgroup>
                    <p>A charming, family-owned Mediterranean restaurant that offers a delightful blend of traditional recipes with a modern twist.</p>
                    <button type="button">Reserve Table</button>
                </div>
                <div className="hero-image">
                    <img className="img-fluid" src="images/hero-image-1.jpg" alt="restaurant-image"/>
                </div>
            </div>
        </section>
    );
}