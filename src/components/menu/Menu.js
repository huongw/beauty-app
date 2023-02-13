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
      <div className='menu-banner-bg'>
        <h1>
          Our Menu
        </h1>
        <img className="flower" src={flower} alt="" />
      </div>
      <MenuButtonList active={active} handleDisplayMenu={(e) => setActive(e.target.dataset.target)}/>
      <div className="table-container">
        {active === "nails" && <MenuList id="nails" name="Nail Care" data={data.nails} />}
        {active === "facials" && <MenuList id="facials" name="Facial Care" data={data.facials} />}
        {active === "lashes" && <MenuList id="lashes" name="Lash Care" data={data.lashes} />}
      </div>
    </div>
  );
}

export default Menu;
