import data from '../../data/menuData';
import MenuList from './MenuList';
import './menu.css';

function Menu() {
  return (
    <div className="menu-container container">
      <h1>Menu</h1>
      <MenuList name="Facial Care" data={data.facials} />
      <MenuList name="Lash Care" data={data.lashes} />
      <MenuList name="Nail Care" data={data.nails} />
    </div>
  );
}

export default Menu;
