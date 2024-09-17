import './MenuCard.css';

export const MenuCard = ({menuData}) => {
    return (
        <div className="menu-card">
            <div className="tab-content">

                {
                    Object.keys(menuData.menuList).map((index) => {
                        const menuSections = menuData.menuList[index].items;
                        const classValue=`tab-pane fade ${(index==0) ? "show active" : ""}`;
                        const idValue = menuData.menuList[index].name;

                        return (
                            <div key={index} className={classValue} id={idValue}>
                                {
                                    menuSections.map((menuSection, i) => {
                                        return (
                                            <section key={i} className="menu-card-section">
                                                <h6>{menuSection.category}</h6>
                                                <div className="menu-card-section-content">
                                                {
                                                    menuSection.items.map((menuItem, k) => {
                                                        return (
                                                            <div key={k} className='menu-card-section-item'>
                                                                <hgroup>
                                                                    <h6>{menuItem.name}</h6>
                                                                    <h6>${menuItem.price}</h6>
                                                                </hgroup>
                                                                {menuItem.ingredient && <p>{menuItem.ingredient}</p>}
                                                            </div>
                                                        )
                                                    })
                                                }
                                                </div>
                                            </section>
                                        )
                                    })
                                }

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}