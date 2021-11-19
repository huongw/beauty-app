import data from '../../data/menuData';
import MenuList from './MenuList';
import './menu.css';
import flower from '../../images/flower.png';

function Menu() {
  return (
    <div className="menu-container container">
      <h1>
        Menu
        <img className="flower" src={flower} alt="" />
      </h1>
      <div className="table-container">
        <MenuList name="Facial Care" data={data.facials} />
        <MenuList name="Lash Care" data={data.lashes} />
        <MenuList name="Nail Care" data={data.nails} />
      </div>
    </div>
  );
}

export default Menu;
