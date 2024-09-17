import './Menu.css';
import menuData from '../../data/json/menuData.json';
import { MenuNavigation } from '../menu/MenuNavigation';
import { MenuCard } from '../menu/MenuCard';

export const Menu = () => {
    return (
        <div className="menu-container">
            <MenuNavigation menuData={menuData}/>
            <MenuCard menuData={menuData}/>
        </div>
    )
}