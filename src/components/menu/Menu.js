import data from '../../data/menuData';
import MenuList from './MenuList';
import { useState } from 'react';
import classNames from 'classnames';
import './menu.css';
import flower from '../../images/flower.png';

function Menu() {
  const [active, setActive] = useState("nails");

  const handleDisplayMenu = function(e) {
    setActive(e.target.dataset.target)
  }

  const buttonClass = classNames("button", {
    
  })

  return (
    <div className="menu-container container">
      <h1>
        Menu
        <img className="flower" src={flower} alt="" />
      </h1>
      <ul className="button-container">
        <li className={buttonClass} data-target="nails" onClick={handleDisplayMenu}>Nails</li>
        <li className={buttonClass} data-target="facials" onClick={handleDisplayMenu}>Facial</li>
        <li className={buttonClass} data-target="lashes" onClick={handleDisplayMenu}>Lashes</li>
      </ul>
      <div className="table-container">
        <MenuList active={active} id="facials" name="Facial Care" data={data.facials} />
        <MenuList active={active} id="lashes" name="Lash Care" data={data.lashes} />
        <MenuList active={active} id="nails" name="Nail Care" data={data.nails} />
      </div>
    </div>
  );
}

export default Menu;
