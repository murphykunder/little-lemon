import './MenuNavigation.css';

export const MenuNavigation = ({menuData}) => {
    return (
        <div className="menu-navigation-container">
            <ul className="nav" id="menuTab">

                {
                    Object.keys(menuData.menuList).map((index) => {
                        const classValue = (index == 0) ? "menu-navigation-link active" : "menu-navigation-link";
                        const href = "#" + menuData.menuList[index].name;

                        return (
                            <li key={index} className="nav-item">
                                <a href={href} className={classValue} data-bs-toggle="tab">{menuData.menuList[index].name}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}