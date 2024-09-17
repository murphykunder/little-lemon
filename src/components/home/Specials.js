import './Specials.css';
import highlights from '../../data/json/specials.json';

export const Specials = () => {
    return (
        <section className="specials-section">
            <h6>This weekend's specials!</h6>
            <div className="specials-card-group">

            {
                Object.keys(highlights.specials).map((index) => {

                    return (
                        <div key={index} className="card">
                            <img src={highlights.specials[index].image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{highlights.specials[index].title}</h5>
                                <p className="card-text">{highlights.specials[index].description}</p>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </section>
    );
}