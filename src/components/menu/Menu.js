import data from '../../data/menuData';
import MenuList from './MenuList';
import MenuButtonList from './MenuButtonList';
import { useState } from 'react';
import './menu.css';
import flower from '../../images/flower.png';

function Menu() {
  const [active, setActive] = useState("nails");

  return (
    <div className="menu-container container">
      <h1>
        Menu
        <img className="flower" src={flower} alt="" />
      </h1>
      <MenuButtonList active={active} handleDisplayMenu={(e) => setActive(e.target.dataset.target)}/>
      <div className="table-container">
        <MenuList active={active} id="facials" name="Facial Care" data={data.facials} />
        <MenuList active={active} id="lashes" name="Lash Care" data={data.lashes} />
        <MenuList active={active} id="nails" name="Nail Care" data={data.nails} />
      </div>
    </div>
  );
}

export default Menu;
