import './MenuSection.css';

export const MenuSection = ({menuSection, classValue, idValue}) => {
    return (
        <section className={classValue} id={idValue}>
            <h6>{menuSection.category}</h6>
        </section>
    )
}